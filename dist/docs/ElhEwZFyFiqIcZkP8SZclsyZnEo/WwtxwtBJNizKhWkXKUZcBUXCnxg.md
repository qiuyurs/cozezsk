---
title: 3.4 飞书多维表插件
slug: ElhEwZFyFiqIcZkP8SZclsyZnEo\WwtxwtBJNizKhWkXKUZcBUXCnxg
sidebar_position: 3
---


# 3.4 飞书多维表插件

目前，飞书多维表有2个常用插件

- 官方插件
    <img src="/assets/B4KsbuQV1oJSi4xIwxMc7ZQknSg.png" src-width="1078" src-height="167" align="center"/>
    - 优点：可操作用户的表格
    - 缺点：需要用户授权，且授权流程较复杂
    - 适用场景：根据用户，操作不同的多维表

- 第三方插件
    <img src="/assets/HQdgbnyodoxRiIx809lcfmgXnhh.png" src-width="1091" src-height="159" align="center"/>
    - 优点：无需授权，即可使用
    - 缺点：需要配置飞书应用，流程复杂
    - 适用场景：记录智能体的聊天记录到同一多维表等

# 参数获取流程

目前2个插件只有需要的参数不同，其他参数类型全部通用。

## 官方插件

在扣子首页，点击左下角的【头像】，再点击【设置】

<img src="/assets/WNtYb5qkIoqhVix4eBRchAz0noh.png" src-width="1920" src-height="869" align="center"/>

点击【数据源】- 【飞书】 - 【授权】

<img src="/assets/HRxbbFUczotn1ZxGXN8cffrJnDe.png" src-width="1253" src-height="663" align="center"/>

跳转到授权页面，使用操作多维表的账号进行授权

授权的账号需要有多维表的操作权限

<img src="/assets/LmfpbTVMgoj1aSxSm3ncsYNxnge.png" src-width="774" src-height="683" align="center"/>

## 第三方插件

打开 [飞书开发平台-开发者后台](https://open.feishu.cn/app?lang=zh-CN) 创建企业自建应用

<img src="/assets/Kuo4bHyk0oKqc4xhJvjcVpS2nei.png" src-width="1920" src-height="869" align="center"/>

应用名称和描述自定义填写即可

<img src="/assets/LgoibxYDEodhF2xn6HBcHTSvngh.png" src-width="1920" src-height="869" align="center"/>

点击侧边栏的权限管理 - 开通权限

<img src="/assets/Qwk6bcaoIomGaVxMZ4Oc5o32ndf.png" src-width="1920" src-height="869" align="center"/>

开通以下权限：

- 复制多维表格 - base:app:copy
- 创建多维表格 - base:app:create
- 获取多维表格信息 - base:app:read
- 更新多维表格 - base:app:update
- 查看、评论、编辑和管理多维表格 - bitable:app
- 查看、评论和导出多维表格 - bitable:app:readonly
- 新增协作者 - base:collaborator:create
- 新增字段 - base:field:create
- 新增记录- base:record:create
- 新增自定义角色 - base:role:create
- 新增数据表 - base:table:create
- 新增、更新或删除视图 - base:view:write_only

这些权限可根据自己的需求，选择性添加即可

<img src="/assets/PAiKbXu3zokbNUxtedOcAZy8n7g.png" src-width="1920" src-height="869" align="center"/>

<img src="/assets/PDPabVB8qoUr0qxAxjacY3c6nSg.png" src-width="1920" src-height="869" align="center"/>

点击侧边栏的【版本管理与发布】 - 【创建版本】

<img src="/assets/QJObbcM9bo9D1Px8K9ecKgj8nob.png" src-width="1920" src-height="869" align="center"/>

填写版本号和更新说明

<img src="/assets/WkpCbmvFCoqa4Mxe3phctWMpnUb.png" src-width="1920" src-height="869" align="center"/>

保存并发布

<img src="/assets/A6d9bG0YcoCqHaxez3Tcgi6nnkh.png" src-width="1920" src-height="869" align="center"/>

点击侧边栏的【凭证与基础信息】

<img src="/assets/PXnSb2DbsoRhJixY1D7cnmwenxf.png" src-width="1920" src-height="869" align="center"/>

记录 App ID 和 App Secret 参数

还需要在要操作的多维表中添加此应用

点击右上角【···】 - 【更多】 - 【添加文档应用】

<img src="/assets/Iag2b59xCojg9mxRKYJcXQOcnVg.png" src-width="1920" src-height="869" align="center"/>

搜索刚才创建的应用并添加

<img src="/assets/LEq6bYiX4o3lHxxoaQTcg3Vgn1e.png" src-width="1920" src-height="869" align="center"/>

注意权限需要修改为【可编辑】并点击【添加】

<img src="/assets/NuwLbqgDyo1jegx2aj1cCvoXnjQ.png" src-width="1919" src-height="869" align="center"/>

## 通用参数

<img src="/assets/WsQTb8tYFohpPHxtJ2Wc3Fy2nFh.png" src-width="452" src-height="420" align="center"/>

以下参数是通用的：

- app_token：填写多维表的分享链接URL
- appid(第三方插件)：刚才获取到的App ID
- appsecret(第三方插件)：刚才获取到的App Secret

任何工具都需要填写，将不再工具介绍中提到

## 通用返回值：

- code - 状态码
    - 0为成功，其他值为错误。错误原因请看各工具的状态码页面

- log_id - 日志ID
- msg - 提示消息
    - success为成功，其他值为错误原因

通用错误码原因：[通用错误码](https://open.feishu.cn/document/server-docs/api-call-guide/generic-error-code)

# add_records工具 - 添加数据记录

此工具是用来将数据写入到飞书多维表

<b>必要参数</b>：

- records - 需要写入的数据
    - 格式：[{"fields":{"文本":"文本内容","单选":"选项 1","日期":1674206443000}}]

## 添加单条记录

这里以记录用户的聊天记录为例

创建一个多维表，记住字段名称

<img src="/assets/RTLPbLVkCofbTtxCuavcuI5Xnmd.png" src-width="1920" src-height="869" align="center"/>

创建工作流

在大模型后，添加【代码节点】和【add_records】工具

<img src="/assets/MGehbSc5xo85bfxUPpTcP9aJnef.png" src-width="1598" src-height="225" align="center"/>

大模型相关配置就不赘述了，这里详细讲解代码节点和多维表插件

<img src="/assets/Wk6BbI2wUom3VSxldgAcQaVznxe.png" src-width="1920" src-height="869" align="center"/>

复制以下代码，IDE语言切换为Python

其中【问题】是多维表的列名，【"huida"】是引用变量的名称。

```
async def main(args: Args) -> Output:
    params = args.params
    # 构建输出对象
    ret: Output = {
        "info": [
            {
                "fields" : {
                    "问题":params.get("title", ""),
                    "回答":params.get("title", ""),
                    "超链接": {
                        "link": "https://gwl1554ppni.feishu.cn/wiki/G8YSwgk7MiW7rbkxCLcc35VjnPf",
                        "text": "手把手带你学扣子知识库"
                      },
                     "数字/评分/进度/货币": 3,
                     "单选": "选项1",
                     "复选框": true,
                      "多选": [
                        "选项1",
                        "选项2"
                      ],
                    # 不够用可以复制上面的内容
                }
            }
        ],  # 输出一个数组
    }
    return ret
```

在插件的输出中，仅保留一个参数【info】类型为【Array&lt;object&gt;】

<img src="/assets/P4NmbZHXuo4WCtxeLCJcNxcwn3h.png" src-width="448" src-height="159" align="center"/>

在【add_records】工具中，records参数引用代码节点输出的info变量即可

<img src="/assets/DXQsbsyK8o34uAxF50Zc29Wdnfd.png" src-width="1920" src-height="869" align="center"/>

可以看到，并没有报错，数据已经正常写入了。

<img src="/assets/N3KzbH0EnodLDAxaOEqcs3CPntb.png" src-width="993" src-height="722" align="center"/>

## 添加多条记录

相比添加单条记录而言，添加多条记录只需要修改相关代码即可，无需修改其他参数

<b>使用代码</b>

data为传入的列表变量

```
async def main(args: Args) -> Output:
    params = args.params
    info = []
    # 遍历data列表中的数据
    for book in params.get("data", []):
        # 构建基础字段
        base = {
            "fields":{
                "书名": book.get("title", ""),  # 书名是多维表的列名
                "出版社": book.get("publisher", ""), # publisher是data变量下的值
                "ID": book.get("book_id", "")
            }
        }
        info.append(base)
    return {"info": info}
```

写入成功~

<img src="/assets/Tqjybrcw2ornJNx8zdmca6PTnRg.png" src-width="958" src-height="672" align="center"/>

错误码请查询： [飞书开放平台](https://open.feishu.cn/document/server-docs/docs/bitable-v1/app-table-record/create)

# create_base - 创建多维表

必要参数：

- name - 多维表名称

可选参数：

- folder_token - 多维表格 App 归属文件夹。默认为空，表示多维表格将被创建在云空间根目录。支持输入文件夹 token 或者 文件夹 URL。

<img src="/assets/FnWsbXe4mo9M5qxU1mhcgN7Nnfb.png" src-width="434" src-height="352" align="center"/>

试运行结果

<img src="/assets/PKPnbBh04o6bYnxwqxQcEnkZnfd.png" src-width="469" src-height="645" align="center"/>

返回值：

- url - 文档链接
- app_token - 多维表格的唯一标识符
- default_table_id - 默认数据表ID
- name - 多维表名称
- time_zone - 文件夹ID，为空则是云空间根目录

# create_table - 创建数据表

## 请求参数

必要参数：

- app_token - 多维表格的唯一标识符
- name - 数据表名称

可选参数：

- default_view_name - 默认表格视图的名称，不填则默认为表格。
- fields - 数据表的初始字段列表
    - 1. 如果 default_view_name 字段和 fields 字段都不填写，将会创建一个仅包含索引列的空数据表。
    - 2. 如果指定了 fields 字段，将会创建一个包含初始字段的数据表且默认第一个字段为索引列。
    - 格式：[{"field_name": "文本","type": 1}]
        - field_name 是字段名称（列名）
        - type 是字段类型 - <b>可选值有</b>：
            - `Text`：文本
            - `Email`：邮箱地址
            - `Barcode`：条码
            - `Number`：数字
            - `Progress`：进度
            - `Currency`：货币
            - `Rating`：评分
            - `SingleSelect`：单选
            - `MultiSelect`：多选
            - `DateTime`：日期
            - `Checkbox`：复选框
            - `User`：人员
            - `GroupChat`：群组
            - `Phone`：电话号码
            - `Url`：超链接
            - `Attachment`：附件
            - `SingleLink`：单向关联
            - `Formula`：公式
            - `DuplexLink`：双向关联
            - `Location`：地理位置
            - `CreatedTime`：创建时间
            - `ModifiedTime`：最后更新时间
            - `CreatedUser`：创建人
            - `ModifiedUser`：修改人
            - `AutoNumber`：自动编号

## 测试

请求数据

```
{
  "app_token": "EzIbbOJT7aMbAXsk2RucnNqgnie",
  "fields": [
    {
      "field_name": "文本",
      "type": 1
    }
  ],
  "name": "api数据表"
}
```

返回数据

```
{
  "code": 0,
  "data": {
    "default_view_id": "vewSbdmwjP",
    "field_id_list": [
      "fldhXDUicf"
    ],
    "table_id": "tblALWZKNQlGfQuN"
  },
  "log_id": "202503271851445E66CC98432D3F1D7A5C",
  "msg": "success"
}
```

## 返回值

- default_view_id - 默认视图ID
- table_id - 数据表ID

# list_tables - 列出全部数据表

## 请求参数

必选参数：

- appToken - 多维表的唯一标识符

可选参数：

- page_size - 分页大小，默认值为 20，最大值为 100
- page_token
    - 分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果。

## 测试

发送请求

```
{
  "app_token": "EzIbbOJT7aMbAXsk2RucnNqgnie"
}
```

返回值

```
{
  "code": 0,
  "data": {
    "total": 2,
    "items": [
      {
        "table_id": "tbll6EPOylJC4qfM",
        "name": "数据表",
        "revision": 0
      },
      {
        "table_id": "tblALWZKNQlGfQuN",
        "name": "api数据表",
        "revision": 0
      }
    ],
    "page_token": "tblALWZKNQlGfQuN",
    "has_more": false
  },
  "log_id": "20250327185528F17B233225B80E1ED0E0",
  "msg": "success"
}
```

## 返回值

- total - 获取到的数据表数量
- page_token - 遍历可采用该 page_token 获取查询结果
- has_more - 是否还有更多
- items - 获取到的数据表信息
    - table_id - 数据表ID
    - name - 数据表名称

# search_record - 查询数据

## 请求参数

- apptoken - 多维表的唯一标识服

可选参数：

- automatic_fields - 控制是否返回自动计算的字段, true 表示返回。
- field_names - 字段名称，用于指定本次查询返回记录中包含的字段。
    - 示例值：["字段1","字段2"]。默认返回全部

- filter - 筛选条件
    - conjunction - 表示条件之间的逻辑连接词，该字段必填，请忽略左侧必填列的否
    - conditions - 筛选条件集合
        - field_name - 筛选条件的左值，值为字段的名称
        - operator - 条件运算符
            - `is`：等于
            - `isNot`：不等于（不支持日期字段，了解如何查询日期字段，参考[日期字段填写说明](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-record/record-filter-guide#29d9dc89)）
            - `contains`：包含（不支持日期字段）
            - `doesNotContain`：不包含（不支持日期字段）
            - `isEmpty`：为空
            - `isNotEmpty`：不为空
            - `isGreater`：大于
            - `isGreaterEqual`：大于等于（不支持日期字段）
            - `isLess`：小于
            - `isLessEqual`：小于等于（不支持日期字段）
            - `like`：LIKE 运算符。暂未支持
            - `in`：IN 运算符。暂未支持
        - value - 条件的值，可以是单个值或多个值的数组。不同字段类型和不同的 operator 可填的值不同。

- page_size - 分页大小，默认值为 20，最大值为 500。, default value is 20
- page_token - 分页标记
    - 第一次请求不填，表示从头开始遍历
    - 分页查询结果还有更多项时会同时返回新的 page_token
    - 下次遍历可采用该 page_token 获取查询结果。

- sort - 排序条件列表
    - 例如：[{"field_name":"多行文本","desc":true}]  desc为倒序排序

- table_id - 多维表格数据表的唯一标识符
- table_name - 多维表格数据表的名称
- user_id_type - 用户 ID 类型
    - 可选值有 open_id、union_id、user_id，默认值为 open_id。 , default value is open_id

- view_id - 视图的唯一标识符，获取指定视图下的记录。

## 测试数据

请求参数

```
{
  "app_token": "https://gwl1554ppni.feishu.cn/base/EsuGbiV5rakvlVsbbIQcWW72npb?table=tblw9FyMElU6UGBf&view=vewM6bekwO",
  "filter": {
    "conditions": [
      {
        "field_name": "系列",
        "operator": "is",
        "value": [
          "Coze"
        ]
      },
      {
        "field_name": "pv",
        "operator": "isGreater",
        "value": [
          "50"
        ]
      }
    ],
    "conjunction": "and"
  }
}
```

返回值

```
{
  "data": {
    "items": [
      {
        "fields": "{\"Token\":[{\"type\":\"text\",\"text\":\"G8YSwgk7MiW7rbkxCLcc35VjnPf\"}],\"pv\":425,\"创建时间\":1740807294000,\"字符数\":5500,\"更新时间\":1742136639000,\"uv\":270,\"平台\":\"飞书\",\"数据更新时间\":1743004504426,\"文章\":{\"link\":\"https://gwl1554ppni.feishu.cn/wiki/G8YSwgk7MiW7rbkxCLcc35VjnPf\",\"text\":\"首页\"},\"系列\":\"Coze\"}",
        "record_id": "recjJSQp06"
      },
      {
        "fields": "{\"pv\":102,\"uv\":79,\"创建时间\":1740826221000,\"更新时间\":1740826304000,\"系列\":\"Coze\",\"Token\":[{\"type\":\"text\",\"text\":\"PCuHwQCloiaAAkkNhI6ctobXnqc\"}],\"字符数\":10,\"平台\":\"飞书\",\"数据更新时间\":1743004507420,\"文章\":{\"link\":\"https://gwl1554ppni.feishu.cn/wiki/PCuHwQCloiaAAkkNhI6ctobXnqc\",\"text\":\"Coze扣子平台\"}}",
        "record_id": "recuEVknQ8hZuj"
      },
      {
        "fields": "{\"平台\":\"飞书\",\"数据更新时间\":1743004518277,\"文章\":{\"link\":\"https://gwl1554ppni.feishu.cn/wiki/FHcFwJJo6ieNbzkwaCbcFsxxnHf\",\"text\":\"1-智能体篇\"},\"字符数\":9,\"更新时间\":1740834043000,\"系列\":\"Coze\",\"Token\":[{\"text\":\"FHcFwJJo6ieNbzkwaCbcFsxxnHf\",\"type\":\"text\"}],\"pv\":99,\"uv\":74,\"创建时间\":1740809390000}",
        "record_id": "recuEVOHBN6NWp"
      },
      {
        "fields": "{\"创建时间\":1740809401000,\"字符数\":11,\"文章\":{\"text\":\"2-工作流篇\",\"link\":\"https://gwl1554ppni.feishu.cn/wiki/ThR1wXATEiL0Q9k8BvMcr9Ban6c\"},\"更新时间\":1742716790000,\"系列\":\"Coze\",\"Token\":[{\"text\":\"ThR1wXATEiL0Q9k8BvMcr9Ban6c\",\"type\":\"text\"}],\"uv\":72,\"数据更新时间\":1743004521176,\"pv\":104,\"平台\":\"飞书\"}",
        "record_id": "recuEVOPyzJmPa"
      },
      {
        "fields": "{\"Token\":[{\"text\":\"XCKbwWzRQiK25fkeeyFcWGilnnc\",\"type\":\"text\"}],\"uv\":32,\"创建时间\":1740810269000,\"更新时间\":1742716795000,\"系列\":\"Coze\",\"pv\":51,\"字符数\":2822,\"平台\":\"飞书\",\"数据更新时间\":1743004524193,\"文章\":{\"link\":\"https://gwl1554ppni.feishu.cn/wiki/XCKbwWzRQiK25fkeeyFcWGilnnc\",\"text\":\"2.1 初识工作流\"}}",
        "record_id": "recuEVORZE0hwH"
      },
      {
        "fields": "{\"文章\":{\"link\":\"https://gwl1554ppni.feishu.cn/wiki/ElhEwZFyFiqIcZkP8SZclsyZnEo\",\"text\":\"3-插件篇\"},\"更新时间\":1742716905000,\"系列\":\"Coze\",\"Token\":[{\"type\":\"text\",\"text\":\"ElhEwZFyFiqIcZkP8SZclsyZnEo\"}],\"pv\":86,\"创建时间\":1740809416000,\"平台\":\"飞书\",\"uv\":54,\"字符数\":9,\"数据更新时间\":1743004574659}",
        "record_id": "recuEVPsRo9tSb"
      },
      {
        "fields": "{\"创建时间\":1740809427000,\"字符数\":8,\"数据更新时间\":1743004584848,\"uv\":47,\"pv\":68,\"平台\":\"飞书\",\"文章\":{\"link\":\"https://gwl1554ppni.feishu.cn/wiki/VK6wwe8NwiF5rikbtdZc3l2bnCg\",\"text\":\"4-应用篇\"},\"更新时间\":1740834065000,\"系列\":\"Coze\",\"Token\":[{\"text\":\"VK6wwe8NwiF5rikbtdZc3l2bnCg\",\"type\":\"text\"}]}",
        "record_id": "recuEVPCgn3ZC5"
      },
      {
        "fields": "{\"pv\":104,\"uv\":69,\"创建时间\":1740809441000,\"字符数\":16,\"文章\":{\"link\":\"https://gwl1554ppni.feishu.cn/wiki/IGziwUUieisNq7kP1qGcoIgRnXe\",\"text\":\"5-API/SDK部署篇\"},\"更新时间\":1742716942000,\"Token\":[{\"text\":\"IGziwUUieisNq7kP1qGcoIgRnXe\",\"type\":\"text\"}],\"平台\":\"飞书\",\"数据更新时间\":1743004587515,\"系列\":\"Coze\"}",
        "record_id": "recuEVPECeHw6X"
      },
      {
        "fields": "{\"pv\":111,\"uv\":75,\"创建时间\":1741104472000,\"平台\":\"飞书\",\"数据更新时间\":1743004590177,\"Token\":[{\"text\":\"RLUawGZj2i7MTiksHPGccx99nFb\",\"type\":\"text\"}],\"字符数\":1696,\"文章\":{\"link\":\"https://gwl1554ppni.feishu.cn/wiki/RLUawGZj2i7MTiksHPGccx99nFb\",\"text\":\"5.1 Chat SDK部署指南\"},\"更新时间\":1742716946000,\"系列\":\"Coze\"}",
        "record_id": "recuEVPGdxAupE"
      },
      {
        "fields": "{\"更新时间\":1742716949000,\"pv\":96,\"平台\":\"飞书\",\"数据更新时间\":1743004592650,\"字符数\":1362,\"文章\":{\"link\":\"https://gwl1554ppni.feishu.cn/wiki/K1d3wofDniJXNEkhYOOcjYKonXd\",\"text\":\"5.2 使用JWT获取Access Token\"},\"系列\":\"Coze\",\"Token\":[{\"text\":\"K1d3wofDniJXNEkhYOOcjYKonXd\",\"type\":\"text\"}],\"uv\":58,\"创建时间\":1741171183000}",
        "record_id": "recuEVPHVYgNku"
      },
      {
        "fields": "{\"数据更新时间\":1743004595125,\"更新时间\":1740834088000,\"系列\":\"Coze\",\"uv\":45,\"创建时间\":1740809460000,\"平台\":\"飞书\",\"文章\":{\"link\":\"https://gwl1554ppni.feishu.cn/wiki/TSmMwbcbdiHfArkwms7clAOjnEc\",\"text\":\"6-其他篇\"},\"Token\":[{\"text\":\"TSmMwbcbdiHfArkwms7clAOjnEc\",\"type\":\"text\"}],\"pv\":66,\"字符数\":8}",
        "record_id": "recuEVPJGXlMal"
      },
      {
        "fields": "{\"uv\":38,\"字符数\":9,\"文章\":{\"link\":\"https://gwl1554ppni.feishu.cn/wiki/LjGbwdIWniQBueknz7scXfyXnxd\",\"text\":\"7-常见问题\"},\"更新时间\":1740834096000,\"系列\":\"Coze\",\"Token\":[{\"text\":\"LjGbwdIWniQBueknz7scXfyXnxd\",\"type\":\"text\"}],\"pv\":73,\"创建时间\":1740809501000,\"平台\":\"飞书\",\"数据更新时间\":1743004597383}",
        "record_id": "recuEVPLvgWRnj"
      },
      {
        "fields": "{\"文章\":{\"link\":\"https://gwl1554ppni.feishu.cn/wiki/TdAbwX4X8i5GtRk9MidcRHUunTc\",\"text\":\"8-项目实战\"},\"更新时间\":1742717002000,\"系列\":\"Coze\",\"Token\":[{\"type\":\"text\",\"text\":\"TdAbwX4X8i5GtRk9MidcRHUunTc\"}],\"uv\":34,\"字符数\":10,\"平台\":\"飞书\",\"数据更新时间\":1743004609628,\"pv\":65,\"创建时间\":1740810894000}",
        "record_id": "recuEVPUsXveGk"
      },
      {
        "fields": "{\"Token\":[{\"type\":\"text\",\"text\":\"NtCowtahaiS7vGkKilYcwQDHnDe\"}],\"pv\":68,\"字符数\":1694,\"平台\":\"飞书\",\"数据更新时间\":1743004634882,\"更新时间\":1742717050000,\"系列\":\"Coze\",\"uv\":37,\"创建时间\":1741077873000,\"文章\":{\"link\":\"https://gwl1554ppni.feishu.cn/wiki/NtCowtahaiS7vGkKilYcwQDHnDe\",\"text\":\"8.4.1 将智能体部署到网页\"}}",
        "record_id": "recuEVQck6R07q"
      },
      {
        "fields": "{\"pv\":58,\"字符数\":360,\"平台\":\"飞书\",\"文章\":{\"link\":\"https://gwl1554ppni.feishu.cn/wiki/Q5eYwgCPNiMLDtkm9jDcEzY1nJe\",\"text\":\"8.4.2 纯前端部署多Agents\"},\"系列\":\"Coze\",\"Token\":[{\"text\":\"Q5eYwgCPNiMLDtkm9jDcEzY1nJe\",\"type\":\"text\"}],\"uv\":31,\"创建时间\":1741269265000,\"数据更新时间\":1743004637350,\"更新时间\":1742717056000}",
        "record_id": "recuEVQe7iVP0u"
      }
    ],
    "page_token": null,
    "total": 15,
    "has_more": false
  },
  "log_id": "202503271911263303FA2F66AD2A1FAD79",
  "msg": "success",
  "code": 0
}
```

## 返回值

- items - 返回的数据
    - fields - 本行的数据
    - record_id - 该行的ID，后续可用这个ID修改这行数据

# update_records - 更新数据

## 请求参数

必选参数

- app_token - 多维表的ID
- records - 需要更新的记录列表
    - 格式为：[{"fields":{"文本":"文本内容","单选":"选项 1","日期":1674206443000},"record_id":"recuiZkZ0mS8aq"}]

可选参数

- table_id - 多维表格数据表的唯一标识符
- table_name - 多维表格数据表的名称
- user_id_type - 用户 ID 类型
    - 可选值有 open_id、union_id、user_id，默认值：open_id。, default value is open_id

## 测试数据

请求前

<img src="/assets/LyeJbW8OgoZikixq77gcQSmdnQg.png" src-width="1117" src-height="288" align="center"/>

请求数据

```
{
  "app_token": "https://gwl1554ppni.feishu.cn/base/ETHUbE19daiMOBsQQNKc9g1Tnqe?table=tblfgUtsNnsYWxK3&view=vewKLdr8kf",
  "records": [
    {
      "fields": {
        "ID": "1234",
        "书名": "API测试"
      },
      "record_id": "recuGhfqT2KIkf"
    }
  ]
}
```

返回值

```
{
  "code": 0,
  "data": {
    "records": [
      {
        "record_id": "recuGhfqT2KIkf",
        "fields": "{\"ID\":\"1234\",\"书名\":\"API测试\"}"
      }
    ]
  },
  "log_id": "202503272207225C8E31CCDCAFB12F3FFD",
  "msg": "success"
}
```

请求后

<img src="/assets/NDpXboLx4oKDODxvbyrc6o5Knec.png" src-width="1119" src-height="273" align="center"/>

