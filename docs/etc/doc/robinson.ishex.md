---
url: /etc\doc/robinson.ishex.md
---
[Home](./index.md) > [robinson](./robinson.md) > [isHex](./robinson.ishex.md)

## isHex() function

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

判断是否为16进制颜色

**Signature:**

```typescript
declare function isHex(color: string): boolean;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  color | string | 需要验证的颜色字符串 |

**Returns:**

boolean

{boolean} 如果是16进制颜色返回true，否则返回false

## Example

```JavaScript
    isHex('#FD7086') //true
    isHex('rgba(253,112,134,0.9)') // false
```
