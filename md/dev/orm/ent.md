# Ent

在Knockout中, 我们使用了[Ent](https://github.com/ent/ent)来做为数据库访问层, 建议先阅读[ent官方文档](https://entgo.io/docs/getting-started)来了解其基本概念,继而体验其强大的功能。

而我们也在Ent的基础上做了一些扩展, 以辅助我们完成一些企业级开发中的常见需求.

如果你之前已经使用了`kocli`完成了项目的初始化,那Ent的代码生成相关目录在`codegen/entgen`中. 我们可以看到包含定义的schema文件夹.

接下来我们重点讲下扩展的内容.

## Tenant组件

Tenant组件提供了对多租户的数据库自动控制支持. 在schema使用如下

```go
type Example struct {
    ent.Schema
}

func (Example) Mixin() []ent.Mixin {
    	return []ent.Mixin{
        // ... other mixins
		schemax.NewTenantMixin[intercept.Query, *gen.Client]("example", intercept.NewQuery),
	}
}

func (World) Fields() []ent.Field {
	return []ent.Field{
		field.Int(schemax.FieldTenantID).Immutable(),
        //... other fields
	}
}
```

Tenant组件在查询时会为每个数据操作添加一个`tenant_id`拦截器,作用如下:

1. 为数据新增时, 自动为`tenant_id`字段设置context中的`tenant_id`值.
2. 为数据修改时, 自动添加`tenant_id`字段, 并且不允许修改`tenant_id`字段.
3. 为数据删除时, 自动添加`tenant_id`字段, 并且只删除当前租户的数据.
4. 为数据查询时, 自动添加`tenant_id`字段, 并且只查询当前租户的数ad