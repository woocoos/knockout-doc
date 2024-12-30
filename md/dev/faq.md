# FAQ

### 使用generate Ent代码时, `gql_pagination.go`会出现引用错误的`entco`包

由于该包已经被废弃, 你可以将`$GOROOT/pkg/mod/github.com/woocoos/entco`包移除, 这样可以避免冲突。