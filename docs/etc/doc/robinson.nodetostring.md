---
url: /etc\doc/robinson.nodetostring.md
---
[Home](./index.md) > [robinson](./robinson.md) > [nodeToString](./robinson.nodetostring.md)

## nodeToString() function

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

函数 `nodeToString` 接受一个 HTML 元素并返回它的字符串表示形式。

**Signature:**

```typescript
declare function nodeToString(node: Element): string;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  node | Element | node 参数的类型为 Element，它表示 DOM（文档对象模型）中的 HTML 元素。它可以是任何 HTML元素 |

**Returns:**

string

所提供的 HTML 元素的字符串表示形式。

## Example

```JavaScript
   let div =document.createElement('div');
   nodeToString(div) => '<div></div>'
```
