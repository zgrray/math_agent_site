# Netlify 部署指南

本指南将帮助您将数学教学资源网站部署到 Netlify 平台，使其可以通过互联网访问。

## 准备工作

在开始部署之前，请确保您已经：

1. 创建了 [GitHub](https://github.com/) 账号
2. 创建了 [Netlify](https://www.netlify.com/) 账号
3. 安装了 [Git](https://git-scm.com/downloads)（如果您计划在本地操作）

## 详细部署步骤

### 1. 创建 GitHub 仓库

1. 登录您的 GitHub 账号
2. 点击右上角的 "+" 按钮，选择 "New repository"
3. 填写仓库名称（例如：math-teaching-resources）
4. 选择公开（Public）或私有（Private）仓库
5. 点击 "Create repository"

### 2. 上传网站文件到 GitHub

**方法一：通过 Git 命令行**

```bash
# 在您的网站目录中初始化 Git 仓库
git init

# 添加所有文件到暂存区
git add .

# 提交更改
git commit -m "初始提交：数学教学资源网站"

# 添加远程仓库（替换 YOUR_USERNAME 和 YOUR_REPO_NAME）
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# 推送到 GitHub
git push -u origin main
```

**方法二：通过 GitHub 网页界面**

1. 在新创建的仓库页面，点击 "uploading an existing file" 链接
2. 将您的网站文件拖放到上传区域
3. 添加提交信息（例如："初始提交：数学教学资源网站"）
4. 点击 "Commit changes"

### 3. 在 Netlify 上部署网站

1. 登录您的 [Netlify 账号](https://app.netlify.com/)
2. 在 Netlify 控制面板，点击 "New site from Git" 按钮
3. 选择 "GitHub" 作为 Git 提供商
4. 授权 Netlify 访问您的 GitHub 账号（如果尚未授权）
5. 从列表中选择您刚刚创建的仓库

### 4. 配置部署设置

在部署设置页面：

1. **分支选择**：选择 `main` 或 `master`（取决于您的默认分支名称）
2. **构建设置**：
   - 构建命令：留空（因为这是一个静态网站，不需要构建过程）
   - 发布目录：输入 `/`（因为您的 netlify.toml 文件已经指定了 `publish = "/"`）
3. 点击 "Deploy site" 按钮

### 5. 等待部署完成

部署过程通常只需要几分钟。Netlify 会自动检测您的 `netlify.toml` 文件并应用其中的配置，包括：

- 发布目录设置
- SPA 路由重定向规则
- 缓存控制
- 内容安全策略

### 6. 访问您的网站

部署完成后，Netlify 会自动为您的网站分配一个随机的子域名，格式为：`random-name.netlify.app`

您可以在 Netlify 控制面板的顶部找到这个链接。点击它即可访问您的网站。

### 7. 配置自定义域名（可选）

如果您拥有自己的域名，可以将其连接到您的 Netlify 网站：

1. 在 Netlify 控制面板，进入您的网站设置
2. 点击 "Domain settings"
3. 点击 "Add custom domain"
4. 输入您的域名，然后按照指示完成 DNS 配置

## 更新网站

当您需要更新网站内容时，只需更新 GitHub 仓库中的文件。Netlify 会自动检测更改并重新部署您的网站。

## 使用 Netlify 的高级功能

您的 `netlify.toml` 文件已经配置了一些基本的 Netlify 功能。您还可以探索 Netlify 的其他功能，如：

- 表单处理
- 身份验证
- 无服务器函数
- 大型媒体优化

## 故障排除

如果您在部署过程中遇到问题：

1. 检查 Netlify 的部署日志，查找错误信息
2. 确保您的 `netlify.toml` 文件格式正确
3. 验证您的网站文件结构与 `netlify.toml` 中的配置匹配
4. 访问 [Netlify 支持文档](https://docs.netlify.com/) 获取更多帮助

## 结论

恭喜！您已成功将数学教学资源网站部署到 Netlify。现在，您的网站可以通过互联网访问，并且会自动应用您在 `netlify.toml` 中配置的优化设置。