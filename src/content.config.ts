import { defineCollection, z } from 'astro:content';

import { glob, file } from 'astro/loaders';

const posts = defineCollection({
	loader: glob({ pattern: "*.md", base: "./src/content/posts" }),
	schema: z.object({
		title: z.string().optional(),
		description: z.string().optional(),
		tags: z.array(z.string()).optional(),
		image: z.string().optional(),
		published: z.boolean().optional(),
		pubDate: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val))
	})
});

export const collections = { posts };
