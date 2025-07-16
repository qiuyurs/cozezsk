---
title: 8.2.3 Coze工作流发送消息到微信
slug: >-
  TdAbwX4X8i5GtRk9MidcRHUunTc\XMKuwF2aji3plykcv4xcddPknB3\WUJ7wwGeIiGKoRki3LLciX3xnZc
sidebar_position: 2
---


# 8.2.3 Coze工作流发送消息到微信

在上文中，我们介绍了扣子工作流发送消息到飞书。

后台有很多朋友问他们公司不用飞书，消息能不能发送到微信？

那当然是可以的，本篇文章就介绍一下怎么发送消息到微信

实际流程与发送到飞书流程一致，只不过把 飞书消息 节点换成其他节点 发送到微信

效果演示：

<img src="/assets/MSKZbwyNKo40IyxZ8pCcYBTqngM.png" src-width="432" src-height="283" align="center"/>

<img src="/assets/FeC7bBG76o64h0xxPuRcTFfCnrb.png" src-width="1220" src-height="368" align="center"/>

<img src="/assets/YStHbejsOo1gEAxmljPcbb8andh.png" src-width="1220" src-height="594" align="center"/>

创建教程：

首先，创建一个大模型节点，用户对用户输入内容进行解析，获取关键内容，如故障地点、故障设备、故障现象等

<img src="/assets/X1thb89CHoxOnlxmpWGcAUdunaf.png" src-width="439" src-height="763" align="center"/>

<img src="/assets/Vho0bCvKBo3L6CxW9ZKcBX9Uneh.png" src-width="420" src-height="625" align="center"/>

模型随意选择，这种简单的场景，任何模型都应付的来

系统提示词可以参考以下内容：

> 请根据用户的问题，解析出以下变量内容并返回：
> didian：故障地点
> shebei：故障设备
> xianxaing：故障现像

用户提示词使用  {{input}}，

注意这个变量要在 “输入” 这里创建

并选择变量值为：开始节点的USER_INPUT

创建以下输出变量：

> 变量名：didian 格式：String  作用：提取上报信息中的故障地点
> 变量名：shebei 格式：String  作用：提取上报信息中的故障设备
> 变量名：xianxiang 格式：String  作用：提取上报信息中的故障现象

接下来创建一个“文本处理”节点，创建3个输入变量，分别选择大模型节点输出的故障地点、设备、现象变量

<img src="/assets/WkjAbJHhXo2tWExuroucMk8dnle.png" src-width="445" src-height="667" align="center"/>

接下来，创建一个“插件”节点

<img src="/assets/B2GAbK8SnorwPrx7EWQcxOH6nLU.png" src-width="1920" src-height="869" align="center"/>

搜索“wpush”，选择 WPUSH推送助手 插件的 send 工具。用于发送消息到微信

选择我们刚添加的 WPUSH推送助手 插件

输入变量中，apikey选择你的apikey。title为推送标题 ，根据实际需求填写。

content变量值选择上一个“文本节点返回的内容”

其他参数可以为空。

<img src="/assets/HbVkbCo6uoDbppx7Q2JcCLdLnZb.png" src-width="430" src-height="676" align="center"/>

其中，apikey为你在WPUSH平台的ID，获取方式：

打开 wpush.cn 网站，并用微信登录

在个人消息页面即可看到

<img src="/assets/R3cCbSE3ZoEteTxcqBLcdNTvnMf.png" src-width="1920" src-height="869" align="center"/>

注意，这个key只能给一个人发送消息。（支持给一群人发消息，如果需要 请留言）

所以在实际中，插件节点的apikey变量应该引用其他节点的返回结果。

根据不同的故障，分配给不同的人进行处理。

现在，将节点连接到结束节点，即可完成搭建。

