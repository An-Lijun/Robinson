---
url: /etc\doc/robinson.transhightlight.md
---
[Home](./index.md) > [robinson](./robinson.md) > [transHightLight](./robinson.transhightlight.md)

## transHightLight() function

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

将字符串中的关键词高亮显示。

**Signature:**

```typescript
declare function transHightLight(str: string, keyWords: string | Array<string>, color?: string): string;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  str | string | 要进行高亮处理的原始字符串。 |
|  keyWords | string | Array\<string> | 要高亮的关键字，多个关键字之间可以不使用分隔符。 |
|  color | string | *(Optional)* 高亮显示的颜色，默认为 '#0053db'。 |

**Returns:**

string

返回一个新的字符串，其中关键字被包裹在带有指定颜色样式的 span 标签中。
