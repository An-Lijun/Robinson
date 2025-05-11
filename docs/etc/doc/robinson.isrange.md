---
url: /etc\doc/robinson.isrange.md
---
[Home](./index.md) > [robinson](./robinson.md) > [isRange](./robinson.isrange.md)

## isRange() function

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

该函数检查给定值是否在指定范围内。

**Signature:**

```typescript
declare function isRange(value: number, min: number, max: number): boolean;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  value | number | value 参数表示要检查的数字是否在某个范围内。 |
|  min | number | “value”参数可以是的最小值。 |
|  max | number | “max”参数表示范围的最大值。 |

**Returns:**

boolean

{boolean} - 一个布尔值，指示给定值是否在指定范围内（包括最小值，不包括最大值）。

## Example

```JavaScript
 let n = 7; isRange(n, 7, 8) // true 包含7 8
 let n = 7; isRange(n, 7, 7) // true 包含7
```
