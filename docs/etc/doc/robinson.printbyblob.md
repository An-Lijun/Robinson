---
url: /etc\doc/robinson.printbyblob.md
---
[Home](./index.md) > [robinson](./robinson.md) > [printByBlob](./robinson.printbyblob.md)

## printByBlob() function

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

通过Blob对象打印内容

**Signature:**

```typescript
declare function printByBlob(blob: Blob, type?: string): void;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  blob | Blob | Blob对象 |
|  type | string | *(Optional)* MIME类型，默认为'application/pdf' |

**Returns:**

void

## Example

printByBlob(new Blob(\['Hello, world!'], { type: 'text/plain' }));
