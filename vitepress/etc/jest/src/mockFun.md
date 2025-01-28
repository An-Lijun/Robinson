## 七、模拟函数（Mock Functions）

### 7.1 创建模拟函数

-   **jest.fn()** ：使用jest.fn()创建一个模拟函数，模拟函数可以记录调用次数、参数等信息。

```javascript
const mockFunction = jest.fn();
mockFunction();
expect(mockFunction).toHaveBeenCalled();
```

-   **自定义返回值**：可以通过mockReturnValue或mockResolvedValue（用于异步函数）来设置模拟函数的返回值。

```javascript
const mockFunction = jest.fn().mockReturnValue(42);
const result = mockFunction();
expect(result).toBe(42);
```

### 7.2 模拟模块

-   **jest.mock()** ：使用jest.mock()来自动模拟一个模块，Jest 会自动生成一个模拟模块，其中所有导出的函数都被替换为模拟函数。

```javascript
// module.js
export function originalFunction() {
    return 'original';
}
// test.js
jest.mock('./module');
const { originalFunction } = require('./module');
test('mocked function', () => {
    originalFunction.mockReturnValue('mocked');
    expect(originalFunction()).toBe('mocked');
});
```

-   **手动模拟模块**：除了自动模拟，也可以手动创建一个模拟模块，然后通过jest.mock()指定使用该模拟模块。

```javascript
// __mocks__/module.js
export function originalFunction() {
    return'mocked';
}
// test.js
jest.mock('./module');
const { originalFunction } = require('./module');
test('manually mocked function', () => {
    expect(originalFunction()).toBe('mocked');
});
```

### 7.3 模拟函数的使用场景

-   **隔离测试**：通过模拟依赖项，将测试对象与外部依赖隔离开来，确保测试的独立性和准确性。

<!---->

-   **测试异步操作**：模拟异步操作的结果，以便在测试中控制和验证异步行为。

<!---->

-   **测试边缘情况**：通过模拟不同的输入和返回值，测试函数在各种边缘情况下的表现。