---
url: /etc\doc/robinson.ismobilenum.md
---
[Home](./index.md) > [robinson](./robinson.md) > [isMobileNum](./robinson.ismobilenum.md)

## isMobileNum() function

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

是否为合法手机号

**Signature:**

```typescript
declare function isMobileNum(s: string | number): boolean;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  s | string | number | 手机号 |

**Returns:**

boolean

{boolean} - 一个布尔值。

## Example

```JavaScript
 let phone = '13800138000'; isMobileNum(phone) // true
 let phone = '12345678901'; isMobileNum(phone)// false
```
