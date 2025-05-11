---
url: /etc\doc/robinson.printbydom.md
---
[Home](./index.md) > [robinson](./robinson.md) > [printByDom](./robinson.printbydom.md)

## printByDom() function

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

通过DOM元素打印内容

**Signature:**

```typescript
declare function printByDom(el: HTMLElement, custStyle?: string): void;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  el | HTMLElement | 要打印的DOM元素 |
|  custStyle | string | *(Optional)* 自定义CSS样式 |

**Returns:**

void

## Example

printByDom(document.getElementById('print-content'), 'body { font-size: 12px; }');
