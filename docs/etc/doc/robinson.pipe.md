---
url: /etc\doc/robinson.pipe.md
---
[Home](./index.md) > [robinson](./robinson.md) > [pipe](./robinson.pipe.md)

## pipe() function

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

从左向右执行函数。

**Signature:**

```typescript
declare function pipe(...fns: Array<Function>): Function;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  fns | Array\<Function> | 要组合的函数。 |

**Returns:**

Function

{Function} - 返回一个组合后的函数。

## Example

```JavaScript
const addOne = x => x + 1;
const double = x => x * 2;
const piped = pipe(addOne, double);
piped(2);// 返回 6
```
