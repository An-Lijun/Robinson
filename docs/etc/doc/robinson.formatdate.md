---
url: /etc\doc/robinson.formatdate.md
---
[Home](./index.md) > [robinson](./robinson.md) > [formatDate](./robinson.formatdate.md)

## formatDate() function

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

格式化时间。

**Signature:**

```typescript
declare function formatDate(date: Tday, pattern?: string): string;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  date | Tday | 输入的日期，可以是 dayjs 对象、Date 对象或字符串。 |
|  pattern | string | *(Optional)* 格式化模式，默认为 'YYYY-MM-DD'。 |

**Returns:**

string

{string} - 返回格式化后的时间字符串。

## Example

```javascript
formatDate(dayjs('2024-03-01 08:00:00'), 'YYYY年MM月DD日') // '2024年03月01日'
```
