---
url: /etc\doc/robinson.getfilesize.md
---
[Home](./index.md) > [robinson](./robinson.md) > [getFileSize](./robinson.getfilesize.md)

## getFileSize() function

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取文件大小

**Signature:**

```typescript
declare function getFileSize(file: File, unit?: string): number;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  file | File | 源文件 |
|  unit | string | *(Optional)* 单位（'b', 'kb', 'm', 'g'），默认为'b' |

**Returns:**

number

文件大小（指定单位）

## Example

getFileSize(fileInput.files\[0], 'kb'); // 返回文件大小（KB）
