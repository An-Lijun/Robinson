# 贡献指南

感谢你对 Robinson 项目的关注！我们欢迎任何形式的贡献，包括但不限于：

- 🐛 报告 Bug
- 💡 提出新功能建议
- 📝 改进文档
- 🔧 提交代码修复
- ✨ 添加新功能

## 如何开始贡献

### 1. 环境准备

在开始贡献之前，请确保你的开发环境已经准备好：

```bash
# 克隆项目
git clone https://github.com/An-Lijun/Robinson.git
cd Robinson

# 安装依赖
pnpm install

# 验证安装
pnpm test
```

### 2. 开发流程

#### 创建分支
```bash
# 从 main 分支创建新的功能分支
git checkout -b feature/your-feature-name
# 或者修复分支
git checkout -b fix/your-fix-name
```

#### 进行开发
```bash
# 运行测试
pnpm test

# 运行代码检查
pnpm lint

# 启动文档开发服务器
pnpm docs:dev
```

#### 提交代码
```bash
# 添加文件
git add .

# 提交代码（使用 commitizen）
pnpm commit

# 推送到远程仓库
git push origin feature/your-feature-name
```

### 3. 代码规范

#### TypeScript 规范
- 使用 TypeScript 进行类型定义
- 避免使用 `any` 类型，优先使用具体类型或泛型
- 为函数添加完整的类型注解
- 使用接口定义复杂对象类型

```typescript
// ✅ 推荐
export function getChunkArray<T>(array: T[], size: number = 1): T[][] {
  // 实现
}

// ❌ 不推荐
export function getChunkArray(array: any, size: number = 1): any {
  // 实现
}
```

#### 命名规范
- 函数名使用 camelCase
- 常量名使用 UPPER_CASE
- 类名使用 PascalCase
- 文件名使用 kebab-case

```typescript
// ✅ 推荐
const MAX_SIZE = 100;
class EventBus {}
function getChunkArray() {}
// 文件名: chunk-array.ts

// ❌ 不推荐
const max_size = 100;
class eventBus {}
function get_chunk_array() {}
```

#### 注释规范
使用 TSDoc 格式的注释：

```typescript
/**
 * @beta
 * @description 函数的详细描述
 * @param {string} paramName - 参数说明
 * @returns {boolean} 返回值说明
 * @example
 * ```typescript
 * const result = functionName('param');
 * console.log(result); // true
 * ```
 */
export function functionName(paramName: string): boolean {
  // 实现
}
```

### 4. 测试要求

#### 测试文件结构
```plaintext
src/core/module-name/
├── src/
│   └── index.ts
└── test/
    └── functionName.test.js
```

#### 测试编写规范
```javascript
// ✅ 推荐的测试结构
describe('functionName', () => {
  let mockData;

  beforeEach(() => {
    // 准备测试数据
    mockData = { /* ... */ };
  });

  test('should do something', () => {
    // 测试逻辑
    const result = functionName(mockData);
    expect(result).toBe(expectedValue);
  });

  test('should handle edge case', () => {
    // 边界情况测试
    const result = functionName(edgeCase);
    expect(result).toBe(expectedValue);
  });
});
```

#### 测试覆盖率
- 新功能必须有对应的测试
- 测试覆盖率应保持在 80% 以上
- 测试应该覆盖正常情况和边界情况

### 5. 文档要求

#### API 文档
- 每个公开的函数都必须有完整的 TSDoc 注释
- 包含 `@description`、`@param`、`@returns`、`@example`
- 示例代码应该可以直接运行

#### 使用文档
- 在 `vitepress/etc/doc/` 目录下添加对应的使用文档
- 使用 Markdown 格式
- 包含完整的使用示例

### 6. 提交规范

使用 Commitizen 进行提交：

```bash
pnpm commit
```

提交信息格式：
```
<type>(<scope>): <subject>

<body>

<footer>
```

类型（type）：
- `feat`: 新功能
- `fix`: 修复 Bug
- `docs`: 文档更新
- `style`: 代码格式（不影响代码运行的变动）
- `refactor`: 重构（既不是新增功能，也不是修改 bug 的代码变动）
- `perf`: 性能优化
- `test`: 增加测试
- `chore`: 构建过程或辅助工具的变动

示例：
```
feat(array): add chunk array function

Add a new function to split array into chunks of specified size.

Closes #123
```

### 7. Pull Request 流程

#### PR 标题
- 使用清晰的标题描述变更内容
- 格式：`[类型] 简短描述`

#### PR 描述
- 描述变更的目的和影响
- 列出相关的 Issue
- 添加截图或演示（如果适用）
- 说明测试情况

#### PR 检查清单
在提交 PR 之前，请确保：

- [ ] 代码通过了所有测试
- [ ] 代码通过了 ESLint 检查
- [ ] 添加了必要的测试
- [ ] 更新了相关文档
- [ ] 提交信息符合规范
- [ ] 没有引入新的警告或错误

### 8. 问题报告

#### Bug 报告
使用以下模板报告 Bug：

```markdown
**描述问题**
清晰简洁地描述问题

**复现步骤**
1. 执行 '...'
2. 点击 '....'
3. 滚动到 '....'
4. 看到错误

**预期行为**
描述你期望发生的事情

**实际行为**
描述实际发生的事情

**环境信息**
- OS: [e.g. Windows 10, macOS 11.0]
- Node.js version: [e.g. 16.14.0]
- Robinson version: [e.g. 1.0.21]
```

#### 功能建议
使用以下模板提出功能建议：

```markdown
**问题描述**
清晰简洁地描述你想要的功能

**解决方案**
描述你希望如何实现这个功能

**替代方案**
描述你考虑过的任何替代解决方案或功能

**附加信息**
添加任何其他相关的截图、示例或链接
```

### 9. 开发者行为准则

- 尊重不同的观点和经验
- 接受建设性的批评
- 关注对社区最有利的事情
- 对其他社区成员表示同理心

### 10. 获取帮助

如果你在贡献过程中遇到问题：

- 📖 查看 [文档](https://an-lijun.github.io/Robinson/)
- 💬 在 [Issues](https://github.com/An-Lijun/Robinson/issues) 中提问
- 📧 联系维护者

## 许可证

通过贡献代码，你同意你的贡献将根据项目的许可证进行许可。

---

再次感谢你的贡献！🎉
