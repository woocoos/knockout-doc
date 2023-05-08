
# Graphql API


## 使用全局节点 ID

您可以按照下面这三个步骤有效使用全局节点ID(GID)：
- 调用可返回对象 node_id 的 REST 端点.
- 在 GraphQL 中查找对象的类型.
- 使用 ID 和类型在 GraphQL 中执行直接节点查找.

### 调用可返回对象节点 ID 的 REST 端点

在查询任意具有ID并且支持Noder的类型时.通过ID字段拼接

```
{
    "data":{
        "id": 12345
    }
}
```

确定该ID所属的类型代码:如User类型->'user',如GID: "user:12345",对该ID进行base64编码.

### 在 GraphQL 中查找对象的类型

对于返回全局ID的可以通过类似查询获取该类型:

```
query {
    node(id:"MDQ6VXNlcjU4MzIzMQ==") {
        __typename
    }
}
```
### 使用 ID 和类型在 GraphQL 中执行直接节点查找.

一旦确认类型,即可使用行内分段按 ID 访问对象并返回附加数据. 在本示例中，我们可以定义想要查询的 User 上的字段:
```
query {
    node(id:"MDQ6VXNlcjU4MzIzMQ==") {
        ... on User {
            name
            login
        }
    }
}
```


