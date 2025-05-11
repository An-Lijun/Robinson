---
url: /etc\doc/robinson.eventbus.on.md
---
[Home](./index.md) > [robinson](./robinson.md) > [EventBus](./robinson.eventbus.md) > [on](./robinson.eventbus.on.md)

## EventBus.on() method

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

函数“on”将事件侦听器添加到事件对象，将事件函数存储在指定的事件名称下。

**Signature:**

```typescript
on(eventName: string, eventFn: Function): void;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  eventName | string | eventName 是一个字符串参数，表示事件的名称。它用于标识eventObj对象中的事件。 |
|  eventFn | Function | eventFn 参数是当指定事件发生时将执行的函数。 |

**Returns:**

void
