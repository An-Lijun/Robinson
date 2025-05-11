---
url: /etc\doc/robinson.isexternal.md
---
[Home](./index.md) > [robinson](./robinson.md) > [isExternal](./robinson.isexternal.md)

## isExternal() function

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

判断是否为外链

**Signature:**

```typescript
declare function isExternal(path: any): boolean;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  path | any | 路径 |

**Returns:**

boolean

{boolean} - 一个布尔值。

## Example

```JavaScript
 let path = 'https://example.com'; isExternal(path) // true
 let path = '/internal/path'; isExternal(path)// false
```
