---
title: 8.3.1 实战开发coze应用-姓氏头像生成器（上）
slug: >-
  TdAbwX4X8i5GtRk9MidcRHUunTc\WOABwqrysiKHyFkMOXic8JHen9d\NNwqwP4fjiPFpCk9eVNcKT8gnjf
sidebar_position: 0
---


# 8.3.1 实战开发coze应用-姓氏头像生成器（上）

上次，我们开发了一个对话形式的头像生成器智能体（Agents），广受大家欢迎。

同时也接收到一些用户的反馈，生成前无法看到头像样式、初次使用不会用等等。

对此，我准备使用Coze开发一个应用，以可视化的形式生成头像，降低学习成本。

同时，我也会将开发过程分享给大家，帮助大家学习使用扣子Coze，将AI融入自己的生活，提升自己的竞争力。

首先，我们登录扣子（coze.cn）

点击左侧边栏的“工作空间”-“项目开发”-“创建”-“创建应用”

<img src="/assets/MsjRbsFQRoSVY1xWGW3cQ0gcnFe.png" src-width="1920" src-height="870" align="center"/>

点击“创建空白应用”

<img src="/assets/ECoFbwY6poVIMrxTfIocDxeEngg.png" src-width="1920" src-height="870" align="center"/>

输入名称，应用介绍和图标可根据自己喜爱进行修改

<img src="/assets/By3KbJiTHo5YGFxq3TVcJFu4nYd.png" src-width="1920" src-height="870" align="center"/>

创建成功后可以看到下面这张图，我们先点击“用户界面”将用户看到的页面布置好

<img src="/assets/PBHdblPRYosGOxxhczNcVn5Wnxb.png" src-width="1920" src-height="870" align="center"/>

<img src="/assets/DH6ibgmD1oj7fFxF1o7cekY6npd.png" src-width="1920" src-height="870" align="center"/>

这里根据自己的要求选择，为了方便大家的使用，我选择了“小程序和H5” 点击 “开始搭建”

此时，会看到下面这个页面，左边的是可以添加的组件，包括文本、图片、表单等

中间是用户看到的页面内容，右边是当前组件的属性，比如这个图片显示什么内容、如何显示等。

<img src="/assets/DToEbQ0QUo2uinxkddLcuW5Andg.png" src-width="1920" src-height="870" align="center"/>

下面是我们的显示图，上面是用户可以选择生成的头像，中间由用户输入姓氏、祝福语等。下面是用户定制的头像

<img src="/assets/Uj6ibNQelo5ZgXxaLoBceN6inTc.png" src-width="665" src-height="765" align="center"/>

我们开始实现这张图

首先，我们点击左边的容器组件，拖动到页面的上部，然后点击该组件，修改组件的属性

宽度为 百分比 100%

高度为 固定 260px

排列方向 换行

溢出 滚动

<img src="/assets/Ktd7bzMsdopyGIx8QETcFpVinJg.png" src-width="1920" src-height="870" align="center"/>

然后我们放入一个 “图片” 组件，拖到刚才的 "容器"组件里面，点击“图片”组件，修改它的属性

宽度 百分比 47%

高度 百分比 60%

这里重点说下为什么宽度是47%的百分比而不是50%，因为两个组件之间它们并不是紧紧挨着，他们是有间距的，如果它的宽度是50%的话，加上他们自身的宽度就会超出100%，导致第二个图片被挤到第二行。

而高度可以设置大点，超出100%后，会自动隐藏，并提供一个滚动条，供用户滑动选择

然后点击上方的 “上传” 按钮，上传模板图片。

然后重复3次，这里放四个图片。

<img src="/assets/Kr8IblyxhoWXxDxiXOTcom9Bnua.png" src-width="1920" src-height="870" align="center"/>

然后放置“文本”组件，放在图片下方，写上头像编号，供用户选择

文本内容填写头像的编号

宽度为47%，与图片保存一致

高度为10%

<img src="/assets/LcXwbZaSXoOcgRxFMcJc5iZGnFK.png" src-width="1920" src-height="870" align="center"/>

做完这步后，应该是这样的。

为了教学，我只放了4个模板，实际应用中可以多放几个。

<img src="/assets/H1aybaZgwo39wJxT5CHc7z3dn7e.png" src-width="416" src-height="731" align="center"/>

下面，我们再放置一个“容器”组件，让用户输入姓氏和选择头像模板

<img src="/assets/EPMNbA8ooojFgKx0fsfcbAkqnKg.png" src-width="1920" src-height="870" align="center"/>

里面放一个“文本组件”，用于让用户输入姓氏

标签内容为输入框上面的文字

占位文案为输入框内显示的文字

<img src="/assets/YlWXbRgfwofZtWxInfJcpuGjnVg.png" src-width="1920" src-height="870" align="center"/>

其他的不用修改

接下来 放置一个下拉选择组件

<img src="/assets/HIyWbUL1DoIMKfxiJFHcQ37Pn5f.png" src-width="1920" src-height="870" align="center"/>

点击右方“+”号可以添加选项

然后单击“选项”

修改选项名称和选项值（一会要用）

注意，这里一定要选择一个默认值，不然如果用户没有选择内容的话，会报错

<img src="/assets/VnIRbVZngo7fFRxr1TvcFCb9nlc.png" src-width="1920" src-height="870" align="center"/>

最后，放一个按钮

内容写“立即生成”，其他不用改

我们用户页面的配置就到这里了，下篇文章告诉大家如何配置工作流，成功生成定制头像

