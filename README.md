# Howdz Dashboard Docs

[Howdz Dashboard](https://howdz.xyz) 的官方文档站点，基于 [Astro](https://astro.build) 构建的静态网站。

## 📖 项目说明

本项目是 Howdz Dashboard 浏览器起始页应用的官方文档官网，提供以下文档内容：

- **首页** - 应用介绍、特性展示、安装入口
- **FAQ** - 常见问题解答
- **Changelog** - 更新日志

## ✨ 主要特性

Howdz Dashboard 是一款可高度自定义配置的浏览器起始页应用：

- 💫 提供基于**文档流**的响应布局或 **Fixed 模式**固定任意位置的两种布局模式
- 🎨 编辑模式下可拖拽组件更改大小和位置
- 🧩 组件可自由添加或删除，样式和功能均可配置
- 🔄 支持**密钥**或**JSON 文件**数据导出，实现跨设备同步
- 🌈 预设多种主题，支持本地壁纸、随机壁纸和动态壁纸
- 📑 支持多标签页模式，可创建多个隔离页面
- 🔌 支持点击组件弹出另一个组件等交互行为
- 👁️ 预览模式，支持数据隔离用于分享
- 🌐 支持中英文切换

## 📦 可用组件

| 组件 | 说明 |
|------|------|
| Empty | 占位区块 |
| Clock | 时钟 |
| Day | 自定义日期 |
| Verse | 随机古诗 |
| Search | 搜索栏 |
| Collection | 键盘收藏夹 |
| Iframe | 嵌入外部网站 |
| TodoList | 备忘清单 |
| Weather | 天气 |
| CountDown | 倒计时 |
| Editor | Markdown 编辑器 |
| MovieLine | 电影经典台词 |
| Bookmark | 书签管理器 |
| DailyHot | 今日热榜 |
| JuejinList | 掘金热门 |
| WeiboList | 微博热搜 |
| GithubTrending | Github 趋势 |
| ZhihuList | 知乎热榜 |

## 🚀 开发和部署

### 安装依赖

```bash
yarn install
```

### 启动开发服务器

```bash
yarn dev
```

### 构建生产版本

```bash
# 默认配置
yarn build

# 带 base 路径构建
yarn build:base
```

### 预览构建结果

```bash
yarn preview
```

## 📁 项目结构

```
dashboard-docs/
├── public/              # 静态资源
│   ├── assets/         # 图片资源
│   └── favicon.ico     # 网站图标
├── src/
│   ├── components/     # Astro 组件和 Markdown 内容
│   │   ├── Layout/     # 布局组件
│   │   ├── Introduce.md
│   │   ├── Material.md
│   │   ├── FAQ.md
│   │   └── Changelog.md
│   ├── pages/          # 页面
│   │   ├── index.astro
│   │   ├── FAQ.astro
│   │   └── Changelog.astro
│   └── assets/         # 样式资源
├── astro.config.mjs    # Astro 配置
├── package.json
└── tsconfig.json
```

## 🌐 相关链接

- **在线文档**: [https://doc.howdz.xyz](https://doc.howdz.xyz)
- **Dashboard 官网**: [https://howdz.xyz](https://howdz.xyz)
- **GitHub 仓库**: [https://github.com/leon-kfd/Dashboard](https://github.com/leon-kfd/Dashboard)

### 安装入口

- [Chrome 插件](https://chromewebstore.google.com/detail/howdz 起始页/ggglfehkglgpenacfalffmiojghklamm)
- [Edge 插件](https://microsoftedge.microsoft.com/addons/detail/howdz 起始页/cgcggcdgjfmeoemmdpleinicgepijegd)
- [Firefox 插件](https://addons.mozilla.org/zh-CN/firefox/addon/howdz 起始页/)
- [离线安装包 (ZIP)](https://cdn.kongfandong.cn/howdz/dist/howdz-dashboard.zip)

## 📄 许可证

MIT License

## 👨‍💻 作者

**Leon.D** - [关于我](https://kongfandong.cn/blog/about)
