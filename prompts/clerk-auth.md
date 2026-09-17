# Implementation Prompt: Add Clerk Authentication

## 1. Goal
Set up and integrate **Clerk Authentication** using the Clerk CLI linked to Clerk application `app_3JQxCdjfWTYrWIT3bSqqdasOtof`, configuring Next.js 16 App Router with `proxy.ts`, wrapping the application with `<ClerkProvider>`, and embedding polished, responsive authentication controls (Sign In, Sign Up, and UserButton via `<Show>`) directly into the Vertex navigation bar.

---

## 2. Skills Read
- `AGENTS.md`: Platform architecture, Clerk auth rules (server-only secret key, public-first browsing, Clerk user id for progress tracking), check execution requirements.
- `GEMINI.md`: Strict user approval requirement before implementation.
- `clerk` (`.agents/skills/clerk/SKILL.md`): Clerk authentication router and guidelines.
- `clerk-cli` (`.agents/skills/clerk-cli/SKILL.md`): Clerk CLI operations (`clerk auth login`, `clerk init`, `clerk doctor`, `clerk env pull`).
- `clerk-setup` (`.agents/skills/clerk-setup/SKILL.md`): Setup process, provider placement inside `<body>`, Next.js 16 file convention (`proxy.ts`), package resolution.
- `clerk-nextjs-patterns` (`.agents/skills/clerk-nextjs-patterns/SKILL.md`): Next.js App Router patterns, `proxy.ts` public-first strategy, `<Show when="signed-in">` / `<Show when="signed-out">`.
- `node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/proxy.md`: Next.js 16 proxy file convention.

---

## 3. Code Inspected
- `package.json`: Next.js 16.3.5, React 19.2.8, TailwindCSS v4. Currently lacks `@clerk/nextjs`.
- `app/layout.tsx`: Root layout with `<html>` and `<body>` tags, Google Fonts (`Inter`, `Playfair_Display`). `ClerkProvider` must be placed inside `<body>`, wrapping `{children}`.
- `app/page.tsx`: Home page containing `Navbar` with static placeholder avatar and bell icon in `rightElement`.
- `components/ui/navigation.tsx`: `Navbar` component accepting `rightElement?: React.ReactNode`.
- `node_modules/next/dist/docs/`: Verified that Next.js 16 formally renamed `middleware.ts` convention to `proxy.ts`.

---

## 4. Decisions and Assumptions
1. **Clerk CLI Tooling**:
   - Check if `clerk` CLI is globally installed. If missing, install with `npm install -g clerk` or execute with `npx -y clerk@latest`.
   - Run `clerk auth login` to ensure authentication with Clerk.
   - Run `clerk init --app app_3JQxCdjfWTYrWIT3bSqqdasOtof` to link the repository to the designated Clerk application and configure environment keys.
2. **Next.js 16 Proxy Convention**:
   - Use `proxy.ts` in the project root (Next.js 16 standard replacing deprecated `middleware.ts`).
   - Implement `clerkMiddleware` using a public-first strategy keeping landing and course browsing public, with matcher configured as:
     ```ts
     export const config = {
       matcher: [
         '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
         '/(api|trpc)(.*)',
         '/__clerk/:path*',
       ],
     };
     ```
3. **Provider Placement**:
   - Wrap `{children}` inside `<body>` with `<ClerkProvider>` in `app/layout.tsx`, preserving font CSS variables and root attributes.
4. **Auth Controls UI**:
   - Create a dedicated `components/ui/auth-controls.tsx` (client component) leveraging `@clerk/nextjs` primitives: `<Show when="signed-out">`, `<SignInButton mode="modal">`, `<SignUpButton mode="modal">`, `<Show when="signed-in">`, and `<UserButton>`.
   - Style Sign In and Sign Up buttons to harmonize with the Vertex design system (neutral text for sign-in, primary orange `#F97316` pill for sign-up, clean avatar ring for `UserButton`).
   - Integrate `AuthControls` into `app/page.tsx` within the navbar `rightElement` next to the notification bell.
5. **No shadcn/ui Theme**:
   - `components.json` is not present in the workspace root, so `@clerk/ui` shadcn theme is not required.

---

## 5. Files to Touch
- `prompts/clerk-auth.md` - [NEW] Implementation prompt document.
- `package.json` - [MODIFY] Add `@clerk/nextjs` dependency (installed via `clerk init` or `npm install @clerk/nextjs`).
- `.env.local` - [NEW/MODIFY] Materialized with `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY` via `clerk init` / `clerk env pull`.
- `proxy.ts` - [NEW] Next.js 16 Clerk proxy/middleware with the required auto-proxy path matcher.
- `app/layout.tsx` - [MODIFY] Add `<ClerkProvider>` inside `<body>`.
- `components/ui/auth-controls.tsx` - [NEW] Client auth controls component showing Sign In / Sign Up when signed out, and UserButton when signed in.
- `app/page.tsx` - [MODIFY] Replace static avatar with `AuthControls` in the navigation header.

---

## 6. Requirements
- Link to Clerk app `app_3JQxCdjfWTYrWIT3bSqqdasOtof`.
- Install `@clerk/nextjs` (Core 3 compatible with React 19 and Next.js 16).
- `proxy.ts` must include `'/(api|trpc)(.*)'` followed by `'/__clerk/:path*'` in `config.matcher`.
- `<ClerkProvider>` must sit inside `<body>`, not wrapping `<html>`.
- Navigation bar must display Sign In and Sign Up actions when signed out, and `UserButton` when signed in.
- `clerk doctor` must run cleanly.
- `npm run lint` and `npm run build` must succeed without errors.

---

## 7. Security Considerations
- Keep `CLERK_SECRET_KEY` strictly server-side; never expose it to client components or push it to source control.
- Ensure `.env.local` is listed in `.gitignore` (verified: `.gitignore` includes `.env*.local`).
- Do not log or print sensitive secret keys in shell outputs or artifacts.
- Browsing remains public; only future authenticated mutations and private user state will require authentication.

---

## 8. Acceptance Criteria
- [ ] Clerk CLI installed/updated and authenticated with application `app_3JQxCdjfWTYrWIT3bSqqdasOtof`.
- [ ] `@clerk/nextjs` installed in `package.json`.
- [ ] `.env.local` contains `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY`.
- [ ] `proxy.ts` configured with `clerkMiddleware` and the verified matcher including `'/__clerk/:path*'`.
- [ ] `app/layout.tsx` wraps child elements inside `<body>` with `<ClerkProvider>`.
- [ ] When signed out, the navbar displays styled "Sign In" and "Sign Up" buttons alongside the bell icon.
- [ ] When signed in, the navbar displays the Clerk `<UserButton>` profile avatar with user management menu.
- [ ] Clicking "Sign In" or "Sign Up" opens the Clerk authentication modal.
- [ ] `clerk doctor` reports passing status for integration.
- [ ] `npm run lint` passes with 0 errors.
- [ ] `npm run build` passes with 0 errors.

---

## 9. Checks to Run
- `clerk doctor`
- `npm run lint`
- `npm run build`

---

## 10. Manual Test Steps
1. Start the Next.js application with `npm run dev`.
2. Open `http://localhost:3000/` in the browser.
3. Observe the top right navigation: verify "Sign In" button and "Sign Up" button are visible.
4. Click "Sign Up": confirm the Clerk modal appears and permits creating a test account or signing in via OAuth/email.
5. Complete sign-up / sign-in: verify the modal closes and the navbar now displays the `UserButton` profile avatar.
6. Click the `UserButton`: confirm the account management dropdown appears with profile options and "Sign out".
7. Click "Sign out": confirm the UI seamlessly updates back to "Sign In" and "Sign Up" buttons.
