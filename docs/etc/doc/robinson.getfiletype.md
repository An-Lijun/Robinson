---
url: /etc\doc/robinson.getfiletype.md
---
[Home](./index.md) > [robinson](./robinson.md) > [getFileType](./robinson.getfiletype.md)

## getFileType() function

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取文件后缀名

**Signature:**

```typescript
declare function getFileType(file: File): string | undefined;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  file | File | 源文件 |

**Returns:**

string | undefined

文件后缀名

## Example

getFileType(fileInput.files\[0]); // 返回文件后缀名（如 'jpg'）
