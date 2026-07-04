# Discovery Sound Garden website

Static homepage for Discovery Sound Garden (DSG), a NYC-based 501(c)(3) nonprofit music organization. The current design direction is **Sound Garden Field Guide**: a mobile-first garden map and rehearsal notebook for the Learn → Record → Perform pathway.

## Tech stack
- Plain HTML, CSS, and minimal JavaScript
- No framework, package manager, or build step
- Deployable from the repository root on Cloudflare Pages

## Local preview
Run a static server from the repo root:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Centralized site data
Canonical links, embed URLs, Cloudflare Images placeholders, and analytics TODO placeholders live in `assets/js/site-data.js`.

## Current placeholders
- Cloudflare Images IDs are placeholders and should be replaced only after final approved imagery is available.
- Analytics are TODO comments only; no live tracking IDs are installed.
- Contact email is a placeholder route pending final DSG inbox confirmation.
