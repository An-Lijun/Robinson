---
url: /etc\doc/robinson.addnode.md
---
[Home](./index.md) > [robinson](./robinson.md) > [addNode](./robinson.addnode.md)

## addNode() function

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

函数“addNode”将 DOM 元素或字符串插入到父 DOM 元素的指定位置。

**Signature:**

```typescript
declare function addNode(parentDom: Element, dom: Element | String, position?: position): void;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  parentDom | Element | parentDom 参数是将新节点插入的 DOM 元素。 |
|  dom | Element | String | “dom”参数可以是“Element”或“String”。它表示需要添加到“parentDom”的元素或 HTML 字符串。 |
|  position | position | *(Optional)* “position”参数是可选的，默认值为“afterbegin”。它指定新节点相对于父节点应插入的位置。 “position。它可以具有以下值之一： beforebegin parentDom元素的前面 afterbegin parentDom元素内部的第一个子节点之前 beforeend parentDom元素内部的最后一个子节点之后 afterend parentDom元素的后面 |

**Returns:**

void

## Example

```JavaScript
 let parent =document.querySelect('#box');
 let newDom =document.createElement('div')
 addNode(parent,newDom,'beforeBegin')
---
  let parent =document.querySelect('#box');
  let str = `<div>123 </div>`
  addNode(parent,str,'beforeBegin')
```
