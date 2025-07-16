---
title: 3.3 提示词优化插件
slug: ElhEwZFyFiqIcZkP8SZclsyZnEo\WiKOwBRuaiIxNMkmBnucnS4inuf
sidebar_position: 2
---


# 3.3 提示词优化插件

指的是“sd_better_prompt”插件

<img src="/assets/IukvbGCgco6Dx1xraqPcwSUhnkc.png" src-width="1920" src-height="869" align="center"/>

这个功能就像一位翻译官：它把你用日常语言描述的画面（比如 "蓝天下的卡通小狗"）转换成 AI 绘画程序能精确理解的参数指令。经过这道翻译工序后，AI 就能更准确地还原你想象中的画面，生成更符合要求的图片。

简单来说：你说话 -&gt; 翻译成机器语言 -&gt; AI 根据优化后的指令作画 = 更高质量的图片

## 输入

只有一个固定的变量【prompt/提示词】

参数值可以直接编写或调用前面节点的返回值（比如用户的问题）

这个功能就像你给画师递纸条：

1. 纸条标题固定叫【prompt】（必须用这个名字）
2. 纸条内容可以：
 ✔️直接手写（比如输入 "赛博朋克风格的小猫"）
 ✔️抄前面同事写好的内容（比如自动获取用户提问的原话）

这样 AI 就能精准收到你的作画要求，不需要每次都从头解释。

<img src="/assets/DvF8bYsNdoFGEcxf5xkcccLEnAh.png" src-width="1920" src-height="869" align="center"/>

## 输出

<img src="/assets/OngMb5z84ohTYKxVv6DcBdinndn.png" src-width="340" src-height="548" align="center"/>

输出变量包含两个参数，其中

data：优化后的图片生成提示词，用于生成高质量的图片

msg：提示词优化状态

这就像快递包裹有两个标签：

1. data：实际货物（优化后的精准提示词）
 ➔ 示例："赛博朋克霓虹猫，4K 细节，光影对比强烈"
2. msg：快递单状态（只告诉你是否优化成功）
 ➔ 示例：显示「提示词已优化」或「优化失败」

实际用到的只有 data，msg 只是进度反馈小纸条

