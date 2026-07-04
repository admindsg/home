# Homepage Feature Specification

## Build priority summary

- **Build next:** Find Your Path selector, audience path panels, Learn → Record → Perform section, opportunity-gap explainer, program accordion, Vanguard Voices proof module, donor impact selector, stay-connected module, embed fallbacks, lightweight analytics event hooks as comments/data attributes.
- **Build if content is ready:** Partner inquiry panel, image/video proof modules.
- **Defer:** PWA install behavior, complex CMS, real analytics integrations, advanced animation, live API integrations beyond Zeffy embeds/links.

## 1. Mobile Find Your Path selector

- **Purpose:** Let visitors self-identify before reading the full page.
- **Target audience:** All audiences, especially mobile visitors.
- **User need:** “Show me the part of DSG that fits me.”
- **Interaction behavior:** Tappable segmented list or button grid updates one visible panel. Default panel should be beginner/community overview, not blank.
- **Content requirements:** Labels for learn, return, sing, record/create, donate, partner/help.
- **Accessibility requirements:** Use real buttons or links, `aria-controls`, visible focus, state text not conveyed by color alone.
- **Performance concerns:** No framework; small JS only.
- **Implementation notes:** Store path data in `assets/js/site-data.js` if content is repeated.
- **Next task or deferred:** Build next.

## 2. Audience-specific path panels

- **Purpose:** Give each audience reassurance, proof, and a next CTA.
- **Target audience:** Beginners, returning adults, community singers, emerging artists, donors, partners, volunteers.
- **User need:** “What should I do here?”
- **Interaction behavior:** Panel updates when selector changes; anchor links allow direct jumps.
- **Content requirements:** One-sentence fit, proof point, best next step, secondary link.
- **Accessibility requirements:** Maintain reading order, announce updates politely if JS changes content.
- **Performance concerns:** Keep content in HTML for SEO where possible; JS can hide/show.
- **Implementation notes:** Prefer progressive enhancement: all panels readable without JS.
- **Next task or deferred:** Build next.

## 3. Learn → Record → Perform pathway section

- **Purpose:** Explain DSG's model in one memorable structure.
- **Target audience:** All visitors.
- **User need:** “How do the programs connect?”
- **Interaction behavior:** Static on mobile with optional details; desktop may use three-column layout.
- **Content requirements:** Learn/build skill, Record/proof, Perform/public outcomes.
- **Accessibility requirements:** Use semantic list or articles; do not rely on arrows alone.
- **Performance concerns:** Avoid heavy animation.
- **Implementation notes:** Replace Seed/Roots/Stem/Bloom public labels.
- **Next task or deferred:** Build next.

## 4. Program comparison / accordion

- **Purpose:** Help users compare Foundations, workshops, recording, Vanguard Voices, and partnerships.
- **Target audience:** Participants, artists, partners.
- **User need:** “Which program fits my situation?”
- **Interaction behavior:** Mobile accordion; desktop can be cards with expandable details.
- **Content requirements:** Who it is for, what happens, outcome, status, CTA.
- **Accessibility requirements:** Buttons with `aria-expanded`; panels labeled; keyboard operable.
- **Performance concerns:** Minimal JS; content visible if JS disabled via `details/summary` or progressive enhancement.
- **Implementation notes:** Avoid isolated “Coming Soon”; use notification CTA if not active.
- **Next task or deferred:** Build next.

## 5. Opportunity-gap explainer

- **Purpose:** Make the nonprofit case for participation, donation, and partnership.
- **Target audience:** Donors, partners, participants.
- **User need:** “Why does DSG exist?”
- **Interaction behavior:** Mostly static; three concise proof/problem cards can stack on mobile.
- **Content requirements:** Cost, uneven opportunity, gatekeeping, DSG bridge.
- **Accessibility requirements:** Clear headings, not icon-only.
- **Performance concerns:** No external assets required.
- **Implementation notes:** Preserve live-site specificity and use “opportunity” preference.
- **Next task or deferred:** Build next.

## 6. Vanguard Voices proof module

- **Purpose:** Show public proof of DSG's pathway.
- **Target audience:** Community singers, donors, partners, volunteers.
- **User need:** “What does DSG make possible?”
- **Interaction behavior:** Static proof story with CTA; optional media once approved.
- **Content requirements:** What Vanguard Voices is, why it proves the model, join/update CTA.
- **Accessibility requirements:** Meaningful alt text for real images; captions for video; no placeholder captions.
- **Performance concerns:** Lazy-load media; use Cloudflare Images variants.
- **Implementation notes:** If no approved image exists, use a designed non-placeholder proof block, not “image pending.”
- **Next task or deferred:** Build next; media deferred until assets approved.

## 7. Donor impact selector

- **Purpose:** Connect gift levels to tangible outcomes.
- **Target audience:** Donors.
- **User need:** “What does my gift do?”
- **Interaction behavior:** Buttons for $25, $50, $100, Custom update impact copy and CTA.
- **Content requirements:** Founder-approved impact statements and Zeffy donation link.
- **Accessibility requirements:** Button state, focus, no color-only selection, keyboard support.
- **Performance concerns:** Small inline data object; no external tracking.
- **Implementation notes:** Add data attributes for future analytics events without real tracking IDs.
- **Next task or deferred:** Build next.

## 8. Partner inquiry panel

- **Purpose:** Give schools/community organizations a practical inquiry route.
- **Target audience:** Partners/schools/community orgs.
- **User need:** “Can DSG bring programming to us?”
- **Interaction behavior:** Static panel or simple selectable interest list that prepares a mailto link; no backend.
- **Content requirements:** Workshop, residency, recording activation, showcase, community event options.
- **Accessibility requirements:** Proper labels if any form fields exist; no unusable fake form.
- **Performance concerns:** Avoid third-party form until approved.
- **Implementation notes:** Use contact route only after founder confirms email/form.
- **Next task or deferred:** Build if contact workflow confirmed; otherwise include static panel with stay-connected CTA.

## 9. Stay-connected module

- **Purpose:** Capture interested users when program details are not final.
- **Target audience:** All non-ready visitors.
- **User need:** “Tell me when something opens.”
- **Interaction behavior:** Zeffy event notification iframe plus direct fallback link.
- **Content requirements:** Event notification headline, Instagram link, privacy/trust note if available.
- **Accessibility requirements:** Iframe title, fallback link, focusable controls.
- **Performance concerns:** Lazy-load iframe; do not block page rendering.
- **Implementation notes:** Keep canonical Zeffy event notification URL.
- **Next task or deferred:** Build next.

## 10. Mobile sticky action bar or alternative

- **Purpose:** Keep key actions reachable.
- **Target audience:** Mobile users.
- **User need:** “I can act without scrolling back.”
- **Interaction behavior:** Option A: sticky bottom bar after hero with Find Your Path and Donate. Option B: non-sticky repeated CTA bands after sections.
- **Content requirements:** Short labels only.
- **Accessibility requirements:** Must not cover content, skip link, or cookie/embed controls; respect safe areas.
- **Performance concerns:** CSS only.
- **Implementation notes:** Recommendation: use repeated CTA bands first; add sticky bar only if it does not clutter mobile.
- **Next task or deferred:** Defer sticky; build repeated CTA bands next.

## 11. Lightweight analytics event plan for future tracking

- **Purpose:** Prepare measurement without adding real IDs.
- **Target audience:** Internal team.
- **User need:** “Know which paths and CTAs matter later.”
- **Interaction behavior:** Add `data-event` attributes; no network calls.
- **Content requirements:** Event names: `path_select`, `donation_amount_select`, `donate_click`, `partner_click`, `newsletter_click`, `instagram_click`, `accordion_toggle`.
- **Accessibility requirements:** Data attributes must not alter behavior.
- **Performance concerns:** No tracking library.
- **Implementation notes:** Comments in JS only; no real tracking IDs.
- **Next task or deferred:** Build event attributes next; real analytics deferred.

## 12. Empty-state and fallback behavior for images and embeds

- **Purpose:** Avoid broken or placeholder-looking UI.
- **Target audience:** All visitors.
- **User need:** “The site feels trustworthy even when media is not ready.”
- **Interaction behavior:** If image missing, show content-first proof card; if iframe fails, show direct link.
- **Content requirements:** Public fallback copy must be polished, not internal.
- **Accessibility requirements:** Empty decorative images need empty alt; meaningful images need specific alt.
- **Performance concerns:** Lazy-load images/iframes; set dimensions to avoid layout shift.
- **Implementation notes:** Do not render “image pending,” “Cloudflare pending,” or “TODO.”
- **Next task or deferred:** Build next.
