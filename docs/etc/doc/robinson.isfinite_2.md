---
url: /etc\doc/robinson.isfinite_2.md
---
[Home](./index.md) > [robinson](./robinson.md) > [isFinite\_2](./robinson.isfinite_2.md)

## isFinite\_2() function

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

该函数检查一个值是否是有限数,原生的已经很好用了 这里是为了保存api统一。

**Signature:**

```typescript
declare function isFinite(value: any): boolean;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  value | any | “value”参数可以是您想要检查是否是有限数的任何值。 |

**Returns:**

boolean

{boolean} - 函数 isFinite 返回一个布尔值。

## Example

```JavaScript
 let a = 0.1 + 0.2; isFinite(a)// true
 let n1 = {}; isFinite(n1) // false
```
