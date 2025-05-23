---
url: /etc\doc/robinson.torgbastring.md
---
[Home](./index.md) > [robinson](./robinson.md) > [toRgbaString](./robinson.torgbastring.md)

## toRgbaString() function

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

将颜色对象转换为rgba颜色字符串

**Signature:**

```typescript
toRgbaString: (colorObj: IRgba, n?: number) => string
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  colorObj | IRgba | 颜色对象，包含r、g、b分量，可选a分量 |
|  n | number | *(Optional)* |

**Returns:**

string

{string} 返回一个rgba格式的字符串

## Example

```javascript
let obj = { r: 255, g: 255, b: 255 };
toRgbaString(obj); // "rgba(255,255,255,1)"
```
