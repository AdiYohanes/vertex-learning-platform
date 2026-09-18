import { defineArrayMember, defineField, defineType } from 'sanity'
import { PlayIcon } from '@sanity/icons'

export const lessonType = defineType({
  name: 'lesson',
  title: 'Lesson',
  type: 'document',
  icon: PlayIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required().error('Lesson title is required'),
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
      rows: 2,
      description: 'Short overview displayed under the lesson heading in search and lesson views',
    }),
    defineField({
      name: 'videoUrl',
      title: 'Video URL',
      type: 'url',
      description: 'Supported provider embed URL (YouTube, Vimeo, or Bunny)',
      validation: (rule) =>
        rule.required().uri({ scheme: ['http', 'https'] }).error('Video URL is required'),
    }),
    defineField({
      name: 'thumbnail',
      title: 'Poster / Thumbnail Image',
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
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'string',
      description: 'Formatted duration for display (e.g., "21m", "45m", "1h 28m")',
      validation: (rule) => rule.required().error('Lesson duration is required'),
    }),
    defineField({
      name: 'freePreview',
      title: 'Free Preview',
      type: 'boolean',
      description: 'Whether this lesson can be previewed without enrollment',
      initialValue: false,
    }),
    defineField({
      name: 'studentCount',
      title: 'Student Count',
      type: 'number',
      description: 'Display count for marketing/social proof (e.g., 3426)',
      initialValue: 0,
    }),
    defineField({
      name: 'keyPoints',
      title: 'In this lesson you will (Key Points)',
      type: 'array',
      description: 'Short list of key takeaway points',
      of: [defineArrayMember({ type: 'string' })],
    }),
    defineField({
      name: 'proTip',
      title: 'Pro Tip',
      type: 'text',
      rows: 3,
      description: 'Optional expert tip or callout for this lesson',
    }),
    defineField({
      name: 'notes',
      title: 'Notes & Content',
      type: 'blockContent',
      description: 'Rich text notes and lesson content in Portable Text',
    }),
    defineField({
      name: 'resources',
      title: 'Resources',
      type: 'array',
      description: 'External documentation, code repositories, or reference links',
      of: [defineArrayMember({ type: 'lessonResource' })],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'duration',
      media: 'thumbnail',
    },
  },
})
