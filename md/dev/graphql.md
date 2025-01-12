
# 使用Graphql API

GraphQL 是Knockout中的一等公民. 为了便于使用GraphQL API,我们提供了一些工具来辅助使用它.


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

## 使用分页支持

### Relay Pagination

支持使用标准的Relay分页参数进行分页.
详情请参考[Relay Connection Specification](https://relay.dev/graphql/connections.htm)

### Simple Pagination

Knockout支持简单的分页参数(页码和每页行数),以方便被常规的UI分页组件使集成, 在Relay Pagination相同的用法,不同在于在请求参数中添加`p`参数做为页码,然后使用 Relay的first参数做为每页行数.

使用方式:

在`ent generate`中加入插件
```
import(
    ...
    "github.com/woocoos/knockout-go/codegen/entx"
    ...
)
func main() {
    ex, _ := entgql.NewExtension(...)
    opts := []ent.Option{
        entc.Extension(ex),
        entx.SimplePagination(),
        ....
    }
    err = entc.Generate("./ent/schema", &gen.Config{},opts...)
    if err != nil {
        log.Fatalf("running ent codegen: %v", err)
    }
}
```

在GraphQL Server中引入扩展的中间件:
```
import "github.com/woocoos/knockout-go/pkg/middleware"

gqlSrv := handler.NewDefaultServer(NewSchema(s.resolver))
s.gqlSrv.AroundResponses(middleware.SimplePagination())
```

接下来就可以在页面中配合分页控制使用了.

在GraphQL中,使用`p`参数和`first`参数进行分页,例如:

```
POST /graphql?p=1

{
    "query": "query { users(first: 10) { edges { node { id } } } }"
}
```