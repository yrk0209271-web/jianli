# Shua Resume Website

一个参考 Kards 简历模板气质重做的个人简历网站，使用纯静态 HTML、CSS 和 JavaScript 构建，适合直接部署到 GitHub Pages。

## 文件结构

- `index.html`：页面结构与 SEO 元信息
- `styles.css`：Kards 风格视觉系统、响应式布局、打印样式
- `app.js`：简历数据、渲染逻辑、菜单、项目、时间线和交互
- `.github/workflows/pages.yml`：GitHub Pages 自动部署工作流
- `.nojekyll`：让 GitHub Pages 直接按静态文件发布

## 修改简历内容

打开 `app.js`，修改顶部的 `resume` 对象：

- `name`、`roles`、`summary`：首页和简介文字
- `email`、`github`、`socialLinks`：联系方式与社交链接
- `skillBars`：技能进度条
- `timeline`：工作、教育、证书或项目经历
- `projects`：精选项目
- `services`：能力服务说明

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
