import { getCollection, type CollectionEntry } from 'astro:content';

/** 按时间倒序取案例；生产构建自动过滤 draft */
export async function getPublishedWork(): Promise<CollectionEntry<'work'>[]> {
	const items = await getCollection('work', ({ data }) => import.meta.env.DEV || !data.draft);
	return items.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}
