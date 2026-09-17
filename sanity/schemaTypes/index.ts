import { type SchemaTypeDefinition } from 'sanity'

import { categoryType } from './category'
import { instructorType } from './instructor'
import { lessonResourceType } from './lessonResource'
import { blockContentType } from './blockContent'
import { lessonType } from './lesson'
import { learningOutcomeType } from './learningOutcome'
import { moduleType } from './module'
import { courseType } from './course'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Documents
    courseType,
    lessonType,
    instructorType,
    categoryType,

    // Embedded Objects & Shared Types
    moduleType,
    learningOutcomeType,
    lessonResourceType,
    blockContentType,
  ],
}
