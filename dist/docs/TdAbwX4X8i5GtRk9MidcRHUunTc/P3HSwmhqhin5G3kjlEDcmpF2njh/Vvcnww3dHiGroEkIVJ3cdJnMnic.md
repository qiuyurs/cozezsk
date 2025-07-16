---
title: 8.4.3 ChatSDK的会话隔离
slug: >-
  TdAbwX4X8i5GtRk9MidcRHUunTc\P3HSwmhqhin5G3kjlEDcmpF2njh\Vvcnww3dHiGroEkIVJ3cdJnMnic
sidebar_position: 2
---


# 8.4.3 ChatSDK的会话隔离

## 项目背景

经实际使用发现，当前ChatSDK存在聊天记录共享问题，具体表现为：

1. 不同用户点击后显示的聊天记录完全一致
2. A用户发送的消息会实时显示在B用户的对话界面中

此类跨用户的信息交叉显示存在严重的数据隔离缺陷，不符合隐私保护要求。针对该问题，技术团队已拟定解决方案。如对改进方案存在任何疑问，敬请随时与我们联系沟通。

授权流程如下：

1. 在扣子平台创建 OAuth 应用。
2. 应用程序通过公钥和私钥签署 JWT。
3. 应用程序通过 [通过 JWT 获取 Oauth Access Token](https://www.coze.cn/open/docs/developer_guides/oauth_jwt#a458f4b1) API，获取访问令牌。
4. 应用程序根据访问令牌调用扣子 API。

## 创建应用

首先，创建一个新应用

<img src="/assets/PcLibjqwvo8qnRxPK7lcpWrKncc.png" src-width="1920" src-height="869" align="center"/>

客户端类型选择“服务类应用”，其他的随意

<img src="/assets/GYx2b4HkPoH4B2xqEMXcbJuvnnd.png" src-width="1017" src-height="633" align="center"/>

创建Key，此时会自动下载一个文件。文件里面是私钥，

红框中这一串是公钥，记住这两个值

<img src="/assets/UbJNbGklCoNcfrxBbnWcBcJln3k.png" src-width="1028" src-height="795" align="center"/>

权限根据自己的需要选择，如果调用Chat SDK的话，选择以下四个权限：

- Bot管理
- 会话管理
- 文件
- 消息

点击确定，此时会让你同意授权，继续点击确定

<img src="/assets/KrKMb3dLlo963rxoAemcGPlknYd.png" src-width="795" src-height="587" align="center"/>

最后，记录住这个应用ID

<img src="/assets/ApBJbBe6coVC35xzlIGcibJXnKe.png" src-width="1551" src-height="437" align="center"/>

我们一个需要三个Key，分别是：应用ID、公钥、私钥

## 签署JWT

### Header参数

> {
> "alg": "RS256",          // 固定为RS256
> "typ": "JWT",            // 固定为 JWT
> "kid": "gdehvaDegW....." // 刚才创建应用的公钥
> }

### Payload参数

> {
> "iss": "310000000002",   // OAuth 应用的 ID
> "aud": "api.coze.cn",   //扣子 API 的Endpoint，固定
> "iat": 1516239022,       // 现在的时间戳
> "exp": 1516259022,       // JWT过期时间，秒级时间戳
> "jti": "fhjashjgkhalskj", // 随机字符串，防止重放攻击
> "session_name":"1234"  // 访问令牌的会话标识
> }

注意这个session_name参数，这是Chat SDK中实现用户会话隔离的唯一方法。

请保证这个参数每个用户是唯一且不重复。

如果重复或未指定 session_name，不同用户的对话历史可能会掺杂在一起。

### 生成JWT

参考以下Python代码，生成JWT

[generate_jwt.py](/assets/HFSObErevoskQ9x4TDmclZBYnwb)

<img src="/assets/D5uKbR8JloaxF8xUATdcklEhncd.png" src-width="717" src-height="148" align="center"/>

获取到这段字符串

## 获取Access Token

根据以下格式发送请求，即可获取到Access Token

```
curl --location --request POST 'https://api.coze.cn/api/permission/oauth2/token' 
 --header 'Content-Type: application/json' 
 --header 'Authorization: Bearer JWT字符串' 
 --data '{
     "duration_seconds": 86399,
     "grant_type": "urn:ietf:params:oauth:grant-type:jwt-bearer"
 }'
```

对此，继续提供封装好的Python 函数，可以直接调用

获取到以下Token

获取到这段字符串

## 获取Access Token

根据以下格式发送请求，即可获取到Access Token

```
curl --location --request POST 'https://api.coze.cn/api/permission/oauth2/token' 
 --header 'Content-Type: application/json' 
 --header 'Authorization: Bearer JWT字符串' 
 --data '{
     "duration_seconds": 86399,
     "grant_type": "urn:ietf:params:oauth:grant-type:jwt-bearer"
 }'
```

对此，继续提供封装好的Python 函数，可以直接调用

[get_access_token.py](/assets/QfyhbkRdnocHBYxx2nycFkKVnXg)

获取到以下Token

<img src="/assets/F4tybeICKod6uYxsSdLcK9Tdn3g.png" src-width="690" src-height="63" align="center"/>

使用这个Access Token初始化ChatSDK即可实现会话隔离，每个用户看到的聊天记录不同。

