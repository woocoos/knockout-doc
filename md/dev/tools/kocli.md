---
id: kocli
---
# kocli 命令

kocli 是开发 Knockout 应用的配套工具。

## 安装

```go
go install github.com/woocoos/kocli@latest
```

## 命令

### kocli init

该命令可快速初始化一个Knockout项目.

```bash
USAGE:
   kocli init [command options]

OPTIONS:
   --package value, -p value  项目包名,如"github.com/woocoos/helloworld"
   --target value, -t value   生成代码目录, 默认当前文件夹"."
   --frontend, -f             是否生成前端代码,默认false,目前暂时未更新为最新代码框架
   --help, -h                 显示帮助
```

生成的代码结构是按照Kockout开发推荐的代码组织方式, 涉及的技术栈请参考[Knockout](https://github.com/woocoos/knockout).

### 应用数据命令

应用数据主要是与应用有关的元数据, 如应用资源, 操作,菜单等经常需要手动登记到应用数据中, 我们提供了一些命令来帮助快速完成这些操作。

```
USAGE:
   kocli res command [command options] 

COMMANDS:
   gql-action  从gql提取应用操作数据,写入指定Kockout数据库
   ent         从数据模型定义中生成应用资源数据,写入指定Kockout数据库
   menu        从Web项目中的菜单数据提取应用菜单数据,写入指定Kockout数据库
   help, h     显示帮助
```

由于涉及直接向数据库写入数据,因此几个命令中都需要指定Kockout数据库配置文件, 默认为`knockout.yaml`。配置文件示例如下:
```yaml
## 与knockout项目一致的ID生成配置.当然也可以独立,但不推荐。
snowflake:
  # 机器id
  node: 1
  # 时间戳起始时间 北京时间 2023-01-01 00:00:00
  epoch: 1672531200000
  # 机器id位数
  nodeBits: 1
  # 序列号位数
  stepBits: 8
## 数据库配置
store:
  portal:
    driverName: sqlite3
    dsn: "file:portal?mode=memory&cache=shared&_fk=1"
```

> 未来考虑通过API写入应用数据。

#### 应用资源命令

我们将应用资源的配置定义在EntSchema中, 这部分数据涉及今后的数据权限配置.
由于模型文件是go文件, 需在正确编译的基础上.

```bash
USAGE:
   kocli res ent [command options]

OPTIONS:
   --config value, -f value  knockout配置 (default: "knockout.yaml")
   --app value, -a value     应用编码 (应同于version/info.go中的定义)
   --schema value, -e value  ent schema目录 (default: "codegen/entgen/schema")
   --help, -h                show help
```

#### 应用操作

应用操作数据涉及到我们的权限控制, 来源于Graphql及RestAPI接口定义。

- Graphql接口

   ```
   USAGE:
   kocli res gql-action [command options]

   OPTIONS:
      --config value, -f value  knockout配置 (default: "knockout.yaml")
      --app value, -a value     应用编码(应同于version/info.go中的定义)
      --gql value, -g value     gqlgen所使用的配置文件 (default: "codegen/gqlgen/gqlgen.yaml")
      --help, -h                show help
   ```
- RestAPI接口: TODO

#### 应用菜单

应用菜单数据来源于Web项目的菜单数据, 主要用于权限控制。

```
USAGE:
   kocli res menu [command options]

OPTIONS:
   --config value, -f value  knockout配置 (default: "knockout.yaml")
   --app value, -a value     应用编码(应同于version/info.go中的定义)
   --data value, -d value    web项目的菜单配置 (default: "web/src/components/layout/menu.json")
   --help, -h                show help
```

菜单数据格式:

```json
[
  {
    "name": "home",
    "icon": "home",
    "children": [
      {
        "name": "dashboard",
        "icon": "dashboard",
        "path": "/dashboard"
      }
    ]
  }
]
```

`path`项对应一个`menu`,而含有`children`的项则对应`menu dir`.
