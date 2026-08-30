# kinc.jp

产品 / 项目管理主题的个人博客。Astro 静态站，GitHub Actions 自动部署到 GitHub Pages，绑定域名 `kinc.jp`。

## 日常写作

新建 `src/content/blog/我的文章.md`：

```markdown
---
title: '标题'
description: '一句话摘要，会显示在列表页和搜索结果里'
pubDate: 2026-09-01
tags: ['优先级', '复盘']
draft: false          # true = 只在本地可见，不会发布
heroImage: '../../assets/xxx.jpg'   # 可选
---

正文，Markdown 语法。
```

文件名就是网址：`我的文章.md` → `kinc.jp/blog/我的文章/`（建议用英文短横线命名）。

## 常用命令

```bash
npm run dev       # 本地预览 http://localhost:4321
npm run build     # 构建到 dist/
npm run preview   # 预览构建结果
```

## 改站点信息

| 想改什么 | 改哪个文件 |
| --- | --- |
| 站名、简介、导航、社交链接 | `src/consts.ts` |
| 首页文案 | `src/pages/index.astro` |
| 关于页 | `src/pages/about.astro` |
| 配色、字体、排版 | `src/styles/global.css` |
| 文章页布局 | `src/layouts/BlogPost.astro` |

## 部署

推到 `main` 就会自动构建并发布（见 `.github/workflows/deploy.yml`）。

首次配置见下方「首次上线」。域名靠 `public/CNAME` 生效，不要删。
