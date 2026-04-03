# 性能测试使用指南

本文档介绍如何使用 Robinson 项目的性能测试功能来评估和优化代码性能。

## 快速开始

### 运行性能测试

```bash
# 运行性能测试
npm run test:performance

# 生成性能报告
npm run genPerformanceReport
```

## 性能测试内容

### 测试的函数类别

- **数组操作**：`isArray`、`getRelArray`、`getChunkArray`
- **DOM 操作**：`hasClass`、`getNode`、`getNodes`
- **函数式编程**：`compose`、`pipe`、`debounce`、`throttle`
- **对象操作**：`isObjectLike`、`deepClone`

### 测试场景

- 大数据量处理（10000+ 元素）
- 边界情况（空数组、单元素数组）
- 内存使用测试
- 复杂对象克隆

## 性能报告内容

### 1. 测试摘要
- 总测试数、通过率、平均执行时间
- 性能评级统计

### 2. 详细测试结果
- 每个函数的执行时间
- 性能评级（🚀优秀、⚡良好、⏳一般、🐢需要优化）
- 内存使用情况

### 3. 性能优化建议
- 需要优化的函数列表
- 通用优化建议
- 具体的优化方向

### 4. 性能趋势分析
- 历史版本性能对比
- 执行时间变化趋势
- 通过率变化

## 性能评级标准

- 🚀 **优秀**：执行时间 < 100ms
- ⚡ **良好**：执行时间 100-500ms
- ⏳ **一般**：执行时间 500-1000ms
- 🐢 **需要优化**：执行时间 > 1000ms

## 自定义性能测试

你可以创建自己的性能测试文件：

```javascript
const { PerformanceTester } = require('../script/performanceTester');
const { yourFunction } = require('../dist/esm/index.js');

const tester = new PerformanceTester();

// 测试你的函数
tester.testFunction(
  'yourFunction - 性能测试',
  () => yourFunction(testData),
  1000,
  '测试你的函数性能'
);

// 生成报告
tester.printSummary();
tester.saveResults('./custom-performance-results.json');
```

## 性能优化建议

### 1. 算法优化
- 使用更高效的算法（O(n) vs O(n²)）
- 减少嵌套循环
- 使用哈希表替代线性搜索

### 2. 数据结构优化
- 使用 Map 替代 Object（需要频繁增删时）
- 使用 Set 去重
- 使用 TypedArray 处理数值数据

### 3. 缓存优化

```javascript
// 使用缓存避免重复计算
const cache = new Map();

function expensiveFunction(input) {
  if (cache.has(input)) {
    return cache.get(input);
  }
  
  const result = performExpensiveCalculation(input);
  cache.set(input, result);
  return result;
}
```

### 4. 懒加载和按需计算
- 只在需要时计算
- 使用惰性求值
- 避免不必要的初始化

### 5. 避免不必要的操作
- 减少类型转换
- 避免重复创建对象
- 使用常量替代重复计算

### 6. 使用原生 API

```javascript
// ✅ 推荐：使用原生 API
const sum = array.reduce((a, b) => a + b, 0);

// ❌ 不推荐：手动实现
let sum = 0;
for (let i = 0; i < array.length; i++) {
  sum += array[i];
}
```

## 性能监控最佳实践

### 1. 定期运行性能测试

```bash
# 在 CI/CD 中运行性能测试
npm run test:performance
npm run genPerformanceReport
```

### 2. 设置性能基准

为关键函数设置性能基准，确保性能不会退化：

```javascript
const expectedTime = 100; // ms
const actualTime = performanceTest();

if (actualTime > expectedTime) {
  console.warn(`性能警告: 执行时间 ${actualTime}ms 超过预期 ${expectedTime}ms`);
}
```

### 3. 监控性能趋势

定期检查性能报告中的趋势分析，及时发现性能退化。

### 4. 优化优先级

优先优化：
- 使用频率高的函数
- 性能评级为"需要优化"的函数
- 性能退化的函数

## 常见问题

### Q: 性能测试结果不准确？

A: 确保在相同环境下运行测试，关闭其他程序，多次运行取平均值。

### Q: 如何测试异步函数？

A: 使用 async/await 包装测试函数：

```javascript
tester.testFunction(
  'asyncFunction - 性能测试',
  async () => {
    await asyncFunction();
  },
  100,
  '测试异步函数性能'
);
```

### Q: 如何测试内存泄漏？

A: 在测试前后检查内存使用情况：

```javascript
tester.start();
// 执行测试代码
const result = tester.end('函数名称');
console.log(`内存使用: ${result.memoryUsage}MB`);
```

### Q: 性能测试影响正常开发？

A: 性能测试可以独立运行，不影响正常开发流程。建议在提交代码前运行。

## 总结

性能测试是保证代码质量的重要工具。通过定期运行性能测试和生成报告，可以：

- 发现性能瓶颈
- 监控性能趋势
- 指导优化方向
- 提升用户体验

建议在以下场景运行性能测试：

- 代码重构前后对比
- 添加新功能后验证
- 发布新版本前检查
- 性能问题出现时诊断

---

更多问题请参考 [开发者文档](./DEVELOPER.md) 或在 [Issues](https://github.com/An-Lijun/Robinson/issues) 中提问。
