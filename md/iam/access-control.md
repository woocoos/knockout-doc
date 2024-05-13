---
id: access-control
---

# 访问管理

Knockout使用基于策略的访问控制(Policy-Based Access Control, PBAC)来定义已验证用户的授权操作和资源。每个策略都包含一个操作和资源，并且可以包含一个或多个条件。PBAC允许您定义一个策略，然后使用它来控制对资源的访问，这些操作和条件描述了一个用户或角色的权限。其语法的基础是AWS IAM的策略语法，可参考[AWS IAM策略语法](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements.html)。

## 策略结构

选取了使用与 AWS IAM 策略相同的结构，以方便理解，但目前没有支持全部语法。

```json
{
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [ "app.action1", ... ],
            "Resource": [ "app:arnExpression1", ... ],
            "Condition": { ... }
        },
        {
            "Effect": "Deny",
            "Action": [ "app.action2", ... ],
            "Resource": [ "app:arnExpression2", ... ],
            "Condition": { ... }
        }
    ]
}
```

