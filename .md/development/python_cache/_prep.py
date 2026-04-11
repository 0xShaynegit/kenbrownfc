import re, json, sys
sys.stdout.reconfigure(encoding="utf-8")

BANG=chr(33)
NAV_PAT_STR = (r"<nav class=\"navbar\".*?</div>\s*</div>\s*</div>(?=\s*
\s*<\!--" + "|\s*
\s*<section|\s*
\s*<div class=\"(?"+BANG+"mobile))")
SCRIPT_PAT_STR = ("(?:<\!--\s*Navigation[^-]*-->\s*)?(?"+BANG+")" )
print("writing")
