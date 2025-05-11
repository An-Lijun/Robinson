---
url: /etc\doc/robinson.isfunction.md
---
[Home](./index.md) > [robinson](./robinson.md) > [isFunction](./robinson.isfunction.md)

## isFunction() function

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

该函数检查给定值是否是函数。

**Signature:**

```typescript
declare function isFunction(value: any): boolean;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  value | any | “value”参数是我们想要检查它是否是函数的任何值。 |

**Returns:**

boolean

{boolean} - 一个布尔值。

## Example

isFunction(() => {}); // 返回 true isFunction(123); // 返回 false
