---
url: /etc\jest\src/quick.md
---
## 八、快照测试

### 8.1 基本原理与使用方法

* **原理**：快照测试通过生成一个包含代码输出的快照文件，在后续测试中对比实际输出与快照文件的内容，从而判断代码的行为是否发生变化。

- **使用方法**：使用toMatchSnapshot()匹配器来进行快照测试。

```javascript
function formatUser(user) {
    return `Name: ${user.name}, Age: ${user.age}`;
}
test('format user snapshot', () => {
    const user = { name: 'John', age: 30 };
    expect(formatUser(user)).toMatchSnapshot();
});
```

### 8.2 快照文件管理

* **生成快照文件**：首次运行快照测试时，Jest 会在\_\_snapshots\_\_目录下生成一个快照文件，文件名与测试文件相对应。

- **更新快照文件**：当代码发生变化，需要更新快照文件时，可以使用jest --updateSnapshot命令或在测试运行时按下u键。

* **删除快照文件**：如果不再需要某个快照文件，可以手动删除\_\_snapshots\_\_目录下对应的文件。

### 8.3 快照测试的应用场景

* **UI 组件测试**：在测试 React、Vue 等前端框架的组件时，快照测试可以方便地验证组件的渲染结果是否符合预期。

- **数据格式化测试**：对于数据格式化函数，快照测试可以确保数据格式化的结果在代码修改后保持一致。

* **API 响应测试**：在测试 API 调用时，快照测试可以验证 API 响应的结构和内容是否发生变化。
