// 全站配置：改这里就能改站点信息
export const SITE_TITLE = 'Cassie';
export const SITE_DESCRIPTION =
	'关于产品管理与项目管理的实战笔记：需求、优先级、路线图、跨团队协作，以及那些教科书不会写的部分。';
export const AUTHOR = 'Cassie';
export const SITE_URL = 'https://kinc.jp';

export const NAV_LINKS = [
	{ href: '/', label: '首页' },
	{ href: '/blog', label: '文章' },
	{ href: '/about', label: '关于' },
];

// 想加/删社交链接，改这个数组即可（icon 取值见 src/components/SocialIcon.astro）
export const SOCIAL_LINKS = [
	{ href: 'https://github.com/', label: 'GitHub', icon: 'github' },
	{ href: 'mailto:kongaxing@gmail.com', label: 'Email', icon: 'mail' },
	{ href: '/rss.xml', label: 'RSS', icon: 'rss' },
];
