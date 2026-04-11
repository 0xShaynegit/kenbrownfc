import re
import os
import glob
import sys
import json

sys.stdout.reconfigure(encoding="utf-8")

PAGES_DIR = "C:/ZZZWebsites/kenbrownfc/pages"
DATA_FILE = "C:/ZZZWebsites/kenbrownfc/_nav_data.json"

# Load standard nav HTML, script, and regex patterns from data file
_data = json.load(open(DATA_FILE, "r", encoding="utf-8"))
STANDARD_NAV    = _data["nav"]
STANDARD_SCRIPT = _data["script"]

CHATY_CSS_LINK = '<link href="../css/chaty-front.min.css" id="chaty-front-css-css" media="all" rel="stylesheet"/>'
CHATY_JS_TAG   = '<script src="../scripts/chaty-widget.js"></script>'

# Compile regex patterns (stored in JSON to avoid shell-escaping issues)
NAV_PATTERN    = re.compile(_data["nav_pattern"],    re.DOTALL)
SCRIPT_PATTERN = re.compile(_data["script_pattern"], re.DOTALL)


def fix_file(filepath):
    with open(filepath, "r", encoding="utf-8") as fh:
        content = fh.read()

    original = content
    results = {}

    # 1. Replace nav block (nav + mobile-overlay + mobile-drawer)
    nav_match = NAV_PATTERN.search(content)
    if nav_match:
        content = NAV_PATTERN.sub(STANDARD_NAV, content, count=1)
        results["nav"] = "REPLACED"
    else:
        results["nav"] = "NOT FOUND"

    # 2. Replace nav script block
    script_match = SCRIPT_PATTERN.search(content)
    if script_match:
        content = SCRIPT_PATTERN.sub(STANDARD_SCRIPT, content, count=1)
        results["script"] = "REPLACED"
    else:
        results["script"] = "NOT FOUND"

    # 3. Ensure chaty CSS link is in <head>
    if CHATY_CSS_LINK in content:
        results["chaty_css"] = "already present"
    else:
        content = content.replace("</head>", CHATY_CSS_LINK + "\n</head>", 1)
        results["chaty_css"] = "ADDED"

    # 4. Ensure chaty JS script is before </body>
    if CHATY_JS_TAG in content:
        results["chaty_js"] = "already present"
    else:
        content = content.replace("</body>", CHATY_JS_TAG + "\n</body>", 1)
        results["chaty_js"] = "ADDED"

    # Only write if something changed
    if content != original:
        with open(filepath, "w", encoding="utf-8") as fh:
            fh.write(content)
        results["written"] = True
    else:
        results["written"] = False

    return results


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------
html_files = sorted(glob.glob(os.path.join(PAGES_DIR, "*.html")))
print("Found", len(html_files), "HTML file(s) in", PAGES_DIR)
print()
header = "{:<45} {:<12} {:<12} {:<18} {:<18} {}".format(
    "FILE", "NAV", "SCRIPT", "CHATY CSS", "CHATY JS", "WRITTEN"
)
print(header)
print("-" * 130)

for filepath in html_files:
    fname = os.path.basename(filepath)
    r = fix_file(filepath)
    row = "{:<45} {:<12} {:<12} {:<18} {:<18} {}".format(
        fname, r["nav"], r["script"], r["chaty_css"], r["chaty_js"], r["written"]
    )
    print(row)

print()
print("Done.")