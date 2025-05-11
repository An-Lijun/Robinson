---
url: /etc\doc/robinson.removenode.md
---
[Home](./index.md) > [robinson](./robinson.md) > [removeNode](./robinson.removenode.md)

## removeNode() function

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

该函数从其父节点中删除指定的 DOM 元素。

**Signature:**

```typescript
declare function removeNode(parentNode: Element, dom: Element): void;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  parentNode | Element | parentNode 参数是包含 dom 元素的元素。它是您要从中删除“dom”元素的元素。 |
|  dom | Element | dom 参数是要从其父节点中删除的元素。 |

**Returns:**

void

## Example

```JavaScript
   let div =document.createElement('div');
   document.body.appendChild(div)
   removeNode(document.body,div)
```
