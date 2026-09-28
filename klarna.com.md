# Design Map

Source: https://www.klarna.com/us/ (single page, 1440x900 viewport, captured 2026-09-28)

## Spacing Scale
- Base unit 4px: 4 · 8 · 12 · 16 · 24 · 32 · 40 · 48 · 80
- Section gap: 80px (whitespace only, no dividers)
- Page inset: 40px left/right at 1440px; hero card inset 40px from nav

## Font Hierarchy
- Display list: 100px / 0.95 / 700 — Klarna Title (condensed)
- Hero / H2: 84px / 80px / 700 — Klarna Title
- Section H2: 64px / 700 — Klarna Title
- Stat number / H3: 52px / 700 — Klarna Title
- Card title: 44px / 700 — Klarna Title
- Lead: 20px / 28px / 400 — Klarna Text
- Body: 16px / 400 — Klarna Text; UI + buttons 16px / 500
- Caption / legal: 14px and 12px / 400

## Color Palette
- #FFFFFF — page background (88.5% of surface)
- #0B051D — ink: text, primary buttons, footer background
- #282636 — secondary text
- #504F5F — muted text
- #C4C3CA / #96959F — inactive headlines in state lists
- #FFA8CD — pink accent: hero CTA pill, app widget, selected option (0.3% of surface)
- #C1F4D1 — mint data badges (cashback %)
- #F9F8F5 — warm surface, text on ink
- #EEEAFB — lavender notice banner

## Image Ratios
- Hero media card: ~2.4:1 (1360x560), full-bleed photo, headline overlaid bottom-left
- Sticky feature media: ~0.8:1
- Product cards: ~0.73:1 (portrait, 4-up)
- Brand carousel cards: ~1.5:1 with white info plate overlaid at bottom

## Component Tokens
- Radius: 9999px (all buttons, badges, nav pills) · 16px · 24px · 32px · 48px (hero + media) · 48/48/16 (floating widget)
- Shadow: 0 2px 4px rgba(0,0,0,.10) on 6 elements only; otherwise flat
- Buttons: pill, 16px/500, ink fill with #F9F8F5 text, or pink fill with ink text; secondary = white pill with 1px border
- Grid: 5 columns, 48px gutter; 4-up product cards; 2-col sticky split (media left, list right)
- Motion: color/opacity/transform 0.2s; transform 0.3s ease-in-out; height 0.4s for accordions
- Footer: ink #0B051D, 5 column link list, full-width wordmark (~330px tall)

---

# Taste DNA

### Headline as state indicator
- **Trigger**: When presenting 4-6 parallel product features in one section
- **Decision**: A stacked list of full-size display headlines where only the active one turns ink #0B051D and the rest sit at #C4C3CA/#96959F, over tabs, icon grids or arrow carousels
- **Reason**: The reader sees the whole menu at once and the scroll position tells them where they are; there is no control to learn
- **Evidence**: 52-100px Klarna Title headlines in #96959F/#C4C3CA when inactive; the active item gains a 16px paragraph and a pill CTA; used twice on the page (sticky split list and centered product list)

### Depth from radius and photography, not shadow
- **Trigger**: When separating media blocks from a white page
- **Decision**: 32-48px corner radius on photo cards with no borders or shadows, over elevated cards with drop shadows or outlined containers
- **Reason**: Large soft corners read as physical objects (a phone, a card) while the page stays flat and quick to scan
- **Evidence**: One shadow value on 6 elements (0 2px 4px rgba(0,0,0,.1)); 48px radius x19, 32px x39; #FFFFFF on 88.5% of surface; sections separated by 80px gaps, no dividers

### Pink is a signal, ink does the work
- **Trigger**: When choosing how much brand color to spread across the page
- **Decision**: Pink #FFA8CD kept to ~0.3% of surface (one hero CTA, the app widget, the selected option) with every other CTA in ink #0B051D, over a pink-washed page or pink headings
- **Reason**: A scarce color is read instantly as "press this"; the brand stays recognisable without tiring the eye
- **Evidence**: #FFA8CD areaPct 0.3%; #0B051D counted 81x as an accent (buttons, footer); mint #C1F4D1 limited to cashback badges

### Extreme scale contrast between two widths
- **Trigger**: When setting the type system
- **Decision**: A condensed heavy display face at 64-100px with ~0.95 line-height against a 16-20px regular text face, over one family with moderate 1.25x steps
- **Reason**: Condensed letters let short, confident sentences fill the width at poster size, so a page with little copy still reads as loud and specific
- **Evidence**: 84px/80px H1; 20px/28px lead, 16px body, 14px caption; 5:1 display-to-body ratio; the footer wordmark spans the full content width
