---
url: /etc\doc/robinson.removeclass.md
---
[Home](./index.md) > [robinson](./robinson.md) > [removeClass](./robinson.removeclass.md)

## removeClass() function

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

该函数从给定的 DOM 元素中删除指定的类名。

**Signature:**

```typescript
declare function removeClass(dom: Element, classNm: string): void;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  dom | Element | “dom”参数的类型为“Element”，表示要从中删除类的 DOM 元素。 |
|  classNm | string | “classNm”参数是一个字符串，表示要从“dom”元素中删除的类的名称。 |

**Returns:**

void

## Example

```JavaScript
   let div =document.createElement('div');
   div.className ='a1 a2 a3'
   removeClass(div,'a1')
```
