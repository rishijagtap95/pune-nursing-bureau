# Design Brief — Nursing Bureau (Pune)

## Purpose
Professional home nursing marketplace for Pune families. Establish trust via verification badges, testimonials, and ease of booking. Convert visitors via WhatsApp CTA and prominent "Request a Call" actions.

## Tone & Differentiation
Medical + human. Deep blue conveys stability and healthcare authority; teal accents signal action and approachability. Serif display type (Fraunces) adds professionalism; sans-body (DM Sans) ensures readability. No cold, corporate feel — warmth through soft shadows, ample whitespace, and human testimonials.

## Color Palette

| Token | OKLCH | Usage |
|-------|-------|-------|
| Primary (Deep Blue) | `0.25 0.08 263` | Headers, nav, CTAs, badges |
| Accent (Teal) | `0.50 0.10 190` | Buttons, highlights, hover states |
| Background | `1.0 0 0` | Page background |
| Card | `0.98 0.01 0` | Service cards, testimonial frames |
| Muted | `0.88 0.01 0` | Section dividers, secondary elements |
| Border | `0.92 0.01 0` | Form inputs, card borders |
| Destructive | `0.55 0.22 25` | Warnings (if needed) |

## Typography
- **Display**: Fraunces (serif). Headlines, hero text. Weights: 400 (regular), 700 (bold). Conveys trust and medical authority.
- **Body**: DM Sans (sans-serif). Body copy, form labels, card descriptions. Weights: 400, 700. Clear, modern, highly readable.
- **Mono**: Geist Mono. Service codes, booking refs, data tables (if any).

## Elevation & Depth
- Header: `bg-primary` with white text, `shadow-subtle` for separation.
- Service cards: `bg-card` with `border border-border` and `shadow-card` (2px blur, 8% opacity).
- Testimonial cards: `bg-card` with `shadow-card`, soft bottom border in accent color.
- Contact section: `bg-secondary` (subtle grey) with elevated form container.
- Floating WhatsApp button: `shadow-elevated` (8px blur, 12% opacity) for prominence.

## Structural Zones

| Zone | Background | Border | Shadow |
|------|-----------|--------|--------|
| Header/Nav | primary | none | subtle |
| Hero | background | none | none |
| Service Cards | card | border-border | shadow-card |
| Testimonials | card | left accent accent | shadow-card |
| Contact Form | secondary | input border-border | none |
| WhatsApp Button | accent | none | shadow-elevated |
| Footer | primary | border-t primary | none |

## Spacing & Rhythm
- Hero: 64px top padding, centered content max-width 800px.
- Service grid: 24px gap, 2 columns mobile → 4 columns desktop (CSS grid).
- Cards: 16px padding, 12px border radius.
- Form: 12px input spacing, 24px section gaps.
- Footer: 48px top padding, 32px text spacing.

## Component Patterns
- **Buttons**: CTA (accent bg, white text, rounded-lg, hover opacity 0.9), Secondary (muted bg, primary text, rounded-lg).
- **Form Inputs**: Full-width, 12px border-radius, `border-input`, `focus:ring-2 ring-accent`, `focus:border-accent`.
- **Service Cards**: Icon (48x48), title (font-display), description (2 lines max), "Request" button.
- **Testimonial Cards**: Quote text (italic), name + title, 3–5 star rating, left 4px accent border.
- **Trust Badges**: 3 badges per row, centered icons, label text in muted foreground.

## Motion & Microinteractions
- **Fade-in**: 0.3s ease-out for section reveals on load.
- **Slide-up**: 0.4s ease-out for card stagger animations.
- **Hover**: Buttons scale 1.02, shadows deepen, text color adjusts.
- **Transition**: All interactive elements use `transition-smooth` (0.3s cubic-bezier).
- **Form validation**: Red destructive color for errors, green for success, smooth transitions.

## Constraints & Rules
- Light mode only (no dark mode needed).
- Single-page layout: hero → services → trust → testimonials → contact → footer.
- Max content width: 1200px (container-lg).
- Mobile-first responsive: sm (640px), md (768px), lg (1024px), xl (1280px).
- No gradients except subtle background gradient on sections. No animations on load that distract.
- High contrast: All text meets WCAG AA (4.5:1 for body, 3:1 for large text).
- Forms must be 100% functional with phone input (tel), name input, service dropdown.

## Signature Detail
**Trust rings**: Verification badges feature concentric circular outlines in primary color, suggesting layers of vetting/security. Repeated subtly across site footer and contact form as confidence markers. Creates cohesive, memorable visual thread.

## Deliverables
- `index.css`: Bundled fonts, OKLCH tokens, utility classes (shadow-card, shadow-elevated, gradient-subtle).
- `tailwind.config.js`: Custom shadows, fade-in + slide-up animations, font families via CSS variables.
- Preview image: Hero section with headline, service cards grid, trust badges, testimonial card, floating WhatsApp button, footer.
