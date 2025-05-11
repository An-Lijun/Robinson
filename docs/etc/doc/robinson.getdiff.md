---
url: /etc\doc/robinson.getdiff.md
---
[Home](./index.md) > [robinson](./robinson.md) > [getDiff](./robinson.getdiff.md)

## getDiff() function

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

计算两个日期之间的差值。

**Signature:**

```typescript
declare function getDiff(start: Tday, end: Tday, unitType: dayjs.OpUnitType, float?: boolean): number;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  start | Tday | 开始日期，可以是 dayjs 对象、Date 对象或字符串。 |
|  end | Tday | 结束日期，可以是 dayjs 对象、Date 对象或字符串。 |
|  unitType | dayjs.OpUnitType | 时间单位类型。 |
|  float | boolean | *(Optional)* 是否返回浮点数，默认为 false。 |

**Returns:**

number

{number} - 返回两个日期之间的差值。

## Example

```javascript
getDiff(dayjs('2024-03-02 08:00:00'), dayjs('2024-03-03 08:00:00'), 'd') // 1
getDiff(dayjs('2024-03-02 08:00:00'), dayjs('2024-04-03 08:00:00'), 'd') // 32
```
