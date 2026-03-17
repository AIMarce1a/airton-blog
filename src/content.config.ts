import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articoli = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articoli' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    excerpt: z.string(),
    slug: z.string(),
  }),
});

export const collections = { articoli };
