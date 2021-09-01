module.exports = [
  { text: '首页', link: '/' },
  {
    text: '导航', link: '/guide/index/', items: [
      { text: '介绍', link: '/guide/index/' },
      { text: '服务器列表', link: '/guide/server_list/' },
      { text: '开发与维护', link: '/guide/operators/' }
    ]
  },
  {
    text: '游戏插件', link: '/csgowiki-pack/index/', items: [
      { text: '插件介绍', link: '/csgowiki-pack/index/' },
      { text: '快速上手', link: '/csgowiki-pack/quick_start/' },
      { text: '版本规范', link: '/csgowiki-pack/version/' },
      { text: '配置文件', link: '/csgowiki-pack/config/' },
      { text: '功能菜单', link: '/csgowiki-pack/functions/' }
    ]
  },
  {
    text: '消息通道', link: '/message-channel/index/', items: [
      { text: '介绍', link: '/message-channel/index/' },
      { text: '快速上手', link: '/message-channel/quick_start/' },
      { text: '详细配置', link: '/message-channel/config/' },
      { text: '进阶内容', link: '/message-channel/advance/' }
    ]
  },
  {
    text: 'Demo解析', link: '/demo/index/', items: [
      { text: '介绍', link: '/demo/index/' },
      { text: '文件格式', link: '/demo/format/' }
    ]
  },
  { text: '问答', link: '/q&a/' },
  { text: '💖支持', link: '/sponsor/' },
  { text: '反馈', link: '/feedback/' },
]
