---
url: /etc\doc/robinson.iseqtype.md
---
[Home](./index.md) > [robinson](./robinson.md) > [isEqType](./robinson.iseqtype.md)

## isEqType() function

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

函数“isEqType”检查两个值的类型是否相等。

**Signature:**

```typescript
declare function isEqType(value: any, value2: any): boolean;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  value | any | “value”参数的类型为“any”，这意味着它可以接受任何类型的值。 |
|  value2 | any | “value2”参数是您要与之比较类型的第二个值。 |

**Returns:**

boolean

{boolean} 一个布尔值。

```JavaScript
let a =1;
let b =new Number();
isEqType(value,value2) // true

let a ='1';
let b =new Number();
isEqType(value,value2) // false

```
