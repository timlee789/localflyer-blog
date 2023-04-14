import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'localflyerblog',

  projectId: 'wr4vrial',
  dataset: 'localflyerblog',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
