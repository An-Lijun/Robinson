---
url: /etc\doc/robinson.asigndata.md
---
[Home](./index.md) > [robinson](./robinson.md) > [asignData](./robinson.asigndata.md)

## asignData() function

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

函数“asignData”将属性从“obj2”复制到“obj1”，并可选择执行附加函数。

**Signature:**

```typescript
declare function asignData(obj1: DAMNU_ENABLE, obj2: DAMNU_ENABLE): DAMNU_ENABLE;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  obj1 | DAMNU\_ENABLE | obj1 是第一个将被分配数据的对象。 |
|  obj2 | DAMNU\_ENABLE | obj2 是一个对象，其中包含将根据匹配键分配给 obj1 的数据。 |

**Returns:**

DAMNU\_ENABLE

{DAMNU\_ENABLE} - 合并后的对象。

## Example

```JavaScript
let o = {
  a: 123,
};
let b = {
  a: 456,
  b: 111,
};
let result = asignData(o, b);
// result: { a: 456 }
```
