## 三、安装与配置

### 3.1 环境要求

在安装 Jest 之前，确保你的开发环境满足以下要求：

-   **Node.js**：Jest 是基于 Node.js 运行的，因此需要安装 Node.js 环境。建议使用 Node.js 的长期支持版本（LTS）。

<!---->

-   **npm 或 yarn**：用于安装 Jest 及其依赖包。

### 3.2 安装方式

-   **全局安装**：通过 npm 或 yarn 全局安装 Jest，可以在任何项目中使用 Jest 命令。

```
npm install -g jest
# 或者
yarn global add jest
```

-   **项目内安装**：在项目根目录下安装 Jest，将其作为开发依赖项。

```
npm install --save-dev jest
# 或者
yarn add --dev jest
```

### 3.3 配置文件

Jest 的配置文件通常为jest.config.js，位于项目根目录下。以下是一些常见的配置项：

-   **testMatch**：指定测试文件的匹配模式，默认值为["**/__tests__/**/*.js?(x)", "**/?(*.)+(spec|test).js?(x)"]。

<!---->

-   **coveragePathIgnorePatterns**：指定哪些文件不生成测试覆盖率报告，例如["/node_modules/"]。

<!---->

-   **moduleNameMapper**：用于模块路径映射，例如将@/映射到项目的src/目录。

```
module.exports = {
    testMatch: ["**/*.test.js"],
    coveragePathIgnorePatterns: ["/node_modules/"],
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1"
    }
};
```

### 3.4 自定义配置

除了上述常见配置项，Jest 还支持许多其他配置选项，如测试环境、测试脚本、模拟函数的配置等。开发者可以根据项目的具体需求进行自定义配置，以满足不同的测试场景。

## 四、基本使用

### 4.1 测试文件命名规则

Jest 默认会查找符合特定命名规则的测试文件，常见的命名规则为[文件名].test.js或[文件名].spec.js。例如，要测试math.js文件，可创建math.test.js或math.spec.js。

### 4.2 编写测试用例

-   **测试函数**：使用test函数来定义一个测试用例，test函数接受两个参数：测试用例的描述和测试函数。

```javascript
test('adds 1 + 2 to equal 3', () => {
    // 测试逻辑
});
```

-   **断言函数**：使用expect函数来进行断言，expect函数接受一个实际值，然后通过调用各种匹配器（如toBe、toEqual等）来判断实际值是否符合预期。

```
function add(a, b) {
    return a + b;
}
test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
});
```

### 4.3 运行测试

在项目根目录下，通过命令行运行测试：

```sh
npm test
# 或者
yarn test
```

如果安装了全局的 Jest，也可以直接运行jest命令。
