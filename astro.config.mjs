// @ts-check
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	// 现在部署在 GitHub 提供的地址上。
	// 以后想绑 blog.kinc.jp：把 site 改成 'https://blog.kinc.jp'，
	// 删掉下面这行 base，再把 public/CNAME 加回来（内容写域名）。
	site: 'https://axinkong.github.io',
	base: '/axin_blog',
	trailingSlash: 'ignore',
	integrations: [mdx(), sitemap()],
	markdown: {
		shikiConfig: {
			themes: { light: 'github-light', dark: 'github-dark' },
			wrap: true,
		},
	},
});
