---
url: /etc\doc/robinson.stoppropagation.md
---
[Home](./index.md) > [robinson](./robinson.md) > [stopPropagation](./robinson.stoppropagation.md)

## stopPropagation() function

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

函数 stopPropagation 阻止事件在事件链中向上冒泡。

**Signature:**

```typescript
declare function stopPropagation(event: Event): void;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  event | Event | 事件参数是一个表示发生的事件的对象。它包含有关事件的信息，例如事件类型、目标元素以及与事件关联的任何其他数据。在这种情况下，事件参数的类型为Event，它是一个通用事件对象，可以 |

**Returns:**

void
