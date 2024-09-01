# 低代码工具

WIP, 本功开发中...

## 前端代码生成工具

工具支持的前端低代码引擎为阿里低代码引擎,按照其协议进行前端代码的生成.

### 依赖安装:

TS格式化工具: [typescript-formatter](https://github.com/vvakame/typescript-formatter)
```bash
pnpm install -g typescript-formatter
```


### 使用:

1. 使用阿里低代码工具或其衍生工具生成页面文件协议.
2. 使用命令行工具生成前端代码.

    ```
    USAGE:
    kocli page [command options]

    OPTIONS:
    --target value, -t value  the target directory of the generated code (default: ".")
    --schema value, -s value  the schema file of ali lowcode protocol
    --help, -h                show help

    ```