---
url: /etc\doc/robinson.deepclone.md
---
[Home](./index.md) > [robinson](./robinson.md) > [deepClone](./robinson.deepclone.md)

## deepClone() function

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

“deepClone”函数用于创建对象或数组的深层副本，包括处理复杂类型，例如集合、映射和符号。

**Signature:**

```typescript
declare function deepClone(originalValue: any): any;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  originalValue | any | OriginalValue 参数是您要深度克隆的值。它可以是任何数据类型，包括对象、数组、集合、映射、函数以及字符串或数字等简单值。 |

**Returns:**

any

{any} - 函数“deepClone”返回“originalValue”参数的深度克隆。

## Example

```JavaScript
   let data = {
     a: [1, 2]
   };
   let cloneData = deepClone(data);
```
