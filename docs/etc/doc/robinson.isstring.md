---
url: /etc\doc/robinson.isstring.md
---
[Home](./index.md) > [robinson](./robinson.md) > [isString](./robinson.isstring.md)

## isString() function

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

函数isString 检查给定值是否是字符串。

**Signature:**

```typescript
declare function isString(value: any): boolean;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  value | any | 参数“value”的类型为“any”，这意味着它可以接受任何数据类型。 |

**Returns:**

boolean

{boolean} - 一个布尔值。

## Example

```JavaScript
 let str = 'Hello'; isString(str) // true
 let num = 123; isString(num) // false
```
