---
id: iam-index
---

# 身份和访问管理

Knockout采用IAM机制来管理主体（Subject）与资源的关系(Object)，对操作执行身份验证和鉴权。

- 验证（Authentication）
  
  验证客户端身份的过程。Knockout要求客户端使用JWT（JSON Web Token）作为基本验证凭证。
）作为基本验证凭证。并可通过配置签名（如AWS签名，类微信签名）来增强身份验证。

- 鉴权（Authorization）
  
  验证客户端对资源的访问权限的过程。Knockout底层是使用基于策略的访问控制（Policy-Based Access Control）来管理权限，管理层面上又是支持基于角色的访问控制（Role-Based Access Control），兼容了传统的企业应用中常见的管理方式。

## 身份管理

Knockout内置了身份管理功能，未来也计划支持处部身份管理。

// insert a table

| 身份提供者（IDP） | 描述 |
| --- | -------- |
| Knockout IDP | 内置的身份管理功能 |


## 访问管理

Knockout使用基于策略的访问控制（Policy-Based Access Control）来定义用户可以访问的授权操作和资源。每条策略描述了一个或多个操作和条件，这些操作和条件描述了用户或角色的权限。

Knockout的PBAC主要参考了常见的IAM提供商的策略模型，如AWS IAM，Azure RBAC，Google IAM，Aliyun IAM等,希望在语法与结构行为上进行兼容。（todo：文档工作）
