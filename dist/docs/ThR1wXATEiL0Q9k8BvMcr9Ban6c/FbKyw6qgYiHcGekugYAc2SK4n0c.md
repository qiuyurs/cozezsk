---
title: 2.18 问答节点
slug: ThR1wXATEiL0Q9k8BvMcr9Ban6c\FbKyw6qgYiHcGekugYAc2SK4n0c
sidebar_position: 17
---


# 2.18 问答节点

## 这个功能是做什么的？

就像在对话中设置一个 "提问环节"，当对话进入这个环节时，AI 会主动向你提问，收集需要的信息。比如订餐时问你想吃什么、订票时问出发时间等。

<img src="/assets/FpsGbHmuKo0Hd1xzdHxcGNapn6g.png" src-width="1920" src-height="869" align="center"/>

## 基础设置

### 提问内容怎么写？

- 直接输入想问的问题，比如 "请问您需要查询哪个城市的天气？"
- 可以使用动态内容，比如 "{{用户名}} 您好，需要帮您查询哪天的机票？"

## 提问的两种方式

### 方式一：自由回答

<img src="/assets/OfeabDmnaozWCexFJlNcaUQXnhd.png" src-width="1920" src-height="869" align="center"/>

<img src="/assets/XKXQb3o2Eor2Vpx9Emhca478nLg.png" src-width="1920" src-height="869" align="center"/>

- 适用于需要具体信息的场景
- 例子：问地址、日期、商品规格等
- AI 会自动从回答中提取关键信息
- 如果信息不全（比如只说 "上海" 没说日期），AI 会继续追问

> 实际效果：
 用户：我想查天气
 AI：请问要查询哪个城市、哪天的天气呢？
 用户：明天
 AI：好的，请问要查询哪个城市的天气呢？

### 方式二：选项回答

<img src="/assets/I0s4b0g7doYc6Ux7dmXcDTl8n1c.png" src-width="1920" src-height="869" align="center"/>

<img src="/assets/Xmm8bel8Podgzux267zcMeLqnhf.png" src-width="651" src-height="605" align="center"/>

- 提供多个选项按钮
- 适合有限选项的场景（比如选择服务类型）
- 每个选项对应不同后续流程
- 要设置 "其他回答" 的处理方式

> 设置示例：
 选项 1：查询天气 ➔ 进入天气查询流程
 选项 2：订票服务 ➔ 进入订票流程
 其他回答 ➔ 提示 "请点击按钮选择"

## 信息收集与使用

### 自动保存回答

- 用户的回答会自动保存为USER_RESPONSE
- 可以设置自动提取关键信息（比如从回答中提取城市名和日期）

<img src="/assets/KN8ybtZNhoCFZ4xXkPFcqPvannc.png" src-width="1920" src-height="869" align="center"/>

### 提取重要信息

<img src="/assets/Ce3Hb8y4mo9NI9xK4zycoox2nwh.png" src-width="501" src-height="612" align="center"/>

1. 开启 "提取字段" 开关
2. 设置需要的信息（比如城市、日期）
3. 选择是否必须填写
4. 设置错误提示语

> 示例设置：
 必填字段：城市、日期
 未填提示："请同时说明城市和日期哦，例如：上海明天"

## 重要提醒

❗ 这个功能在多数聊天渠道（如微信公众号）暂时不能直接使用按钮形式，但文字选项仍然有效

 ❗ 选项回答每个选项都要设置后续流程

 ❗ 自由回答要设置最少重试次数（建议 2-3 次）

