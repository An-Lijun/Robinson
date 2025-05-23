---
url: /etc\doc/robinson.isrgb.md
---
[Home](./index.md) > [robinson](./robinson.md) > [isRgb](./robinson.isrgb.md)

## isRgb() function

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

判断是否为rgb颜色

**Signature:**

```typescript
declare function isRgb(color: string): boolean;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  color | string | 需要验证的颜色字符串 |

**Returns:**

boolean

{boolean} 如果是rgb颜色返回true，否则返回false

## Example

```JavaScript
    isRgb('#FD7086') //false
    isRgb('rgba(253,112,134,0.9)') //false
    isRgb(null) // false
    isRgb({}) // false
    isRgb('rgb(255,255,255)') // true
    isRgb('rgb(256,256,256)') //false
```
