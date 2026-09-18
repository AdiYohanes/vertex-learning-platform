import 'server-only'
import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId, readToken } from '../env'

/**
 * Server-only Sanity client for querying private datasets.
 * Guarded with 'server-only' so that this module and its token can NEVER
 * be bundled into client-side code.
 */
export const serverClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Server fetches bypass CDN cache for freshness
  token: readToken,
  perspective: 'published',
})
