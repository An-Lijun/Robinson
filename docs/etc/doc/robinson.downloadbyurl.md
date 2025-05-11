---
url: /etc\doc/robinson.downloadbyurl.md
---
[Home](./index.md) > [robinson](./robinson.md) > [downloadByUrl](./robinson.downloadbyurl.md)

## downloadByUrl() function

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

通过URL下载图片到本地

**Signature:**

```typescript
declare function downloadByUrl(url: string, filename?: string, type?: string): void;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  url | string | 图片路径 |
|  filename | string | *(Optional)* 下载后的文件名 |
|  type | string | *(Optional)* 下载后的文件类型 |

**Returns:**

void

## Example

downloadByUrl('https://example.com/image.png', 'example.png');
