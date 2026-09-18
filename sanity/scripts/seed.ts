import { createClient } from 'next-sanity'

/**
 * Seed script for Vertex Sanity dataset
 * Matches design mockups in design/ (vertex-home.png, vertex-course.png, vertex-lesson.png)
 *
 * Usage:
 * SANITY_API_WRITE_TOKEN=your_write_token npx tsx sanity/scripts/seed.ts
 */

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'rpyagy6h'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const token = process.env.SANITY_API_WRITE_TOKEN || process.env.SANITY_API_READ_TOKEN

if (!token) {
  console.warn(
    'Warning: No SANITY_API_WRITE_TOKEN provided. Seed script requires write permissions to create documents in Sanity.'
  )
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2026-09-17',
  useCdn: false,
  token,
})

async function seed() {
  console.log('🌱 Seeding Vertex Sanity dataset...')

  // 1. Categories
  const webDevCategory = await client.createOrReplace({
    _id: 'category-web-development',
    _type: 'category',
    title: 'Web Development',
    slug: { _type: 'slug', current: 'web-development' },
    description: 'Modern full-stack web development frameworks, architecture, and patterns.',
  })

  const devopsCategory = await client.createOrReplace({
    _id: 'category-devops',
    _type: 'category',
    title: 'DevOps & Cloud',
    slug: { _type: 'slug', current: 'devops-cloud' },
    description: 'Containerization, infrastructure as code, CI/CD, and cloud scaling.',
  })

  const langCategory = await client.createOrReplace({
    _id: 'category-programming-languages',
    _type: 'category',
    title: 'Programming Languages',
    slug: { _type: 'slug', current: 'programming-languages' },
    description: 'Master typed languages and modern paradigms.',
  })

  console.log('✓ Categories created')

  // 2. Instructors
  const sarahChen = await client.createOrReplace({
    _id: 'instructor-sarah-chen',
    _type: 'instructor',
    name: 'Sarah Chen',
    slug: { _type: 'slug', current: 'sarah-chen' },
    expertise: ['Frontend Architecture', 'Next.js', 'React Performance'],
    bio: 'Sarah is a staff software engineer with over 10 years of experience building large-scale React and Next.js applications.',
  })

  const alexRivera = await client.createOrReplace({
    _id: 'instructor-alex-rivera',
    _type: 'instructor',
    name: 'Alex Rivera',
    slug: { _type: 'slug', current: 'alex-rivera' },
    expertise: ['Cloud Architecture', 'Kubernetes', 'Docker', 'DevOps'],
    bio: 'Alex specializes in Linux containers, Kubernetes cluster management, and cloud-native architecture.',
  })

  console.log('✓ Instructors created')

  // 3. Lessons for "Next.js for Production"
  const lesson1 = await client.createOrReplace({
    _id: 'lesson-intro-nextjs',
    _type: 'lesson',
    title: 'Introduction to Next.js',
    slug: { _type: 'slug', current: 'introduction-to-next-js' },
    summary: "Understand the core features of Next.js and why it's the leading React framework.",
    videoUrl: 'https://www.youtube.com/watch?v=wm5gMKuwSYk',
    duration: '45m',
    freePreview: true,
    studentCount: 3426,
    keyPoints: [
      'Core philosophy of Next.js App Router',
      'Hybrid rendering: SSR, SSG, and Client Components',
      'Production requirements and project layout',
    ],
  })

  const lesson2 = await client.createOrReplace({
    _id: 'lesson-project-setup',
    _type: 'lesson',
    title: 'Project Setup & Structure',
    slug: { _type: 'slug', current: 'project-setup-structure' },
    summary: 'Set up a new Next.js project and explore the recommended folder structure.',
    videoUrl: 'https://www.youtube.com/watch?v=wm5gMKuwSYk',
    duration: '1h 12m',
    freePreview: false,
    studentCount: 3200,
    keyPoints: [
      'Standard monorepo vs standalone folder structure',
      'TypeScript configuration and path aliases',
      'Tailwind CSS v4 setup and PostCSS integration',
    ],
  })

  const lesson3 = await client.createOrReplace({
    _id: 'lesson-routing-layouts',
    _type: 'lesson',
    title: 'Routing & Layouts',
    slug: { _type: 'slug', current: 'routing-layouts' },
    summary: 'Learn about file-based routing, nested layouts, and route groups.',
    videoUrl: 'https://www.youtube.com/watch?v=wm5gMKuwSYk',
    duration: '1h 36m',
    freePreview: false,
    studentCount: 3150,
    keyPoints: [
      'File-based routing with app directory',
      'Nested layouts, templates, and error boundaries',
      'Parallel and intercepted routes',
    ],
  })

  const lesson4 = await client.createOrReplace({
    _id: 'lesson-server-components',
    _type: 'lesson',
    title: 'Server Components',
    slug: { _type: 'slug', current: 'server-components' },
    summary: 'Build components with server-side rendering and direct data fetching.',
    videoUrl: 'https://www.youtube.com/watch?v=wm5gMKuwSYk',
    duration: '1h 42m',
    freePreview: false,
    studentCount: 3080,
    keyPoints: [
      'Server vs Client Component mental models',
      'Minimizing client bundle sizes with React Server Components',
      'Component composition and data serialization rules',
    ],
  })

  const lesson5 = await client.createOrReplace({
    _id: 'lesson-data-fetching-caching',
    _type: 'lesson',
    title: 'Data Fetching & Caching',
    slug: { _type: 'slug', current: 'data-fetching-caching' },
    summary:
      'Learn how Next.js handles data fetching and caching in both Server and Client Components.',
    videoUrl: 'https://www.youtube.com/watch?v=wm5gMKuwSYk',
    duration: '1h 28m',
    freePreview: false,
    studentCount: 3426,
    keyPoints: [
      'Understand the different data fetching methods in Next.js',
      'Learn how caching works in Server Components',
      'Implement revalidation and cache control',
      'Optimize performance with advanced caching strategies',
    ],
    proTip:
      'Use caching and revalidation wisely to ensure your app stays fast and data remains fresh without unnecessary requests.',
    resources: [
      {
        _key: 'res1',
        type: 'documentation',
        title: 'Next.js Data Fetching Documentation',
        description: 'Official Next.js docs on data fetching methods.',
        url: 'https://nextjs.org/docs/app/building-your-application/data-fetching',
      },
      {
        _key: 'res2',
        type: 'guide',
        title: 'Caching and Revalidation Guide',
        description: 'Deep dive into Next.js caching strategies.',
        url: 'https://nextjs.org/docs/app/building-your-application/caching',
      },
      {
        _key: 'res3',
        type: 'repository',
        title: 'Example Repository',
        description: 'Explore the source code for this lesson.',
        url: 'https://github.com/vercel/next.js',
      },
    ],
    notes: [
      {
        _key: 'note1',
        _type: 'block',
        style: 'normal',
        children: [
          {
            _key: 'span1',
            _type: 'span',
            text: 'In this lesson, you will learn how Next.js handles data fetching and caching in both Server and Client Components. We will explore different caching strategies and revalidation techniques to build fast and scalable applications.',
          },
        ],
      },
    ],
  })

  const lesson6 = await client.createOrReplace({
    _id: 'lesson-authentication',
    _type: 'lesson',
    title: 'Authentication',
    slug: { _type: 'slug', current: 'authentication' },
    summary: 'Implement authentication using Clerk and Next.js proxy.',
    videoUrl: 'https://www.youtube.com/watch?v=wm5gMKuwSYk',
    duration: '1h 18m',
    freePreview: false,
    studentCount: 2950,
    keyPoints: [
      'Setting up Clerk authentication in Next.js App Router',
      'Protecting routes with Next.js 16 proxy convention',
      'Handling server actions and protected API endpoints',
    ],
  })

  console.log('✓ Lessons created')

  // 4. Course: "Next.js for Production"
  await client.createOrReplace({
    _id: 'course-nextjs-for-production',
    _type: 'course',
    title: 'Next.js for Production',
    slug: { _type: 'slug', current: 'next-js-for-production' },
    summary:
      'Build scalable, high-performance web applications with Next.js, best practices, and production-ready deployment strategies.',
    level: 'Intermediate',
    price: 79,
    duration: '18h 24m',
    popular: true,
    studentCount: 2100,
    instructor: {
      _type: 'reference',
      _ref: sarahChen._id,
    },
    category: {
      _type: 'reference',
      _ref: webDevCategory._id,
    },
    learningOutcomes: [
      {
        _key: 'lo1',
        icon: 'layers',
        title: 'App Router Foundations',
        description: 'Master the App Router, layouts, loading states, and nested routing.',
      },
      {
        _key: 'lo2',
        icon: 'database',
        title: 'Data Fetching & Caching',
        description: 'Fetch data efficiently and leverage caching for better performance.',
      },
      {
        _key: 'lo3',
        icon: 'gauge',
        title: 'Performance Optimization',
        description: 'Optimize rendering, assets, and bundle size for faster apps.',
      },
      {
        _key: 'lo4',
        icon: 'cloud',
        title: 'Deployment & Scaling',
        description: 'Deploy with confidence and scale your Next.js applications.',
      },
    ],
    modules: [
      {
        _key: 'mod1',
        title: 'Introduction to Next.js',
        summary: "Understand the core features of Next.js and why it's the React framework.",
        lessons: [{ _type: 'reference', _ref: lesson1._id }],
      },
      {
        _key: 'mod2',
        title: 'Project Setup & Structure',
        summary: 'Set up a new Next.js project and explore the folder structure.',
        lessons: [{ _type: 'reference', _ref: lesson2._id }],
      },
      {
        _key: 'mod3',
        title: 'Routing & Layouts',
        summary: 'Learn about file-based routing, layouts, and nested routes.',
        lessons: [{ _type: 'reference', _ref: lesson3._id }],
      },
      {
        _key: 'mod4',
        title: 'Server Components',
        summary: 'Build components with server-side rendering and data fetching.',
        lessons: [{ _type: 'reference', _ref: lesson4._id }],
      },
      {
        _key: 'mod5',
        title: 'Data Fetching & Caching',
        summary: 'Fetch data efficiently and leverage caching for better performance.',
        lessons: [{ _type: 'reference', _ref: lesson5._id }],
      },
      {
        _key: 'mod6',
        title: 'Authentication',
        summary: 'Implement authentication using Next.js and modern auth providers.',
        lessons: [{ _type: 'reference', _ref: lesson6._id }],
      },
    ],
  })

  // 5. Additional sample courses
  await client.createOrReplace({
    _id: 'course-docker-essentials',
    _type: 'course',
    title: 'Docker Essentials',
    slug: { _type: 'slug', current: 'docker-essentials' },
    summary: 'Containerize applications and streamline your development workflow.',
    level: 'Beginner',
    price: 49,
    duration: '10h 12m',
    popular: false,
    studentCount: 1450,
    instructor: {
      _type: 'reference',
      _ref: alexRivera._id,
    },
    category: {
      _type: 'reference',
      _ref: devopsCategory._id,
    },
    learningOutcomes: [
      {
        _key: 'lo_d1',
        icon: 'layers',
        title: 'Docker Architecture',
        description: 'Understand images, containers, volumes, and networks.',
      },
      {
        _key: 'lo_d2',
        icon: 'terminal',
        title: 'Dockerfile Mastery',
        description: 'Write efficient, multi-stage Dockerfiles for development and production.',
      },
    ],
    modules: [
      {
        _key: 'mod_d1',
        title: 'Container Fundamentals',
        summary: 'Introduction to containerization concepts.',
        lessons: [{ _type: 'reference', _ref: lesson1._id }],
      },
    ],
  })

  await client.createOrReplace({
    _id: 'course-typescript-deep-dive',
    _type: 'course',
    title: 'TypeScript Deep Dive',
    slug: { _type: 'slug', current: 'typescript-deep-dive' },
    summary: 'Go beyond the basics and write safer, more expressive code.',
    level: 'Intermediate',
    price: 59,
    duration: '14h 36m',
    popular: false,
    studentCount: 1820,
    instructor: {
      _type: 'reference',
      _ref: sarahChen._id,
    },
    category: {
      _type: 'reference',
      _ref: langCategory._id,
    },
    learningOutcomes: [
      {
        _key: 'lo_ts1',
        icon: 'code',
        title: 'Advanced Type System',
        description: 'Generics, conditional types, mapped types, and template literals.',
      },
    ],
    modules: [
      {
        _key: 'mod_ts1',
        title: 'Type System Fundamentals',
        summary: 'Core type mechanics and sound typing.',
        lessons: [{ _type: 'reference', _ref: lesson1._id }],
      },
    ],
  })

  console.log('✓ Courses created')
  console.log('🎉 Seeding completed successfully!')
}

seed().catch((err) => {
  console.error('Seeding failed:', err)
  process.exit(1)
})
