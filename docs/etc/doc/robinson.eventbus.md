---
url: /etc\doc/robinson.eventbus.md
---
[Home](./index.md) > [robinson](./robinson.md) > [EventBus](./robinson.eventbus.md)

## EventBus class

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

函数“on”将事件侦听器添加到事件对象，将事件函数存储在指定的事件名称下。

**Signature:**

```typescript
declare class EventBus 
```

## Example

const eventBus = new EventBus(); eventBus.on('myEvent', () => { console.log('myEvent triggered'); });

## Constructors

|  Constructor | Modifiers | Description |
|  --- | --- | --- |
|  [(constructor)()](./robinson.eventbus._constructor_.md) |  | ***(BETA)*** Constructs a new instance of the EventBus class |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [clear(eventName)](./robinson.eventbus.clear.md) |  | ***(BETA)*** clear 函数从 eventObj 对象中删除事件。 |
|  [emit(eventName, Args)](./robinson.eventbus.emit.md) |  | ***(BETA)*** “emit”函数触发与特定事件名称关联的所有事件处理程序，并将任何参数传递给它们。 |
|  [off(eventName, fn)](./robinson.eventbus.off.md) |  | ***(BETA)*** |
|  [on(eventName, eventFn)](./robinson.eventbus.on.md) |  | ***(BETA)*** 函数“on”将事件侦听器添加到事件对象，将事件函数存储在指定的事件名称下。 |
