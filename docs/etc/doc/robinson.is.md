---
url: /etc\doc/robinson.is.md
---
[Home](./index.md) > [robinson](./robinson.md) > [is](./robinson.is.md)

## is() function

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

返回是某个类型的判断结果

**Signature:**

```typescript
declare function is(value: any, type: string): boolean;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  value | any | 要判断的数据 |
|  type | string | 判断他是这个类型 |

**Returns:**

boolean

{boolean} 布尔值

## Example

```JavaScript
   let a = 1; is(a,'number')// true
   let b = 2; is(a,'Number') // true
   let c ="2"; is(a,'string') // true
```
