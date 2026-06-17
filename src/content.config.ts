import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

// Collection: Works
const works = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/works" }),
  schema: z.object({
    order: z.number(),
    title: z.string(),
    website: z.string(),
    accent: z.string(),
    thumbnail: z.string(),
    videos: z.array(
      z.object({ src: z.string(), caption: z.string().optional() }),
    ),
    screenshots: z.array(
      z.object({ src: z.string(), caption: z.string().optional() }),
    ),
  }),
});

// Expose collections to Astro
export const collections = { works };
