import { defineField, defineType } from 'sanity'
import { BulbOutlineIcon } from '@sanity/icons'

export const learningOutcomeType = defineType({
  name: 'learningOutcome',
  title: 'Learning Outcome',
  type: 'object',
  icon: BulbOutlineIcon,
  fields: [
    defineField({
      name: 'icon',
      title: 'Icon Name',
      type: 'string',
      description: 'Icon identifier (e.g. layers, database, gauge, cloud, code, terminal, zap)',
      options: {
        list: [
          { title: 'Layers / Architecture', value: 'layers' },
          { title: 'Database / Caching', value: 'database' },
          { title: 'Gauge / Performance', value: 'gauge' },
          { title: 'Cloud / Deployment', value: 'cloud' },
          { title: 'Code / Development', value: 'code' },
          { title: 'Terminal / CLI', value: 'terminal' },
          { title: 'Zap / Speed', value: 'zap' },
          { title: 'Shield / Security', value: 'shield' },
        ],
      },
      initialValue: 'layers',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required().error('Outcome title is required'),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
      description: 'Detailed description of this learning outcome',
      validation: (rule) => rule.required().error('Outcome description is required'),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'icon',
    },
  },
})
