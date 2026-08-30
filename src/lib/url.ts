const BASE = import.meta.env.BASE_URL;

/**
 * 给站内路径加上 base 前缀。
 * 部署在子路径（如 /axin_blog）时必须用它，否则链接会指向域名根目录。
 * 外部链接和 mailto: 原样返回。
 */
export function url(path: string): string {
	if (/^(https?:|mailto:|#)/.test(path)) return path;
	const joined = `${BASE}/${path}`.replace(/\/{2,}/g, '/');
	return joined.length > 1 ? joined.replace(/\/$/, '') : '/';
}
