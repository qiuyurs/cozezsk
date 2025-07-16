---
title: 常见问题C1
slug: >-
  LjGbwdIWniQBueknz7scXfyXnxd\FTtTwZN5Iiu9GHkJ3KxcMhmFnVf\MNDrwzWHPiVXkjkA5rRcDOBGnwc
sidebar_position: 0
---


# 常见问题C1

# 怎么模仿人类输出（分段输出）？

效果：

让AI回复的更像人类

<img src="/assets/GMyMbbYlHovtMdxL6UxcLBMNn7b.png" src-width="435" src-height="539" align="center"/>

教程：

工作流：

<img src="/assets/QZ2mbJWOgo6Y7gx3Iu6cKTpTnob.png" src-width="1084" src-height="633" align="center"/>

假设大模型节点就是需要的回复，并且已经按句号（。）区别开每句话

后面连接一个 文本处理 节点，选择“字符串分隔”，按“。”进行分割

<img src="/assets/TJs6bzsj9oeh0axRn6scNv8UnBd.png" src-width="1114" src-height="646" align="center"/>

分割后是一个数组，里面存储的是每句话。

这一步其实可以直接让大模型输出，修改大模型节点的参数就好。

后面咱们再接一个 循环 节点，把每句话都输出

<img src="/assets/Vd9Wb1VyIotlPZx8Bymclu2Ln9d.png" src-width="1113" src-height="613" align="center"/>

循环类型选择 “使用数组循环”，循环数组选择 文本处理 节点的返回值，中间变量和输出变量不定义。

循环体里面放一个 输出 节点即可，输出内容选择循环的item变量，也就是需要输出的每句话。

<div class="flex gap-3 columns-2" column-size="2">
<div class="w-[50%]" width-ratio="50">
<img src="/assets/MMs5b3ZvdouYK8xLmkgcSHDInOc.png" src-width="614" src-height="376" align="center"/>

</div>
<div class="w-[50%]" width-ratio="50">
<img src="/assets/Eb6gbRy1mol5fBxxS8rcH4xNnk9.png" src-width="500" src-height="418" align="center"/>

</div>
</div>

---

