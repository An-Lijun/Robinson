---
url: /etc\doc/robinson.hextorgb.md
---
[Home](./index.md) > [robinson](./robinson.md) > [hexToRgb](./robinson.hextorgb.md)

## hexToRgb() function

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

将十六进制颜色字符串转换为rgb颜色字符串

**Signature:**

```typescript
declare function hexToRgb(hex: string): string;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  hex | string | 十六进制颜色字符串 |

**Returns:**

string

{string} 转换后的rgb颜色字符串，如果输入无效则返回空字符串

## Example

```javascript
hexToRgb('#FD7086'); // 'rgb(253,112,134)'
hexToRgb('rgb(253,112,134,0.9)'); // ''
```
