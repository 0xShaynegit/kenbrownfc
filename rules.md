# PROJECT RULES kenbrownfc

Read before touching anything. These rules do not change between sessions.

## Project Identity
- Project Name: Ken Brown FC
- What it is: One-time static export of https://www.kenbrownfc.com/, migrated 16/02/2026. All future changes are made locally in this folder.
- Owner: Shayne
- Local folder: C:\ZZZWebsites\kenbrownfc

## Stack and Deploy
- Pure static HTML, CSS, JS from a crawl export (download_site.py).
- Deploy: Cloudflare Pages only. Never Vercel. wrangler.jsonc present for CLI deploys.
- sitemap.xml, robots.txt, humans.txt, llm.txt maintained. Keep in sync when pages change.

## Hard Rules
- No dev servers unless explicitly requested.
- Export-based site: preserve existing URL structure, do not rename pages.
- Update handover.md at the end of every session.
