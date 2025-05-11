---
url: /etc\doc/robinson.isorigindate.md
---
[Home](./index.md) > [robinson](./robinson.md) > [isOriginDate](./robinson.isorigindate.md)

## isOriginDate() function

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

是否为日期格式

**Signature:**

```typescript
declare function isOriginDate(val: any): boolean;
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
 let date = new Date(); isOriginDate(date) // true
 let str = '2023-10-01'; isOriginDate(str) // false
```
