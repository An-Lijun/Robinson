---
url: /etc\doc/robinson.downloadbybase64.md
---
[Home](./index.md) > [robinson](./robinson.md) > [downloadByBase64](./robinson.downloadbybase64.md)

## downloadByBase64() function

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

通过Base64编码的字符串下载文件

**Signature:**

```typescript
declare function downloadByBase64(buf: string, fileNm: string, suffix: string): void;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  buf | string | Base64编码的字符串 |
|  fileNm | string | 下载后的文件名 |
|  suffix | string | 下载后的文件后缀 |

**Returns:**

void

## Example

downloadByBase64('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA...', 'example.png', 'png');
