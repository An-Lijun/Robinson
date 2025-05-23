---
url: /etc\doc/robinson.unbind.md
---
[Home](./index.md) > [robinson](./robinson.md) > [unBind](./robinson.unbind.md)

## unBind() function

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

函数 unBind 从 DOM 元素中删除事件侦听器。

**Signature:**

```typescript
declare function unBind(dom: Node, eventType: string, fnName: EventListenerOrEventListenerObject): void;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  dom | Node | dom 参数是事件监听器所附加的 DOM 元素。 |
|  eventType | string | eventType 参数是一个字符串，指定要删除的事件的类型。事件类型的示例包括“单击”、“按下键”、“鼠标悬停”等。 |
|  fnName | EventListenerOrEventListenerObject | fnName 参数是要从指定 DOM 元素中删除的事件侦听器函数或事件侦听器对象的名称。 |

**Returns:**

void

## Example

```JavaScript
   let div = document.querySelect('#btn');
   div.onclik =()=>{
     console.log('11')
   }
   unBind(div,'click')
```
