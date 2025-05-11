---
url: /etc\doc/robinson.iseqvalue.md
---
[Home](./index.md) > [robinson](./robinson.md) > [isEqValue](./robinson.iseqvalue.md)

## isEqValue() function

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

函数“isEqValue”比较两个值，如果它们的值和类型相等则返回 true。

**Signature:**

```typescript
declare function isEqValue(value1: any, value2: any): boolean;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  value1 | any | 要比较的第一个值。它可以是任何类型。 |
|  value2 | any | “value2”参数是要与“value1”比较的第二个值。 |

**Returns:**

boolean

{boolean} 一个布尔值。

## Example

```JavaScript
let a =NaN;let b = NaN; isEqValue(a,b) //true
```
