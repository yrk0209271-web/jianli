# Shua Resume Website

一个精致的个人简历网站，使用纯静态 HTML、CSS 和 JavaScript 构建，适合直接部署到 GitHub Pages。

## 文件结构

- `index.html`：页面结构与 SEO 元信息
- `styles.css`：视觉系统、响应式布局、打印样式
- `app.js`：简历数据、渲染逻辑、主题切换和交互
- `.github/workflows/pages.yml`：GitHub Pages 自动部署工作流
- `.nojekyll`：让 GitHub Pages 直接按静态文件发布

## 修改简历内容

打开 `app.js`，修改顶部的 `resume` 对象：

- `name`、`role`、`tagline`：首页主视觉文字
- `email`、`github`、`linkedin`：联系方式
- `skills`：能力结构
- `experience`：工作、实习或项目经历
- `projects`：精选项目
- `education`：教育背景、证书或奖项

## 本地预览

在当前目录运行：

```powershell
python -m http.server 8765 --bind 127.0.0.1
```

然后打开：

```text
http://127.0.0.1:8765/
```

## 部署到 GitHub Pages

如果这个目录还不是 Git 仓库，可以先初始化并关联你的 GitHub 仓库：

```powershell
git init -b main
git add .
git commit -m "Create personal resume website"
git remote add origin https://github.com/<your-name>/<your-repo>.git
git push -u origin main
```

在 GitHub 仓库中打开 `Settings -> Pages`，将 `Source` 设置为 `GitHub Actions`。之后每次推送到 `main` 分支，工作流都会自动发布站点。
