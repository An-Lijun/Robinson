---
url: /etc\doc/robinson.rgbtohex.md
---
[Home](./index.md) > [robinson](./robinson.md) > [rgbToHex](./robinson.rgbtohex.md)

## rgbToHex() function

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

将rgb颜色字符串转换为十六进制颜色字符串

**Signature:**

```typescript
declare function rgbToHex(color: string): string;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  color | string | rgb颜色字符串 |

**Returns:**

string

{string} 转换后的十六进制颜色字符串，如果输入无效则返回空字符串

## Example

```javascript
rgbToHex('rgb(0,0,0)'); // '#000000'
rgbToHex('#000000'); // ''
```
