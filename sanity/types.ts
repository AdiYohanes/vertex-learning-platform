import type { PortableTextBlock } from '@portabletext/react'

export interface SanitySlug {
  _type: 'slug'
  current: string
}

export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  alt?: string
  hotspot?: {
    x: number
    y: number
    height: number
    width: number
  }
}

export interface Category {
  _id: string
  _type: 'category'
  title: string
  slug: SanitySlug
  description?: string
  courseCount?: number
}

export interface Instructor {
  _id: string
  _type: 'instructor'
  name: string
  slug: SanitySlug
  photo?: SanityImage
  expertise?: string
  bio?: string
}

export interface LearningOutcome {
  _key?: string
  icon: string
  title: string
  description: string
}

export type LessonResourceType = 'documentation' | 'guide' | 'repository' | 'link' | 'file'

export interface LessonResource {
  _key?: string
  type: LessonResourceType
  title: string
  description?: string
  url: string
}

export interface LessonSummary {
  _id: string
  title: string
  slug: SanitySlug
  duration: string
  freePreview?: boolean
  studentCount?: number
}

export interface Lesson {
  _id: string
  _type: 'lesson'
  title: string
  slug: SanitySlug
  summary?: string
  videoUrl: string
  thumbnail?: SanityImage
  duration: string
  freePreview?: boolean
  studentCount?: number
  notes?: PortableTextBlock[]
  keyPoints?: string[]
  proTip?: string
  resources?: LessonResource[]
  course?: {
    _id: string
    title: string
    slug: SanitySlug
    level?: string
    coverImage?: SanityImage
    modules: {
      title: string
      summary?: string
      lessons: LessonSummary[]
    }[]
  }
}

export interface Module {
  _key?: string
  title: string
  summary?: string
  lessons: LessonSummary[]
}

export interface CourseSummary {
  _id: string
  _type: 'course'
  title: string
  slug: SanitySlug
  summary: string
  coverImage: SanityImage
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels'
  price: number
  duration: string
  popular?: boolean
  studentCount?: number
  instructor?: Instructor
  category?: Category
  modulesCount?: number
  lessonsCount?: number
}

export interface CourseDetail extends Omit<CourseSummary, 'modulesCount' | 'lessonsCount'> {
  learningOutcomes?: LearningOutcome[]
  modules: Module[]
}
