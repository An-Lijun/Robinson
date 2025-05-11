---
url: /etc\doc/robinson.imgcompression.md
---
[Home](./index.md) > [robinson](./robinson.md) > [imgCompression](./robinson.imgcompression.md)

## imgCompression() function

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

压缩图片文件

**Signature:**

```typescript
declare function imgCompression(file: File, size: number): Promise<unknown>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  file | File | 源文件 |
|  size | number | 指定压缩大小（单位：MB） |

**Returns:**

Promise\<unknown>

Promise对象，解析为压缩后的Base64编码字符串

## Example

imgCompression(fileInput.files\[0], 0.5).then(compressedBase64 => console.log(compressedBase64));
