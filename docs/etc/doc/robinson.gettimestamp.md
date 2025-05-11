---
url: /etc\doc/robinson.gettimestamp.md
---
[Home](./index.md) > [robinson](./robinson.md) > [getTimestamp](./robinson.gettimestamp.md)

## getTimestamp() function

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

获取当前日期的时间戳。

**Signature:**

```typescript
declare function getTimestamp(date: Tday): number;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  date | Tday | 输入的日期，可以是 dayjs 对象、Date 对象或字符串。 |

**Returns:**

number

{number} - 返回时间戳（毫秒数）。

## Example

```javascript
getTimestamp(dayjs('2024-03-01 08:00:00')) // 1709251200000
```
