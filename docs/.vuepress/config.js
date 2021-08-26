module.exports = {
  title: "CSGOWiki 帮助中心",
  description: "CSGOWiki 帮助中心",
  theme: "vdoing",
  base: "/",
  plugins: [
    [
      "@vuepress/search",
      {
        searchMaxSuggestions: 10,
      },
    ],
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
    ['@vssue/vuepress-plugin-vssue', {
      // set `platform` rather than `api`
      platform: 'github',

      // all other options of Vssue are allowed
      owner: 'hx-w',
      repo: 'csgowiki-docs',
      clientId: 'bfa9e2e3bf028cadf439',
      clientSecret: '8234d9231f0c0072ad5191f7b75bb5b77016d78d',
    }],
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
  ],
  themeConfig: {
    tag: false,
    category: false,
    archive: false,
    dest: "public",
    search: true,
    searchMaxSuggestions: 5,
    smoothScroll: true,
    lastUpdated: "上一次编辑",
    docsDir: "docs",
    docsBranch: "master",
    docsRepo: "hx-w/csgowiki-docs",
    editLinks: true,
    editLinkText: "编辑此页",
    displayAllHeaders: false,
    activeHeaderLinks: true,
    backToTop: true,
    repo: "hx-w/CSGOWiki-Plugins",
    repoLabel: "GitHub",
    nav: [
      { text: "主页", link: "/" },
      { text: "导航", link: "/guide/" },
      { text: "csgowiki插件", link: "/csgowiki-pack/" },
      { text: "demo解析", link: "/demo-parser/" },
      { text: "消息中继", link: "/message-channel/" },
      { text: "FAQ", link: "/faq/" },
    ],
    sidebar: {
      "/csgowiki-pack/": ["", "quick_start", "version", "config", "menu"],
      "/message-channel/": ["", "quick_start"],
      collapsable: true
    },
    author: {'name': 'CarOL', 'link': 'https://blog.hx-w.top'},
    updateBar: { showToArticle: false },
    footer: {createYear: 2021, copyrightInfo: 'Present CarOL'},
  },
};
