---
url: /etc\doc/robinson.hasclass.md
---
[Home](./index.md) > [robinson](./robinson.md) > [hasClass](./robinson.hasclass.md)

## hasClass() function

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

该函数检查元素是否具有特定的类名。

**Signature:**

```typescript
declare function hasClass(dom: Element, classNm: String): boolean;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  dom | Element | “dom”参数的类型为“Element”，表示我们要检查其是否存在类的 DOM 元素。 |
|  classNm | String | “classNm”参数是一个字符串，表示您要在“dom”元素中检查的类名。 |

**Returns:**

boolean

一个布尔值，指示给定的 DOM 元素是否具有指定的类名。

## Example

```JavaScript
   let div =document.createElement('div');
   div.classList="a1 a2 a3"
   hasClass(div,'a1')  => true
```
