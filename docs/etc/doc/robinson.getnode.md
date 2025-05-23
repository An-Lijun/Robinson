---
url: /etc\doc/robinson.getnode.md
---
[Home](./index.md) > [robinson](./robinson.md) > [getNode](./robinson.getnode.md)

## getNode() function

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

函数 getNode 将 DOM 元素名称作为输入，如果找到则返回相应的元素，否则返回 null。

**Signature:**

```typescript
declare function getNode(domName: string): Element | null;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  domName | string | domName 参数是一个字符串，表示您要选择的 DOM 元素的名称。 |

**Returns:**

Element | null

Element 对象或 null。

## Example

```JavaScript
   getNode('#id') ===document.querySelector('#id');
```
