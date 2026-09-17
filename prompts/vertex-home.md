# Implementation Prompt: Vertex Home Page

## 1. Goal
Implement the **Vertex Home Page** matching `design/vertex-home.png` pixel-accurately, with full responsiveness down to mobile viewports, using the established Vertex Design System tokens, typography, and UI components.

---

## 2. Skills Read
- `AGENTS.md`: Platform guidelines, visual fidelity rules, two-workspace structure, workflow loop, tech stack constraints.
- `develop` (`.agents/skills/develop/SKILL.md`): UI builder flow, component conventions, spec gate.
- `ui-ux-pro-max`: Design intelligence for tokens, typography, contrast, spacing, responsiveness.
- `nextjs-guide`: Next.js App Router conventions, fonts, server/client boundaries.

---

## 3. Code Inspected
- `design/vertex-home.png`: 1024x1536 visual specification showing:
  - **Top Navigation**: Vertex logo with brand glyph and wordmark, "Courses" and "My Learning" links, notification bell icon, and circular user profile avatar.
  - **Hero Section**:
    - "INTELLIGENT LEARNING" pill badge (soft peach background, orange border, orange uppercase text with letter-spacing).
    - Headline: "Search your learning in plain English." in Playfair Display serif bold.
    - Subtitle: "Vertex understands what you want to learn and finds the exact lessons across all your courses." in Inter neutral-600.
    - CTA Button: "Explore Courses ->" in primary orange with hover effects.
    - Search Bar: Centered white card with magnifying glass icon, placeholder "Ask anything about your learning...", and "⌘ K" shortcut badge.
  - **All Courses Section**:
    - Header row: "All Courses" in Playfair Display serif; "View all courses ->" link in primary orange.
    - 3-Column Grid of Course Cards:
      1. Next.js for Production (Black square with white "N", summary, Intermediate, 18h 24m, 12 modules).
      2. Docker Essentials (Docker whale logo, summary, Beginner, 10h 12m, 8 modules).
      3. TypeScript Deep Dive (Blue square with white "TS", summary, Intermediate, 14h 36m, 10 modules).
  - **Callout Divider**: Horizontal lines flanking an orange star icon and "New courses and lessons added every week."
  - **Bottom Waveform Graphic**: Stylized audio/lesson equalizer columns with warm peach-to-orange gradient fading upwards into the canvas.
  - **Canvas Frame**: Centered white page container on a subtle diagonal hatched background canvas.
- `app/globals.css`: Tailwind v4 theme configuration with primary colors (500 #F97316 to 100 #FFEEE5), neutral colors (900 #0F172A to 50 #FAFAFC), font families (`--font-playfair`, `--font-inter`), and shadows.
- `app/layout.tsx`: Root layout with Google Fonts `Inter` and `Playfair_Display`.
- `components/ui/navigation.tsx`: Header Navbar, Breadcrumbs, and Pagination.
- `components/ui/course-card.tsx`: CourseCard component.
- `components/ui/button.tsx`: Button component with variants.
- `components/ui/input.tsx`: Input and SearchInput with ⌘K badge.
- `components/ui/icon.tsx`: VertexLogo, VertexGlyph, and standard icons.
- `app/page.tsx`: Currently rendering `DesignSystemPage`.

---

## 4. Decisions and Assumptions
1. **Home Route**: Replace starter content in `app/page.tsx` with the Vertex Home page. Keep `/design-system` accessible at `app/design-system/page.tsx` for design system reference.
2. **Typography Fidelity**:
   - Course Card titles in `design/vertex-home.png` use Playfair Display (`font-serif`) rather than sans-serif. Update `CourseCard` to use `font-serif` for titles (or provide a customizable title font class) to match the visual specification exactly.
   - Headings ("Search your learning in plain English." and "All Courses") strictly use Playfair Display (`font-serif`).
3. **Interactive Search**:
   - Make the search bar in the hero interactive: pressing Enter or submitting navigates to `/search?q=...`.
   - Support `⌘K` / `Ctrl+K` keyboard shortcut to focus the search input.
4. **Icons & Logos**:
   - Provide clean, accurate SVG icons for the course cards: Next.js ("N"), Docker (whale with containers), and TypeScript ("TS").
   - Include notification bell and circular profile avatar in the header.
5. **Acoustic Waveform Accent**:
   - Implement the bottom acoustic equalizer graphic using responsive columns with the warm orange-peach gradient (`#FB923C` / `#FDBA74` / `#FED7AA` / `#FFEDD5`) fading upwards with soft blur and opacity, matching the reference image.
6. **Canvas Framing & Responsiveness**:
   - Present the page centered with the subtle diagonal striped canvas background on desktop matching `design/vertex-home.png`.
   - Ensure full mobile responsiveness: navbar adjusts gracefully, hero typography scales smoothly, course grid stacks into a single column, and padding adapts.

---

## 5. Files to Touch
- `prompts/vertex-home.md` - [NEW] Implementation prompt.
- `components/ui/course-card.tsx` - [MODIFY] Update title typography to Playfair Display (`font-serif`) matching the home page design, support custom icon rendering and clean metadata layout.
- `components/ui/navigation.tsx` - [MODIFY] Ensure Navbar rightElement neatly accommodates notification bell and avatar.
- `components/home/hero-section.tsx` - [NEW] Hero section with "INTELLIGENT LEARNING" pill, serif headline, subtitle, "Explore Courses" button, and ⌘K search bar.
- `components/home/courses-section.tsx` - [NEW] "All Courses" section with serif heading, "View all courses" link, 3 course cards, and star callout divider.
- `components/home/waveform-graphic.tsx` - [NEW] Stylized bottom acoustic waveform graphic.
- `app/page.tsx` - [MODIFY] Mount and compose the full Vertex Home page.

---

## 6. Requirements
- **Visual Accuracy**: Exact match with `design/vertex-home.png` for colors, typography (Playfair Display for headings and course titles, Inter for body and UI), spacing, and elements.
- **Responsiveness**: Pixel-perfect desktop layout; graceful adaptation down to mobile viewports (stacked cards, responsive text sizes, touch-friendly targets).
- **Accessibility**: Semantic HTML `<header>`, `<main>`, `<section>`, `<nav>`, accessible form labels and ARIA attributes, keyboard shortcut listener (`⌘K` / `Ctrl+K`).

---

## 7. Security Considerations
- Read-only presentational home page; no client-side tokens or private keys exposed.
- Form inputs sanitized via standard React state handling.

---

## 8. Acceptance Criteria
- [ ] Navbar displays Vertex logo, "Courses", "My Learning", notification bell, and user avatar.
- [ ] Hero section renders "INTELLIGENT LEARNING" pill badge with peach background and orange border/text.
- [ ] Main headline "Search your learning in plain English." rendered in Playfair Display serif bold.
- [ ] Subtitle and "Explore Courses ->" button rendered with exact styling.
- [ ] Search input rendered with search icon, placeholder, and "⌘ K" shortcut badge.
- [ ] Pressing `⌘K` or `Ctrl+K` focuses the search input.
- [ ] "All Courses" section displays serif heading and orange "View all courses ->" link.
- [ ] 3 Course Cards render:
  - Next.js for Production (Intermediate, 18h 24m, 12 modules)
  - Docker Essentials (Beginner, 10h 12m, 8 modules)
  - TypeScript Deep Dive (Intermediate, 14h 36m, 10 modules)
- [ ] Callout divider with orange star icon and "New courses and lessons added every week." rendered.
- [ ] Bottom acoustic waveform graphic rendered with peach-orange gradient fading upwards.
- [ ] Desktop canvas shows subtle diagonal striped canvas background with centered white container.
- [ ] Mobile viewports stack course cards and adapt typography cleanly.
- [ ] `npm run lint` passes with 0 errors.
- [ ] `npm run build` passes with 0 errors.

---

## 9. Checks to Run
- `npm run lint`
- `npm run build`

---

## 10. Manual Test Steps
1. Navigate to `http://localhost:3000/`.
2. Verify Navbar: Check Vertex logo, Courses & My Learning navigation links, notification bell icon, and user profile avatar.
3. Verify Hero:
   - Check "INTELLIGENT LEARNING" pill badge.
   - Inspect Display 1 headline "Search your learning in plain English." (Playfair Display font).
   - Check subtitle and "Explore Courses ->" CTA button.
   - Test search input: press `⌘K` (Mac) or `Ctrl+K` (Windows/Linux) and confirm input gains focus.
4. Verify "All Courses" Section:
   - Check "All Courses" serif heading and "View all courses ->" link.
   - Verify all 3 cards: Next.js ("N"), Docker (whale), TypeScript ("TS") with respective levels, durations, and module counts.
5. Verify Divider: Confirm orange star and "New courses and lessons added every week." text.
6. Verify Bottom Graphic: Check acoustic equalizer bars with peach-to-orange gradient fading upwards.
7. Test Responsiveness: Resize browser window down to mobile (375px) to verify single-column stacking and layout integrity.
8. Verify `/design-system` is still accessible at `http://localhost:3000/design-system`.
