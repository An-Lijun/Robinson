---
url: /etc\jest\src/testAsync.md
---
## 六、测试异步代码

### 6.1 异步函数返回 Promise

* **使用 async/await**：通过async/await语法可以方便地测试返回 Promise 的异步函数。

```javascript
function asyncAdd(a, b) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(a + b);
        }, 1000);
    });
}
test('async add works', async () => {
    const result = await asyncAdd(1, 2);
    expect(result).toBe(3);
});
```

* **使用.then ()** ：也可以使用.then()方法来处理 Promise。

```javascript
test('async add works with then', () => {
    return asyncAdd(1, 2).then((result) => {
        expect(result).toBe(3);
    });
});
```

### 6.2 使用回调函数

* **使用 done ()** ：在测试使用回调函数的异步代码时，需要调用done()方法来通知 Jest 测试完成。

```javascript
function addWithCallback(a, b, callback) {
    setTimeout(() => {
        callback(a + b);
    }, 1000);
}
test('add with callback works', (done) => {
    addWithCallback(1, 2, (result) => {
        expect(result).toBe(3);
        done();
    });
});
```

### 6.3 处理异步错误

* **使用 try/catch**：在async/await中，可以使用try/catch来捕获异步错误。

```javascript
test('async function throws error', async () => {
    async function asyncError() {
        throw new Error('Async error');
    }
    try {
        await asyncError();
    } catch (error) {
        expect(error.message).toBe('Async error');
    }
});
```

* **使用.rejectWith ()** ：在使用.then()时，可以使用.rejectWith()来处理 Promise 被拒绝的情况。

```javascript
test('async function throws error with then', () => {
    async function asyncError() {
        throw new Error('Async error');
    }
    return asyncError().catch((error) => {
        expect(error.message).toBe('Async error');
    });
});
```
