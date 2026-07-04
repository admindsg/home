# Discovery Sound Garden website

Static homepage for Discovery Sound Garden (DSG), a NYC-based 501(c)(3) nonprofit music organization. The current homepage is a mobile-first Learn → Record → Perform pathway that helps visitors choose a relevant next step as learners, singers, artists, donors, partners, or community allies.

## Tech stack
- Plain HTML, CSS, and minimal JavaScript
- No framework, package manager, or build step
- Deployable from the repository root on Cloudflare Pages or GitHub Pages

## Local preview
Run a static server from the repo root:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Centralized site data
Canonical Zeffy donation, Zeffy event notification, Instagram, future Cloudflare Images configuration, and future analytics event names live in `assets/js/site-data.js`.

## Founder decisions still needed
- Approved Cloudflare Images IDs for hero, learning, recording, and Vanguard Voices visuals.
- Final contact or partnership inquiry destination.
- Confirmed program dates, registration details, and any approved real testimonials or impact metrics.
- Approved analytics IDs if DSG chooses to add tracking later.
