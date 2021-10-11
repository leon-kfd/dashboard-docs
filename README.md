# Dashboard Docs

This is base on `Astro` to build static file.

## 🚀 特性

- 💫 提供基于`文档流`的响应布局或`Fixed模式`固定任意位置的两种布局模式
- ✨`响应式设计`，编辑模式下拖拽组件更改其大小和位置
- 🍭 组件可自由添加或删除，并且组件的`样式`和`功能`都是可配置的
- 🍌 数据可使用`密钥`或`JSON文件`导出以实现`同步`功能
- 🎉 预设多种`主题`，初始进入可任意选择
- 🌟 可配置`动态壁纸`背景，选用官方提供或自行添加网络视频路径即可
- 🍦 可配置组件`交互`行为，点击组件弹窗另一个组件等交互操作
- 🚀 资源使用`Service worker`缓存加快页面加载速度.
- 🌈 提供浏览器插件模式`Chrome extension`
- 🎲 提供基于 Electron 的桌面应用`Desktop Application`

## 📜 物料

<details>
  <summary>
    <b>Empty</b> - 占位
  </summary>
  <section>
    <img style="max-width: 320px;" src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bafeff2c37e54f34b01dd49042d33cc7~tplv-k3u1fbpfcp-watermark.image">
    <p>占位区块组件，支持一些简单配置与自定义文本</p>
  </section>
</details>

<details>
  <summary>
    <b>Clock</b> - 时钟
  </summary>
  <section>
    <img style="max-width: 320px;" src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8b09277da0284e969df3c5e45ee18277~tplv-k3u1fbpfcp-zoom-1.image">
    <p>简单的时钟组件</p>
  </section>
</details>

<details>
  <summary>
    <b>Verse</b> - 随机古诗
  </summary>
  <section>
    <img style="max-width: 320px;" src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/738b0b5919714a1594a4f2b1de87d338~tplv-k3u1fbpfcp-zoom-1.image">
    <p>随机古诗组件，API 来源于`https://www.jinrishici.com/`, 可配置定时刷新</p>
  </section>
</details>

<details>
  <summary>
    <b>Search</b> - 搜索栏
  </summary>
  <section>
    <img style="max-width: 320px;" src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/83f066b826234d3cae70590f2d3689ac~tplv-k3u1fbpfcp-zoom-1.image">
    <li>支持添加自定义搜索引擎</li>
    <li>按 Tab 键快速切换搜索引擎</li>
    <li>支持关键词联想</li>
  <section>
</details>

<details>
  <summary>
    <b>Collection</b> - 键盘收藏夹
  </summary>
  <section>
    <img style="max-width: 320px;" src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/17f847f8b5c8404d85acc90de7ad4f8d~tplv-k3u1fbpfcp-zoom-1.image">
    <p>键盘收藏夹，设置网站后按相应按键自动跳转，网站 Icon 自动获取</p>
  <section>
</details>

<details>
  <summary>
    <b>Iframe</b> - 外部网站
  </summary>
  <section>
    <img style="max-width: 320px;" src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0f56bc6eb7d747da90b9c9e35fde719a~tplv-k3u1fbpfcp-zoom-1.image">
    <p>设置嵌入Iframe，最新版浏览器只支持同协议(当前网站为 https)的Iframe</p>
  <section>
</details>

<details>
  <summary>
    <b>TodoList</b> - 备忘清单
  </summary>
  <section>
    <img style="max-width: 320px;" src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ede694bb63e64cb58baa821ad6120ea3~tplv-k3u1fbpfcp-zoom-1.image">
    <p>可同时设置不同日期，点击上方日期展开日期选择器</p>
  <section>
</details>

<details>
  <summary>
    <b>Weather</b> - 天气
  </summary>
  <section>
    <img style="max-width: 320px;" src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/69b03cfbceb34f218fe9b53322b0c4c4~tplv-k3u1fbpfcp-zoom-1.image">
    <p>天气组件，支持通过 IP 自动获取城市也可手动输入，后续考虑添加读取 GPS</p>
  <section>
</details>

<details>
  <summary>
    <b>CountDown</b> - 倒计时
  </summary>
  <section>
    <img style="max-width: 320px;" src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1e7f8e510c3b4157b68358e3c95c182a~tplv-k3u1fbpfcp-zoom-1.image">
    <p>支持天、小时、分钟三种单位的设置倒计时事件</p>
  <section>
</details>

<details>
  <summary>
    <b>JuejinList</b> - 掘金热门
  </summary>
  <section>
    <img style="max-width: 320px;" src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a30c3ed5a11d4bf2ad56fd0a7a1287e4~tplv-k3u1fbpfcp-zoom-1.image">
    <p>显示最新热门列表，支持配置自动刷新</p>
  <section>
</details>

<details>
  <summary>
    <b>WeiboList</b> - 微博热搜
  </summary>
  <section>
    <img style="max-width: 320px;" src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/114fda56773c4dae8f02db06885e9b36~tplv-k3u1fbpfcp-zoom-1.image">
    <p>显示最新微博热搜列表，支持配置自动刷新</p>
  <section>
</details>

<details>
  <summary>
    <b>GithubTrending</b> - Github 趋势
  </summary>
  <section>
    <img style="max-width: 320px;" src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5b18f3abc14741098c4529ce2e71718d~tplv-k3u1fbpfcp-zoom-1.image">
    <p>显示当天Github Trending列表，支持配置自动刷新</p>
  <section>
</details>
