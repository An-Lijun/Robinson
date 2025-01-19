# 集成Ts

1. 安装依赖

```
npm install rollup @rollup/plugin-typescript typescript tslib -D
```
-   **`rollup`**：Rollup 的核心库。
-   **`@rollup/plugin-typescript`**：Rollup 的 TypeScript 插件，用于处理 TypeScript 文件。
-   **`typescript`**：TypeScript 编译器。
-   **`tslib`**：TypeScript 运行时库，用于支持一些 TypeScript 特性。


2. 配置rollup

```
// www.javascriptcn.com code example
import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/main.ts', // 入口文件
  output: {
    file: 'dist/bundle.js', // 输出文件
    format: 'cjs', // 输出格式
  },
  plugins: [
    typescript(), // 使用 TypeScript 插件
  ],
};
```

3. 配置 tsconfig.json
在项目根目录下创建 `tsconfig.json` 文件，配置 TypeScript 编译选项：
```
{
  "compilerOptions": {
    "target": "es5",
    "module": "esnext",
    "moduleResolution": "node",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "outDir": "dist",
    "declaration": true
  },
  "include": ["src/**/*"]
}
```
-   **`tsconfig.json`**：TypeScript 的配置文件，用于指定编译选项。

    -   **`target`**：指定编译后的 JavaScript 版本。
    -   **`module`**：指定模块系统。
    -   **`strict`**：启用所有严格类型检查选项。
    -   **`outDir`**：指定输出目录。
    -   **`declaration`**：生成 `.d.ts` 类型声明文件。
