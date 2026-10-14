import { z, defineCollection } from 'astro:content';

const dataCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.string(),
    lastUpdated: z.date(),
    officialAuthority: z.string(),
    sourceUrl: z.string().url(),
  }),
});

const mapsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    mapCode: z.string(),
    scale: z.string(),
    projection: z.string().default('WGS 84 / LCC (Survey of India Standard)'),
    lastVerified: z.date(),
    authority: z.string().default('Survey of India (Department of Science & Technology, Govt. of India)'),
    authorityUrl: z.string().url().default('https://onlinemaps.surveyofindia.gov.in/'),
    previewImage: z.string(),
    aspectRatios: z.array(z.string()),
    files: z.object({
      svg: z.string(),
      png4k: z.string(),
      webpTransparent: z.string(),
      creatorZip: z.string().optional(),
    }),
    sha256: z.string(),
    seoKeywords: z.array(z.string()),
  }),
});

export const collections = {
  'data': dataCollection,
  'maps': mapsCollection,
};
