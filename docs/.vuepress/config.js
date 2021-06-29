module.exports = {
  title: "CSGOWiki 帮助中心",
  description: "CSGOWiki 帮助中心",
  base: "/",
  plugins: [
    [
      "@vuepress/search",
      {
        searchMaxSuggestions: 10,
      },
    ],
    ["@vuepress/back-to-top"],
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: {
          message: "发现新的内容",
          buttonText: "刷新",
        },
      },
    ],
    ["@vuepress/nprogress"],
    ["@vuepress/medium-zoom"],
  ],
  head: [
    [
      "script",
      {},
      `
      var _hmt = _hmt || [];
      (function() {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?dba21c027ca3366fd0d64f2d95b74f17";
      var s = document.getElementsByTagName("script")[0]; 
      s.parentNode.insertBefore(hm, s);
      })();
      `,
    ],
    [
      "script",
      {},
      [
        "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-CZJ8X185MG');",
      ],
    ],
  ],
  themeConfig: {
    dest: "public",
    search: true,
    searchMaxSuggestions: 5,
    smoothScroll: true,
    lastUpdated: "上一次编辑",
    docsDir: "docs",
    docsBranch: "master",
    repo: "hx-w/CSGOWiki-Plugins",
    repoLabel: "GitHub",
    docsRepo: "hx-w/csgowiki-docs",
    editLinks: true,
    editLinkText: "编辑此页",
    displayAllHeaders: false,
    sidebarDepth: 2,
    activeHeaderLinks: true,
    nav: [
      { text: "主页", link: "/" },
      { text: "导航", link: "/guide/" },
      { text: "插件文档", link: "/plugins/" },
      { text: "demo解析", link: "/demo-parser/" },
      { text: "消息中继", link: "/message-channel/" },
      { text: "FAQ", link: "/faq/" },
    ],
    sidebar: {
      "/plugins/": ["", "quick_start", "version", "config", "menu"],
    },
  },
  chainWebpack: (config) => {
    config.resolve.alias.set("core-js/library/fn", "core-js/features");
  },
};
