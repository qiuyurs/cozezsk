---
title: 3.2 画板插件
slug: ElhEwZFyFiqIcZkP8SZclsyZnEo\GeahwTS3XiJ5RwkQ2nlcP9vvneu
sidebar_position: 1
---


# 3.2 画板插件

画板节点是一个支持自定义绘制的图形创作节点。画板节点通常用于图文排版和设计场景，例如电商海报、营销 banner、社交媒体博文配图等。

你可以在画板节点中插入各种元素，例如上传指定图片、添加文本、添加矩形等各种线性图形、画笔自由绘制等，还可以添加变量元素，引用上游节点的输出。除此之外，你还可以设置元素图层、画板尺寸、画板颜色、画板透明度等。

在画板编辑区域双击预览图即可编辑画板，你也可以在画板编辑右上角单击图标来进入编辑状态。

## 变量元素

画板节点中添加的变量可以作为一个画板元素展示在画面中，这种画板元素被称为变量元素。

如果需要引用上游节点的输出参数，作为画板节点的元素之一，可以在画板节点的配置页面元素设置区域单击加号（+）来增加一个元素，元素值引用上游节点的输出参数。

注意：本节点只支持String与Image格式的值。其中Image格式可以是url链接

<img src="/assets/QxO6bjQJvo9ag4xGJjYclDMkn8W.png" src-width="358" src-height="193" align="center"/>

添加变量元素后，此元素不会默认展示在画布中，你需要在画布手动添加这个元素。目前支持通过以下方式在画布中添加变量元素：

我们可以在开始节点中添加输出参数 title，并在画板节点中引用这个参数 title，title 参数的值会自动添加到画板节点中。

<img src="/assets/EkilbnkT0o0oUOxnPcCcHOtknWg.png" src-width="1920" src-height="869" align="center"/>

## 画板设置

修改画板尺寸和背景颜色

16:9为横版比例，9:16为竖版比例。并且支持修改画板的宽和高

<img src="/assets/GzXCb2QDroKszVxEIU2czORgnmd.png" src-width="1920" src-height="869" align="center"/>

支持上传本地图片与绘制形状

<img src="/assets/RjXLbWmd5oYz7LxgVaMcnOFVnjb.png" src-width="1920" src-height="869" align="center"/>

画笔与文本文字

<img src="/assets/BsMDbdvX1oPbrxx0WxgcKLIqnzg.png" src-width="1920" src-height="869" align="center"/>

这个文字写出来不是很直观，我们实际做一个东西看看吧

## 使用

示例：用户输入一首诗词名称，我们生成一张背景图，并将诗词内容显示在背景图上，返回给用户。

<img src="/assets/ULtYbLZ6MocwzHx9uFFcqcUBn7N.png" src-width="1907" src-height="515" align="center"/>

其他节点就不介绍了，我们专注于画板节点的配置

<img src="/assets/WvhDbds4Io4rO8xY2WycfCJbnAf.png" src-width="1920" src-height="869" align="center"/>

配置变量，获取诗词的背景、名称、作者、内容

<img src="/assets/TTtwbUlpZoXD2lxlx5nc2JFVnFd.png" src-width="1920" src-height="869" align="center"/>

先点击右边的“全屏”按钮，再点击左上角的变量、选择“beijing”变量

<img src="/assets/XEy1bqEoaowuR3x0uKDcTtb2ncb.png" src-width="1920" src-height="869" align="center"/>

拖动这几个点，拉动图片，直至覆盖住背景板

<img src="/assets/YRAFb8qTnol6VjxWwSkcsYFWnkh.png" src-width="1920" src-height="869" align="center"/>

选择其他变量，拖动文字放在指定地方，并修改字体、字号、颜色、排版方式

<img src="/assets/FSm2b6vfKo85jsxEzOPcfblTnqe.png" src-width="1920" src-height="869" align="center"/>

为了方便识别、可以先自定义一个内容。

等待工作流运行时，会自动替换该内容为实际内容

<img src="/assets/Iv7jbkTqGoypKyxEIANcaho4ndh.png" src-width="1920" src-height="869" align="center"/>

让我们看一下生成结果吧

<img src="/assets/ILH6bMxu0oTpgBxykMmc8AmOngc.png" src-width="320" src-height="627" align="center"/>

## 更多示例：

通过画板节点搭建一个生成小红书配图的图像流。其中：

- 添加变量元素 mbti 和 title，引用开始节点的输入参数，作为画板中动态调整的 MBTI 部分、主题部分。
- 添加变量元素 image，引用开始节点的图片输入，作为画板中的配图。
- 最后为图片设置一个底色、调整尺寸即可。

节点配置

<img src="/assets/JdzzbxO2JoNwFoxEwVNc4DHXnbb.png" src-width="1877" src-height="840" align="center"/>

生成结果

<img src="/assets/EgzIbyzWlofcBNxaCjbcIq8dn1f.png" src-width="1024" src-height="1100" align="center"/>

