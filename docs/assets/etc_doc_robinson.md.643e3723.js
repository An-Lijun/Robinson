import{_ as t,o as r,c as e,Q as n}from"./chunks/framework.80c893c1.js";const f=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"etc/doc/robinson.md","filePath":"etc/doc/robinson.md"}'),a={name:"etc/doc/robinson.md"},d=n('<p><a href="./">Home</a> &gt; <a href="./robinson.html">robinson</a></p><h2 id="robinson-package" tabindex="-1">robinson package <a class="header-anchor" href="#robinson-package" aria-label="Permalink to &quot;robinson package&quot;">​</a></h2><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><table><thead><tr><th>Function</th><th>Description</th></tr></thead><tbody><tr><td><a href="./robinson.add.html">add(number1, number2)</a></td><td>TypeScript 中的“add”函数接受两个数字作为输入并返回它们的总和，考虑正数、负数以及小数位。这里规避了相加的精度问题</td></tr><tr><td><a href="./robinson.currying.html">currying(fn)</a></td><td>柯里化函数接受一个函数作为输入并返回一个新函数，该函数可以使用多个参数或以柯里化方式调用。</td></tr><tr><td><a href="./robinson.debounce.html">debounce(fn, delay, isLimmediate)</a></td><td>参数1 回调 参数2 延迟时间 参数3 第一次是否立即执行</td></tr><tr><td><a href="./robinson.deepclone.html">deepClone(originalValue)</a></td><td>“deepClone”函数用于创建对象或数组的深层副本，包括处理复杂类型，例如集合、映射和符号。</td></tr><tr><td><a href="./robinson.getchunkarray.html">getChunkArray(array, size)</a></td><td><code>chunkArray</code> 函数接受一个数组和一个大小参数，并返回一个新数组，其中原始数组被分割成指定大小的较小数组。</td></tr><tr><td><a href="./robinson.getrandom.html">getRandom(min, max, point)</a></td><td>函数 getRandom 生成指定范围内具有指定小数位数的随机数。</td></tr><tr><td><a href="./robinson.getrelarray.html">getRelArray(array)</a></td><td>函数“getRelArray”接受一个数组作为输入，并返回一个包含所有非空元素的新数组。</td></tr><tr><td><a href="./robinson.getstringtype.html">getStringType(value)</a></td><td>函数“getStringType”以字符串形式返回输入值的类型。</td></tr><tr><td><a href="./robinson.hastypein.html">hasTypeIn(value, types)</a></td><td>该函数检查给定值的类型是否存在于给定类型数组中。</td></tr><tr><td><a href="./robinson.is.html">is(value, type)</a></td><td>返回是某个类型的判断结果</td></tr><tr><td><a href="./robinson.isarray.html">isArray(value)</a></td><td>接受一个任意类型判断该类型是否是数组并返回。</td></tr><tr><td><a href="./robinson.isboolean.html">isBoolean(value)</a></td><td>函数“isBoolean”检查值是否为布尔类型。</td></tr><tr><td><a href="./robinson.isempty.html">isEmpty(value)</a></td><td>该函数通过将 JSON 表示形式与空数组或对象进行比较来检查值是否为空。</td></tr><tr><td><a href="./robinson.iseqtype.html">isEqType(value, value2)</a></td><td>函数“isEqType”检查两个值的类型是否相等。</td></tr><tr><td><a href="./robinson.isfinite_2.html">isFinite_2(value)</a></td><td>该函数检查一个值是否是有限数,原生的已经很好用了 这里是为了保存api统一。</td></tr><tr><td><a href="./robinson.isfunction.html">isFunction(value)</a></td><td>该函数检查给定值是函数还是异步函数。</td></tr><tr><td><a href="./robinson.isint.html">isInt(value)</a></td><td>函数“isInteger”检查给定值是否为整数,原生的判断已经很好用了 es6+。</td></tr><tr><td><a href="./robinson.isnan_2.html">isNaN_2(value)</a></td><td>该函数检查值是否为 NaN。</td></tr><tr><td><a href="./robinson.isnull.html">isNull(value)</a></td><td>函数“isNull”检查给定值是否为空。</td></tr><tr><td><a href="./robinson.isnumber.html">isNumber(value)</a></td><td>该函数检查值是否为数字。</td></tr><tr><td><a href="./robinson.isobjectlike.html">isObjectLike(value)</a></td><td>该函数检查值是否是类对象like 类型。</td></tr><tr><td><a href="./robinson.isrange.html">isRange(value, min, max)</a></td><td>该函数检查给定值是否在指定范围内。</td></tr><tr><td><a href="./robinson.isreferencetype.html">isReferenceType(value)</a></td><td>该函数检查值是否为引用类型。</td></tr><tr><td><a href="./robinson.issimpletype.html">isSimpleType(value)</a></td><td>该函数检查值是否为简单值（数字、字符串、布尔值、符号、null、undefined 或 bigint）或复杂值（函数、对象、数组、集合、映射）。</td></tr><tr><td><a href="./robinson.isstring.html">isString(value)</a></td><td>函数isString 检查给定值是否是字符串。</td></tr><tr><td><a href="./robinson.issymbol.html">isSymbol(value)</a></td><td>该函数检查值是否是Symbol 类型的对象。</td></tr><tr><td><a href="./robinson.isundefined.html">isUndefined(value)</a></td><td>函数“isUndefined”检查值是否未定义。</td></tr><tr><td><a href="./robinson.minus.html">minus(number1, number2)</a></td><td>“minus”函数以小数精度减去两个数字。</td></tr><tr><td><a href="./robinson.mult.html">mult(number1, number2)</a></td><td><code>mult</code> 函数接受两个数字作为参数，并以十进制精度返回它们的乘积。</td></tr><tr><td><a href="./robinson.throttle.html">throttle(fn, immediate, leading, trailing)</a></td><td><code>throttle</code> 函数是节流机制的 TypeScript 实现，它限制函数调用的速率。</td></tr></tbody></table>',4),i=[d];function o(s,l,h,m,b,u){return r(),e("div",null,i)}const p=t(a,[["render",o]]);export{f as __pageData,p as default};
