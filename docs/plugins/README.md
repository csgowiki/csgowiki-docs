# 简介
## CSGOWiki-Pack

[**CSGOWiki-Pack**](https://github.com/hx-w/CSGOWiki-Plugins)是CSGOWiki的游戏服务器插件，使用sourcemod实现。

::: tip 插件下载

![release version](https://img.shields.io/github/v/release/hx-w/CSGOWiki-Plugins?include_prereleases)
![GitHub](https://img.shields.io/github/downloads/hx-w/CSGOWiki-Plugins/total)

插件在GitHub开源发布：[Release](https://github.com/hx-w/CSGOWiki-Plugins/releases/latest)

为了方便国内用户，插件仓库会在Gitee同步：[Release](https://gitee.com/hx-w/CSGOWiki-Plugins)
:::
## 兼容性

CSGOWiki-Pack依赖于以下扩展环境，其兼容性如下

| 插件依赖 | 最低版本 | 推荐版本 | 备注 |
|:----:|:-----:|:----:|:----:|
|[**sourcemod**](https://sourcemod.net)| v1.10.6488 | v1.10.6503 | 插件运行的基本环境 |
|[**system2**](https://github.com/dordnung/System2/releases) | v3.2.1 | latest | HTTP/FTP等方法实现实现(应用层) |
|[**socket**](http://forums.alliedmods.net/attachment.php?attachmentid=83286) | - | v3.0.1 | TCP/UDP套接字方法实现(传输层) |
|[**csgo-practice-mode**](https://github.com/splewis/csgo-practice-mode) | v1.3.3 | latest | 练习模式基础环境+csutils方法实现 |

**整个插件是在sourcemod的基础上构建的，支持Windows/Linux/Mac操作系统。**

## 性能

### 缓存

由于插件提供多种网络服务，且部分服务源在海外，为了提升用户体验，CSGOWiki-Pack使用了本地缓存进行优化。

目前插件开辟的缓存区为**512kb**，不建议更改。

### 网络请求

插件中网络请求的源站包括：

1. [**CSGOWiki主站**](https://csgowiki.top)
2. [**职业道具API**](https://api.hx-w.top)
3. [**消息中继服务器**](https://message-channel.vercel.app)
4. [**GitHub仓库**](https://github.com/hx-w/CSGOWiki-Plugins)

其中大部分服务器在国外，平均单次请求延时约**1000ms**。

::: tip 替换方案

以上所有国外的网络服务都可以迁移至国内，不过由于费用问题可能不会长期提供。

该网络服务迁移的插件版本会在可以预见的未来发布。

:::


## 关于Issue

**插件功能**的相关问题请提在[**Issue**](https://github.com/hx-w/CSGOWiki-Plugins/issues)

或加QQ群**762993431**进行反馈。

::: details QQ群二维码
![](https://ibed.csgowiki.top/image/csgowiki.png)
:::

::: warning 提问的智慧

**提问前先问自己**：
1. 我文档读完了吗？
2. 我尝试过自己搜索吗？
3. 在Issue中出现过相似的问题吗？

**提问时应该做到**：
- 简洁清晰地描述自己遇到的问题。
- 描述问题的触发条件以及触发频率。
- 最好有相关问题的截图。
- 必要时截取插件Log。

如果以上内容你觉得不全面，请阅读【[**提问的智慧-详细版**](https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way/blob/main/README-zh_CN.md)】
:::