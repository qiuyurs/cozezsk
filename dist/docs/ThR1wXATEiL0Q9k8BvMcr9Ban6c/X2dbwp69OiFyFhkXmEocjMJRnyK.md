---
title: 2.6 工作流节点
slug: ThR1wXATEiL0Q9k8BvMcr9Ban6c\X2dbwp69OiFyFhkXmEocjMJRnyK
sidebar_position: 5
---


# 2.6 工作流节点

在一个工作流中，你可以将另一个工作流作为其中的一个步骤或节点，实现复杂任务的自动化。

例如将常用的、标准化的任务处理流程封装为不同的子工作流，并在主工作流的不同分支内调用这些子工作流执行对应的操作。

工作流嵌套可实现复杂任务的模块化拆分和处理，使工作流编排逻辑更加灵活、清晰、更易于管理。

你可以把工作流想象成组装乐高。比如要造一辆玩具车，先拼好车轮（子工作流）、车身（另一个子工作流），最后组装成整车（主工作流）。每个零件都是独立的模块，需要时直接拿来用，这样整个搭建过程更简单有条理。遇到复杂任务时，拆分成多个现成的小任务组合起来，就像用现成的乐高模块拼大模型一样方便。

## 输入与输出

工作流节点的输入和输出结构取决于子工作流定义的输入输出结构，不支持自定义设置。

在工作流节点中你需要为必选的输入参数指定数据来源，支持设置为固定值或引用上游节点的输出参数。

我们可以用做菜来比喻理解：

1. 每个做菜步骤（工作流节点）需要的材料和成品都是固定的，就像 "切菜" 步骤必须要有菜刀和蔬菜，产出切好的菜（输入输出结构固定）。
2. 必须准备的物品（必选参数）有两种获取方式：

- 自己带（固定值）：比如规定必须用 3 克盐
- 用前面步骤的成品（引用上游）：比如用 "煮面" 步骤煮好的面条

你不能自己发明新的材料要求，比如突然要求切菜步骤需要用到烤箱，这是不允许的（不支持自定义设置）。

## 让我们来实际操作一下吧~

打开一个新的工作流，并点击【添加节点】

<img src="/assets/M2K2b173JoVZMNxTpQAcGFwqnae.png" src-width="1920" src-height="869" align="center"/>

点击【工作流】节点

<img src="/assets/Cydnb5dEfoqXXCxFLZmcpCCbnig.png" src-width="1920" src-height="869" align="center"/>

选择要添加的工作流，并点击【添加】

<img src="/assets/KXtcbyVogoKIJWxT8aMcXOn8nBh.png" src-width="1920" src-height="869" align="center"/>

我这里以发送飞书消息为例，每次点击都会发送一条消息

<img src="/assets/BrvXbJUUZoTI96x9NTNcP5qgnFe.png" src-width="1919" src-height="869" align="center"/>

这是运行工作流需要的参数，按要求设置一个。

并运行工作流

<img src="/assets/HCs0bFuCWokdA1xuNfjcac5WnGe.png" src-width="1920" src-height="869" align="center"/>

<img src="/assets/RJhzb0oONoZVT9xRBV0cPpctnBe.png" src-width="577" src-height="122" align="center"/>

可以看到，这个发送消息的工作流运行成功！

