# quick-cra

> 快速使用create-react-app创建一个符合个人使用习惯的react应用

## 背景

一个完整的可以使用的 `javascript/typescript` 项目需要依赖众多工具链，为了避免重复配置，所以将较为通用的配置文件抽离成通用模板，通过命令行应用快速创建项目。主要包括以下通用的配置内容：

  - eslint

  - prettier

  - tsconfig

  - babel

  - webpack

  - git-cz/commitizen

  - standard-version

## 用例

```
# 为index.js添加可运行权限
chmod +x index.js

# 在~/.zshrc中添加以下内容
alias quick-cra="path/to/quick-cra/index.js"

# 创建项目
# quick-cra [projectType] [projectName]
quick-cra cra demo
cd demo
```

## 支持的模板类型

```
cra: quickCra,
koa: quickKoa,
base: quickBase,
'cra-js': quickCraJs,
```

1. cra: `quick-cra cra [projectName]` -> 使用 `create-react-app` 创建一个 `typescript react app` ；

1. cra-js: `quick-cra cra-js [projectName]` -> 使用 `create-react-app` 创建一个 `javascript react app` ，支持 `stage-1` 特性[管道操作符](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/%E7%AE%A1%E9%81%93%E6%93%8D%E4%BD%9C%E7%AC%A6)和所有 `typescript` 支持的未进入标准的实验性特性；

1. cra-js with antd & mobx: `quick-cra cra-js [projectName] --default` -> 使用 `create-react-app` 创建一个 `javascript react app` ，支持 `stage-1` 特性[管道操作符](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/%E7%AE%A1%E9%81%93%E6%93%8D%E4%BD%9C%E7%AC%A6)和所有 `typescript` 支持的未进入标准的实验性特性；将官方的页面模板替换为自定义模板，具有以下特性：

  - 使用 `Ant Design` 作为 UI 框架，配置了基础的[固定侧边栏](https://ant.design/components/layout-cn/#components-layout-demo-fixed-sider)式页面布局

  - 使用 `Mobx` 作为状态管理工具，使用 `mobx-react-lite` 作为 `Mobx` 和 `React` 的绑定，因此其仅支持函数式组件

  - 配置了两个基础的工具函数：经过一定封装的网络请求函数和一个用于生成唯一 ID 的函数

1. koa: `quick-cra koa [projectName]` -> 创建一个 `koa 2` 后端服务器，使用 `typescript`，提供了基础的文件结构、路由和开发环境跨域等预配置功能；

1. base: `quick-cra koa [projectName]` -> 创建一个空的 `typescript` node 应用。
