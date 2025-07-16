---
title: 常见问题B1
slug: >-
  LjGbwdIWniQBueknz7scXfyXnxd\CdN3wW9ETiW37okmx97cohBqnyh\YQLUwNKP3iReRokUGtocmvILnOb
sidebar_position: 0
---


# 常见问题B1

## 1.大模型节点输出内容为空

现象：

<div class="flex gap-3 columns-3" column-size="3">
<div class="w-[33%]" width-ratio="33">
<img src="/assets/Waczb60HwoKxfYxRCYzc5S5Pntf.jpeg" src-width="1071" src-height="688" align="center"/>

</div>
<div class="w-[33%]" width-ratio="33">
<img src="/assets/GSzSbmzM4o8dRtxNLDZcsVBqnTh.jpeg" src-width="562" src-height="931" align="center"/>
</div>
<div class="w-[33%]" width-ratio="33">
<img src="/assets/YwRObWobMoSAu2xVqSicWrtLnPf.jpeg" src-width="562" src-height="931" align="center"/>
</div>
</div>

原因：

大模型输出的格式与节点设置的格式不一致。大模型输出的是 Array&lt;string&gt; ,节点选的是 Array&lt;object&gt;  变量类型不同

修改为同一类型即可。

---

## 2.操作飞书文档/多维表数据时，提示错误：通过授权...

完整报错：

> 错误:通过授权,您同意与您在Coze中选择的
> AI模型分享您的数据,请点击[这里]
> (https://open.feishu.cn/open-
> apis/authen/v1/index?
> redirect_uri=https%3A%2F%2Fbot-open-
> api.oceancloudapi.com%2Fapi%2Foauth 2Fa
> uthorwT1g...)进行授权。

点击右上角的 “授权” 按钮进行授权。

<img src="/assets/E9HZb3S4voCJvwxnz4ucrA9xnQc.png" src-width="495" src-height="855" align="center"/>

或使用其他插件，使用Appid等密钥进行查询/写入操作。

---

## 3.应用怎么定时执行工作流，实现定时刷新的效果？

使用开始节点的“触发器设置”

<img src="/assets/Mxicb9fnWoG1eOxTWPjchqwAn0b.jpeg" src-width="966" src-height="750" align="center"/>

---

## http请求节点的 json 请求体怎么引用前面一个节点的参数?

输入框中，输入“{”即可跳出变量选择页面

<img src="/assets/NL9GbiONSo3ohnx8G1lcJ8RHnrf.png" src-width="700" src-height="382" align="center"/>

---

## 知识库提示分片数量已经达到知识库上限

<img src="/assets/RGKWb6IlCoNNuMxR5cWcsrg5nJD.png" src-width="878" src-height="177" align="center"/>

分段数量达到上限，请使用数据库代替或拆分为多个知识库

---

## 6.工作流 xxx 调用失败，原因：Pro call plugin qps too high

插件并发过高导致报错，请不要同时运行多个插件。

目前测算：同时运行超过5个插件就会提示该错误。

参考报错提示：

<img src="/assets/MqTKb4Rt4oH942xSSzPcBFepnTh.jpeg" src-width="629" src-height="286" align="center"/>

---

## 7.插件怎么打印日志（print）？

使用 args.logger.info 进行打印

<img src="/assets/CoYObr0Gao7XvTxpq22cWtIOn9e.png" src-width="1118" src-height="784" align="center"/>

---

