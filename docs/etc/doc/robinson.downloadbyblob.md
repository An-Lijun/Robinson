---
url: /etc\doc/robinson.downloadbyblob.md
---
[Home](./index.md) > [robinson](./robinson.md) > [downloadByBlob](./robinson.downloadbyblob.md)

## downloadByBlob() function

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

通过Blob对象下载文件

**Signature:**

```typescript
declare function downloadByBlob(blob: BlobPart, fileNm: string, suffix?: string): void;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  blob | BlobPart | Blob文件流 |
|  fileNm | string | 下载后的文件名 |
|  suffix | string | *(Optional)* 下载后的文件类型，默认为'txt' |

**Returns:**

void

## Example

downloadByBlob(new Blob(\['Hello, world!'], { type: 'text/plain' }), 'example.txt');
