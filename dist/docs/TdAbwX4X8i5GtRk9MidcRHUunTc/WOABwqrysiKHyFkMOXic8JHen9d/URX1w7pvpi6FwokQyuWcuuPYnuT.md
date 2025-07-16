---
title: 8.3.2 实战开发coze应用-姓氏头像生成器（下）
slug: >-
  TdAbwX4X8i5GtRk9MidcRHUunTc\WOABwqrysiKHyFkMOXic8JHen9d\URX1w7pvpi6FwokQyuWcuuPYnuT
sidebar_position: 1
---


# 8.3.2 实战开发coze应用-姓氏头像生成器（下）

在上篇文章中，我们完成了“用户界面”的配置，下面我们就要进行头像生成的逻辑配置了

<img src="/assets/DxbJbIQhwobZiuxY6Zfc8Y7Xnbe.png" src-width="1911" src-height="819" align="center"/>

选择页面逻辑-工作流的+号，新建工作流

<img src="/assets/Y9RxbHxj1oj616x5HhAcYvMcnZf.png" src-width="1720" src-height="829" align="center"/>

选择刚才新建的工作流

<img src="/assets/XjfibOhkPoQIJBxWvencvP1nnah.png" src-width="1920" src-height="870" align="center"/>

点击开始节点

基础上设置，新增两个变量

变量名：xingshi、类型String 必填 用户的姓氏

变量名：tid、类型Integer 必填 用户选择的头像模板

然后添加一个大模型节点

<img src="/assets/Ud6QbSK6boF1HRxv3Q2cSo5An1g.png" src-width="1920" src-height="870" align="center"/>

将开始节点连接到大模型节点

模型选择豆包·Lite即可

技能这里添加“必应搜索”

<img src="/assets/WAy5bBGc6oSjldxReqAcnRtFnmf.png" src-width="1745" src-height="847" align="center"/>

<img src="/assets/N8msbU4nmoJSyCxgsDFcTqa7nlc.png" src-width="1920" src-height="870" align="center"/>

系统提示词可以参考我这个，生成一个短语

> 根据用户的问题，解析出以下信息：
>  name：用户的姓氏
>  谐音梗示例：
>  马到成功 肖兔崽子 蔡貌双全 汪哪里跑
>  dy：用户姓氏开头的谐音梗，需要以姓氏开头。有趣 幽默 网络热梗（不包含姓氏）2-4字。只返回梗，不要返回其他内容。示例：马到成功，只返回“到成功”
>  不要返回无关内容。

用户提示词选择 input变量

<img src="/assets/SGUebyR0Po4CzPxCUFecnhApn9d.png" src-width="1920" src-height="870" align="center"/>

输出格式选择“JSON”

并添加两个变量

name（姓氏）和dy（短语）

接下来添加一个 “选择器”节点

<img src="/assets/Xr8Eb5f9cosLpAxafF8cERuVnnb.png" src-width="1920" src-height="870" align="center"/>

条件这里选择开始节点的tid变量

选择 “等于” ，值就是头像模板

比如值等于1 ，就进入生成头像模板 1的流程

下面添加 画板 节点

<img src="/assets/XeZlbIS6SoknsUxbvUgcmWLOn1N.png" src-width="1920" src-height="870" align="center"/>

连接到选择器

设置两个变量

xingshi和dy，选择大模型返回的变量值

<img src="/assets/OqI5bzLTpoUEQAxYEcEc97WSnsf.png" src-width="1920" src-height="870" align="center"/>

接下来 编辑模板

<img src="/assets/B0Z0bGUeEoNn0CxCNLHcjCw4nBc.png" src-width="1920" src-height="870" align="center"/>

上传头像模板

<img src="/assets/T9cubnsfvo1Kc1xcIhhcfndhnDc.png" src-width="1920" src-height="870" align="center"/>

修改画板尺寸

<img src="/assets/ZpeBbwI6yo2kcdxdLYmcF2kPnUK.png" src-width="1920" src-height="870" align="center"/>

将背景图铺满屏幕并置底

<img src="/assets/ZoxrbhfEeoecvwxbGF2cAMXznHd.png" src-width="1097" src-height="814" align="center"/>

拖动变量，放在合适位置，调整颜色 大小 字体等

<img src="/assets/VDMXbSBoGo8ia6xne74cFhXnncp.png" src-width="1920" src-height="870" align="center"/>

 然后重复四次

将四个模板全部设置好

<img src="/assets/ZpArbFSZxoiNe4x2dGEcEtXbnTh.png" src-width="1920" src-height="870" align="center"/>

我这里是为了演示，所以并没有微调，做出来可能会有点丑，见笑了

接下来添加变量聚合节点，将生成的图片返回到用户

<img src="/assets/KJkobo0tkoSuljxOWbtc2Phcnwb.png" src-width="1920" src-height="870" align="center"/>

<img src="/assets/Su3MbIPgbo1sZzxisJlcv52kncd.png" src-width="1920" src-height="870" align="center"/>

将几个画板节点返回的值都添加进去

最后连接到“结束”节点，选择变量聚合的返回值

<img src="/assets/L8ABbf6VyonEyHxjsficxhrZn3b.png" src-width="1920" src-height="870" align="center"/>

至此，生成逻辑就完成了。

接下来，继续修改用户界面

添加一个新的页面，用户展示生成结果

<img src="/assets/O5jQbrX0Yos9lUx8donc3ou6nxT.png" src-width="1920" src-height="870" align="center"/>

添加一个图片组件和按钮

点击 返回首页 按钮

<img src="/assets/Ojf5bqFLVoM8bGxU5ySct3qZnpd.png" src-width="1920" src-height="870" align="center"/>

在事件页面，新建事件，

类型-点击时

动作-页面跳转

页面类型-内部页面

选择页面-首页

<img src="/assets/PibVbbogaoejl6xA9R1ccfARngf.png" src-width="1639" src-height="794" align="center"/>

我们回到首页，点击“立即生成”按钮，选择“事件”页面

新建事件：

类型-点击时

动作-页面跳转

<img src="/assets/WP5pbIDadohC2wxDZaycAzr7njg.png" src-width="1920" src-height="870" align="center"/>

名称自定义，自己知道就行，一会要用

<img src="/assets/UhdIbcpEqo5Fm5xzVGWcWSkanct.png" src-width="1920" src-height="870" align="center"/>

入参选择输入和选择框

<img src="/assets/TRf1bQFb1oPL8DxUCf3cWHStnhg.png" src-width="1920" src-height="870" align="center"/>

<img src="/assets/OfDebRdm3o6BbPxDSVocQHOBnGb.png" src-width="1507" src-height="765" align="center"/>

不知道是哪的话可以点击左边的“结构”

<img src="/assets/H1WNbUzmgoGXyuxNojlcFcnVnbk.png" src-width="760" src-height="858" align="center"/>

鼠标悬浮在图层上，可以看到右边会显示一个虚线框框告诉你在选择哪里

<img src="/assets/Q3SzboIcvobeY9xZcaxcUUp4nqg.png" src-width="1912" src-height="843" align="center"/>

接下来 点击图片2 的图片

选择-事件

新建一个事件，加载时调用工作流

<img src="/assets/UJgFbfhL9oXu1Xx4zDqcJX9Qn3b.png" src-width="1920" src-height="870" align="center"/>

工作流参数选择页面入参传递的参数

<img src="/assets/G5kVbnSIeowNO9xkCJ7c7hOsnDf.png" src-width="1499" src-height="796" align="center"/>

到此，即为搭建完成！

本章写的逻辑可能有些乱，还请见谅。有问题请留言。

