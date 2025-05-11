---
url: /etc\doc/robinson.isdecimal.md
---
[Home](./index.md) > [robinson](./robinson.md) > [isDecimal](./robinson.isdecimal.md)

## isDecimal() function

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

检查变量是否为实数

**Signature:**

```typescript
declare function isDecimal(s: string | number): boolean;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  s | string | number | 要检查的变量 |

**Returns:**

boolean

{boolean} - 检查结果

## Example

```JavaScript
 isDecimal(123)// true
 isDecimal('123.45') // true
 isDecimal('abc') // false
```
