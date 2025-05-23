---
url: /etc\doc/robinson.isboolean.md
---
[Home](./index.md) > [robinson](./robinson.md) > [isBoolean](./robinson.isboolean.md)

## isBoolean() function

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

函数“isBoolean”检查值是否为布尔类型。

**Signature:**

```typescript
declare function isBoolean(value: any): boolean;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  value | any | 参数“value”可以是任何数据类型。 |

**Returns:**

boolean

{boolean} 函数 isBoolean 返回一个布尔值。

## Example

```JavaScript
   let boo = true;
   isBoolean(boo) // true
   let str = "true";
   isBoolean(boo) // false
```
