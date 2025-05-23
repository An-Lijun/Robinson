---
url: /etc\doc/robinson.issimpletype.md
---
[Home](./index.md) > [robinson](./robinson.md) > [isSimpleType](./robinson.issimpletype.md)

## isSimpleType() function

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

该函数检查值是否为简单值（数字、字符串、布尔值、符号、null、undefined 或 bigint）或复杂值（函数、对象、数组、集合、映射）。

**Signature:**

```typescript
declare function isSimpleType(value: any): boolean;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  value | any | 参数“value”的类型为“any”，这意味着它可以接受任何类型的值。 |

**Returns:**

boolean

{boolean} 函数 isSimpleType 返回一个布尔值。

## Example

```JavaScript
   let num =123; isSimpleType(num) // true
   let obj ={};  isSimpleType(obj) // false
```
