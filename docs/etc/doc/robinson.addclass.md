---
url: /etc\doc/robinson.addclass.md
---
[Home](./index.md) > [robinson](./robinson.md) > [addClass](./robinson.addclass.md)

## addClass() function

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

该函数将一个类添加到 DOM 元素。

**Signature:**

```typescript
declare function addClass(dom: Element, classNm: string): void;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  dom | Element | dom 参数的类型为 Element，表示要添加该类的 DOM 元素。 |
|  classNm | string | classNm 参数是一个字符串，表示要添加到 dom 元素的类的名称。 |

**Returns:**

void

## Example

```JavaScript
   let div= document.createElement('div')
   addClass(div,'aa')
   div.className => "aa"
```
