---
url: /etc\doc/robinson.urltobase64.md
---
[Home](./index.md) > [robinson](./robinson.md) > [urlToBase64](./robinson.urltobase64.md)

## urlToBase64() function

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

将图片URL转换为Base64编码的字符串

**Signature:**

```typescript
declare function urlToBase64(url: string, suffix?: string): Promise<string>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  url | string | 图片URL |
|  suffix | string | *(Optional)* 文件后缀，默认为'image/png' |

**Returns:**

Promise\<string>

Promise对象，解析为Base64编码的字符串

## Example

urlToBase64('https://example.com/image.png').then(base64 => console.log(base64));
