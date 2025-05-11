---
url: /etc\doc/robinson.getnodes.md
---
[Home](./index.md) > [robinson](./robinson.md) > [getNodes](./robinson.getnodes.md)

## getNodes() function

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

函数“getNodes”返回与给定选择器匹配的 DOM 节点的 NodeList，如果未找到节点，则返回 null。

**Signature:**

```typescript
declare function getNodes(domName: string): NodeList | null;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  domName | string | domName 参数是一个字符串，表示您要选择的 DOM 元素的名称。 |

**Returns:**

NodeList | null

NodeList 或 null。

## Example

```JavaScript
   let lis =getNodes('li') === document.querySelectorAll('li')
```
