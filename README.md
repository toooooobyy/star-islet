# 星屿 · 个人站 (Star Islet)

一座漂在真实银河星图上的个人网站：每个板块锚定一颗真实恒星，选星、曲速航行、抵达后阅读。基于「玉兔号 · 星海航行」引擎（[GitHub Pages 演示](https://toooooobyy.github.io/rabbit-starfield/)）改造。

## 架构（B 方案：内容与引擎分离）

```
star-site/
├── index.html    # 引擎（星海渲染/航行/交互），一般不需要动
├── content.js    # ★ 全部站点内容：板块、文案、图片、视频引用
└── assets/       # 图片素材（建议 WebP，宽度 ≤1600px）
```

**维护心法：改内容只碰 `content.js` 和 `assets/`，永远不用碰 `index.html`。**

## content.js 数据结构

```js
window.SITE = {
  brand: '站名',          // 浏览器标签 + 右下角标识
  version: 'v0.1',
  sections: [
    {
      id: 'home',                 // 内部标识（可省）
      star: '太阳',               // ★ 锚星：必须是星表内的中文名（见下方可选星表）
      title: '首页 · 关于我',      // 菜单与抵达面板的标题
      sub: '一句话副标题',          // 可省
      date: '2026-08',            // 可省
      blocks: [                   // 内容块，按顺序渲染
        { t: 'p',      text: '段落文字' },
        { t: 'h',      text: '小节标题' },
        { t: 'quote',  text: '引用样式文字' },
        { t: 'img',    src: 'assets/xx.jpg', cap: '图片说明' },
        { t: 'gallery', items: [{ src: 'assets/a.jpg', cap: '说明' }, ...] },
        { t: 'video',  src: 'https://player.bilibili.com/player.html?bvid=BV...', cap: '视频说明' },
        { t: 'links',  items: [{ label: '名称', url: 'https://...', desc: '一句话介绍' }] }
      ]
    }
  ]
};
```

## 日常维护操作

| 操作 | 步骤 |
|------|------|
| 改文案 | 编辑 `content.js` 对应 `text` 字段，保存刷新 |
| 加/换图 | 图片丢进 `assets/`，在 `img`/`gallery` 块里写 `src` |
| 加视频 | 取 B 站「分享 → 嵌入代码」里的 iframe src（`player.bilibili.com/player.html?bvid=...`），填进 `video` 块。**视频文件本体永远不要放进仓库**（GitHub 单文件上限 100MB） |
| 加板块 | 复制一段 `{ id, star, title, blocks: [...] }`，换一颗没用过的锚星 |
| 删板块 | 整段删掉即可 |

**自检机制**：页面启动时校验每块内容——锚星不存在、两板块共用同一颗星、content.js 语法错误（整站内容空白）都会在页面顶部弹红条提示，不会静默失败。

## 可选锚星（部分）

太阳 · 比邻星 · 南门二 · 巴纳德星 · 沃尔夫359 · 拉兰德21185 · 天狼星 · 鲁坦星 · 罗斯154 · 罗斯248 · 天苑四 · 拉卡伊9352 · 罗斯128 · 南河三 · 天仓五 · 印第安座ε · 天鹅座61 · 格鲁姆布里奇34 · 织女星 · 北落师门 · 牛郎星 · 北河三 · 大角星 · 五车二 · 天津四 · 轩辕十四 · 角宿一 · 心宿二 · 毕宿五 · 参宿四 · 参宿七 · 水委一 · 马腹一 · 十字架二 · 北极星 · 老人星 · 北河二 · 参宿五 · 参宿二 · 参宿一 · 大陵五 · 刍藁增二 · 开阳 · 天枢 · 天璇 · 天船三 · 娄宿三 · 壁宿二 · 五车三（共 49 颗，完整清单见 index.html 中 `DESTS` 数组）

## 操作

| 操作 | 效果 |
|------|------|
| 点菜单板块 / 点星图 ◇ | 确认后曲速航行前往，抵达自动打开内容面板 |
| 菜单里的「读」按钮 / 右键 / 长按星标 | 跳过航行直接阅读 |
| ☀ 回家 | 一键返航首页（太阳） |
| ESC | 关内容面板 > 关确认弹窗 > 中止航行 |
| 拖动 / 方向键 | 转向；滚轮/双指捏合 推进（悬停 UI 面板时滚轮归面板） |

## 部署

任意静态托管即可：GitHub Pages（推送到仓库开 Pages）、Vercel、Netlify，或本地双击 `index.html` 直接打开（无需构建、无外部依赖）。

## 数据来源

恒星数据：[HYG Database v4.1](https://github.com/astronexus/hyg) by astronexus，CC BY-SA 4.0
占位图片为 AI 生成，正式版请替换。

## License

代码 MIT，星表数据遵循 HYG Database 的 CC BY-SA 4.0。
