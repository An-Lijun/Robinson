---
url: /etc\apiExtractor\src/introduce.md
---
# api-extractor.json的配置

## 入口和项目相关配置

* `mainEntryPointFilePath`：

  * 这是一个必需的配置项，指定了 API Extractor 开始分析的主要入口文件的路径。例如

```
"mainEntryPointFilePath": "src/index.ts"
```

`projectFolder`：

* 通常设置为 `"."`，表示项目所在的根目录。例如：

```
"projectFolder": "."
```

## 文档相关配置

`docModel`：

* `enabled`：

  * 一个布尔值，当设置为 `true` 时，API Extractor 会生成文档模型。
    启用此选项后，可为后续生成文档提供基础信息，方便后续将文档模型转换为各种格式的文档，如 Markdown 或 HTML。

例如：

```
"docModel": {
    "enabled": true
}
```

`tsdocMetadata`：

* `enabled`：
  * 同样是一个布尔值，设置为 `true` 时，会启用 TSDoc 元数据的处理和存储。 TSDoc 是一种文档注释格式，启用该选项有助于更好地管理文档注释信息。

例如：

```
"tsdocMetadata": {
    "enabled": false
}
```

## DTS 文件生成和处理配置

`dtsRollup`：

* `enabled`：

  * 布尔值，设置为 `true` 时，将进行 DTS 文件的合并和整理操作。例如：

```
"dtsRollup": {
    "enabled": true,
    "untrimmedFilePath": "dist/api-untrimmed.d.ts",
    "trimmedFilePath": "dist/api.d.ts"
}
```

* `untrimmedFilePath`
  * 指定未处理的 DTS 文件的输出路径，其中包含了所有导出的 API 信息，包括可能的内部实现细节，方便调试和分析。

* `trimmedFilePath`
  * 指定处理后的 DTS 文件的输出路径，该文件仅包含公共 API，经过优化和裁剪，符合公共 API 的标准。

* `publicTrimmedFilePath`
  \--   可以指定另一个路径，存储仅包含公共 API 的 DTS 文件，

例如：

```
"publicTrimmedFilePath": "dist/public-api.d.ts"
```

## **类型检查和 API 分析配置**

`apiReport`：

* `enabled`：

  * 当设置为 `true` 时，会生成 API 报告，有助于检查 API 的一致性和问题。例如：

```
"apiReport": {
    "enabled": true,
    "reportFolder": "reports/api" //-   指定存储 API 报告的文件夹路径，方便查看和分析报告结果。
}
```

* `validationRules`
  * 可以配置各种验证规则，例如：

```
"validationRules": {
    "missingReleaseTags": false, // 当设置为 `false` 时，不强制要求 API 元素具有发布标签。
    "exportedInternals": false //当设置为 `false` 时，不允许导出内部元素作为公共 API。
}
```

## **编译器选项配置**

* `compilerOptions`：

  * 可以设置类似于 `tsconfig.json` 中的编译器选项，例如：

```
"compilerOptions": {
    "baseUrl": ".",//定义模块解析的基础 URL，帮助 API Extractor 正确解析模块引用
    "paths": {
        "my-library/*": ["src/my-library/*"] //-   自定义模块解析路径，方便处理项目中自定义的模块别名。
    }
}
```

## **打包和外部引用配置**

* `bundledPackages`：

  * 可以指定需要打包在一起的包，例如

```
"bundledPackages": ["my-library-package"] //当处理多个包时，可将某些包作为一个整体进行处理。
```

* `externalJsonFile`：

  * 可指定一个外部 JSON 文件，其中包含外部引用的信息，例如：

```
"externalJsonFile": "config/external.json" //有助于处理项目中的外部依赖和引用，确保 API 提取时的准确性。
```

-`unresolvedTypes`：

```
-   可以定义如何处理未解析的类型，例如：
```

```
"unresolvedTypes": {
   "ignore": ["SomeUnresolvedType"] //允许开发者指定哪些未解析的类型可以被忽略，避免分析过程中的错误或警告。
}
```

## 其它配置

* `toolVersion`：

  * 可以指定 API Extractor 工具的版本，确保使用特定版本的工具进行分析。例如：

```
"toolVersion": "1.0.0"
```

* extensions
  * 可以添加自定义的扩展配置，以扩展 API Extractor 的功能，例如：

```
"extensions": [
    {
        "name": "my-extension",
        "parameters": {}
    }
]
```

* `apiJsonFilePath`：

  * 指定生成 API 信息的 JSON 文件的存储路径，例如：

```
"apiJsonFilePath": "reports/api/api.json"
```

* `apiVersion`：

  * 可以设置 API 的版本信息，例如：

```
"apiVersion": "1.0.0" //方便进行版本管理和发布流程中的 API 对比。
```

# 常用api-extractor配置

```json
{
    // 指定配置文件的 JSON 模式，有助于编辑器进行语法检查和智能提示
    "$schema": "https://developer.microsoft.com/json-schemas/api-extractor/v7/api-extractor.schema.json",

    // 主入口点的 TypeScript 声明文件路径，通常是编译后的 .d.ts 文件
    // api-extractor 将从此文件开始分析整个项目的 API
    "mainEntryPointFilePath": "./dist/index.d.ts",

    // 项目根文件夹的路径，默认为配置文件所在的文件夹
    // 该配置用于解析相对路径
    "projectFolder": "./",

    // 是否跳过 TypeScript 的库检查，设置为 true 可加快编译速度，但可能会忽略一些类型错误
    "skipLibCheck": false,

    // 是否启用循环引用检测
    // 循环引用可能会导致文档生成和 API 分析出现问题，建议保持开启
    "enableCircularReferenceDetection": true,

    // API 报告文件的输出文件夹路径
    "reportFolder": "./etc",

    // API 报告文件的名称，该文件记录了 API 的变化
    "reportFileName": "MyLibrary.api.md",

    // API 报告相关配置
    "apiReport": {
        // 是否启用 API 报告功能
        // 启用后会生成一个记录 API 变化的报告文件
        "enabled": false
    },

    // 文档模型相关配置
    "docModel": {
        // 是否启用文档模型生成
        // 启用后会生成一个中间文档模型，供 api-documenter 等工具使用
        "enabled": true
    },

    // TSDoc 元数据相关配置
    "tsdocMetadata": {
        // 是否启用 TSDoc 元数据生成
        // 启用后会生成 TSDoc 元数据文件，用于跨项目的文档链接等功能
        "enabled": true
    },

    // DTS 汇总文件相关配置
    "dtsRollup": {
        // 是否启用 DTS 汇总文件生成
        // 汇总文件将项目中的多个 .d.ts 文件合并为一个
        "enabled": true,
        // 未修剪的 DTS 汇总文件路径，包含所有 API 信息
        "untrimmedFilePath": "./dist/my-library.d.ts",
        // 包含 beta 版本 API 的修剪后 DTS 汇总文件路径
        "betaTrimmedFilePath": "./dist/my-library.beta.d.ts",
        // 仅包含公共 API 的修剪后 DTS 汇总文件路径
        "publicTrimmedFilePath": "./dist/my-library.public.d.ts"
    },

    // 消息报告相关配置
    "messages": {
        // api-extractor 消息报告配置
        "extractorMessageReporting": {
            // 默认消息的日志级别，可设置为 "verbose"、"info"、"warning"、"error" 或 "none"
            "default": {
                "logLevel": "warning"
            },
            // 针对特定错误代码 "ae-missing-release-tag" 的日志级别设置
            // 这里将缺少发布标签的错误设置为错误级别，会中断构建过程
            "ae-missing-release-tag": {
                "logLevel": "error"
            }
        },
        // TSDoc 消息报告配置
        "tsdocMessageReporting": {
            // 默认 TSDoc 消息的日志级别
            "default": {
                "logLevel": "warning"
            }
        }
    },

    // 是否启用测试模式，测试模式下输出会有所不同，主要用于开发和调试
    "testMode": false,

    // 是否跳过错误检查，设置为 true 会忽略一些 API 提取过程中的错误
    "skipErrorChecking": false,

    // TypeScript 编译器文件夹的路径
    // 如果需要使用特定版本的 TypeScript 编译器，可以指定该路径
    "typescriptCompilerFolder": "",

    // 编译器相关配置
    "compiler": {
        // 覆盖 TypeScript 编译器的配置
        // 这里可以设置一些额外的 TypeScript 编译选项
        "overrideTsconfig": {
            "compilerOptions": {
                // 启用严格的空值检查
                "strictNullChecks": true
            }
        }
    },

    // TSDoc 元数据文件的输出路径
    "tsdocMetadataFilePath": "./temp/tsdoc-metadata.json",

    // 换行符类型，可设置为 "os"（使用操作系统默认换行符）、"crlf" 或 "lf"
    "newlineKind": "os",

    // 本地化相关配置
    "localization": {
        // 输出文件夹路径，用于存放本地化后的文档文件
        "outputFolder": "./docs/localized"
    }
}
```
