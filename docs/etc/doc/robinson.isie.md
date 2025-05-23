---
url: /etc\doc/robinson.isie.md
---
[Home](./index.md) > [robinson](./robinson.md) > [isIE](./robinson.isie.md)

## isIE() function

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

判断是否是IE浏览器

**Signature:**

```typescript
declare function isIE(win: Iwindow): boolean;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  win | Iwindow | 参数“win”是一个包含navigator对象的对象。 |

**Returns:**

boolean

{boolean} - 一个布尔值。

## Example

```JavaScript
 let win = { navigator: { userAgent: `Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0;
.NET4.0E; .NET4.0C; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729;
 InfoPath.3; rv:11.0) like Gecko` } };
 isIE(win) //true
 let win = { navigator: { userAgent: `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)
 AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.6.1 Safari/605.1.15` } };
 isIE(win) // false
```
