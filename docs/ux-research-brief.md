# UX Research Brief: Discovery Sound Garden Homepage

## What the homepage must accomplish

The homepage must help each visitor understand three things quickly:

1. **What DSG is:** a NYC-based 501(c)(3) nonprofit music organization that helps people learn, record, and perform.
2. **Why DSG matters:** talent is widespread, but opportunity is uneven, expensive, and often connection-driven.
3. **What to do next:** choose a path as a learner, singer, artist, donor, partner, volunteer, or community ally.

The homepage should operate as a guided front door, not a brochure. It should turn DSG's current strongest ideas into a clear decision flow:

- Talent is everywhere. Opportunity starts here.
- Talent should never be limited by circumstance.
- Learn → Record → Perform.
- Build the skill. Record the proof. Let the world hear it.

## What mobile-first means specifically for DSG

Mobile-first for DSG means designing for people who may be interested but unsure whether they belong. Many visitors will arrive from Instagram, a text message, an event mention, a school/community referral, or a donation link. They may not know DSG's structure yet.

For DSG, mobile-first requires:

- A short hero that identifies DSG and includes one immediate action.
- A tappable “Find Your Path” selector near the top.
- Path panels that answer “Is this for me?” before explaining every program.
- Short sections with strong headings and progressive disclosure.
- Large touch targets for path choices, donation amounts, accordions, and navigation.
- Avoiding long uninterrupted text blocks.
- Embed fallbacks for Zeffy notification forms.
- Donor and participant CTAs that remain reachable without crowding the screen.
- Fast loading without a framework or heavy animation.

## What the homepage should not do

The homepage should not:

- Redesign around a decorative metaphor before clarifying audience decisions.
- Use literal field-guide labels such as “field note,” “specimen,” or “Seed → Roots → Stem → Bloom” without future approval.
- Look like a generic AI-generated nonprofit landing page.
- Look like a SaaS funnel, music conservatory, luxury recording studio, startup coaching page, or mood board.
- Hide core program clarity behind vague inspirational language.
- Use fake testimonials or unverified impact metrics.
- Display placeholder, TODO, image-pending, or Cloudflare-pending language in public UI.
- Add tracking IDs, secrets, frameworks, package managers, or build tools.

## Strategic assumptions

- The current live website is the source of truth for messaging.
- The experimental preview is useful as a technical skeleton but not as a strategic content model.
- DSG has multiple audiences with different emotional states; one generic CTA cannot serve everyone.
- The homepage should emphasize opportunity, proof, and pathway more than aesthetic metaphor.
- Vanguard Voices is a proof module and community performance pathway, not only a program listing.
- Donation conversion will improve if the gift is connected to tangible outcomes.
- Partner conversion requires credibility and clarity more than urgency.
- The next build should be static, fast, and maintainable by non-framework contributors.

## Risks

- **Genericness risk:** If the page uses broad nonprofit language, DSG will feel interchangeable.
- **Metaphor risk:** If garden language becomes literal labels, it can distract from music, education, recording, and performance.
- **Trust risk:** Placeholder image captions, fake testimonials, and vague dates reduce credibility.
- **Mobile risk:** Too many stacked cards can make the page feel long without guiding action.
- **Conversion risk:** Donation and partner CTAs can compete with learner/singer paths if not sequenced.
- **Content readiness risk:** Missing founder decisions may force vague or unfinished public content.
- **Performance risk:** Embeds, images, and animations can slow the page if not lazy-loaded and controlled.
- **Accessibility risk:** Custom selectors, accordions, and sticky bars can fail keyboard and screen-reader users if not built carefully.

## Measures of success

The next homepage should be considered successful if:

- A first-time mobile visitor can describe DSG in one sentence after the hero.
- Each major audience can find a relevant path within the first two screenfuls.
- The page makes Learn → Record → Perform feel like one connected pathway.
- Vanguard Voices clearly demonstrates public proof.
- Donation levels communicate tangible outcomes before sending users to Zeffy.
- Partner visitors can identify what DSG can bring to a school/community and how to inquire.
- No visible placeholder, TODO, or image-pending language appears.
- The page remains fast without a build step or external CSS framework.
- Interactive components work with keyboard, screen readers, reduced motion, and slow-loading embeds.

## How the new homepage should differ from the live site

The new homepage should keep the live site's strongest language but improve structure:

- Convert static audience mentions into an interactive path system.
- Replace scattered CTAs with a clear CTA hierarchy.
- Make donation impact interactive and easier to understand on mobile.
- Move from broad program explanation to a comparative pathway model.
- Strengthen partner and volunteer/community ally entry points.
- Reduce “access” language in visible marketing copy and prefer “opportunity.”
- Add fallback behavior for embeds and images.

## How the new homepage should differ from the experimental preview

The new homepage should preserve the preview's lightweight technical approach but change its strategy:

- Replace “Sound Garden Field Guide” with credible nonprofit music positioning.
- Replace Seed/Roots/Stem/Bloom with Learn → Record → Perform.
- Expand thin sections into decision-making modules.
- Remove public placeholder language.
- Add real interaction models for path selection, program comparison, donation impact, and mobile navigation.
- Use warmth and growth as design qualities, not literal public labels.
