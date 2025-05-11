---
url: /etc\doc/robinson.currying.md
---
[Home](./index.md) > [robinson](./robinson.md) > [currying](./robinson.currying.md)

## currying() function

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

柯里化函数接受一个函数作为输入并返回一个新函数，该函数可以使用多个参数或以柯里化方式调用。

**Signature:**

```typescript
declare function currying(fn: Function): Function;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  fn | Function | 参数“fn”是我们要应用柯里化的函数。 |

**Returns:**

Function

{Function} - 正在返回柯里化函数。

## Example

```JavaScript
const add = (a, b) => a + b;
const curriedAdd = currying(add);
curriedAdd(2)(3);// 返回 5
```
