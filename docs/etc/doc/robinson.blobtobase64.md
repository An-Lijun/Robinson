---
url: /etc\doc/robinson.blobtobase64.md
---
[Home](./index.md) > [robinson](./robinson.md) > [blobToBase64](./robinson.blobtobase64.md)

## blobToBase64() function

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

将Blob对象转换为Base64编码的字符串

**Signature:**

```typescript
declare function blobToBase64(blob: BlobPart, suffix?: string): Promise<unknown>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  blob | BlobPart | Blob对象 |
|  suffix | string | *(Optional)* 文件后缀，默认为'png' |

**Returns:**

Promise\<unknown>

Promise对象，解析为Base64编码的字符串

## Example

blobToBase64(new Blob(\['Hello, world!'], { type: 'text/plain' })) .then(base64 => console.log(base64));
