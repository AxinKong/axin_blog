# 首次上线：三步

## 1. 建仓库并推上去

在 GitHub 新建一个空仓库（不要勾选任何 README/gitignore），然后：

```bash
git remote add origin git@github.com:<你的用户名>/<仓库名>.git
git push -u origin main
```

## 2. 打开 GitHub Pages

仓库页面 → **Settings** → **Pages** → **Build and deployment** →
**Source** 选 **GitHub Actions**（不是 Deploy from a branch）。

选完之后回到 **Actions** 标签页，应该能看到 Deploy 流程在跑。
跑完就能通过 `<用户名>.github.io/<仓库名>` 或临时地址访问了。

## 3. 绑定 kinc.jp

**先配 DNS**（在你买 kinc.jp 的域名商后台）：

裸域名 `kinc.jp` 加四条 A 记录：

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

以及两条 AAAA（IPv6，可选但建议加）：

```
2606:50c0:8000::153
2606:50c0:8001::153
2606:50c0:8002::153
2606:50c0:8003::153
```

再加一条 CNAME 让 www 也能用：

```
www  →  <你的用户名>.github.io
```

**再回 GitHub**：Settings → Pages → Custom domain 填 `kinc.jp` → Save。
等它下面的 DNS check 变绿（可能要几分钟到几小时，取决于 DNS 生效速度），
然后勾上 **Enforce HTTPS**。

> 仓库里的 `public/CNAME` 已经写好了 `kinc.jp`，每次构建都会带到 `dist/`，
> 所以 GitHub 那边的 Custom domain 不会被部署覆盖掉。

## 之后

写完文章 `git push` 即可，两三分钟后线上就更新了。
