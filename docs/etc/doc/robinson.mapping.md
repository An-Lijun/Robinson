---
url: /etc\doc/robinson.mapping.md
---
[Home](./index.md) > [robinson](./robinson.md) > [mapping](./robinson.mapping.md)

## mapping() function

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

映射函数可以将数据进行枚举映射。

**Signature:**

```typescript
declare function mapping(enumData: enumData, options: options, expty?: string): result;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  enumData | enumData | 枚举数据，可以是对象或数组。 |
|  options | options | 选项，可以是字符串或对象。 |
|  expty | string | *(Optional)* 如果枚举中寻找不到，返回的默认值，默认为 '--'。 |

**Returns:**

result

{result} - 映射后的结果。

## Example

```JavaScript
let enum1 = [{ value: 'USD', label: '美元' }, { value: 'AUD', label: '澳大利亚元' }];
// 返回 { value: 'USD', label: '美元' }
mapping(enum1, { key: 'value', keyValue: 'USD', label: 'label', type: 'object' });
// 返回 '美元'
mapping(enum1, { key: 'value', keyValue: 'USD', label: 'label', type: 'value' });
let enum2 = { USD: '美元', AUD: '澳大利亚元' };
// 返回 '美元'
mapping(enum2, 'USD');
```
