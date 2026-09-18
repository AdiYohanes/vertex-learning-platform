import 'server-only'
import { serverClient } from './server-client'
import {
  COURSES_QUERY,
  POPULAR_COURSES_QUERY,
  COURSE_BY_SLUG_QUERY,
  LESSON_BY_SLUG_QUERY,
  LESSON_BY_COURSE_AND_LESSON_SLUG_QUERY,
  CATEGORIES_QUERY,
  INSTRUCTORS_QUERY,
  INSTRUCTOR_BY_SLUG_QUERY,
} from './queries'
import type {
  Category,
  CourseDetail,
  CourseSummary,
  Instructor,
  Lesson,
} from '../types'

/**
 * Fetch all courses for the catalog
 */
export async function getCourses(): Promise<CourseSummary[]> {
  try {
    return await serverClient.fetch<CourseSummary[]>(COURSES_QUERY)
  } catch (error) {
    console.error('Error fetching courses from Sanity:', error)
    return []
  }
}

/**
 * Fetch popular / featured courses for the home discovery view
 */
export async function getPopularCourses(): Promise<CourseSummary[]> {
  try {
    const popular = await serverClient.fetch<CourseSummary[]>(POPULAR_COURSES_QUERY)
    // Fallback to latest courses if none explicitly flagged as popular
    if (!popular || popular.length === 0) {
      const all = await getCourses()
      return all.slice(0, 3)
    }
    return popular
  } catch (error) {
    console.error('Error fetching popular courses from Sanity:', error)
    return []
  }
}

/**
 * Fetch a single course by slug with syllabus and dereferenced lessons
 */
export async function getCourseBySlug(slug: string): Promise<CourseDetail | null> {
  try {
    return await serverClient.fetch<CourseDetail | null>(COURSE_BY_SLUG_QUERY, { slug })
  } catch (error) {
    console.error(`Error fetching course "${slug}" from Sanity:`, error)
    return null
  }
}

/**
 * Fetch a single lesson by slug (with reverse-referenced parent course)
 */
export async function getLessonBySlug(slug: string): Promise<Lesson | null> {
  try {
    return await serverClient.fetch<Lesson | null>(LESSON_BY_SLUG_QUERY, { slug })
  } catch (error) {
    console.error(`Error fetching lesson "${slug}" from Sanity:`, error)
    return null
  }
}

/**
 * Fetch a lesson scoped to its course slug and lesson slug
 */
export async function getLessonByCourseAndLessonSlug(
  courseSlug: string,
  lessonSlug: string
): Promise<Lesson | null> {
  try {
    return await serverClient.fetch<Lesson | null>(
      LESSON_BY_COURSE_AND_LESSON_SLUG_QUERY,
      {
        courseSlug,
        lessonSlug,
      }
    )
  } catch (error) {
    console.error(
      `Error fetching lesson "${lessonSlug}" in course "${courseSlug}" from Sanity:`,
      error
    )
    return null
  }
}

/**
 * Fetch all categories with course count
 */
export async function getCategories(): Promise<Category[]> {
  try {
    return await serverClient.fetch<Category[]>(CATEGORIES_QUERY)
  } catch (error) {
    console.error('Error fetching categories from Sanity:', error)
    return []
  }
}

/**
 * Fetch all instructors
 */
export async function getInstructors(): Promise<Instructor[]> {
  try {
    return await serverClient.fetch<Instructor[]>(INSTRUCTORS_QUERY)
  } catch (error) {
    console.error('Error fetching instructors from Sanity:', error)
    return []
  }
}

/**
 * Fetch an instructor by slug along with all courses they teach
 */
export async function getInstructorBySlug(
  slug: string
): Promise<(Instructor & { courses: CourseSummary[] }) | null> {
  try {
    return await serverClient.fetch<(Instructor & { courses: CourseSummary[] }) | null>(
      INSTRUCTOR_BY_SLUG_QUERY,
      { slug }
    )
  } catch (error) {
    console.error(`Error fetching instructor "${slug}" from Sanity:`, error)
    return null
  }
}
