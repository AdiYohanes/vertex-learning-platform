import { defineField, defineType } from 'sanity'
import { UserIcon } from '@sanity/icons'

export const instructorType = defineType({
  name: 'instructor',
  title: 'Instructor',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required().error('Instructor name is required'),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (rule) => rule.required().error('Slug is required'),
    }),
    defineField({
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
          description: 'Important for accessibility and SEO',
        }),
      ],
    }),
    defineField({
      name: 'expertise',
      title: 'Expertise / Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
      description: 'Key areas of expertise (e.g., Docker, Kubernetes, CI/CD, Next.js)',
    }),
    defineField({
      name: 'bio',
      title: 'Biography',
      type: 'blockContent',
      description: 'Brief biography of the instructor in Portable Text',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      expertise: 'expertise',
      media: 'photo',
    },
    prepare({ title, expertise, media }) {
      const subtitle = Array.isArray(expertise)
        ? expertise.join(', ')
        : typeof expertise === 'string'
          ? expertise
          : undefined

      return {
        title: title || 'Untitled Instructor',
        subtitle,
        media,
      }
    },
  },
})
