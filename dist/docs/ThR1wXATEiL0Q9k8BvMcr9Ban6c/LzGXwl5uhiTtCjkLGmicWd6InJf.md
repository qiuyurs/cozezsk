---
title: 2.12 输出节点
slug: ThR1wXATEiL0Q9k8BvMcr9Ban6c\LzGXwl5uhiTtCjkLGmicWd6InJf
sidebar_position: 11
---


# 2.12 输出节点

输出节点用于在工作流执行过程中输出指定的消息内容。

我们可以把工作流想象成做菜流程：

1. 正常情况下，做完最后一道菜（结束节点）才端给客人
2. 但遇到耗时的大菜（比如炖汤），厨师会中途说："汤正在炖，20 分钟后就好！"
3. 这个中途提醒就是 "输出节点"，防止客人等太久直接走人

就像下载大文件时，进度条会不断更新，让你知道程序没卡死，这样用户就会耐心等待啦～

输出节点支持流式和非流式两种模式

## 输出变量

支持引用前边节点的变量

<img src="/assets/Hr4hb6H67oENjvx9ptXcV1jrnfc.png" src-width="1920" src-height="869" align="center"/>

## 输出内容

在工作流运行过程中，智能体将直接使用这里指定的内容回复对话。你可以使用{{变量名}}的方式引用输出变量中定义的变量。

<img src="/assets/CvgVbiVCZoeMVhxpAbTcrR9Onhf.png" src-width="1920" src-height="869" align="center"/>

## 流式输出

流式输出表示输出节点配置的输出内容会逐字地显示在对话中，类似于打字机的效果。流式输出适用于输出文本较长或需要工作流即时反馈的场景，呈现实时对话的交互效果，用户无需等待一大段文字一次性加载，可显著提高对话过程中的用户体验。

输出节点默认采用非流式输出，待接收到全部消息内容后，再一次性输出全部消息内容。

<img src="/assets/K98DbOZw5oeVAXxz85vce4pWnkb.png" src-width="1920" src-height="869" align="center"/>

