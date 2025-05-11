---
url: /etc\doc/robinson.isidcard.md
---
[Home](./index.md) > [robinson](./robinson.md) > [isIdCard](./robinson.isidcard.md)

## isIdCard() function

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

检查是否为有效的身份证号

**Signature:**

```typescript
declare function isIdCard(id: string): boolean;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  id | string | 身份证号 |

**Returns:**

boolean

{boolean} - 一个布尔值。

## Example

```JavaScript
 let id = '11010519491231002X'; isIdCard(id) // true
 let id = '11010519491231002Y'; isIdCard(id) // false
```
