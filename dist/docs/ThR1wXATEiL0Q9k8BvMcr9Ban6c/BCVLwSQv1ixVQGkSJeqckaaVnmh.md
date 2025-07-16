---
title: 2.17 变量赋值节点
slug: ThR1wXATEiL0Q9k8BvMcr9Ban6c\BCVLwSQv1ixVQGkSJeqckaaVnmh
sidebar_position: 16
---


# 2.17 变量赋值节点

变量赋值节点是工作流中用于修改和存储变量值的节点。

## 赋值

为变量赋值时，在变量赋值节点的输入中添加需要赋值的参数。

请注意，字段名设置为需要赋值的变量名称，变量值可以设置为固定值，也可以引用上游节点的输出参数。

变量赋值节点可以为用户变量、应用变量赋值，但不能为系统变量赋值。

<img src="/assets/HXzBbxAgvoV4hZxMO3FcrRxGnhg.png" src-width="1920" src-height="869" align="center"/>

刚点击时，可能看不到用户变量和应用变量。

这是因为还没绑定智能体，您点击【试运行】选择相关智能体或应用后，即可在这里选择变量

<img src="/assets/FKJNb0sAMoKMxcxvmhDc2tSFnzd.png" src-width="1920" src-height="869" align="center"/>

一定要显示智能体配置的变量，如果不显示，要重新配置

<img src="/assets/EmKSbFB44of0znxQfC9c94mmnVe.png" src-width="1920" src-height="869" align="center"/>

现在已经能正常选择变量了

测试一下

选择性别

<img src="/assets/Son7bF9oHoUDcrxl0X1cCnOHnrW.png" src-width="1920" src-height="869" align="center"/>

变量已经更新成功

<img src="/assets/U8J5bJGx5o3COWxI3qmcGiXjnyh.png" src-width="1920" src-height="869" align="center"/>

## 智能体配置变量

智能体必须开启【变量】功能，并设置相关变量

在智能体配置页面

<img src="/assets/EC2Nb8KkQoiTKvxIOE8chqJwn7b.png" src-width="1920" src-height="869" align="center"/>

点击【➕】号

<img src="/assets/OfD5buCTdo9ycVxb0JWcvLNzn5f.png" src-width="1920" src-height="869" align="center"/>

添加变量即可被工作流获取到

## 应用配置变量

在应用的【业务逻辑】-【设置】-【变量】中

设置用户变量和应用变量

<img src="/assets/WPJrbfXgqoZlZFxPE2ocGf2Qn5g.png" src-width="1920" src-height="869" align="center"/>

## 使用场景

通过变量赋值节点，将特定的值赋给变量，可以实现数据的动态更新和传递，使工作流能够根据实时数据做出相应的处理和决策。变量赋值节点应用广泛，例如：

- 存储中间结果：在工作流中，将中间计算或处理的结果通过变量赋值节点存储到变量中，以便后续节点使用。例如，在开发一个智能医疗诊断应用时，需要对患者的病历数据进行预处理，如提取关键症状、检查结果等信息。此时，可以设置一个变量patient_info，将患者的病例数据通过变量赋值节点存储起来，后续在进行疾病诊断时，可以直接从patient_info变量中获取患者的详细信息。
- 记录用户输入：在与用户交互的工作流中，用户的输入信息是后续处理的重要依据。通过变量赋值节点，可以将用户的输入存储到变量中。例如，在开发一个智能客服机器人时，当用户向客服机器人咨询产品问题时，机器人提取用户关心的问题的关键词，然后将这些关键词通过变量赋值节点存储到一个名为user_query的变量中。在后续的处理节点中，机器人会根据user_query变量中的内容，从知识库中检索相关的答案或解决方案，并生成回复文本。
- 控制流程分支：在工作流中，通常需要根据不同的条件来决定执行不同的分支流程。变量赋值节点可以用来设置控制流程分支的条件变量，通过赋予变量不同的值，来引导工作流走向相应的分支。例如，在开发一个个性化推荐系统时，需要收集用户的基本信息和行为数据，如年龄、性别、浏览历史等，然后分析用户的兴趣偏好，并将结果通过变量赋值节点存储到一个名为user_preference的变量中。在生成推荐内容时，根据user_preference变量值来决定推荐策略。

