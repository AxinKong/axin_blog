import { getCollection, type CollectionEntry } from 'astro:content';

/** 按发布时间倒序取文章；生产构建会自动过滤掉 draft: true */
export async function getPublishedPosts(): Promise<CollectionEntry<'blog'>[]> {
	const posts = await getCollection('blog', ({ data }) => import.meta.env.DEV || !data.draft);
	return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}
