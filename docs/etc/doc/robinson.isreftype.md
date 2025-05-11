---
url: /etc\doc/robinson.isreftype.md
---
[Home](./index.md) > [robinson](./robinson.md) > [isRefType](./robinson.isreftype.md)

## isRefType() function

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

该函数检查值是否为引用类型。

**Signature:**

```typescript
declare function isRefType(value: any): boolean;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  value | any | “value”参数的类型为“any”，这意味着它可以接受任何类型的值。 |

**Returns:**

boolean

{boolean} 一个布尔值。

## Example

```JavaScript
   let num =123; isRefType(num) // true
   let obj ={};  isRefType(obj) // false
```
