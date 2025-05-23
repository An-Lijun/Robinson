<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [robinson](./robinson.md) &gt; [EventBus](./robinson.eventbus.md) &gt; [emit](./robinson.eventbus.emit.md)

## EventBus.emit() method

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.
> 

“emit”函数触发与特定事件名称关联的所有事件处理程序，并将任何参数传递给它们。

**Signature:**

```typescript
emit(eventName: string, ...Args: any): void;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  eventName | string | 表示要发出的事件名称的字符串。 |
|  Args | any | Args 是一个剩余参数，允许将无限数量的参数传递给 emit 函数。这些参数可以是任何类型。 |

**Returns:**

void

