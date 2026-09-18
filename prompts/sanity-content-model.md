# Implementation Prompt: Sanity Content Model, Studio & Server Read Data Layer

## 1. Goal
Implement the core Sanity content model (Course, Module, Lesson, Instructor, Category, and supporting object types), configure Sanity Studio with custom structure and icons, and create a secure server-side read client and typed data access layer (queries, types, and fetch helpers) for the Vertex learning platform.

---

## 2. Skills Read
- `AGENTS.md`: Sections 1, 2, 4, 5, 6, 7, 8, 12, 13 (data model shapes, relationships, server-only client rules, token security, Studio boundaries, check requirements).
- `GEMINI.md`: Strict user confirmation rule prior to any code implementation.
- `sanity-best-practices` (`.agents/skills/sanity-best-practices/SKILL.md`): Schema definition rules (`defineType`, `defineField`, `defineArrayMember`), desk structure, references vs embedded objects, GROQ optimization, Next.js server data fetching patterns.
- `content-modeling-best-practices`: Content architecture, clean separation of concerns, derived numbers rather than hardcoded sequence values.

---

## 3. Code Inspected
- `sanity.config.ts`: Configured at basePath `/studio`, imports schema from `./sanity/schemaTypes` and structure from `./sanity/structure`.
- `sanity.cli.ts`: Configured with `projectId` and `dataset`.
- `sanity/schemaTypes/index.ts`: Currently empty (`types: []`).
- `sanity/env.ts`: Contains `apiVersion`, `dataset`, `projectId`. Currently missing server-side `readToken` export.
- `sanity/lib/client.ts`: Uses `next-sanity` `createClient` without token.
- `package.json`: Contains `sanity: ^5.31.2`, `next-sanity: ^13.3.4`, `@sanity/image-url: ^2.1.1`, Next.js 16.3.5, React 19.2.8.
- `.env.local`: Contains `NEXT_PUBLIC_SANITY_DATASET="production"` and `NEXT_PUBLIC_SANITY_PROJECT_ID="rpyagy6h"`.
- `design/vertex-course.png` & `design/vertex-lesson.png`: Verified visual data fields (level, duration, student counts, learning outcomes with icons, modules list, lesson overview, key points, pro tip, resources, instructor info).

---

## 4. Decisions and Assumptions
1. **Content Model Architecture (Strictly Aligned with AGENTS.md Section 8)**:
   - **`category`** (document): `title`, `slug`, `description`.
   - **`instructor`** (document): `name`, `slug`, `photo`, `expertise`, `bio`.
   - **`lesson`** (document): `title`, `slug`, `videoUrl`, `thumbnail` (poster/thumbnail image), `duration` (display duration string, e.g. "45m", "1h 28m"), `freePreview` (boolean flag), `studentCount` (number for display), `notes` (Portable Text rich text), `keyPoints` (array of string takeaways), `proTip` (optional text), `resources` (array of `lessonResource` objects).
   - **`module`** (embedded object inside course, NOT a separate document): `title`, `summary`, `lessons` (ordered array of references to `lesson`). Derived numbering in UI (Module 1, Lesson 1.1).
   - **`course`** (document): `title`, `slug`, `summary`, `coverImage`, `level` ('Beginner' | 'Intermediate' | 'Advanced' | 'All Levels'), `price` (number in USD), `duration` (display string), `popular` (boolean flag), `studentCount` (number for display), `instructor` (reference to `instructor`), `category` (reference to `category`), `learningOutcomes` (ordered array of `learningOutcome` objects), `modules` (ordered array of embedded `module` objects).
   - **Supporting Types**:
     - `learningOutcome` (object): `icon` (string: layers, database, gauge, cloud, code), `title`, `description`.
     - `lessonResource` (object): `type` ('documentation' | 'guide' | 'repository' | 'link'), `title`, `description`, `url`.
     - `blockContent` (object): Standard Portable Text schema with text styles, lists, quotes, and links.
2. **Sanity Studio Organization**:
   - Update `sanity/structure.ts` using `@sanity/icons` to display a grouped structure: Courses (`BookIcon`), Lessons (`PlayIcon`), Instructors (`UserIcon`), Categories (`TagIcon`), and filtered document lists.
3. **Server-Side Read Client & Security**:
   - Create `sanity/lib/server-client.ts` guarded with `import 'server-only'` to guarantee the client and `SANITY_API_READ_TOKEN` are never bundled into client components.
   - Configure server client with `token: process.env.SANITY_API_READ_TOKEN` (reading private dataset securely) and `useCdn: false` for fresh server-side data fetching.
   - Update `sanity/env.ts` to export `readToken = process.env.SANITY_API_READ_TOKEN`.
   - Update `.env.example` to document `SANITY_API_READ_TOKEN`.
4. **Data Access Layer**:
   - `sanity/types.ts`: Strong TypeScript definitions for all Sanity documents, objects, and query projection results.
   - `sanity/lib/queries.ts`: Optimized GROQ queries with explicit projections:
     - `COURSES_QUERY`: All courses with instructor, category, module count, lesson count, duration.
     - `POPULAR_COURSES_QUERY`: Popular courses for home page discovery.
     - `COURSE_BY_SLUG_QUERY`: Full course detail with instructor, category, learning outcomes, and dereferenced modules with lesson summaries.
     - `LESSON_BY_SLUG_QUERY`: Lesson detail by slug, including reverse lookup to its parent course and module.
     - `CATEGORIES_QUERY`: All categories.
     - `INSTRUCTORS_QUERY` & `INSTRUCTOR_BY_SLUG_QUERY`: Instructors and their authored courses.
   - `sanity/lib/data.ts`: High-level data retrieval functions (`getCourses`, `getPopularCourses`, `getCourseBySlug`, `getLessonBySlug`, `getCategories`, `getInstructors`, `getInstructorBySlug`).
5. **Seed Utility**:
   - Provide a seed script (`sanity/scripts/seed.ts`) that authors can run (`npm run sanity:seed` or `npx tsx sanity/scripts/seed.ts`) to populate sample courses ("Next.js for Production", "Docker Essentials", "TypeScript Deep Dive"), modules, lessons, instructor, and categories matching the visual design mockups.

---

## 5. Files to Touch
- `prompts/sanity-content-model.md` - [NEW] Implementation prompt document.
- `package.json` - [MODIFY] Add `@portabletext/react` and `server-only` dependencies, plus seed script.
- `.env.example` - [MODIFY] Add `SANITY_API_READ_TOKEN` placeholder.
- `sanity/env.ts` - [MODIFY] Export `readToken` from server environment.
- `sanity/schemaTypes/category.ts` - [NEW] Category document schema.
- `sanity/schemaTypes/instructor.ts` - [NEW] Instructor document schema.
- `sanity/schemaTypes/lesson.ts` - [NEW] Lesson document schema.
- `sanity/schemaTypes/course.ts` - [NEW] Course document schema.
- `sanity/schemaTypes/module.ts` - [NEW] Module object schema (embedded in course).
- `sanity/schemaTypes/learningOutcome.ts` - [NEW] Learning outcome object schema.
- `sanity/schemaTypes/lessonResource.ts` - [NEW] Lesson resource object schema.
- `sanity/schemaTypes/blockContent.ts` - [NEW] Portable Text block content schema.
- `sanity/schemaTypes/index.ts` - [MODIFY] Register all schema types.
- `sanity/structure.ts` - [MODIFY] Customized Studio Desk structure with icons and grouping.
- `sanity/types.ts` - [NEW] TypeScript type definitions for content model and query outputs.
- `sanity/lib/server-client.ts` - [NEW] Server-only Sanity client utilizing read token.
- `sanity/lib/queries.ts` - [NEW] GROQ queries for courses, modules, lessons, instructors, categories.
- `sanity/lib/data.ts` - [NEW] Server data access functions.
- `sanity/scripts/seed.ts` - [NEW] Optional idempotent seed script for initial content.

---

## 6. Requirements
- All schema types strictly respect AGENTS.md Section 8 field names and relationships.
- Modules must be embedded objects inside courses, not standalone documents.
- Lessons must not store parent course references; parent course is derived via reverse lookup.
- Read token must be server-only, never exposed to client-side code or browser bundles.
- TypeScript types must accurately reflect all schema fields and GROQ projection results.
- `npm run lint` and `npm run build` must succeed without errors.
- Sanity Studio at `/studio` must load without schema or configuration errors.

---

## 7. Security Considerations
- Keep `SANITY_API_READ_TOKEN` strictly server-side using `server-only`. Never prefix with `NEXT_PUBLIC_`.
- All data access functions are executed on the server in Server Components or API routes.
- Ensure `.env.local` remains git-ignored.
- Studio access at `/studio` mounts the visual editor without exposing write privileges to public visitors without authorization.

---

## 8. Acceptance Criteria
- [ ] Schema types for Course, Module, Lesson, Instructor, Category, LearningOutcome, LessonResource, and BlockContent implemented using `defineType`, `defineField`, `defineArrayMember`.
- [ ] Schema types registered in `sanity/schemaTypes/index.ts`.
- [ ] Studio structure customized in `sanity/structure.ts` with icons from `@sanity/icons`.
- [ ] Server-only client implemented in `sanity/lib/server-client.ts` with `server-only` guard.
- [ ] GROQ queries implemented in `sanity/lib/queries.ts` with correct field projections.
- [ ] Data access functions in `sanity/lib/data.ts` returning typed results.
- [ ] `sanity/types.ts` provides complete TypeScript definitions.
- [ ] `package.json` updated with `@portabletext/react` and `server-only`.
- [ ] `.env.example` documents `SANITY_API_READ_TOKEN`.
- [ ] `npm run lint` passes with 0 errors.
- [ ] `npm run build` passes with 0 errors.
- [ ] Visiting `/studio` loads the Sanity Studio dashboard with Course, Lesson, Instructor, and Category document types visible.

---

## 9. Checks to Run
- `npm run lint`
- `npm run build`
- Type checking / Next.js compilation validation

---

## 10. Manual Test Steps
1. Navigate to `http://localhost:3000/studio` in browser. Verify Studio loads with navigation items: Courses, Lessons, Instructors, Categories.
2. Click into each document type in the Studio and test creating a draft to verify field rendering (rich text notes, tags, module arrays, lesson references).
3. Test the server data access functions in a server component or test runner to confirm clean GROQ execution and type-safe data returns.
