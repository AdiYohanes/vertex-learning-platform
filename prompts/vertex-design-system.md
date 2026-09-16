# Implementation Prompt: Vertex Design System

## 1. Goal
Implement the comprehensive **Vertex Design System** for the Vertex learning platform based on the visual specification in `design/vertex-designsystem.png`. This includes establishing design tokens (colors, typography, spacing, radius, shadows), core UI components (buttons, inputs, select, badges, status indicators, progress bar, cards, navigation), and an interactive showcase reproducing all 14 designated sections.

---

## 2. Skills Read
- `AGENTS.md`: Platform guidelines, two-workspace structure, workflow loop, visual fidelity rules, tech stack constraints.
- `using-superpowers`: Operational discipline, prompt-first workflow.
- `ui-ux-pro-max`: Design intelligence for tokens, typography, contrast, touch targets, and layout hierarchies.
- `node_modules/next/dist/docs/`: Next.js 16 App Router conventions, font optimization (`next/font/google`), and Server/Client component boundaries.

---

## 3. Code Inspected
- `design/vertex-designsystem.png`: Complete visual specification covering 14 sections:
  - 01 Colors (Primary: 500 #F97316, 400 #FB923C, 300 #FDBA74, 200 #FED7AA, 100 #FFEEE5; Neutral: 900 #0F172A, 700 #334155, 500 #64748B, 300 #CBD5E1, 200 #E2E8F0, 100 #F1F5F9, 50 #FAFAFC, White #FFFFFF)
  - 02 Typography (Playfair Display for elegant display titles; Inter for clean, legible headings and UI)
  - 03 Type Scale (Display 1 48/56 Bold, Display 2 36/44 Bold, Heading 1 28/36 SemiBold, Heading 2 22/30 SemiBold, Heading 3 18/26 Medium, Body Large 16/24 Regular, Body 14/20 Regular, Small 12/16 Regular)
  - 04 Spacing System (Base 4px: 4, 8, 12, 16, 24, 32, 40, 48, 64)
  - 05 Radius & Shadows (Radius: 4px xs, 8px sm, 12px md, 16px lg, 24px xl, Full circle; Shadows: Sm, Md, Lg, Xl)
  - 06 Icons (24x24px grid, 2px stroke width, rounded line caps, outline and filled styles)
  - 07 Buttons (Primary, Secondary, Tertiary, Text across Default, Hover, Disabled states; 44px height, 12px radius)
  - 08 Inputs (Search input with shortcut ⌘K, Select dropdown)
  - 09 Badges / Tags (Video, Lesson, Popular)
  - 10 Status / Indicators (In Progress, Completed, Now Playing, Locked)
  - 11 Progress Bar (Track, Fill, percentage indicator)
  - 12 Cards (Course Card, Lesson Card Video, Lesson Card Lesson, Resource Card)
  - 13 Navigation (Logo + Nav links, Breadcrumbs, Pagination)
  - 14 Principles (Clarity First, Consistency, Focus & Calm, Accessible)
- `package.json`: Next.js 16.3.5, React 19.2.8, Tailwind CSS v4, ESLint 9.
- `app/globals.css`: Tailwind v4 setup with `@import "tailwindcss";` and initial CSS variables.
- `app/layout.tsx`: Root layout with font configuration.
- `app/page.tsx`: Starter Next.js template.
- `tsconfig.json`: TypeScript configuration with path alias `@/*`.

---

## 4. Decisions and Assumptions
1. **Design Tokens & Theme**: Implement all color palettes, radii, shadows, and font families in `app/globals.css` using Tailwind CSS v4 `@theme` configuration, ensuring full utility class availability (e.g. `bg-primary-500`, `text-neutral-900`, `rounded-md`, `shadow-md`).
2. **Typography**: Load Google Fonts `Inter` and `Playfair_Display` via `next/font/google` in `app/layout.tsx` and configure CSS variables `--font-inter` and `--font-playfair`.
3. **Icons**: Install `lucide-react` for standard 24x24 icons (Bell, Search, Play, FileText, Bookmark, BarChart3, Clock, User, ChevronRight, ChevronLeft, ChevronDown, CheckCircle2, Lock, ExternalLink, Command) matching the 2px stroke and rounded caps specification. Provide custom SVG components for the Vertex brand logo and filled/outline icon helpers.
4. **Component Hierarchy**:
   - Create modular, reusable components under `components/ui/` that are self-contained, typed with TypeScript, and support all variants/states depicted in the design system.
5. **Interactive Showcase**:
   - Create `app/design-system/page.tsx` that replicates the exact structure and visual presentation of `vertex-designsystem.png` with all 14 numbered sections.
   - Update `app/page.tsx` to showcase the design system and link to the dedicated showcase.

---

## 5. Files to Touch
- `package.json` - Add `lucide-react` dependency
- `app/globals.css` - Configure Tailwind v4 `@theme` tokens (colors, font families, shadows, radii)
- `app/layout.tsx` - Inject `Inter` and `Playfair_Display` font classes and metadata
- `components/ui/icon.tsx` - [NEW] Vertex Logo and unified icon utilities
- `components/ui/button.tsx` - [NEW] Button component supporting primary, secondary, tertiary, and text variants
- `components/ui/badge.tsx` - [NEW] Video, Lesson, and Popular badges
- `components/ui/status-indicator.tsx` - [NEW] In Progress, Completed, Now Playing, and Locked indicators
- `components/ui/progress-bar.tsx` - [NEW] Progress bar with percentage label
- `components/ui/input.tsx` - [NEW] Search input with keyboard shortcut badge and standard input
- `components/ui/select.tsx` - [NEW] Select dropdown component
- `components/ui/card.tsx` - [NEW] Base card wrapper with design system radius and shadow
- `components/ui/course-card.tsx` - [NEW] Course Card matching Section 12
- `components/ui/lesson-card.tsx` - [NEW] Lesson Card supporting Video and Lesson variants
- `components/ui/resource-card.tsx` - [NEW] Resource Card matching Section 12
- `components/ui/navigation.tsx` - [NEW] Vertex navbar, breadcrumbs, and pagination components
- `app/design-system/page.tsx` - [NEW] Full 14-section design system specification page
- `app/page.tsx` - [MODIFY] Landing showcase featuring the design system

---

## 6. Requirements
- **Visual Fidelity**: Pixel-perfect alignment with `vertex-designsystem.png` for colors, font weights, line heights, paddings, borders, and shadows.
- **Component Usability**: All components must accept custom class names, standard HTML button/input attributes, and typed props.
- **Responsive**: Desktop layout strictly reflects the reference image; layout sensibly wraps and adapts on smaller viewports.
- **Accessibility**: Semantic HTML tags, focus visible outlines, ARIA attributes for inputs and icon-only actions.

---

## 7. Security Considerations
- Purely presentational and design-system scope; no user data or API keys involved.
- Server components used wherever possible; client directives `'use client'` only for interactive components (Select, interactive inputs).

---

## 8. Acceptance Criteria
- [ ] Tailwind v4 `@theme` contains all Primary (100–500) and Neutral (50–900 + White) colors, Radii (xs–xl, full), Shadows (sm–xl), and Typography tokens.
- [ ] Fonts `Playfair Display` and `Inter` load cleanly without FOUT or layout shift.
- [ ] Button component implements Primary, Secondary, Tertiary, and Text variants across Default, Hover, and Disabled states.
- [ ] Search input renders search icon, placeholder, and ⌘K badge; Select renders clean dropdown.
- [ ] Badges (Video, Lesson, Popular) render correct background and text colors.
- [ ] Status indicators (In Progress, Completed, Now Playing, Locked) render respective icons and colors.
- [ ] Progress bar renders smooth track with accurate fill percentage.
- [ ] All 4 cards (Course, Lesson Video, Lesson Article, Resource) match design specs.
- [ ] Navigation components (Header/Navbar with Vertex logo, Breadcrumbs, Pagination) match design.
- [ ] Showcase page renders all 14 numbered sections matching the reference image layout.
- [ ] `npm run lint` passes with zero errors.
- [ ] `npm run build` passes with zero errors.

---

## 9. Checks to Run
- `npm run lint`
- `npm run build`

---

## 10. Manual Test Steps
1. Run `npm run dev` and navigate to `http://localhost:3000/design-system` (and `http://localhost:3000`).
2. Verify Section 01 (Colors): Ensure all Primary swatches (#F97316 down to #FFEEE5) and Neutral swatches (#0F172A down to #FFFFFF) display hex codes and names accurately.
3. Verify Section 02 & 03 (Typography & Type Scale): Check Playfair Display (Display 1 & 2) and Inter (Headings 1-3, Body Large, Body, Small) against line heights and font weights.
4. Verify Section 04 & 05 (Spacing, Radius, Shadows): Check base unit 4px blocks, border radius previews (4px to Full), and shadows (Sm to Xl).
5. Verify Section 06 (Icons): Inspect outline and filled styles on 24x24 grid.
6. Verify Section 07 (Buttons): Test Primary, Secondary, Tertiary, and Text buttons in Default, Hover, and Disabled states.
7. Verify Section 08 (Inputs): Test Search input focus states and Select dropdown.
8. Verify Section 09 & 10 (Badges & Status): Confirm Video, Lesson, Popular tags and In Progress, Completed, Now Playing, Locked states.
9. Verify Section 11 (Progress Bar): Check 35% bar fill and label.
10. Verify Section 12 (Cards): Verify Course Card, Lesson Card (Video with Watch from 12:45 action), Lesson Card (Module 5 with View lesson action), and Resource Card (PDF 1.2 MB with download/external action).
11. Verify Section 13 (Navigation): Check Vertex logo, active Courses / My Learning links, Breadcrumbs hierarchy, and interactive Pagination.
12. Verify Section 14 (Principles): Confirm Clarity First, Consistency, Focus & Calm, and Accessible callouts.
