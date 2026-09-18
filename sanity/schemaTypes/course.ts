import { defineArrayMember, defineField, defineType } from 'sanity'
import { BookIcon } from '@sanity/icons'

export const courseType = defineType({
  name: 'course',
  title: 'Course',
  type: 'document',
  icon: BookIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required().error('Course title is required'),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required().error('Slug is required'),
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
      rows: 3,
      description: 'Concise summary for marketing and card display',
      validation: (rule) => rule.required().error('Course summary is required'),
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image / Icon',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
        }),
      ],
      validation: (rule) => rule.required().error('Cover image is required'),
    }),
    defineField({
      name: 'level',
      title: 'Level',
      type: 'string',
      options: {
        list: [
          { title: 'Beginner', value: 'Beginner' },
          { title: 'Intermediate', value: 'Intermediate' },
          { title: 'Advanced', value: 'Advanced' },
          { title: 'All Levels', value: 'All Levels' },
        ],
        layout: 'radio',
      },
      initialValue: 'Intermediate',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Price (USD)',
      type: 'number',
      description: 'Course price in USD (0 for free)',
      initialValue: 0,
      validation: (rule) => rule.min(0).error('Price cannot be negative'),
    }),
    defineField({
      name: 'duration',
      title: 'Total Duration',
      type: 'string',
      description: 'Display duration (e.g., "18h 24m")',
    }),
    defineField({
      name: 'popular',
      title: 'Popular Course Flag',
      type: 'boolean',
      description: 'Highlight with a "POPULAR" badge on catalog and home discovery',
      initialValue: false,
    }),
    defineField({
      name: 'studentCount',
      title: 'Student Count',
      type: 'number',
      description: 'Display student count for social proof (e.g., 2100)',
      initialValue: 0,
    }),
    defineField({
      name: 'instructor',
      title: 'Instructor',
      type: 'reference',
      to: [{ type: 'instructor' }],
      validation: (rule) => rule.required().error('Instructor reference is required'),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
      validation: (rule) => rule.required().error('Category reference is required'),
    }),
    defineField({
      name: 'learningOutcomes',
      title: "What you'll learn",
      type: 'array',
      description: 'Key takeaways and skills learners will acquire',
      of: [defineArrayMember({ type: 'learningOutcome' })],
    }),
    defineField({
      name: 'modules',
      title: 'Course Modules',
      type: 'array',
      description: 'Ordered list of syllabus modules containing referenced lessons',
      of: [defineArrayMember({ type: 'module' })],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      level: 'level',
      media: 'coverImage',
      instructorName: 'instructor.name',
    },
    prepare({ title, level, media, instructorName }) {
      return {
        title: title || 'Untitled Course',
        subtitle: [level, instructorName ? `by ${instructorName}` : null]
          .filter(Boolean)
          .join(' • '),
        media,
      }
    },
  },
})
