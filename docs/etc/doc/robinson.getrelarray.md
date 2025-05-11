---
url: /etc\doc/robinson.getrelarray.md
---
[Home](./index.md) > [robinson](./robinson.md) > [getRelArray](./robinson.getrelarray.md)

## getRelArray() function

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

函数“getRelArray”接受一个数组作为输入，并返回一个包含所有非空元素的新数组。

**Signature:**

```typescript
declare function getRelArray(array: Array<any>): Array<any>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  array | Array\<any> | 参数“array”是任意类型的数组。 |

**Returns:**

Array\<any>

{Array} 过滤掉空数据的新数组。

## Example

```JavaScript
   let arr =[1,2,3,null,undefined,4,[],{},NaN];
   getRelArray(arr) // [1,2,3,4]
```
