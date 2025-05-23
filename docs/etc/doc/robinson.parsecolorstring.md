---
url: /etc\doc/robinson.parsecolorstring.md
---
[Home](./index.md) > [robinson](./robinson.md) > [parseColorString](./robinson.parsecolorstring.md)

## parseColorString() function

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

解析颜色字符串为颜色对象

该函数可以解析十六进制颜色字符串或rgba颜色字符串为颜色对象

**Signature:**

```typescript
parseColorString: (color: string) => IRgba | string
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  color | string | 颜色字符串 |

**Returns:**

IRgba | string

{string} 包含RGBA分量的对象，如果无法解析则返回空字符串

## Example

```javascript
parseColorString('#FF0000');         // { r: 255, g: 0, b: 0, a: 1 }
parseColorString('rgba(255, 0, 0, 0.5)'); // { r: 255, g: 0, b: 0, a: 0.5 }
```
