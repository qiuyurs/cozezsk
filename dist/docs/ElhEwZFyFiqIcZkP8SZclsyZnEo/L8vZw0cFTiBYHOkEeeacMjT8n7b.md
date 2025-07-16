---
title: 3.1 图像生成插件
slug: ElhEwZFyFiqIcZkP8SZclsyZnEo\L8vZw0cFTiBYHOkEeeacMjT8n7b
sidebar_position: 0
---


# 3.1 图像生成插件

图像生成节点用于生成图片。通过图像生成节点，你可以将一段文字转为图片，也可以根据参考图生成图片。

## 模型设置

选择用于生成图片的模型，并设置生成的图像比例和质量。

- 模型：扣子提供多种多预训练的模型供你挑选，每个模型出图的风格不同，例如专用于动漫场景的动漫模型、面部处理更加细致自然的人像模型等，你可以选择不同的模型后，分别试运行体验模型效果。
- 比例：生成的图像比例，默认为 1024 × 1024，支持的宽高范围为 [512,1536]
- 生成质量：数值越大画面越精细，生成时间越久。默认为 25，范围为 [1,40]。

<img src="/assets/VAANbLe3YozoEZxY2szcLuZ8nFc.png" src-width="1920" src-height="869" align="center"/>

<img src="/assets/SRcub24KtovkJ0xipJccJcVZnTe.png" src-width="1920" src-height="869" align="center"/>

<img src="/assets/ChYpb2ePPorgO7xIuY8cOO60nnf.png" src-width="1920" src-height="869" align="center"/>

### 参考图

生成图像的参考图，支持设置多个参考图。

简单来说：这个功能可以让你上传几张图片作为 “样板”，然后 AI 会模仿这些图的特点，自动生成新图片。比如你上传一张风景照和一张卡通图，AI 就能画出同时带有这两种风格的新作品。

- 参考模式：指定模型如何参考指定图片，支持画面的空间关系、人物姿势等多个参考模式，例如你可以根据页面提示选择一个合适的模式。
    - 这个功能相当于让 AI「照葫芦画瓢」，但你可以指定重点模仿的方向。比如：
        1. 空间模式：AI 会记住你上传图片里物体位置（比如左边有棵树，右边有座房子），生成的新图会保持这种布局。
        2. 姿势模式：AI 会模仿图中人物的动作（比如叉腰站姿），生成不同人物但姿势相似的新图。
    - 操作就像点菜单：在生成页面选一个你需要的模式，AI 就会按这个方向去模仿你的参考图。

- 参考图：参考图的模型参考图可以使用开发者上传的图片，也可以引用上游节点输出的图片。
- 参考程度：参考程度越高，图像越相似。

<img src="/assets/WpcxbSmS5oZ5cixLgcCc2wYEnfd.png" src-width="1920" src-height="869" align="center"/>

支持上传多张参考图，并制定不同的参考程度

## 输入

提示词中可使用的输入参数，用于动态传入内容。输入参数可以指定为一个固定值，也可以引用上游节点的输出。

比如：

- 批量生成带不同人名的海报，只需把 "名字" 参数关联到 Excel 表格
- 用前一步 AI 生成的配色方案，自动填入当前绘画的配色参数

## 提示词

### 正向提示词

用于描述你想要出现在画面中的内容。比如：生成xx...

反向提示词

用于描述你的画面中不想生成的内容

<img src="/assets/EqVRbmhJCoPSKDxweUAcGZplnYk.png" src-width="1920" src-height="869" align="center"/>

## 输出

data变量为生成的图片（通常为url）

msg为生成状态

<img src="/assets/J5DZbC7ztoJf0GxCXPAcXx53nLc.png" src-width="1920" src-height="869" align="center"/>

如果对生成结果不满意，请优化提示词。

比如我对上面生成的这张照片就不是很满意。于是我优化了一下提示词

```shell
在温馨舒适的卧室里，阳光透过轻薄的窗帘，洒下柔和的光影，照亮了柔软的床铺。小埋身着可爱的家居服，慵懒地趴在床上，脸颊微微泛红，双眼透着惬意与放松。她的双臂紧紧抱着一个蓬松柔软的白色抱枕，那抱枕仿佛是她此刻最温暖的依靠 ，与她一起沉浸在这惬意的时光里。
```

<img src="/assets/Au2mbgGCxoHW9QxkNhGcn9ojnOg.png" src-width="1920" src-height="869" align="center"/>

是不是比上一张强了很多？

根据你的要求，不断修改提示词 直到生成出满意的图片

## 示例

文生图

通过文字描述生成一张动漫风格的图片。模型选择动漫，引用开始节点的用户原始输入作为正向提示词，并添加一系列正向的关键词作为提示词。负向提示词为 low quality，表示避免低质量图像。节点配置及试运行结果如下：

<img src="/assets/WxK0bR8yPobmfvxECpYceTnnnmd.png" src-width="1579" src-height="856" align="center"/>

图生图

通过参考图片生成一张相同人物造型和姿势的动漫图片。模型选择动漫，参考图上传一张想要的人物造型与动作图片。引用开始节点的用户原始输入作为正向提示词。负向提示词为 low quality，表示避免低质量图像。节点配置及试运行结果如下：

<img src="/assets/KerpbcZCEojgY1xP7JJcjPKynwc.png" src-width="1525" src-height="838" align="center"/>

