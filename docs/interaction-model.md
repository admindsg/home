# Interaction Model

## What should be interactive

- Find Your Path selector.
- Audience-specific path panels.
- Program comparison/accordion.
- Donor impact selector.
- Mobile navigation.
- Zeffy notification embed fallback.
- Partner inquiry interest choices only if a real destination is confirmed.

## What should stay static

- Hero tagline and core promise.
- Opportunity-gap explainer.
- Learn → Record → Perform pathway headline.
- Core trust signals.
- Footer organization identity.

Static content should carry the SEO and core comprehension load. Interactions should improve decision-making, not hide the main message.

## Mobile behavior

- Hero should fit within a short scroll and offer Find Your Path.
- Path selector should use large tap targets and plain labels.
- Program details should be collapsible but accessible.
- Donation amounts should be tappable buttons.
- Zeffy embed should be lazy-loaded or placed lower on the page with fallback link.
- CTAs should repeat after major sections instead of relying only on header navigation.

## Desktop behavior

- Header navigation can show main anchors.
- Path selector can become a two-column layout: selector on left, active panel on right.
- Learn → Record → Perform can use three columns.
- Program accordion can become cards with expandable detail or a comparison grid.
- Partner inquiry panel can sit near donor/stay-connected content.

## Keyboard behavior

- All interactive controls must be reachable by Tab.
- Buttons must show visible focus states.
- Accordions must be operable with Enter/Space.
- Path selector state must be clear to keyboard users.
- Do not trap focus in mobile navigation.
- Skip link must remain visible on focus.

## Reduced-motion behavior

- Respect `prefers-reduced-motion: reduce`.
- Avoid required motion to understand the pathway.
- Use subtle fades/transitions only when they do not block comprehension.
- Disable or simplify animated scrolling and decorative movement for reduced-motion users.

## Form/embed fallback behavior

- Zeffy event notification iframe must have a descriptive title.
- If iframe does not load, users should still see “Open notification form.”
- Donation should be a direct Zeffy link, not a custom payment form.
- Partner inquiry should not use a fake form; if no backend/contact is approved, use a mailto or contact CTA.

## Future analytics events

Prepare data attributes only; do not send events until DSG approves tracking.

Recommended future events:

- `path_select`
- `path_cta_click`
- `accordion_toggle`
- `donation_amount_select`
- `donate_click`
- `partner_click`
- `newsletter_click`
- `instagram_click`
- `mobile_nav_open`

## Find Your Path selector

Recommended behavior:

1. Render all path content in HTML for progressive enhancement.
2. With JS enabled, show one panel at a time.
3. Default to a broad “Start here” or beginner panel.
4. Use buttons with active state and `aria-controls`.
5. Update focus only when necessary; avoid disruptive focus jumps.
6. Preserve anchor links so CTAs can move users to deeper sections.

## Donor impact selector

Recommended behavior:

1. Render four amount buttons: $25, $50, $100, Custom.
2. Default selection can be $50 or no selection with general impact copy.
3. Selection updates a short impact statement.
4. Donate CTA always goes to the canonical Zeffy donation link.
5. If JS fails, list all impact levels and show the donate link.

## Accordions

Recommended behavior:

- Use `details`/`summary` or accessible button-controlled panels.
- Allow multiple sections open unless testing shows single-open is clearer.
- Keep summary labels descriptive: “Foundations of Musicianship,” “Vanguard Voices,” etc.
- Include status and CTA in each panel.
- Do not hide essential homepage identity content inside accordions.

## Mobile navigation

Recommended behavior:

- Use a simple menu button only if the number of links requires it.
- Include Find Your Path, Programs, Vanguard Voices, Partner, Donate.
- Close menu after anchor selection.
- Do not obscure the donation link.
- Keep Donate visible but not dominant over the primary participant path.

## Sticky CTAs

Recommendation:

- Do not default to a sticky bottom bar in the next build unless implementation proves it does not obscure content or feel pushy.
- Use repeated CTA bands after high-intent sections first.
- If a sticky bar is tested later, limit it to two actions: Find Your Path and Donate.
- Respect safe-area inset and avoid covering iframes or footer links.
