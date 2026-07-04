# Next Build Brief: Discovery Sound Garden Homepage

## Recommended next task

Build a mobile-first static homepage that preserves the live site's strongest DSG-specific messaging while replacing the experimental field-guide direction with a credible, warm, opportunity-centered music pathway experience.

Do not merge without founder review.

## Recommended homepage structure

1. **Header**  
   Brand, concise nav, Donate link.

2. **Hero**  
   Required tagline, NYC nonprofit identity, Learn → Record → Perform promise, Find Your Path CTA, Sponsor Opportunity CTA.

3. **Find Your Path**  
   Mobile-first audience selector with path panels for beginner, returning adult, singer, artist, donor, partner, volunteer/community ally.

4. **The Opportunity Gap**  
   Preserve cost, uneven opportunity, and gatekeeping argument from live site.

5. **Learn → Record → Perform**  
   Three-part pathway: build the skill, record the proof, let the world hear it.

6. **Programs and Pathways**  
   Accordion/comparison: Foundations, workshops, recording opportunity, Vanguard Voices, partner programming.

7. **Vanguard Voices / Public Proof**  
   Treat as proof of the model, not only a program card.

8. **Sponsor Opportunity**  
   Donor impact selector with Zeffy donation link.

9. **Partner with DSG**  
   Partner inquiry panel if contact workflow is approved; otherwise direct to stay-connected/contact.

10. **Stay Connected**  
   Zeffy event notification embed/link and Instagram link.

11. **Footer**  
   Nonprofit identity, contact, social, donation.

## Features to implement

- Find Your Path selector.
- Audience-specific path panels.
- Learn → Record → Perform pathway section.
- Opportunity-gap explainer.
- Program comparison/accordion.
- Vanguard Voices proof module.
- Donor impact selector.
- Zeffy event notification fallback.
- Instagram link.
- Data attributes for future analytics events without real tracking IDs.
- Empty-state/fallback behavior that never displays placeholder language.

## Sections to include

- Hero.
- Path selector.
- Opportunity gap.
- Core pathway.
- Programs.
- Vanguard Voices.
- Donation impact.
- Partner inquiry.
- Stay connected.

## Interactions to build

- Path selector with accessible buttons.
- Program accordions using `details/summary` or accessible buttons.
- Donation impact selector.
- Mobile nav if needed.
- Embed fallback links.

## Content to preserve from the live site

- “Talent is everywhere. Opportunity starts here.”
- “The problem isn't talent. It's opportunity.”
- “Music Education • Mobile Recording • Performance Pathway.”
- Discovery Sound Garden connects music education, mobile recording opportunity, and performance into one pathway.
- Talent should never be limited by circumstance.
- Build the skill. Record the proof. Let the world hear it.
- Vanguard Voices as public proof.
- Foundations of Musicianship.
- Returning adults, students, emerging artists, schools, partners, donors.
- Donor impact levels.
- The bridge between structure, recording opportunity, and public outcomes.

## Content to rewrite

- Replace “Products & Services” with “Programs and Pathways.”
- Replace most visible “access” wording with “opportunity.”
- Replace “Click Here” with specific CTAs.
- Replace “Coming Soon” dead ends with “Get updates” or founder-approved status.
- Replace field-guide labels with direct music/pathway language.

## Visual direction

The page should feel:

- Credible NYC nonprofit music organization.
- Warm creative pathway.
- Community-centered music education and performance organization.
- Specific to DSG.
- Clear for beginners, returning musicians, singers, artists, donors, partners, and allies.

The page should not feel:

- Generic AI landing page.
- Literal field guide concept page.
- SaaS page.
- Startup coaching page.
- Music conservatory.
- Luxury studio.
- Decorative mood board.
- Generic nonprofit card grid.

Garden metaphor may influence warmth, progression, spacing, rhythm, and growth, but not literal public labels.

## Technical constraints

- Plain HTML/CSS/minimal JS.
- No framework.
- No external CSS framework.
- No package manager.
- No build step.
- Deployable on GitHub Pages and Cloudflare Pages.
- Centralize links/images/content constants where useful in `assets/js/site-data.js`.
- Keep Cloudflare Images system.
- Keep Zeffy donation link: <https://www.zeffy.com/en-US/donation-form/donate-to-dsg>
- Keep Zeffy event notification link/embed: <https://www.zeffy.com/en-US/embed/newsletter-form/get-notifications-for-events>
- Keep Instagram link: <https://www.instagram.com/discoverysoundgarden/?utm_source=ig_embed&ig_rid=AiLeIGBfsbzvnTIXAc5oqQ4>
- Do not add real tracking IDs.
- Do not add secrets.
- Do not connect live domain.
- Do not use fake testimonials.
- Do not expose visible placeholder/TODO/image-pending language.

## Accessibility requirements

- Semantic landmarks.
- One clear H1.
- Logical heading order.
- Skip link.
- Visible focus states.
- Touch targets sized for mobile.
- Keyboard-operable selector, nav, accordions, and donor selector.
- Meaningful alt text for approved images.
- Decorative images marked with empty alt.
- Reduced-motion support.
- Iframe titles and fallback links.
- Color contrast checked before merge.

## Performance requirements

- No framework payload.
- Minimal JS.
- Lazy-load images and iframes.
- Use Cloudflare Images variants and fixed dimensions where possible.
- Avoid large unoptimized assets in the repo.
- Avoid blocking third-party scripts.
- Keep animations CSS-only and optional.

## Assets needed

- Approved hero/community image Cloudflare ID.
- Approved Vanguard Voices image Cloudflare ID.
- Approved workshop/learning image Cloudflare ID.
- Approved recording/mobile studio image Cloudflare ID.
- Optional approved short video or performance clip.
- Logo/brand mark guidance if available.

## Remaining founder decisions

- Final program statuses and dates.
- Foundations of Musicianship registration path.
- Vanguard Voices join/audition process.
- Recording opportunity availability.
- Partner contact route.
- Volunteer/community ally route.
- Approved donation impact language.
- Approved testimonials or launch without testimonials.
- Approved image IDs and alt text.
- Any required legal/nonprofit disclosure language.

## Risks to avoid

- Rebuilding before content decisions are made.
- Letting metaphor replace clarity.
- Public placeholder language.
- Fake proof.
- Heavy dependencies.
- Donation CTA overpowering participant paths.
- Mobile nav or sticky CTAs covering content.
- Hiding important copy inside JS-only interactions.
