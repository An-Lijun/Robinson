---
url: /etc\doc/robinson.getafterdate.md
---
[Home](./index.md) > [robinson](./robinson.md) > [getAfterDate](./robinson.getafterdate.md)

## getAfterDate() function

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

计算给定日期之后的日期，并返回格式化后的结果。

**Signature:**

```typescript
declare function getAfterDate(date: Tday, option: IOptions): string;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  date | Tday | 起始日期，可以是 dayjs 对象、Date 对象或字符串。 |
|  option | IOptions | 操作选项。 |

**Returns:**

string

{string} - 返回格式化后的日期字符串。

## Example

```javascript
getAfterDate(dayjs('2024-03-02 08:00:00'), { pattern: 'YYYY年MM月DD日' }) // '2024年03月03日'
getAfterDate(dayjs('2024-03-02 08:00:00'),
{ unitType: 'M', pattern: 'YYYY年MM月DD日' }) // '2024年04月02日'
```
