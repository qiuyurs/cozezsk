---
title: 2.5 插件节点
slug: ThR1wXATEiL0Q9k8BvMcr9Ban6c\D8OuwMDUGijFMtkiHruc6srrnhb
sidebar_position: 4
---


# 2.5 插件节点

插件节点用于在工作流中调用插件运行指定工具。

插件是一系列工具的集合，每个工具都是一个可调用的 API。商店中的上架插件或已创建的个人或团队插件支持以节点形式被集成到工作流中，拓展智能体的能力边界。

打个比方，你平时做作业需要查资料，这时候"插件节点"就像你书包里的小工具包。比如有个"数学工具包"（插件），里面有计算器（工具1）、公式手册（工具2）。你可以随时拿出需要的工具帮你解题，相当于让智能体（机器人）变得更厉害，能帮你完成更多类型的任务啦！

比如，我们想要自动获取全网各个平台的热搜并了解相关信息

首先，我们要点击【添加节点】

<img src="/assets/F666b4EuboCqHgx7ZdxcTNawnfC.png" src-width="1920" src-height="869" align="center"/>

在节点中，选择【插件】节点

<img src="/assets/C7w5bz0hIoGLu0x2ZdYc64S8nkc.png" src-width="1920" src-height="869" align="center"/>

在弹出的插件选择框内，输入【热搜】回车进行搜索

随意选择一个热搜插件，添加其中的工具

<img src="/assets/Fdrsb5wBFofvj1xEOuwcGGcnnNb.png" src-width="1920" src-height="869" align="center"/>

## 输入

插件节点的输入和输出结构取决于插件工具定义的输入输出结构，不支持自定义设置。在插件节点中你需要为必选的输入参数指定数据来源，支持设置为固定值或引用上游节点的输出参数。

假设你有一个做菜的机器人（插件），它只能按固定步骤工作：①输入土豆，②输出薯条。你无法改变它的流程，只能按它的规则操作。

使用时要注意：

1. 必须给它土豆（必选参数）
2. 土豆可以是自己带的（固定值），也可以用前面切菜机切好的土豆（引用上游节点的输出）

就像流水线作业，每个机器（插件）只能按设计好的方式工作，你需要把前一个机器的产出，当作后一个机器的原料。

在我们刚添加的插件中，并不需要输入参数

插件节点运行时，会调用工具处理输入参数，并根据工具定义输出处理后的数据。你可以在输出区域右上角单击查看示例，查看输出参数的详细说明、完整的输出示例。

## 输出

点击插件，就能看到插件返回的数据格式

<img src="/assets/G0j9bLUxYok1Clxz2sdcikNynth.png" src-width="1920" src-height="869" align="center"/>

让我们测试一下，都返回了些什么内容

<img src="/assets/MYUNbloLaoSc4Yx2bIUc3rNqnje.png" src-width="1920" src-height="869" align="center"/>

获取到数据后，可以在其他节点中引用插件的返回值哦

比如在大模型中引用：

<img src="/assets/ZivJbbhw9osoetxAkbjcYNQcnIg.png" src-width="1920" src-height="869" align="center"/>

这样，大模型节点就能收到插件节点的结果啦。

我们就完成了整个流程：调用插件-获取数据-传递给其他节点

