---
url: /etc\doc/robinson.debounce.md
---
[Home](./index.md) > [robinson](./robinson.md) > [debounce](./robinson.debounce.md)

## debounce() function

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

防抖函数，限制函数调用的频率。

**Signature:**

```typescript
declare function debounce(fn: Function, delay: number, isLimmediate?: boolean): Function;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  fn | Function | “fn”参数是您想要限制的函数。 |
|  delay | number | “delay”参数是函数调用之间的最小时间间隔（以毫秒为单位）。 |
|  isLimmediate | boolean | *(Optional)* “isLimmediate”参数决定该函数是在调用时立即执行还是等待指定的“delay”时间过去后才第一次执行该函数。 |

**Returns:**

Function

{Function} - 返回一个防抖函数。

## Example

```JavaScript
const log = () => console.log('Logged');
const debouncedLog = debounce(log, 1000, true);
debouncedLog(); // 立即执行
debouncedLog(); // 1秒内再次调用不会执行
debouncedLog.cancel(); // 取消执行
```
