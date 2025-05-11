---
url: /etc\doc/robinson.isrgba.md
---
[Home](./index.md) > [robinson](./robinson.md) > [isRgba](./robinson.isrgba.md)

## isRgba() function

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

判断是否为rgba颜色

**Signature:**

```typescript
declare function isRgba(color: string): boolean;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  color | string | 需要验证的颜色字符串 |

**Returns:**

boolean

{boolean} 如果是rgba颜色返回true，否则返回false

## Example

```JavaScript
    isRgba('#FD7086') // false
    isRgba('rgba(253,112,134,0.9)') // true
    isRgba('rgba(253,112,134,1.1)')// false
    isRgba(null) // false
    isRgba({}) // false
    isRgba('rgb(255,255,255)') // false
    isRgba('rgb(256,256,256)') // false
```
