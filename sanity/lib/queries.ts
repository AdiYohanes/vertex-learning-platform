import { groq } from 'next-sanity'

/**
 * Common projection for instructor reference
 */
export const INSTRUCTOR_FIELDS = groq`
  _id,
  _type,
  name,
  slug,
  photo,
  expertise,
  bio
`

/**
 * Common projection for category reference
 */
export const CATEGORY_FIELDS = groq`
  _id,
  _type,
  title,
  slug,
  description
`

/**
 * Query all courses for catalog display with instructor, category, and counts
 */
export const COURSES_QUERY = groq`
  *[_type == "course"] | order(_createdAt desc) {
    _id,
    _type,
    title,
    slug,
    summary,
    coverImage,
    level,
    price,
    duration,
    popular,
    studentCount,
    instructor->{ ${INSTRUCTOR_FIELDS} },
    category->{ ${CATEGORY_FIELDS} },
    "modulesCount": count(modules),
    "lessonsCount": count(modules[].lessons[])
  }
`

/**
 * Query popular courses for homepage discovery
 */
export const POPULAR_COURSES_QUERY = groq`
  *[_type == "course" && popular == true] | order(_createdAt desc) {
    _id,
    _type,
    title,
    slug,
    summary,
    coverImage,
    level,
    price,
    duration,
    popular,
    studentCount,
    instructor->{ ${INSTRUCTOR_FIELDS} },
    category->{ ${CATEGORY_FIELDS} },
    "modulesCount": count(modules),
    "lessonsCount": count(modules[].lessons[])
  }
`

/**
 * Query a single course by slug with full syllabus (modules & referenced lessons)
 */
export const COURSE_BY_SLUG_QUERY = groq`
  *[_type == "course" && slug.current == $slug][0] {
    _id,
    _type,
    title,
    slug,
    summary,
    coverImage,
    level,
    price,
    duration,
    popular,
    studentCount,
    instructor->{ ${INSTRUCTOR_FIELDS} },
    category->{ ${CATEGORY_FIELDS} },
    learningOutcomes[]{
      _key,
      icon,
      title,
      description
    },
    modules[]{
      _key,
      title,
      summary,
      lessons[]->{
        _id,
        title,
        slug,
        duration,
        freePreview,
        studentCount
      }
    }
  }
`

/**
 * Query a lesson by slug, resolving parent course and syllabus via reverse reference
 */
export const LESSON_BY_SLUG_QUERY = groq`
  *[_type == "lesson" && slug.current == $slug][0] {
    _id,
    _type,
    title,
    slug,
    summary,
    videoUrl,
    thumbnail,
    duration,
    freePreview,
    studentCount,
    notes,
    keyPoints,
    proTip,
    resources[]{
      _key,
      type,
      title,
      description,
      url
    },
    "course": *[_type == "course" && references(^._id)][0] {
      _id,
      title,
      slug,
      level,
      coverImage,
      modules[]{
        _key,
        title,
        summary,
        lessons[]->{
          _id,
          title,
          slug,
          duration,
          freePreview,
          studentCount
        }
      }
    }
  }
`

/**
 * Query a lesson specifically scoped within a parent course slug
 */
export const LESSON_BY_COURSE_AND_LESSON_SLUG_QUERY = groq`
  *[_type == "lesson" && slug.current == $lessonSlug][0] {
    _id,
    _type,
    title,
    slug,
    summary,
    videoUrl,
    thumbnail,
    duration,
    freePreview,
    studentCount,
    notes,
    keyPoints,
    proTip,
    resources[]{
      _key,
      type,
      title,
      description,
      url
    },
    "course": *[_type == "course" && slug.current == $courseSlug][0] {
      _id,
      title,
      slug,
      level,
      coverImage,
      modules[]{
        _key,
        title,
        summary,
        lessons[]->{
          _id,
          title,
          slug,
          duration,
          freePreview,
          studentCount
        }
      }
    }
  }
`

/**
 * Query all categories with course counts
 */
export const CATEGORIES_QUERY = groq`
  *[_type == "category"] | order(title asc) {
    _id,
    _type,
    title,
    slug,
    description,
    "courseCount": count(*[_type == "course" && references(^._id)])
  }
`

/**
 * Query all instructors
 */
export const INSTRUCTORS_QUERY = groq`
  *[_type == "instructor"] | order(name asc) {
    ${INSTRUCTOR_FIELDS}
  }
`

/**
 * Query a single instructor by slug with authored courses
 */
export const INSTRUCTOR_BY_SLUG_QUERY = groq`
  *[_type == "instructor" && slug.current == $slug][0] {
    ${INSTRUCTOR_FIELDS},
    "courses": *[_type == "course" && references(^._id)] | order(_createdAt desc) {
      _id,
      _type,
      title,
      slug,
      summary,
      coverImage,
      level,
      price,
      duration,
      popular,
      studentCount,
      "modulesCount": count(modules),
      "lessonsCount": count(modules[].lessons[])
    }
  }
`
