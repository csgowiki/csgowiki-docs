module.exports = {
    title: 'CSGOWiki 帮助中心',
    description: 'CSGOWiki 帮助中心',
    base: '/',
    plugins: {
        '@vuepress/search': {
            searchMaxSuggestions: 10
        },
        '@vuepress/back-to-top': true,
        '@vuepress/pwa': {
            serviceWorker: true,
            updatePopup: {
                message: "发现新的内容",
                buttonText: "刷新",
            }
        }
    },
    head: [
        [
            'script',
            {
                async: true,
                src: 'https://www.googletagmanager.com/gtag/js?id=G-CZJ8X185MG',
            }
        ],
        [
            'script',
            {},
            [
                "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-CZJ8X185MG');",
            ],
        ],
    ],
    themeConfig: {
        dest: 'public',
        search: true,
        searchMaxSuggestions: 5,
        smoothScroll: true,
        lastUpdated: '上一次编辑',
        docsDir: 'docs',
        docsBranch: 'main',
        repo: 'hx-w/CSGOWiki-Plugins',
        repoLabel: 'GitHub',
        docsRepo: 'hx-w/csgowiki-docs',
        editLinks: true,
        editLinkText: '编辑此页',
        displayAllHeaders: false,
        sidebarDepth: 2,
        activeHeaderLinks: true,
        nav: [
            { text: '主页', link: '/' },
            { text: '导航', link: '/guide/' },
            { text: '插件文档', link: '/plugins/' },
            { text: 'Demo解析', link: '/demo-parser/' },
            { text: '消息中继服务', link: '/message-channel/' },
            { text: 'FAQ', link: '/faq/' }
        ],
    }
}