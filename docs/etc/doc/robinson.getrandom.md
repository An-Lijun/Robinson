---
url: /etc\doc/robinson.getrandom.md
---
[Home](./index.md) > [robinson](./robinson.md) > [getRandom](./robinson.getrandom.md)

## getRandom() function

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

函数 getRandom 生成指定范围内具有指定小数位数的随机数。

**Signature:**

```typescript
declare function getRandom(min: number, max: number, point?: number): number;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  min | number | 随机数范围的最小值。 |
|  max | number | “max”参数表示您要生成的最大值。 |
|  point | number | *(Optional)* “point”参数是一个可选参数，它指定将随机数舍入到的小数位数。如果没有为“point”提供值，则随机数将以整数形式返回。 |

**Returns:**

number

{number} - 指定最小值和最大值之间的随机数，具有指定的小数位数。

## Example

```JavaScript
   getRandom(1, 5) // 1~5 包含1,5
   getRandom(1, 5, 1) // 1.0~5 包含 1 5
```
