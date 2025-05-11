---
url: /etc\doc/robinson.replacenode.md
---
[Home](./index.md) > [robinson](./robinson.md) > [replaceNode](./robinson.replacenode.md)

## replaceNode() function

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

函数“replaceNode”用新的 DOM 元素或给定父元素中的字符串替换旧的 DOM 元素。

**Signature:**

```typescript
declare function replaceNode(parentNode: Element, newDom: string | Node, oldDom: Element): void;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  parentNode | Element | ParentNode 参数是包含 oldDom 元素的元素。它是发生替换的父元素。 |
|  newDom | string | Node | newDom 参数可以是字符串或 Node。如果它是一个字符串， 则它表示将使用“stringToNode”函数转换为节点的 HTML 标记。如果已经是一个Node，则代表新的Node将取代旧的Node |
|  oldDom | Element | oldDom 参数是要替换为 newDom 的元素。 |

**Returns:**

void

## Example

```JavaScript
   let div = document.createElement('div')
   div.id = 'aa6'
   let body = docuement.body
   body.appendChild(div);

   let span =document.createElement('span');
   replaceNode(body,span,div);
```
