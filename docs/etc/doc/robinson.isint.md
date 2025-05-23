---
url: /etc\doc/robinson.isint.md
---
[Home](./index.md) > [robinson](./robinson.md) > [isInt](./robinson.isint.md)

## isInt() function

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

函数“isInteger”检查给定值是否为整数,原生的判断已经很好用了 es6+。

**Signature:**

```typescript
declare function isInt(value: any): boolean;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  value | any | “value”参数可以是任何数据类型，例如数字、字符串、布尔值或对象。该函数将检查该值是否为整数，并返回一个布尔值来指示它是否为整数。 |

**Returns:**

boolean

{boolean} - 一个布尔值，指示给定值是否为整数。

## Example

```JavaScript
 let n = '1.1'; isInteger(n) // false
 let n2 = 2; isInteger(n2) // true
```
