---
title: 3.5  远程数据库
slug: ElhEwZFyFiqIcZkP8SZclsyZnEo\MKdrwelDqi3wZ9kTGZncgkJEntb
sidebar_position: 4
---


# 3.5  远程数据库

连接远程数据库进行操作，由于需要将数据库开放至公网，请做好安全策略！如限制账号访问权限、使用高位端口等。

使用场景：实时获取公司内部数据

支持数据库：Mysql、Postgre

由于未知原因，本插件无法上传至扣子商店，所以只能公开代码，请自己创建插件使用。

# 输入/输出参数

输入参数：

<img src="/assets/F20abhRqro1CUTxq5sxc14NfnPf.png" src-width="1920" src-height="869" align="center"/>

- host  --- 数据库地址
- port --- 数据库端口
- user --- 用户名
- pwd --- 密码
- database --- 数据库
- sql --- 原生SQL语句

输出参数

<img src="/assets/T8e8byMTQoUOqQxVaIccu9STnCb.png" src-width="1470" src-height="398" align="center"/>

- data --- 执行结果
- msg --- 消息

# 进行测试

<div class="flex gap-3 columns-2" column-size="2">
<div class="w-[50%]" width-ratio="50">
<p>查询数据</p>
<img src="/assets/MqAAb8rjkohAsfxQu5ycA7c9nzf.png" src-width="412" src-height="750" align="center"/>
</div>
<div class="w-[50%]" width-ratio="50">
<p>更新数据</p>
<img src="/assets/AfWzbzZxfoZ21nxGMfYcSG7Qn5R.png" src-width="428" src-height="738" align="center"/>

</div>
</div>

# 代码

## Mysql

```
from runtime import Args
from typings.postgres.postgres import Input, Output
import pymysql  # 替换psycopg2为pymysql
from typing import List, Dict, Any

def handler(args: Args[Input])->Output:
    # 获取输入参数
    host = args.input.host
    port = int(args.input.port)  # 确保port是整数类型
    user = args.input.user
    pwd = args.input.pwd
    database = args.input.database if hasattr(args.input, 'database') else "mysql"  # 默认数据库改为mysql
    sql = args.input.sql  # 添加缺失的sql参数获取
    
    try:
        # 连接MySQL数据库
        conn = pymysql.connect(
            host=host,
            port=port,  # 现在port是整数类型
            user=user,
            password=pwd,
            database=database,
            charset='utf8mb4',  # MySQL需要指定字符集
            cursorclass=pymysql.cursors.DictCursor  # 直接返回字典格式结果
        )
        cursor = conn.cursor()
        
        
        # 执行SQL查询
        cursor.execute(sql)
        
        # 获取查询结果
        if sql.strip().lower().startswith('select'):
            columns = [desc[0] for desc in cursor.description]
            rows = cursor.fetchall()
            data = [dict(zip(columns, row)) for row in rows]
        else:
            data = []
            conn.commit()
        
        # 关闭连接
        cursor.close()
        conn.close()
        
        return {
            "msg": "执行成功",
            "data": data
        }
        
    except Exception as e:
        return {
            "msg": f"执行失败: {str(e)}",
            "data": []
        }
```

## Postgre

```
from runtime import Args
from typings.postgres.postgres import Input, Output
import psycopg2
from typing import List, Dict, Any

def handler(args: Args[Input])->Output:
    # 获取输入参数
    host = args.input.host
    port = args.input.port
    user = args.input.user
    pwd = args.input.pwd
    database = args.input.database if hasattr(args.input, 'database') else "postgres"
    sql = args.input.sql
    
    try:
        # 连接PostgreSQL数据库
        conn = psycopg2.connect(
            host=host,
            port=port,
            user=user,
            password=pwd,
            database=database  # 使用传入的数据库名
        )
        cursor = conn.cursor()
        
        
        # 执行SQL查询
        cursor.execute(sql)
        
        # 获取查询结果
        if sql.strip().lower().startswith('select'):
            columns = [desc[0] for desc in cursor.description]
            rows = cursor.fetchall()
            data = [dict(zip(columns, row)) for row in rows]
        else:
            data = []
            conn.commit()
        
        # 关闭连接
        cursor.close()
        conn.close()
        
        return {
            "msg": "执行成功",
            "data": data
        }
        
    except Exception as e:
        return {
            "msg": f"执行失败: {str(e)}",
            "data": []
        }
```

