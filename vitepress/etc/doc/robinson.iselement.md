<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [robinson](./robinson.md) &gt; [isElement](./robinson.iselement.md)

## isElement() function

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.
> 

 是否为DOM元素

**Signature:**

```typescript
declare function isElement(val: any): boolean;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  val | any | 参数“val”的类型为“any”，这意味着它可以是任何数据类型。 |

**Returns:**

boolean

{<!-- -->boolean<!-- -->} - 一个布尔值。

## Example


```JavaScript
 let div = document.createElement('div'); isElement(div) // true
 let str = 'not an element'; isElement(str) //false
```

