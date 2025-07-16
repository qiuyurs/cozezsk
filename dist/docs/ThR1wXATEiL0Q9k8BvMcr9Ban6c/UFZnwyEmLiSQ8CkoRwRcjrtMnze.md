---
title: 2.11 输入节点
slug: ThR1wXATEiL0Q9k8BvMcr9Ban6c\UFZnwyEmLiSQ8CkoRwRcjrtMnze
sidebar_position: 10
---


# 2.11 输入节点

输入节点用于在工作流运行期间收集用户输入。

用快递驿站取快递来比喻：

1. 快递流程走到「派送」环节时，发现没有收件人手机号（上游节点缺失信息）
2. 这时候快递小哥会主动打电话问你要号码（添加输入节点）
3. 在你回复之前，快递会一直停在驿站（流程暂停）
4. 等你报出手机号后，小哥才会继续派送流程

本质就是：当自动化流程缺关键信息时，系统会主动找你问清楚，问明白后才继续干活。

说明：

- 仅扣子商店、豆包渠道或 OpenAPI 支持使用输入节点。其他渠道不支持该节点
- 如果需要通过输入节点上传文件，可以先将文件上传到第三方存储工具，获取一个公开可访问的 URL 地址，将此 URL 传入输入节点即可。目前仅试运行输入节点时可以直接上传本地文件。

## 输入

输入变量名、变量类型、是否必填、变量描述即可。

## 使用

创建一个输入框，提醒用户输入他所在的城市

<img src="/assets/PhU6blTnloswSjxp5ipcS1D2nQb.png" src-width="1920" src-height="869" align="center"/>

在对话时，流程走到这一步，就会提醒用户输入城市

<img src="/assets/FV60bvOgsojpH7xqtUqctgRDnNg.png" src-width="1920" src-height="869" align="center"/>

