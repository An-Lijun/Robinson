---
url: /etc\doc/robinson.hastypein.md
---
[Home](./index.md) > [robinson](./robinson.md) > [hasTypeIn](./robinson.hastypein.md)

## hasTypeIn() function

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

该函数检查给定值的类型是否存在于给定类型数组中。

**Signature:**

```typescript
declare function hasTypeIn(value: any, types: Array<string>): boolean;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  value | any | “value”参数是您要检查其类型的值。它可以是任何类型，例如数字、字符串、对象等。 |
|  types | Array\<string> | 表示要检查的类型的字符串数组。 |

**Returns:**

boolean

{boolean} 一个布尔值。

## Example

```JavaScript
    let a ="123"; isTypeIn(a,['number','array','string']) // true
    let a ={}; isTypeIn(a,['number','array','string']) // false
```
