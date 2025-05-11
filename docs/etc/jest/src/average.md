---
url: /etc\jest\src/average.md
---
## 五、断言与匹配器

### 5.1 常用断言方法

* **toBe**：判断两个值是否严格相等（使用===）。

```
test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
});
```

* **toEqual**：用于比较对象或数组的内容是否相等。

```
test('objects are equal', () => {
    const obj1 = { a: 1 };
    const obj2 = { a: 1 };
    expect(obj1).toEqual(obj2);
});
```

* **toBeTruthy**：判断值是否为真。

```
test('true is truthy', () => {
    expect(true).toBeTruthy();
});
```

* **toBeFalsy**：判断值是否为假。

```
test('false is falsy', () => {
    expect(false).toBeFalsy();
});
```

* **toBeGreaterThan**：判断值是否大于某个值。

```
test('5 is greater than 3', () => {
    expect(5).toBeGreaterThan(3);
});
```

* **toBeLessThan**：判断值是否小于某个值。

```
test('3 is less than 5', () => {
    expect(3).toBeLessThan(5);
});
```

### 5.2 高级断言技巧

* **嵌套断言**：可以在一个断言中嵌套多个断言，以更细粒度地验证复杂数据结构。

```
test('nested objects are equal', () => {
    const obj1 = { a: { b: 1 } };
    const obj2 = { a: { b: 1 } };
    expect(obj1).toEqual({
        a: expect.objectContaining({
            b: expect.any(Number)
        })
    });
});
```

* **自定义匹配器**：Jest 允许开发者自定义匹配器，以满足特定的测试需求。

```
expect.extend({
    toBeEven: (received) => {
        const pass = received % 2 === 0;
        if (pass) {
            return {
                message: () => `expected ${received} not to be even`,
                pass: true
            };
        } else {
            return {
                message: () => `expected ${received} to be even`,
                pass: false
            };
        }
    }
});
test('2 is even', () => {
    expect(2).toBeEven();
});
```
