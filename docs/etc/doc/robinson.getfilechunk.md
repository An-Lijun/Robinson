---
url: /etc\doc/robinson.getfilechunk.md
---
[Home](./index.md) > [robinson](./robinson.md) > [getFileChunk](./robinson.getfilechunk.md)

## getFileChunk() function

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

生成文件切片数组

**Signature:**

```typescript
declare function getFileChunk(file: File, chunkSize?: number): Array<{
    index: number;
    file: Blob;
}>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  file | File | 文件对象 |
|  chunkSize | number | *(Optional)* 每个切片的大小（字节），默认为1MB |

**Returns:**

Array<{ index: number; file: Blob; }>

切片数组，每个元素包含索引和Blob对象

## Example

getFileChunk(fileInput.files\[0], 1024 \* 1024).forEach(chunk => console.log(chunk));
