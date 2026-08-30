// 全站配置：改这里就能改站点信息
export const SITE_TITLE = 'Axin';
export const SITE_DESCRIPTION =
	'关于产品管理与项目管理的实战笔记：需求、优先级、路线图、跨团队协作，以及那些教科书不会写的部分。';
export const AUTHOR = 'Axin';
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
	{ href: 'https://www.linkedin.com/in/axin-k-15a151196/', label: 'LinkedIn', icon: 'linkedin' },
];

// 文章底部的打赏区。
// 把收款码图片放进 src/assets/tip/，文件名和下面的 file 对上即可。
// 图片不存在的渠道会自动隐藏；全都没有时整个打赏区不显示。
export const TIP = {
	enabled: true,
	title: '觉得有用？',
	note: '这个博客没有广告也不恰饭，如果内容帮到你，随意打赏一点，多少都是鼓励。',
	methods: [
		{ label: '微信', file: 'wechat.png' },
		{ label: '支付宝', file: 'alipay.png' },
	],
};

// 邮件订阅。注册好 Substack 后，把 publication 填成你的子域名即可生效。
// 例如你的地址是 https://axinpm.substack.com，就填 'axinpm'。
// 留空时整个订阅区不显示。
export const NEWSLETTER = {
	enabled: true,
	publication: '', // ← 填这里
	// 'embed' = 内嵌表单，读者不用离开页面（转化更高）
	// 'link'  = 一个按钮，点了跳到 Substack
	mode: 'embed' as 'embed' | 'link',
	title: '订阅更新',
	note: '新文章发布时收到邮件。不发广告，随时可退订。',
	buttonText: '订阅',
};
