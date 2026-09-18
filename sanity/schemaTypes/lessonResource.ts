import { defineField, defineType } from 'sanity'
import { LinkIcon } from '@sanity/icons'

export const lessonResourceType = defineType({
  name: 'lessonResource',
  title: 'Lesson Resource',
  type: 'object',
  icon: LinkIcon,
  fields: [
    defineField({
      name: 'type',
      title: 'Resource Type',
      type: 'string',
      options: {
        list: [
          { title: 'Documentation', value: 'documentation' },
          { title: 'Guide / Article', value: 'guide' },
          { title: 'Repository / Code', value: 'repository' },
          { title: 'External Link', value: 'link' },
          { title: 'Download / File', value: 'file' },
        ],
        layout: 'dropdown',
      },
      initialValue: 'documentation',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required().error('Resource title is required'),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
      description: 'Brief description of the resource',
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: (rule) =>
        rule.required().uri({ scheme: ['http', 'https'] }).error('Valid URL is required'),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'type',
    },
  },
})
