---
url: /etc\doc/robinson.isobjectlike.md
---
[Home](./index.md) > [robinson](./robinson.md) > [isObjectLike](./robinson.isobjectlike.md)

## isObjectLike() function

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

该函数检查值是否是类对象like 类型。

**Signature:**

```typescript
declare function isObjectLike(value: any): boolean;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  value | any | 参数“value”的类型为“any”，这意味着它可以是任何数据类型。 |

**Returns:**

boolean

{boolean} - 一个布尔值。

## Example

```JavaScript
 let a = {}; isObjectLike(a) // true
 let a = null; isObjectLike(a) // false
 let a = new WeakSet(); isObjectLike(a) // true
 let a = []; isObjectLike(a)// true
```
