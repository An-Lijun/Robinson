# robinson
a simple web utils 
building power by edar-cli (skd)

downloda https://www.npmjs.com/package/edar-cli

github   https://github.com/An-Lijun/Edar-cli

## Installation
```JavaScript
  $ npm i robinson
  import {xxx} from 'robinson'
```
## docs
https://an-lijun.github.io/Robinson/

## Support
none (now useing for self)

## 脚本

  "doc": "api-extractor run --config ./config/api-extractor.json  --local --verbose ",// 不推荐使用 生成函数json
        "doc:trace": "api-extractor run --config ./config/api-extractor.json  --local --verbose --traceResolution",//不推荐使用 生成函数md文件
        "doc:debug": "api-extractor run --local --verbose --diagnostics && api-documenter markdown -i temp -o vitepress/etc/doc", // 不推荐使用 调试使用
        "trace": "tsc dist/types/index.d.ts --traceResolution > trace.log", // 不推荐使用 调试使用
        "buildViteDocs": "vitepress build vitepress", // 不推荐使用 打包vitepress 应该使用docs:build命令
        "oldupdatelog": "node ./script/updatelog.js", //不推荐使用 生成更新日志md命令 应该使用 updatelog
        "pub": "node ./script/publish.js", //不推荐使用 旧版本构建发布函数命令
        
        "prepare": "husky install", // git commit钩子
        "test": "jest", //测试命令
        "lint": "eslint --fix --ext .js,.vue src",//Eslint格式化命令
        "commit": "cz", // 提交命令

        "build": "npx rollup -c", //打包函数命令
        "buildAllDocs": "gulp --gulpfile script/genDoc.js", // 生成全部md文档
        "docs:dev": "vitepress dev vitepress", // 开发vitepressDosc使用
        "docs:build": "node ./script/docBuild.js", // 打包vitepress
        "docs:preview": "vitepress preview", // 预览vitepressDosc使用
                
        "publishRobinson": "node ./script/publish.js",   //构建发布函数命令

        "genEtc": "api-documenter markdown -i vitepress/temp -o vitepress/etc/doc", //生成函数md文件
        "genUpdatelog": "gulp  --gulpfile script/updateLogGulp.js", //生成更新日志md命令
        "genReport" :"gulp  --gulpfile script/report.js", //生成测试报告
## 生成文档
1. npm run doc  
2. npm run docs:build

## 测试
npm run test 

## TsType
@bata //是否正式版
@description //函数描述
@param //参数
@returns //返回值
@example //例子

Robinson/
├── src/
│   ├── core/         # 核心函数模块
│   ├── utils/        # 辅助工具函数模块
│   ├── index.js      # 入口文件，导出所有公共 API
├── test/             # 测试文件目录
├── docs/             # 文档目录
├── package.json      # 项目配置文件
├── README.md         # 项目说明文档

# Robinson 项目架构文档

## 1. 项目概述


Robinson 是一个简单的 Web 工具集，由 `edar-cli` 构建而成。该项目主要提供一些 Web 开发相关的实用功能，目前仅供内部使用。

## 2. 项目目录结构

  


项目的根目录下包含多个文件和文件夹，整体结构如下：

  


收起

plaintext

```
Robinson/
├── .eslintignore
├── .eslintrc.js
├── .gitignore
├── README.md
├── api-extractor.json
├── babel.config.js
├── jest.config.ts
├── package.json
├── pnpm-lock.yaml
├── rollup.config.js
├── tsconfig.json
├── tsdoc-metadata.json
├── plugin/
│   └── index.js
├── vitepress/
│   ├── .vitepress/
│   ├── assets/
│   ├── docsDist/
│   ├── etc/
│   │   ├── docs/
│   │   │   ├── advance.md
│   │   │   └── quick.md
│   │   └── index.md
│   └── temp/
├── .husky/
│   └── pre-commit
├── .vscode/
│   └── settings.json
├── script/
│   ├── docBuild.js
│   ├── genDoc.js
│   ├── publish.js
│   ├── publish2.js
│   └── utils.js
├── src/
│   ├── index.ts
│   └── utils/
└── test/
    └── ...
```

### 2.1 根目录文件说明

  


-   **`.eslintignore`**：指定 ESLint 忽略检查的文件和目录。
-   **`.eslintrc.js`**：ESLint 的配置文件，用于定义代码检查规则。
-   **`.gitignore`**：Git 忽略文件，指定不需要被版本控制的文件和目录。
-   **`README.md`**：项目的说明文档，包含项目的基本信息、安装方法、文档链接等。
-   **`api-extractor.json`**：API 提取工具的配置文件，用于提取项目中的 API 信息。
-   **`babel.config.js`**：Babel 的配置文件，用于进行 JavaScript 代码的转换。
-   **`jest.config.ts`**：Jest 测试框架的配置文件，用于配置测试相关的选项。
-   **`package.json`**：项目的元数据文件，包含项目的依赖、脚本命令等信息。
-   **`pnpm-lock.yaml`**：pnpm 包管理器的锁定文件，记录项目依赖的具体版本信息。
-   **`rollup.config.js`**：Rollup 的配置文件，用于进行模块打包。
-   **`tsconfig.json`**：TypeScript 的配置文件，用于定义 TypeScript 编译器的选项。
-   **`tsdoc-metadata.json`**：TypeScript 文档元数据文件，包含 TypeScript 代码的文档信息。

### 2.2 文件夹说明

  


-   **`plugin/`** ：插件相关的代码目录，目前只有一个 `index.js` 文件。

-   **`vitepress/`** ：用于构建项目文档的 VitePress 相关目录。

    -   **`.vitepress/`** ：VitePress 的配置目录。
    -   **`assets/`** ：文档相关的静态资源目录。
    -   **`docsDist/`** ：文档构建后的输出目录。
    -   **`etc/`** ：文档源文件目录，包含 `advance.md` 和 `quick.md` 等文档文件。
    -   **`temp/`** ：临时文件目录。

-   **`.husky/`** ：Git Hooks 配置目录，包含 `pre-commit` 钩子文件。

-   **`.vscode/`** ：VSCode 相关的配置目录，包含 `settings.json` 文件。

-   **`script/`** ：项目脚本目录，包含文档构建、发布等相关脚本文件。

-   **`src/`** ：项目的源代码目录，包含 `index.ts` 和 `utils/` 目录。

-   **`test/`** ：项目的测试代码目录。

## 3. 主要功能模块

### 3.1 文档生成

  


项目提供了文档生成的功能，通过以下命令可以生成文档：

  


收起

bash

```
npm run doc
npm run docs:build
```

### 3.2 测试

  


项目使用 Jest 作为测试框架，通过以下命令可以运行测试：

  


收起

bash

```
npm run test
```

### 3.3 TsType 注解

  


项目中使用了一些自定义的 TsType 注解，包括 `@bata`、`@description`、`@param`、`@returns` 和 `@example`，用于对函数进行描述和注释。

## 4. 依赖管理

  


项目使用 pnpm 作为包管理器，`pnpm-lock.yaml` 文件记录了项目依赖的具体版本信息。主要的依赖包括：

  


-   **开发依赖**：ESLint、Babel、Jest、Rollup 等。
-   **运行时依赖**：一些 Web 开发相关的工具库。

## 5. 构建与打包

  


项目使用 Rollup 进行模块打包，通过 `rollup.config.js` 进行配置。在 `package.json` 中可以定义打包脚本，例如：

  


收起

json

```
{
  "scripts": {
    "build": "rollup --config"
  }
}
```

## 6. 文档编写与展示

  


项目使用 VitePress 进行文档编写和展示，文档源文件位于 `vitepress/etc/docs/src/` 目录下，包括 `advance.md` 和 `quick.md` 等文件。通过 VitePress 可以将这些 Markdown 文件构建成静态网站。

## 7. 总结


Robinson 项目是一个简单的 Web 工具集，采用了现代化的开发工具和流程，包括 TypeScript、ESLint、Jest、Rollup 和 VitePress 等。通过合理的目录结构和配置文件，实现了代码的模块化、测试、文档生成和打包等功能。