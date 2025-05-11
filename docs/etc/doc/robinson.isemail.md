---
url: /etc\doc/robinson.isemail.md
---
[Home](./index.md) > [robinson](./robinson.md) > [isEmail](./robinson.isemail.md)

## isEmail() function

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

检查字符串是否为合法email地址

**Signature:**

```typescript
declare function isEmail(s: string): boolean;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  s | string | 字符串 |

**Returns:**

boolean

{boolean} - 一个布尔值。

## Example

```JavaScript
 let email = 'test@example.com'; isEmail(email) // true
 let email = 'invalid-email'; isEmail(email) // false
```
