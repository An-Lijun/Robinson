---
url: /etc\doc/robinson.isregexp.md
---
[Home](./index.md) > [robinson](./robinson.md) > [isRegExp](./robinson.isregexp.md)

## isRegExp() function

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

是否为正则格式

**Signature:**

```typescript
declare function isRegExp(val: any): boolean;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  val | any | 参数“val”的类型为“any”，这意味着它可以是任何数据类型。 |

**Returns:**

boolean

{boolean} - 一个布尔值。

## Example

```JavaScript
 let regex = /abc/; isRegExp(regex) // true
 let str = 'abc'; isRegExp(str) // false
```
