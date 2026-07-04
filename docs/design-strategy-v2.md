# Discovery Sound Garden Design Strategy v2

## Brand archetype
Discovery Sound Garden (DSG) uses **The Garden Guide** archetype: the visitor is the hero, and DSG is the guide that helps create conditions for music to grow. The voice combines caregiver warmth, creator momentum, and sage-like structure without savior language, pity, gatekeeping, conservatory elitism, or music-industry ego.

## Strategic promise
- **Required tagline:** Talent is everywhere. Opportunity starts here.
- **Core promise:** Talent should never be limited by circumstance.
- **Core enemy:** Talent is not the problem. Circumstance, cost, confidence gaps, disconnected pathways, and gatekeeping are the problem.
- **Core pathway:** Learn → Record → Perform.
- **Growth metaphor:** Seed → Roots → Stem → Bloom → Garden.

## Audience map
| Audience | Need | Emotional cue | Primary CTA |
| --- | --- | --- | --- |
| Curious beginner | A safe, low-pressure first step | Nervous, curious, unsure | Find Your Path |
| Returning adult musician | Permission to begin again with structure | Hopeful, rusty, cautious | Start Learning |
| Community singer | Belonging and a voice pathway | Interested, unsure where they fit | Explore Vanguard Voices |
| Emerging artist/songwriter | Help turning ideas into recorded work | Motivated, under-resourced | Build Your Sound |
| Donor | Trust, clarity, concrete impact | Values-driven, proof-seeking | Sponsor Opportunity |
| Partner / organization | Credibility and an easy contact path | Practical, planning-oriented | Partner With DSG |
| Volunteer / ally | Mission clarity and simple next action | Supportive, community-minded | Get Involved |

## Customer journeys
1. **Recognize:** Visitor sees themselves in threshold copy and field-guide navigation.
2. **Choose:** Visitor selects a starting point rather than reading a generic program grid.
3. **Understand:** Visitor learns that the gap is opportunity, not talent.
4. **Trust:** Visitor sees a clear Learn → Record → Perform pathway, nonprofit status, and concrete donation impact.
5. **Act:** Visitor chooses a CTA that matches their role.

## Visual direction
The homepage should feel like a **Sound Garden Field Guide**: part garden map, part rehearsal notebook, part community arts lab, and part donor-ready proof page. Visual elements should include field-guide labels, pathway nodes, staff-line borders, paper texture, specimen-style feature panels, warm dark/cream contrast, and a soundwave/growth-line motif created in CSS.

## Section strategy
1. **Hero / threshold:** Establish the field-guide metaphor and required tagline while making the visitor feel seen.
2. **Find Your Starting Point:** A notebook-style selector for learner, singer, artist, donor, and partner paths.
3. **The Opportunity Gap:** Name cost, confidence gaps, disconnected pathways, and gatekeeping as the real barriers.
4. **The Garden Map:** Connect Seed → Roots → Stem → Bloom → Garden with Learn → Record → Perform.
5. **What Grows Here:** Present program areas as specimens/pathway stops, not SaaS cards.
6. **Vanguard Voices / Public Proof:** Position Vanguard Voices as high standards with care and public proof.
7. **Sponsor Opportunity:** Use Zeffy donation link and concrete giving examples.
8. **Stay Connected:** Use Zeffy event notifications and Instagram DM prompt.
9. **Trust / Footer:** Reinforce NYC-based 501(c)(3), community-centered nonprofit music pathway.

## What to avoid
- Generic centered hero with two buttons and vague background gradients.
- Generic nonprofit or SaaS card grids.
- Past-event framing or outdated event-centered messaging.
- Pity, savior, gatekeeper, elite conservatory, or flashy industry tone.
- Stock-image dependency, unapproved imagery, and AI-looking decorations.
- Real analytics IDs or live-domain connection.

## Design principles
- **Mobile-first guided walk:** The phone experience should read like a pathway through the garden.
- **Opportunity language:** Prefer “opportunity” in marketing copy; reserve “accessibility” for technical or disability contexts.
- **Specific over template:** Every major design choice should reference field guide, rehearsal notebook, garden map, or music pathway.
- **Trust through clarity:** Donor information should be concrete, direct, and tied to Learn → Record → Perform.
- **Lightweight by default:** Plain HTML/CSS/JS, no framework, no build step, no external CSS library.

## Implementation notes
- Keep canonical links and Cloudflare Images placeholders centralized in `assets/js/site-data.js`.
- Use semantic sections, ordered heading structure, accessible link labels, focus-visible states, and reduced-motion support.
- Use CSS custom properties for ink, deep garden, moss, cream, paper, gold, clay/coral accent, muted text, and staff-line borders.
- Use Cloudflare Images URL pattern placeholders until final image IDs are approved.
- Keep Zeffy donation and event notification URLs active.
- Include TODO comments only for analytics placeholders; do not add tracking IDs.
