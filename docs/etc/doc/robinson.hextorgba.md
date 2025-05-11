---
url: /etc\doc/robinson.hextorgba.md
---
[Home](./index.md) > [robinson](./robinson.md) > [hexToRgba](./robinson.hextorgba.md)

## hexToRgba() function

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

将十六进制颜色字符串转换为rgba颜色字符串

**Signature:**

```typescript
declare function hexToRgba(hex: string): string;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  hex | string | 十六进制颜色字符串 |

**Returns:**

string

{string} 转换后的rgba颜色字符串，如果输入无效则返回空字符串

## Example

```javascript
hexToRgba('#FD7086'); // 'rgba(253,112,134,1)'
hexToRgba('rgba(253,112,134,0.9)'); // ''
```
