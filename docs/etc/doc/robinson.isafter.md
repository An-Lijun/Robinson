---
url: /etc\doc/robinson.isafter.md
---
[Home](./index.md) > [robinson](./robinson.md) > [isAfter](./robinson.isafter.md)

## isAfter() function

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

判断一个日期是否在另一个日期之后。

**Signature:**

```typescript
declare function isAfter(start: dayjs.ConfigType, end: dayjs.ConfigType): boolean;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  start | dayjs.ConfigType | 开始日期，可以是 dayjs 对象、Date 对象或字符串。 |
|  end | dayjs.ConfigType | 结束日期，可以是 dayjs 对象、Date 对象或字符串。 |

**Returns:**

boolean

{boolean} - 如果开始日期在结束日期之后返回 true，否则返回 false。
