---
url: /etc\doc/robinson.getetc.md
---
[Home](./index.md) > [robinson](./robinson.md) > [getEtc](./robinson.getetc.md)

## getEtc() function

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

函数“getEtc”接受一个字符串值并返回指定长度的子字符串，并在末尾附加一个可选的“etcStr”。

**Signature:**

```typescript
declare function getEtc(value: string, len: number, etcStr?: string): string;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  value | string | value 参数是一个字符串，表示需要截断的输入值。 |
|  len | number | “len”参数是要从“value”参数中提取的字符串的长度。 |
|  etcStr | string | *(Optional)* etcStr 参数是一个字符串，表示如果长度超过指定的 len 参数，则要在切片字符串末尾附加的字符。默认情况下，它设置为“...”。 |

**Returns:**

string

{string} - 一个字符串。

## Example

```JavaScript
 let str = '123456'; getEtc(str, 3) // '123...'
 let str = '123456'; getEtc(str, 3, 'etc') // '123etc'
```
