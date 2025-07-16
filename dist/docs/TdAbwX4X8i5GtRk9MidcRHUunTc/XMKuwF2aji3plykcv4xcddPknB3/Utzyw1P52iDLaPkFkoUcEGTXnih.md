---
title: 8.2.2 Coze发送消息到飞书
slug: >-
  TdAbwX4X8i5GtRk9MidcRHUunTc\XMKuwF2aji3plykcv4xcddPknB3\Utzyw1P52iDLaPkFkoUcEGTXnih
sidebar_position: 1
---


# 8.2.2 Coze发送消息到飞书

在很多企业内部场景下，都需要发送数据到内部交流软件，如飞书、钉钉、企业微信

本文就以飞书为例，企业内部其他同事上报故障后，自动发送消息到飞书， 并@相关人员

本文提供的案例为最小化案例，仅演示相关功能。请按具体情况根据实际修改后使用。

<img src="/assets/Lro0bxpeNo8SwWxvYjrcRyC4nmb.png" src-width="1854" src-height="286" align="center"/>

除去开始和结束节点外，仅使用了3个工作流节点即可实现相关内容。

效果演示：

<img src="/assets/GsyybrynxoZHJAxeBtUcR9FYnNg.png" src-width="473" src-height="433" align="center"/>

<img src="/assets/IySdbQOysoBUxXxejipc7M2enNh.png" src-width="572" src-height="184" align="center"/>

教程：

首先，创建一个大模型节点，用户对用户输入内容进行解析，获取关键内容，如故障地点、故障设备、故障现象等

<img src="/assets/HZAsbsVHnoRFQoxk4DXc2EB1nOd.png" src-width="439" src-height="763" align="center"/>

<img src="/assets/HTCEbDBF1oQ0zVxQiuYcXQ7Yn9g.png" src-width="420" src-height="625" align="center"/>

模型随意选择，这种简单的场景，任何模型都应付的来

系统提示词可以参考以下内容：

> 请根据用户的问题，解析出以下变量内容并返回：
>  didian：故障地点
>  shebei：故障设备
>  xianxaing：故障现像

用户提示词使用  {{input}}，

注意这个变量要在 “输入” 这里创建

并选择变量值为：开始节点的USER_INPUT

创建以下输出变量：

> 变量名：didian 格式：String  作用：提取上报信息中的故障地点
> 变量名：shebei 格式：String  作用：提取上报信息中的故障设备
> 变量名：xianxiang 格式：String  作用：提取上报信息中的故障现象

 接下来创建一个“文本处理”节点，创建3个输入变量，分别选择大模型节点输出的故障地点、设备、现象变量

<img src="/assets/HZozbNyXIoRaX7xFYm6co9o7nDb.png" src-width="445" src-height="667" align="center"/>

字符串拼接这里自定义你想要输出的格式，这个是要在飞书内显示的。

接下来重点讲一下这个

> &lt;at user_id="ou_d83b35b1f"&gt;AI技术开发者&lt;/at&gt;

其中user_id是需要@的用户id，AI技术开发者为名称，无实际用途。

打开 https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/create

页面，点击快速复制open_id，

<img src="/assets/LMlbbZQAOokM0rxcJ0pcLvgAnic.png" src-width="1920" src-height="869" align="center"/>

选择需要@的人员，点击右下角的复制成员ID

<img src="/assets/Kmorbj5GCojiejxYxP3cNd23nZf.png" src-width="1920" src-height="869" align="center"/>

这个成员ID就是发送消息需要用到的ID。

接下来，创建一个“插件”节点

<img src="/assets/BeAnbKgHcoaw4GxvWxKcbevbn3c.png" src-width="1920" src-height="869" align="center"/>

搜索“飞书”，选择 飞书消息 插件的 send_webhook_message 工具。用于发送消息到飞书

<img src="/assets/GhLObLvoqoaU8Txg3XWc0VZan7d.png" src-width="1920" src-height="869" align="center"/>

现在，我们还有一个东西没有获取到，那就是机器人的webhook地址。

这个地址是你专属的，请保存好。如果泄露，在没有安全验证的情况下，任何人都能操作你机器人发送消息。

那这个地址怎么获取呢？

打开飞书的群聊，一定要是内部群哦，外部群无法使用。请使用其他方案。

选择 设置-群机器人

<img src="/assets/Xd8zbzfQkoYi68xSAzWcI66onCc.png" src-width="845" src-height="897" align="center"/>

添加机器人

<img src="/assets/Ig6FbXbCToevaPxojg7cA53Ante.png" src-width="845" src-height="897" align="center"/>

自定义机器人

<img src="/assets/Hn0EbW0aKotMKxxrERJcxGKDnhh.png" src-width="1050" src-height="726" align="center"/>

修改名称和介绍，点击添加

<img src="/assets/KPbObPajGo8rpUxHopKcO9brnWe.png" src-width="1050" src-height="726" align="center"/>

测试环境，我就全部默认了。

在实际使用中，记得要添加安全验证。

如：关键词验证，IP白名单，签名校验等

<img src="/assets/FejXbRVTgoxAemxOyWHchTOonIJ.png" src-width="1050" src-height="726" align="center"/>

复制这个Webhoook地址，回到扣子工作流

选择我们刚添加的 飞书消息 插件

content 变量选择上一个 节点输出的值

msg_type 参数值填写 text

webhook 参数填写刚才xie

webhook 参数填写刚才获取到的机器人地址

<img src="/assets/OdP0bHdSpohH1MxbhNNca0lvnDh.png" src-width="437" src-height="681" align="center"/>

至此，工作流就创建结束了

接下来，就点击试运行按钮，实际运行一下试试吧~

