# Discovery Sound Garden website

Static homepage for Discovery Sound Garden (DSG), a NYC-based 501(c)(3) nonprofit music organization. The current homepage is a mobile-first guided growth journey from hidden music to public proof. It uses an underlying Seed → Roots → Stem → Bloom structure while keeping the public pathway focused on Start → Learn → Record → Perform.

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
Canonical Zeffy donation, Zeffy event notification, Instagram, Cloudflare Images configuration, image slots, and future analytics event names live in `assets/js/site-data.js`.

## Founder decisions still needed
- Approved Cloudflare Images IDs for Seed, Roots, Stem, Bloom, donor, and partner visual slots. CSS visual panels are used until approved IDs exist.
- Final contact or partnership inquiry destination.
- Confirmed program dates, registration details, and any approved real testimonials or impact metrics.
- Approved analytics IDs if DSG chooses to add tracking later.
