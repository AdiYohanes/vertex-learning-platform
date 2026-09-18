import type { StructureResolver } from 'sanity/structure'
import { BookIcon, PlayIcon, UserIcon, TagIcon } from '@sanity/icons'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Vertex Content')
    .items([
      S.listItem()
        .title('Courses')
        .icon(BookIcon)
        .child(S.documentTypeList('course').title('All Courses')),
      S.listItem()
        .title('Lessons')
        .icon(PlayIcon)
        .child(S.documentTypeList('lesson').title('All Lessons')),
      S.divider(),
      S.listItem()
        .title('Instructors')
        .icon(UserIcon)
        .child(S.documentTypeList('instructor').title('All Instructors')),
      S.listItem()
        .title('Categories')
        .icon(TagIcon)
        .child(S.documentTypeList('category').title('All Categories')),
    ])
