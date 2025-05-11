---
url: /etc\doc/robinson.replaceclass.md
---
[Home](./index.md) > [robinson](./robinson.md) > [replaceClass](./robinson.replaceclass.md)

## replaceClass() function

该函数将给定 DOM 元素上的旧类替换为新类。

**Signature:**

```typescript
declare function replaceClass(dom: Element, newClass: string, oldClass: string): void;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  dom | Element | dom 参数的类型为 Node，表示将执行类替换的 DOM 元素。 |
|  newClass | string | 要添加到 DOM 元素的新 CSS 类。 |
|  oldClass | string | oldClass 参数是一个字符串，表示要替换的类名。 |

**Returns:**

void

## Example

```JavaScript
 let div = document.creatElement('div');
 div.className = 'a11'
 replaceClass(div,'a22','a11')
```
