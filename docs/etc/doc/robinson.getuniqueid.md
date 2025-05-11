---
url: /etc\doc/robinson.getuniqueid.md
---
[Home](./index.md) > [robinson](./robinson.md) > [getUniqueId](./robinson.getuniqueid.md)

## getUniqueId() function

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

该函数使用随机字符串模式生成唯一 ID。

**Signature:**

```typescript
declare function getUniqueId(): string;
```

**Returns:**

string

{string} - 函数“getUniqueId”返回格式为“xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx”的唯一标识符字符串。

## Example

```JavaScript
 getUniqueId() // '627ad809-60fc-47b1-be5d-e0ae1ef903ca'
```
