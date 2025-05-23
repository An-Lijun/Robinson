---
url: /etc\doc/robinson.isnan_2.md
---
[Home](./index.md) > [robinson](./robinson.md) > [isNaN\_2](./robinson.isnan_2.md)

## isNaN\_2() function

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

该函数检查值是否为 NaN。

**Signature:**

```typescript
declare function isNaN(value: any): boolean;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  value | any | value 参数可以是任何数据类型，例如数字、字符串或对象。 |

**Returns:**

boolean

{boolean} - 一个布尔值，指示给定值是否为 NaN（非数字）。

## Example

```JavaScript
   let str = 'ad1'; isNaN(str) // true
   let n = 1; isNaN(n) // false
```
