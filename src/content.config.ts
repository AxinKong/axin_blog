import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
			tags: z.array(z.string()).default([]),
			// draft: true 的文章只在本地可见，不会发布
			draft: z.boolean().default(false),
		}),
});

// 作品集 / 案例研究
const work = defineCollection({
	loader: glob({ base: './src/content/work', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			subtitle: z.string().optional(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
			// 案例研究专有字段
			role: z.string(),                        // 我在项目里的角色
			team: z.array(z.string()).default([]),   // 其他人和他们的角色
			timeline: z.string().optional(),
			stack: z.array(z.string()).default([]),
			status: z.enum(['in-progress', 'shipped', 'archived']).default('in-progress'),
			draft: z.boolean().default(false),
		}),
});

export const collections = { blog, work };
