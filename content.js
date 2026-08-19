/* ============================================================
 * 星屿 · 内容层（全部站点内容都在这个文件里）
 * ------------------------------------------------------------
 * 维护指南：
 *  - 改文案：直接编辑下面的 p / h / quote 文本
 *  - 换图：把图片丢进 assets/，改 src 路径（建议 WebP，宽度 ≤1600px）
 *  - 视频：只放外链嵌入地址（B站 player.bilibili.com 或 YouTube /embed/），
 *          视频文件本体不要放进仓库
 *  - 增删板块：复制一段 { ... } 即可；锚星用 DESTS 星表里的中文名（见 README），
 *          不同板块不要共用同一颗锚星
 *  - 保存后刷新页面即生效；写错语法时页面顶部会出现红条提示
 * ============================================================ */
window.SITE = {
  brand: '星屿 · 旅人驿站',   // 站点名（浏览器标签 + 右下角版本标识）
  version: 'v0.4',
  sections: [

    { id: 'home', star: '太阳', title: '首页 · 关于我', sub: '一切从母星开始', date: '',
      blocks: [
        { t: 'p', text: '你好，旅人。欢迎降落在我的小站——一座漂在真实银河星图上的个人空间。这里没有传统网站的导航栏，每一块内容都挂在一颗真实的恒星上，选一颗星，出发，抵达后阅读。（本段为占位文案，正式版替换为你自己的自我介绍。）' },
        { t: 'img', src: 'assets/img-avatar.webp', cap: '占位头像：一只戴着头盔的玉兔（AI 生成占位图，请替换）' },
        { t: 'h', text: '我是谁' },
        { t: 'p', text: '一名喜欢把想法做成小玩意的开发者/设计师/观星者（占位）。白天写代码，晚上偶尔抬头看星星，于是有了这个把两者缝在一起的网站。' },
        { t: 'h', text: '这座驿站怎么逛' },
        { t: 'p', text: '左侧「站点板块」菜单里选一块内容，点「出发」就会曲速航行过去；也可以直接点星图上的 ◇ 星标。赶时间的话，点菜单里的「读」按钮可以跳过航行直接阅读。想回来随时点右上角「☀ 回家」。' },
        { t: 'quote', text: '我们都是阴沟里的虫子，但总还是得有人仰望星空。—— 占位引用' }
      ] },

    { id: 'about', star: '比邻星', title: '关于本站', sub: '距离太阳最近的恒星，正如这页讲的都是最近的事', date: '2026-08',
      blocks: [
        { t: 'p', text: '本站由「玉兔号 · 星海航行」开源引擎驱动：12 万颗恒星来自真实星表（HYG Database v4.1），坐标、星等、色温均为真实数据，你在星图里飞过的每一颗星都真实存在。（占位说明文）' },
        { t: 'h', text: '技术栈' },
        { t: 'p', text: '零依赖单文件引擎 + content.js 内容层。渲染使用 Canvas 软件光栅化，无任何外部框架；内容与引擎完全解耦，不懂代码也能维护文案。' },
        { t: 'h', text: '内容维护' },
        { t: 'p', text: '全部文字、图片、视频引用都集中在 content.js 一个文件里。改错字 1 分钟，换图 3 分钟——具体见仓库 README 的维护指南。（占位文案）' }
      ] },

    { id: 'projects', star: '天狼星', title: '项目集', sub: '夜空最亮的星，放最得意的作品', date: '',
      blocks: [
        { t: 'p', text: '这里陈列我做过的 side project。以下均为占位条目，正式版替换为你的真实项目（配图 + 链接 + 一句话说明）。' },
        { t: 'h', text: '项目一 · 星海航行引擎（占位）' },
        { t: 'img', src: 'assets/img-project.webp', cap: '占位配图：深空数据面板（AI 生成，请替换为项目截图）' },
        { t: 'p', text: '一句话介绍：把 12 万颗真实恒星装进一个 HTML 文件，支持曲速航行与相对论视觉效应。（占位描述）' },
        { t: 'links', items: [
          { label: 'GitHub 仓库（占位链接）', url: 'https://github.com/toooooobyy/rabbit-starfield', desc: '引擎源码与文档' },
          { label: '在线演示（占位链接）', url: 'https://toooooobyy.github.io/rabbit-starfield/', desc: '浏览器直接体验' }
        ] },
        { t: 'h', text: '项目二 · 占位项目' },
        { t: 'p', text: '第二个项目的一句话介绍会放在这里。配图、链接与上面同款结构，复制粘贴即可。' }
      ] },

    { id: 'blog', star: '织女星', title: '航行日志', sub: '织女星曾是测光标准星，这里是我的记录标准', date: '',
      blocks: [
        { t: 'p', text: '不定期更新的随笔 / 折腾记录。以下三篇均为占位文章摘要，正式版替换为真实日志或链接到全文。' },
        { t: 'h', text: '日志 #001 · 为什么把个人站做成星图（占位）' },
        { t: 'p', text: '传统的导航栏把内容摊平成列表，我想试试让「找内容」这件事本身变得有趣一点——哪怕代价是访客得先学会开飞船……' },
        { t: 'h', text: '日志 #002 · 用 Canvas 光栅化 12 万颗星（占位）' },
        { t: 'p', text: '复盘软件光栅化的取舍：为什么不用 WebGL、putImageData 的每帧成本、以及移动端 dpr 降档的妥协。' },
        { t: 'h', text: '日志 #003 · 占位标题' },
        { t: 'p', text: '第三篇日志的摘要占位。' },
        { t: 'quote', text: '写作即航行：先起飞，再修正航向。—— 占位' }
      ] },

    { id: 'gallery', star: '参宿四', title: '星野相册', sub: '红超巨星：离得近时最大，正如照片里的回忆', date: '',
      blocks: [
        { t: 'p', text: '照片墙占位。正式版把你的照片放进 assets/ 目录，然后在下面 gallery 里逐条添加 src 与说明即可（建议 WebP、宽度 ≤1600px）。' },
        { t: 'gallery', items: [
          { src: 'assets/img-gallery.webp', cap: '占位照片 1 · 星云与山脊（AI 生成）' },
          { src: 'assets/img-project.webp', cap: '占位照片 2 · 深空面板（AI 生成）' },
          { src: 'assets/img-avatar.webp', cap: '占位照片 3 · 头像（AI 生成）' }
        ] },
        { t: 'p', text: '（占位说明：相册网格会自动按宽度排布，手机上一列、桌面两到三列。）' }
      ] },

    { id: 'media', star: '天津四', title: '影音室', sub: '光度 20 万倍太阳的星，适合放最亮的作品', date: '',
      blocks: [
        { t: 'p', text: '视频板块占位。视频一律使用外链嵌入（B站 / YouTube 分享按钮里的「嵌入代码」取 src 地址），不要把视频文件放进仓库——GitHub 单文件上限 100MB，Pages 站点上限 1GB。' },
        { t: 'h', text: '占位视频一（B站嵌入）' },
        { t: 'video', src: 'https://player.bilibili.com/player.html?bvid=BV1GJ411x7h7&page=1&high_quality=1&danmaku=0', cap: '占位视频：请替换为你自己的 B 站作品嵌入地址' },
        { t: 'h', text: '占位视频二（YouTube 嵌入，海外访客示例）' },
        { t: 'video', src: 'https://www.youtube.com/embed/aqz-KE-bpKQ', cap: '占位视频：Big Buck Bunny（YouTube）' },
        { t: 'p', text: '（占位说明：播放器仅在打开本板块时才会加载，关闭面板即卸载，不会拖慢星图帧率。）' }
      ] },

    { id: 'friends', star: '牛郎星', title: '友邻星图', sub: '隔着银河也要互相串门', date: '',
      blocks: [
        { t: 'p', text: '友链占位。把朋友们的站点挂在这里——每一行一个链接，附一句话介绍。' },
        { t: 'links', items: [
          { label: '玉兔号 · 星海航行（占位友链）', url: 'https://toooooobyy.github.io/rabbit-starfield/', desc: '本站引擎的家' },
          { label: '占位友链 2', url: 'https://example.com/', desc: '一句话介绍这位朋友' },
          { label: '占位友链 3', url: 'https://example.com/', desc: '一句话介绍这位朋友' }
        ] },
        { t: 'p', text: '（占位说明：想交换友链的话，请通过「联络」板块找到我。）' }
      ] },

    { id: 'contact', star: '心宿二', title: '联络', sub: '“火星之敌”——但欢迎来讯', date: '',
      blocks: [
        { t: 'p', text: '占位联络页。正式版替换为你的真实联系方式；建议只留公开渠道，并考虑用图片或转写规避爬虫抓取邮箱。' },
        { t: 'links', items: [
          { label: 'GitHub（占位）', url: 'https://github.com/toooooobyy', desc: '代码与项目' },
          { label: 'Email（占位）', url: 'mailto:hello@example.com', desc: '慢慢回，但一定回' },
          { label: 'RSS（占位）', url: 'https://example.com/feed.xml', desc: '订阅航行日志' }
        ] },
        { t: 'quote', text: '收到讯号请回复，哪怕是延迟了许多光年。—— 占位' }
      ] }
  ]
};
