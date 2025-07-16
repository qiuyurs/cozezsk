---
title: 2.15 数据库节点
slug: ThR1wXATEiL0Q9k8BvMcr9Ban6c\MU6EwEfF9iC0ZfkyNwxcqKUEnLg
sidebar_position: 14
---


# 2.15 数据库节点

数据库节点用于对指定数据库进行常见的 SQL 操作。

## 输入

节点的输入参数，即 SQL 语句中需要使用的参数，可以设置为固定值，也可以引用上游节点的输出参数。

你可以把节点想象成做菜步骤，输入参数就是做菜需要的材料。比如做西红柿炒蛋：

1️⃣ 材料可以是固定值（自己准备的）："盐 3 克"，"鸡蛋 2 个"

2️⃣ 也可以借用前一步的结果：比如前一步煮面的 "煮面汤 200ml"，直接拿来当炒菜的汤底用

这样后面的步骤就能自动使用前面步骤准备好的材料，不用每次都重新准备啦～

<img src="/assets/Iu93bOYTVolHqJxHMxMc84I3nye.png" src-width="1920" src-height="869" align="center"/>

## 数据表

在数据表区域，你需要根据页面提示添加需要操作的数据表，一个数据库节点最多可添加一个数据表。

在调试期间，数据库节点显示和使用的是数据表的测试数据，而非数据库中的真实线上数据。单击数据表或单击查看数据，弹出数据表的详情页，可查看此数据表的测试数据。你可以手动添加或修改测试数据，也可以试运行数据库节点，通过 SQL 语句插入或修改数据。

<img src="/assets/XBSVbxe9BogPiTxTqZUcsDdlnAb.png" src-width="1920" src-height="869" align="center"/>

这就像你在操作一个练习厨房：

1️⃣ 选菜板：每个灶台只能放 1 个菜板（数据表），选好后系统会给你配练习食材（测试数据）

2️⃣ 试做环节：你可以：

- 直接往菜板加练习食材（手动修改测试数据）
- 用菜谱（SQL 语句）试炒菜（试运行节点）
- 尝味道调整（查看修改后的数据）

3️⃣ 真实厨房隔离：所有操作都在练习厨房完成，不会弄乱真实的厨房（线上数据安全）

就像先用仿真食材练习做菜，确认没问题后再去真实厨房操作～

## SQL

在 SQL 区域输入需要对数据表执行的 SQL 操作，兼容 SQL92 的常用语法。SQL 语句中可以引用数据库节点输入参数中定义的变量，引用格式为 {{变量名}}。

- 不支持 Select* 语法、多表 Join 操作。
- 每次执行数据库节点，最多返回 100 行数据。

你可以自行编写 SQL 语句，也可以根据页面提示由 AI 帮你生成一段

<img src="/assets/SvJabmgXxoEIX2xXQvncGBRingg.png" src-width="1920" src-height="869" align="center"/>

<img src="/assets/QE0GbQrwCoCwWuxipqwcSillntb.png" src-width="1920" src-height="869" align="center"/>

检查无误后，点击【使用】。

但是，这里AI生成的代码是有问题的，扣子不支持 Select* 语法。所以我再优化了一下查询语句。

在语句中，同样可以使用变量

<img src="/assets/ZccMbBvltoRYyixUULVc3CHfn8g.png" src-width="1920" src-height="869" align="center"/>

## 输出

数据库节点的输出参数是 SQL 执行后的输出内容，固定为以下两项：

- outputList：SQL 执行后数据表中的字段和数据。你可以按需新增子项，注意变量名需与 SQL 中定义的字段名一致、数据类型需要和数据表中定义的数据类型一致。
- rowNum：返回的行数或者受影响的行数。

<img src="/assets/RfJBbchRhogAEcxRlHYc2QMXnYb.png" src-width="1920" src-height="869" align="center"/>

在outputList变量中添加子项后，节点只返回子项的内容。

如果没定义，则返回所有内容

这就像超市购物清单功能：

1️⃣ 带清单购物（定义 outputList）：

- 你提前在清单写了 "鸡蛋、牛奶"（添加子项）
- 收银员只打包你清单上的东西（返回子项内容）

2️⃣ 空手购物（不定义）：

- 收银员默认把你购物车所有东西打包（返回全部内容）

小提示：如果发现数据变少，检查是否漏写清单内容；需要完整数据时别带清单～

<img src="/assets/Ra4GboTjSoDFTQxFbpccPi3cnEe.png" src-width="1920" src-height="869" align="center"/>

成功查询出数据。

注意：

- 开发调试阶段不会改动数据库原表，在调试区查看到的是测试数据，和数据库中的真实数据是隔离的。
- 在工作流中调试数据库节点时，不能使用库数据表中的真实数据，需要先插入数据后再进行查、删、改等操作的测试。

