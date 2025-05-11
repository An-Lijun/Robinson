---
url: /etc\doc/robinson.isempty.md
---
[Home](./index.md) > [robinson](./robinson.md) > [isEmpty](./robinson.isempty.md)

## isEmpty() function

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

该函数通过将 JSON 表示形式与空数组或对象进行比较来检查值是否为空。

**Signature:**

```typescript
declare function isEmpty(value: any): boolean;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  value | any | “value”参数可以是任何数据类型。这是您要检查它是否为空的值。 |

**Returns:**

boolean

{boolean} 一个布尔值。如果值为空（空数组或空对象）或值为假（例如 null、undefined、false、0 或空字符串）， 则返回 true。否则，返回 false。

## Example

```JavaScript
   let a =null; isEmpty(a) // true
   let a =undefined; isEmpty(a) // true
   let a =''; isEmpty(a) // true
   let a={};  isEmpty(a) // true
   let a=[];  isEmpty(a) // true
```
