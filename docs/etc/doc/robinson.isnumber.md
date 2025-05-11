---
url: /etc\doc/robinson.isnumber.md
---
[Home](./index.md) > [robinson](./robinson.md) > [isNumber](./robinson.isnumber.md)

## isNumber() function

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

该函数检查值是否为数字。

**Signature:**

```typescript
declare function isNumber(value: any): boolean;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  value | any | 参数“value”可以是任何数据类型。 |

**Returns:**

boolean

{boolean} - 一个布尔值。

## Example

```JavaScript
 let n = 7; isNumber(n) // true
 let n1 = '8'; isNumber(n1) // false
```
