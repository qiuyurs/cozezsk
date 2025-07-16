---
title: 2.9 意图识别节点
slug: ThR1wXATEiL0Q9k8BvMcr9Ban6c\Zcx5wnpLLi7fvVkqKwdc6UFcnVg
sidebar_position: 8
---


# 2.9 意图识别节点

意图识别节点能够让智能体识别用户输入的意图，并将不同的意图流转至工作流不同的分支处理，提高用户体验，增强智能体的落地效果。

意图识别就是让智能助手听懂你想干什么。比如你说 "查今天 AI 新闻"，它就知道你想 "看新闻"。

以前做这个需要多个复杂步骤，现在扣子工作流有个专门功能，直接就能判断你的意图，让对话机器人反应更快更准。就像把多步操作变成一键完成，省时又省力。

意图识别节点可用于以下场景：

- 客户服务：识别用户问题的类型，并转交各类知识库处理，对于知识库中未匹配的问题，转交人工客服处理。
- 医疗咨询：对用户咨询的医学问题进行归类，非医学问题的咨询则拒绝回复。
- 综合类智能体：对于功能多样的智能体，可以先由意图识别节点对用户咨询进行初步分类，转交各个 Agent 分支处理。

## 模型

<img src="/assets/A9pkbJGBeoskxzxRJ9LcXDoqnfc.png" src-width="1920" src-height="869" align="center"/>

选择执行意图识别的大模型，一般选择Lite系列的，速度快

<img src="/assets/GPXVbsHOLooiedxPRxxcfOOonsg.png" src-width="1920" src-height="869" align="center"/>

还支持修改大模型的配置信息，这个没有特别要求，一般保持默认即可

## 输入

简单来说：

1. 你需要指定让 AI 分析的内容，默认是用户当前输入的问题（query）。这个内容可以来自用户提问，也可以用前面步骤生成的结果。
2. 如果开启 "参考对话历史" 功能，AI 会结合之前的聊天记录来理解当前问题。比如用户先问天气，接着问 "明天呢"，AI 就知道在问明天天气。

就像老师批改作业时，不仅看当前这道题，还会参考你之前的答题情况来理解你的思路。

可以指定大模型能看到几轮的历史记录（一问一答视为一轮）

<img src="/assets/GFRUb3iE8oaKbExoivCcmaLlnhb.png" src-width="1920" src-height="869" align="center"/>

## 意图匹配

你可以把用户意图分类想象成快递分拣站：

1. 提前设好多个分类筐（比如咨询 / 退货 / 投诉）
2. 用户问题来了，系统会自动检测应该放进哪个筐
3. 如果匹配到某个筐，就按对应流程处理（比如退货筐转售后部门）
4. 遇到无法分类的件（比如闲聊），就扔进 "其他" 筐统一处理

这样所有用户问题都不会被漏掉，特殊问题还能走特殊流程。设置多个分类筐能让处理更精准，而 "其他" 筐就是最后的保险。

<img src="/assets/O1Wpbs0OFojqCKxwp7UcyEeBnlg.png" src-width="1920" src-height="869" align="center"/>

添加【意图】后，节点的后面就多出一个连接点，用于进入对应的流程

## 高级设置

简单来说：这个平台已经给 AI 设定了一些基础指令，让它能理解用户的问题类型（比如问天气、查订单等）。你可以做两件事让 AI 更聪明：

1. 补充额外指令（比如 "当用户提到物流时归类为快递问题"）
2. 给每个分类添加具体例子（比如 "我的快递到哪了" 属于快递类，"明天会下雨吗" 属于天气类）
 就像教小孩认动物时，既告诉他特征，又给他看各种图片，AI 就会分类得更准确啦！

示例：

在某些场景下，无法正常识别场景。添加一个参考示例，帮助大模型识别场景

<img src="/assets/QunwbQkrQoexcDxEWYIcHVHInff.png" src-width="1920" src-height="869" align="center"/>

## 输出

节点的输出参数，可作为变量被后续节点引用。

输出参数固定为：

- classificationId：每个意图的 ID。根据意图匹配中配置的意图，从上到下依次排序，第一个意图的 ID 为 1。
- reason：分类的原因和依据，由模型自动生成。

参考：

<img src="/assets/HS2Abp0cVo0gZWxtEwmcXJg6nzb.png" src-width="1920" src-height="869" align="center"/>

## 使用

<img src="/assets/TBakbAhzfoM6ymxTHlKcEekUnIg.png" src-width="1920" src-height="869" align="center"/>

根据用户的不同问题，进入了不同的处理流程。

