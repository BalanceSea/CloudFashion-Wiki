# CloudFashion 文档

这是 CloudFashion Minecraft 时装插件的中文文档站点，基于 [Docusaurus](https://docusaurus.io/) 构建。

## 安装依赖

```bash
npm install
```

要求 Node.js 20 或更高版本。

## 本地开发

```bash
npm run start
```

该命令启动本地文档站点，修改文档后会自动刷新。

## 构建

```bash
npm run build
```

静态文件会生成到 `build` 目录，可部署到 GitHub Pages 或其他静态网站托管服务。

## 部署

使用 SSH：

```bash
USE_SSH=true npm run deploy
```

不使用 SSH：

```bash
GIT_USER=<Your GitHub username> npm run deploy
```

## GitHub Pages 设置

站点已配置为 GitHub Pages 项目站点，预期访问地址为：

`https://balancesea.github.io/CloudFashion-Wiki/`

1. 将项目推送到 GitHub 仓库 `BalanceSea/CloudFashion-Wiki` 的 `main` 分支。
2. 打开仓库 **Settings → Pages**。
3. 在 **Build and deployment** 的 **Source** 中选择 **GitHub Actions**。
4. 推送代码或手动运行 `Deploy CloudFashion Docs` 工作流。

工作流会使用 Node.js 20 安装依赖、执行 `npm run build`，然后将 `build` 目录发布到 GitHub Pages。首次发布完成后，可在 Actions 的部署任务中查看实际访问地址。

If you are using GitHub Pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
