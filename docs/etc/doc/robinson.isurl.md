---
url: /etc\doc/robinson.isurl.md
---
[Home](./index.md) > [robinson](./robinson.md) > [isUrl](./robinson.isurl.md)

## isUrl() function

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

检查是否为有效的URL

**Signature:**

```typescript
declare function isUrl(url: string): boolean;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  url | string | URL字符串 |

**Returns:**

boolean

{boolean} - 一个布尔值。

## Example

```JavaScript
 let url = 'https://example.com'; isUrl(url) // true
 let url = 'invalid-url'; isUrl(url) // false
```
