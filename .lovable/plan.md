
## Goal

Build a single-page executive profile site that reads like a Fortune 500 leadership page — not a portfolio or resume. Deep navy, white, light gray, subtle gold accents. Continuous storytelling scroll with elegant transitions and no obvious section breaks.

## Design System

Tokens added to `src/styles.css` (`@theme` + `:root`):
- `--navy: oklch(0.18 0.04 255)` (deep navy background/foreground)
- `--navy-deep: oklch(0.12 0.035 255)`
- `--ivory: oklch(0.985 0.005 90)` (off-white)
- `--mist: oklch(0.94 0.006 255)` (light gray)
- `--gold: oklch(0.78 0.12 80)` (subtle gold accent)
- `--gold-soft: oklch(0.86 0.08 85)`
- Map shadcn tokens (background, foreground, primary, accent, muted, border) onto these so all utilities stay semantic.

Typography (loaded via `<link>` in `src/routes/__root.tsx`, registered in `@theme` as `--font-display` / `--font-body`):
- Display: **Fraunces** (high-contrast serif, editorial executive feel)
- Body: **Inter Tight** (refined neutral sans)
- Eyebrow/labels: Inter Tight uppercase with wide tracking

Motion: `framer-motion` for scroll-reveal, parallax, and the world-map connection lines. Lenis (`@studio-freight/lenis`) for smooth scrolling.

## Page Architecture

Single route: `src/routes/index.tsx` (replace placeholder). Update root `head()` with SEO (title: "Suresh Vaidyanathan — EVP, Renewable Fuels, Emerging Energy & Aviation", meta description, OG tags). Single `<h1>` on the hero, semantic `<section>` blocks throughout, alt text on all imagery.

Sections render as one continuous canvas — full-bleed navy with quiet gradient transitions (no hard dividers, no card walls between sections). Section components live under `src/components/profile/`.

### 1. Hero — `Hero.tsx`
- Full viewport, deep navy background.
- Animated background: layered SVG of abstract energy infrastructure (refinery silhouettes, flow lines, subtle particle drift) — pure SVG + framer-motion, no heavy libs.
- Eyebrow: "EXECUTIVE PROFILE" in gold tracking.
- H1: **Suresh Vaidyanathan** (Fraunces, oversized).
- Subtitle: "Executive Vice President | Renewable Fuels, Emerging Energy & Aviation".
- Supporting line: "Driving global energy transformation through renewable innovation, operational excellence, and enterprise-scale leadership."
- Stat strip across the bottom (4 columns, hairline gold dividers):
  - $3B+ Capital Projects Led
  - $500M+ Margin Improvement Delivered
  - $700M+ Annual Operational Benefits
  - 20+ Years Global Leadership

### 2. Executive Narrative — `Narrative.tsx`
- Editorial two-column with generous whitespace. Large pull-quote-style serif paragraphs that fade and lift on scroll.
- The three narrative paragraphs from the brief, broken into scroll-revealed stanzas with thin gold rule accents in the margin.

### 3. Leadership Impact — `Impact.tsx`
- Seven achievements presented as an asymmetric, scroll-sequenced grid of "impact statements" — not uniform cards. Each item: large gold metric (e.g. "$3B+"), ivory descriptor, hairline border. Items stagger in via `whileInView`.
- Achievements:
  - 2nd-largest US renewable diesel producer (Phillips 66)
  - SAF capability 0% → ~20% of global production
  - $3B+ renewable energy capital investments
  - $500M+ refining cash margin improvement
  - ~$700M annual operational improvements
  - ~$1B enterprise cost reduction
  - 9,000+ employees across refinery networks

### 4. Global Leadership Map — `GlobalMap.tsx`
- Custom SVG world map (dotted-grid style, mono ivory dots on navy) with four highlighted regions: North America, Europe, Asia, Middle East.
- Animated arcing connection lines drawn with `motion.path` + `pathLength`, looping subtly. Pulse markers at each region.
- Accompanying copy on global operational leadership and international transformation.

### 5. Boards & Advisory — `Boards.tsx`
- Restrained credibility block: small uppercase eyebrow "GOVERNANCE & ADVISORY", three roles as a horizontal triptych separated by gold hairlines:
  - Novonix Limited — Board Member
  - Aspen Technology — Advisory Board Member
  - Access Life America — Advisory Board Member
- Supporting line on strategic governance, innovation leadership, long-term value creation.

### 6. Philosophy Quote — `Philosophy.tsx`
- Full-width, dominant Fraunces serif statement, gold quotation marks, generous vertical space:
  > "The future of energy belongs to organizations capable of integrating operational excellence, innovation, sustainability, and disciplined execution."
- Attribution: "— Suresh Vaidyanathan".

### 7. Closing CTA — `Closing.tsx`
- Eyebrow: gold "AVAILABILITY".
- H2: "Building the Future of Energy".
- Supporting: "Open to board appointments, strategic advisory opportunities, executive leadership discussions, and transformative energy initiatives."
- Three quiet info blocks (no buttons that look like marketing CTAs): Houston, Texas · LinkedIn · Email — each a subtle gold underline link.
- Hairline footer with name + role + © year.

## Technical Notes

- Smooth scroll: install `lenis` + `framer-motion`. Initialize Lenis in a small client-only effect inside `RootComponent` (or a `useEffect` in the index route).
- All animations gated by `useReducedMotion` for accessibility.
- No images required (SVG-based visuals), keeping the build lean and SSR-safe. If a hero photo is later added, it goes via `src/assets/` with `og:image` wiring.
- Strictly semantic tokens — no hardcoded `text-white` / `bg-black`. All colors via `bg-background`, `text-foreground`, `bg-primary`, `text-accent` etc. mapped to the navy/ivory/gold palette.
- One H1 (hero name), H2s per section, proper alt text on SVGs (`role="img"` + `<title>`).

## Files Touched

- `src/styles.css` — palette + font tokens + utility for gold hairline.
- `src/routes/__root.tsx` — font `<link>` tags, refined default meta.
- `src/routes/index.tsx` — compose sections, page-level SEO.
- `src/components/profile/Hero.tsx`
- `src/components/profile/Narrative.tsx`
- `src/components/profile/Impact.tsx`
- `src/components/profile/GlobalMap.tsx`
- `src/components/profile/Boards.tsx`
- `src/components/profile/Philosophy.tsx`
- `src/components/profile/Closing.tsx`
- `src/components/profile/SmoothScroll.tsx` (Lenis wrapper, client-only)
- `package.json` — add `framer-motion`, `lenis`.

## Out of Scope

- No CMS / backend / forms (mailto + LinkedIn link only).
- No analytics, no auth.
- No images generated this pass — pure typographic + SVG visual system. Easy to add a portrait later if desired.
