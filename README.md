# Discovery Sound Garden website draft

This repository contains the first static homepage draft for Discovery Sound Garden, a NYC-based 501(c)(3) nonprofit helping people learn, record, and perform through opportunity-centered music education, creative support, and community pathways.

## Preview locally

Because this is plain HTML, CSS, and JavaScript, no build step is required.

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080` in a browser.

## Cloudflare Pages settings

- Framework preset: **None**
- Build command: **blank**
- Build output directory: `/`
- Production branch: `main`

Do not connect the live domain until the homepage, copy, images, donation language, and tracking plan have been reviewed.

## Brand direction

The draft uses the supplied brand kit: Playfair Display-style display typography, Gilroy-style body typography with safe fallbacks, Deep Garden Green, Sage Green, Warm Stone, Earth Brown, Harvest Gold, Cloud, Ink, and Soft Cream. The exact tagline remains: “Talent is everywhere. Opportunity starts here.”

Core messaging in this draft emphasizes the pipeline: Education → Recording opportunity → Performance outcomes → Community proof → Donor story.

## Editing guide

- Edit homepage copy and structure in `index.html`.
- Edit colors, spacing, cards, buttons, and responsive behavior in `assets/css/styles.css`.
- Edit mobile menu and placeholder tracking behavior in `assets/js/main.js`.
- Edit canonical links, donation URL, newsletter URL, Instagram URL, legacy page references, and Cloudflare Images inventory in `assets/js/site-data.js`.

## Placeholders to finalize

- Canonical URL in `index.html`
- Open Graph image in Cloudflare Images
- Real approved Cloudflare Images for each homepage slot
- Founder/instructor photo, bio, venue/program note, and testimonial
- Transparency and privacy destination pages
- Final donation/tax language
- Google Tag Manager, GA4, and Meta Pixel IDs if approved later
- Licensed brand font files or approved webfont loading plan for Playfair Display and Gilroy

## Images

Final website photography should be uploaded to Cloudflare Images and then recorded in `assets/js/site-data.js`. Do not commit large original images to GitHub. See `assets/images/README.md` and `docs/image-sourcing-brief.md`.
