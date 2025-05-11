---
url: /etc\doc/robinson.isnode.md
---
[Home](./index.md) > [robinson](./robinson.md) > [isNode](./robinson.isnode.md)

## isNode() function

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

该函数检查元素是否是节点。

**Signature:**

```typescript
declare function isNode(el: any): Boolean;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  el | any | el 参数的类型是 Element，它表示 HTML DOM 中的一个元素。 |

**Returns:**

Boolean

一个布尔值。如果给定元素的 nodeType 为 1 (ELEMENT\_NODE)、9 (DOCUMENT\_NODE) 或 11 (DOCUMENT\_FRAGMENT\_NODE)，则返回 true。否则，返回 false。

## Example

```JavaScript
   let div =document.createElement('div');
   isNode(div) =>true
```
