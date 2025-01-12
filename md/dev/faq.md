# FAQ

## Ent

### 使用generate Ent代码时, `gql_pagination.go`会出现引用错误的`entco`包

由于该包已经被废弃, 你可以将`$GOROOT/pkg/mod/github.com/woocoos/entco`包移除, 这样可以避免冲突。

### 数据库出现`command out of sync. Did you run multiple statements at once?`

一般是因为sql连接池不够, 你可以尝试在数据库配置中增加连接数量
```
maxIdleConns: 50
```
出现该问题时,你要反向去观察出现该错误的页面, 是否并发执行大量sql, 比如 查询出现 N+1 问题.