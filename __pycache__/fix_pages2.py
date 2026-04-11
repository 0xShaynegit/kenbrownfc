import re
import os

PAGES_DIR  = r"C:/ZZZWebsites/kenbrownfc/pages"
INDEX_FILE = r"C:/ZZZWebsites/kenbrownfc/index.html"
CSS_FILE   = r"C:/ZZZWebsites/kenbrownfc/css/modern-design-system.css"

CHATY_TARGET_FILES = [
    "claims-and-protection.html",
    "financial-101.html",
    "getting-started-guide.html",
    "insurance-coverage-guide.html",
    "risk-management-guide.html",
    "wills-estate-planning-expats.html",
]

RAW_PATTERNS = [
    "<script[^>]+src=[^>]*jquery\.min\.js[^>]*></script>",
    "<script[^>]+src=[^>]*jquery-migrate\.min\.js[^>]*></script>",
    "<script[^>]+src=[^>]*wp-emoji-release\.min\.js[^>]*></script>",
    "<script[^>]+src=[^>]*navigation\.min\.js[^>]*></script>",
    "<script[^>]+src=[^>]*kb-form-block\.min\.js[^>]*></script>",
    "<script[^>]+src=[^>]*kb-splide-init\.min\.js[^>]*></script>",
    "<script[^>]+src=[^>]*splide\.min\.js[^>]*></script>",
    "<script[^>]*id=[^>]*chaty-front-end-js-extra[^>]*>.*?</script>",
    "<script[^>]*id=[^>]*chaty-front-end-js[^>]*>\s*</script>",
]

NL = chr(10)


def find_removed_tags(original, pattern):
    hits = re.findall(pattern, original, flags=re.DOTALL | re.IGNORECASE)
    return [h[:100].replace(NL, " ").strip() + ("..." if len(h) > 100 else "") for h in hits]


def remove_chaty_scripts(content):
    original = content
    removed_list = []
    for pattern in RAW_PATTERNS:
        excerpts = find_removed_tags(content, pattern)
        removed_list.extend(excerpts)
        content = re.sub(pattern, "", content, flags=re.DOTALL | re.IGNORECASE)
    content = re.sub(NL + "{3,}", NL + NL, content)
    changed = (content != original)
    return content, changed, removed_list


def fix_html_file(filepath, label):
    with open(filepath, "r", encoding="utf-8") as f:
        original = f.read()
    cleaned, changed, removed_list = remove_chaty_scripts(original)
    if changed:
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(cleaned)
        print("  [MODIFIED] " + label)
        for r in removed_list:
            if r:
                print("    - Removed: " + r)
    else:
        print("  [CLEAN]    " + label + "  (no matching plugin code found)")
    return changed


# === FIX 1 =================================================
print("=" * 62)
print("FIX 1: Remove old Chaty plugin code from pages/")
print("=" * 62)
fix1_modified = 0
for filename in CHATY_TARGET_FILES:
    filepath = os.path.join(PAGES_DIR, filename)
    if os.path.exists(filepath):
        if fix_html_file(filepath, "pages/" + filename):
            fix1_modified += 1
    else:
        print("  [MISSING]  pages/" + filename)
print()
print("  Result: " + str(fix1_modified) + "/" + str(len(CHATY_TARGET_FILES)) + " page files modified.")
print()


# === FIX 2 =================================================
print("=" * 62)
print("FIX 2: Fix white header gap on mobile (CSS)")
print("=" * 62)
with open(CSS_FILE, "r", encoding="utf-8") as f:
    css_original = f.read()

PATTERN_CSS = "(\.page-hero\s*\{[^}]*?)margin-top\s*:\s*50px([^}]*\})"

matches_css = re.findall(PATTERN_CSS, css_original, flags=re.DOTALL)
if matches_css:
    css_new = re.sub(PATTERN_CSS, r"padding-top: 70px", css_original, flags=re.DOTALL)
    if css_new != css_original:
        with open(CSS_FILE, "w", encoding="utf-8") as f:
            f.write(css_new)
        print("  [MODIFIED] css/modern-design-system.css")
        print("    - In .page-hero rule: replaced  margin-top: 50px  with  padding-top: 70px")
    else:
        print("  [NO CHANGE] Substitution produced identical output.")
else:
    if "margin-top: 50px" in css_original:
        idx = css_original.index("margin-top: 50px")
        ctx = css_original[max(0, idx - 200):idx + 60]
        print("  [INFO] margin-top: 50px found but NOT inside .page-hero block.")
        print("  Context:" + NL + ctx)
    else:
        print("  [CLEAN]    margin-top: 50px not found -- already fixed or not present.")
print()


# === FIX 3 =================================================
print("=" * 62)
print("FIX 3: Check index.html for old Chaty plugin code")
print("=" * 62)
if os.path.exists(INDEX_FILE):
    fix_html_file(INDEX_FILE, "index.html")
else:
    print("  [MISSING]  " + INDEX_FILE)
print()
print("=" * 62)
print("ALL FIXES COMPLETE")
print("=" * 62)
