---
title: 2.16 长期记忆节点
slug: ThR1wXATEiL0Q9k8BvMcr9Ban6c\KpKcwmzbmisBLOkX6zbc3XzNnAh
sidebar_position: 15
---


# 2.16 长期记忆节点

长期记忆节点用于在工作流中召回长期记忆中储存的用户的个性化信息。

这就像你有个贴心的助手，它会记住你的喜好。比如你喜欢甜食、爱看科幻片，它就能推荐更符合你口味的餐厅和电影。不过普通聊天只能记住最近几次对话（就像人短期记忆有限），所以需要给它加个 "长期记忆库" 功能。

这个记忆库会永久保存你的重要信息：

 1️⃣ 下次聊天时自动调用（比如直接推荐你喜欢的奶茶新品）

 2️⃣ 还能用在各种自动服务流程里（比如订票系统优先推荐你常坐的航班）

相当于给智能系统装了个不会忘记的小本本，越用越懂你！

举个生活中的例子：就像淘宝会根据你长期购物习惯推荐商品，而不只是看最近搜索记录。

## 输入

输入参数固定为 Query，表示需要从长期记忆中匹配的关键信息，例如查询用户的喜好、生日、男友名字等信息。以新闻搜索的工作流为例，Query 可以固定为“喜欢什么类型的新闻”，基于用户喜好检索并推荐新闻。

Query 可指定为引用值或输入值：

- 引用：引用上游节点的输出参数。
- 输入：指定为某个字符串。

<img src="/assets/M6Nmb1DSRoxM0vxCZekcWMWKnEd.png" src-width="1920" src-height="869" align="center"/>

## 输出

输出参数固定为 outputList，格式为 Array&lt;Object&gt;，智能体会列举和 Query 相关的长期记忆。如果下游节点引用了这个参数，智能体会总结长期记忆中的内容，并将总结内容作为下游节点的输入。

测试一下，注意这个绑定智能体的长期记忆开关状态一定要是开启状态

<img src="/assets/FHizbiAJxos9VGxzqBUcaEJFn1b.png" src-width="1920" src-height="869" align="center"/>

成功获取到长期记忆

<img src="/assets/G5oWbvj13oudUpxfY82ctMUInIh.png" src-width="1920" src-height="869" align="center"/>

## 开启功能

在获取长期记忆前，需要在工作流绑定的智能体中开启【长期记忆】功能

<img src="/assets/FtbZbuYVUoGIK6xsvdFcXtvdnEg.png" src-width="1920" src-height="869" align="center"/>

