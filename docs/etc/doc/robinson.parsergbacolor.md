---
url: /etc\doc/robinson.parsergbacolor.md
---
[Home](./index.md) > [robinson](./robinson.md) > [parseRgbaColor](./robinson.parsergbacolor.md)

## parseRgbaColor() function

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

解析rgba颜色字符串为颜色对象

**Signature:**

```typescript
parseRgbaColor: (color: string) => IRgba
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  color | string | rgba颜色字符串 |

**Returns:**

IRgba

{ r: 255, g: 0, b: 0, a: 0.5} 包含RGBA分量的对象

## Example

```javascript
parseRgbaColor('rgba(255, 0, 0, 0.5)'); // { r: 255, g: 0, b: 0, a: 0.5 }
```
