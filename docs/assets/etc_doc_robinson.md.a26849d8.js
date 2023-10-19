import{_ as t,o as e,c as r,Q as d}from"./chunks/framework.80c893c1.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"etc/doc/robinson.md","filePath":"etc/doc/robinson.md"}'),a={name:"etc/doc/robinson.md"},n=d('<p><a href="./">Home</a> &gt; <a href="./robinson.html">robinson</a></p><h2 id="robinson-package" tabindex="-1">robinson package <a class="header-anchor" href="#robinson-package" aria-label="Permalink to &quot;robinson package&quot;">​</a></h2><h2 id="classes" tabindex="-1">Classes <a class="header-anchor" href="#classes" aria-label="Permalink to &quot;Classes&quot;">​</a></h2><table><thead><tr><th>Class</th><th>Description</th></tr></thead><tbody><tr><td><a href="./robinson.eventbus.html">eventBus</a></td><td></td></tr></tbody></table><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><table><thead><tr><th>Function</th><th>Description</th></tr></thead><tbody><tr><td><a href="./robinson.add.html">add(number1, number2)</a></td><td>TypeScript 中的“add”函数接受两个数字作为输入并返回它们的总和，考虑正数、负数以及小数位。这里规避了相加的精度问题</td></tr><tr><td><a href="./robinson.addclass.html">addClass(dom, classNm)</a></td><td>该函数将一个类添加到 DOM 元素。</td></tr><tr><td><a href="./robinson.addnode.html">addNode(parentDom, dom, position)</a></td><td>函数“addNode”将 DOM 元素或字符串插入到父 DOM 元素的指定位置。</td></tr><tr><td><a href="./robinson.bind.html">bind(dom, eventType, callBack, isCatch)</a></td><td>该函数将事件侦听器绑定到 TypeScript 中的 DOM 元素。</td></tr><tr><td><a href="./robinson.currying.html">currying(fn)</a></td><td>柯里化函数接受一个函数作为输入并返回一个新函数，该函数可以使用多个参数或以柯里化方式调用。</td></tr><tr><td><a href="./robinson.debounce.html">debounce(fn, delay, isLimmediate)</a></td><td>参数1 回调 参数2 延迟时间 参数3 第一次是否立即执行</td></tr><tr><td><a href="./robinson.deepclone.html">deepClone(originalValue)</a></td><td>“deepClone”函数用于创建对象或数组的深层副本，包括处理复杂类型，例如集合、映射和符号。</td></tr><tr><td><a href="./robinson.division.html">division(number1, number2, digit)</a></td><td></td></tr><tr><td><a href="./robinson.formattime.html">formatTime(timestamp, fmtString)</a></td><td></td></tr><tr><td><a href="./robinson.getchunkarray.html">getChunkArray(array, size)</a></td><td><code>chunkArray</code> 函数接受一个数组和一个大小参数，并返回一个新数组，其中原始数组被分割成指定大小的较小数组。</td></tr><tr><td><a href="./robinson.getetc.html">getEtc(value, len, etcStr)</a></td><td>函数“getEtc”接受一个字符串值并返回指定长度的子字符串，并在末尾附加一个可选的“etcStr”。</td></tr><tr><td><a href="./robinson.getnode.html">getNode(domName)</a></td><td>函数 getNode 将 DOM 元素名称作为输入，如果找到则返回相应的元素，否则返回 null。</td></tr><tr><td><a href="./robinson.getnodes.html">getNodes(domName)</a></td><td>函数“getNodes”返回与给定选择器匹配的 DOM 节点的 NodeList，如果未找到节点，则返回 null。</td></tr><tr><td><a href="./robinson.getrandom.html">getRandom(min, max, point)</a></td><td>函数 getRandom 生成指定范围内具有指定小数位数的随机数。</td></tr><tr><td><a href="./robinson.getrelarray.html">getRelArray(array)</a></td><td>函数“getRelArray”接受一个数组作为输入，并返回一个包含所有非空元素的新数组。</td></tr><tr><td><a href="./robinson.getstringtype.html">getStringType(value)</a></td><td>函数“getStringType”以字符串形式返回输入值的类型。</td></tr><tr><td><a href="./robinson.gettimestr.html">getTimeStr(str, time)</a></td><td>函数“getTimeStr”接受一个字符串和一个数字作为参数，并返回一个重复输入字符串指定次数的新字符串。</td></tr><tr><td><a href="./robinson.hasclass.html">hasClass(dom, classNm)</a></td><td>该函数检查元素是否具有特定的类名。</td></tr><tr><td><a href="./robinson.hastypein.html">hasTypeIn(value, types)</a></td><td>该函数检查给定值的类型是否存在于给定类型数组中。</td></tr><tr><td><a href="./robinson.is.html">is(value, type)</a></td><td>返回是某个类型的判断结果</td></tr><tr><td><a href="./robinson.isarray.html">isArray(value)</a></td><td>接受一个任意类型判断该类型是否是数组并返回。</td></tr><tr><td><a href="./robinson.isboolean.html">isBoolean(value)</a></td><td>函数“isBoolean”检查值是否为布尔类型。</td></tr><tr><td><a href="./robinson.isempty.html">isEmpty(value)</a></td><td>该函数通过将 JSON 表示形式与空数组或对象进行比较来检查值是否为空。</td></tr><tr><td><a href="./robinson.iseqtype.html">isEqType(value, value2)</a></td><td>函数“isEqType”检查两个值的类型是否相等。</td></tr><tr><td><a href="./robinson.isfinite_2.html">isFinite_2(value)</a></td><td>该函数检查一个值是否是有限数,原生的已经很好用了 这里是为了保存api统一。</td></tr><tr><td><a href="./robinson.isfunction.html">isFunction(value)</a></td><td>该函数检查给定值是函数。</td></tr><tr><td><a href="./robinson.isint.html">isInt(value)</a></td><td>函数“isInteger”检查给定值是否为整数,原生的判断已经很好用了 es6+。</td></tr><tr><td><a href="./robinson.isnan_2.html">isNaN_2(value)</a></td><td>该函数检查值是否为 NaN。</td></tr><tr><td><a href="./robinson.isnode.html">isNode(el)</a></td><td>该函数检查元素是否是节点。</td></tr><tr><td><a href="./robinson.isnull.html">isNull(value)</a></td><td>函数“isNull”检查给定值是否为空。</td></tr><tr><td><a href="./robinson.isnumber.html">isNumber(value)</a></td><td>该函数检查值是否为数字。</td></tr><tr><td><a href="./robinson.isobjectlike.html">isObjectLike(value)</a></td><td>该函数检查值是否是类对象like 类型。</td></tr><tr><td><a href="./robinson.isrange.html">isRange(value, min, max)</a></td><td>该函数检查给定值是否在指定范围内。</td></tr><tr><td><a href="./robinson.isreferencetype.html">isReferenceType(value)</a></td><td>该函数检查值是否为引用类型。</td></tr><tr><td><a href="./robinson.issimpletype.html">isSimpleType(value)</a></td><td>该函数检查值是否为简单值（数字、字符串、布尔值、符号、null、undefined 或 bigint）或复杂值（函数、对象、数组、集合、映射）。</td></tr><tr><td><a href="./robinson.isstring.html">isString(value)</a></td><td>函数isString 检查给定值是否是字符串。</td></tr><tr><td><a href="./robinson.issymbol.html">isSymbol(value)</a></td><td>该函数检查值是否是Symbol 类型的对象。</td></tr><tr><td><a href="./robinson.isundefined.html">isUndefined(value)</a></td><td>函数“isUndefined”检查值是否未定义。</td></tr><tr><td><a href="./robinson.minus.html">minus(number1, number2)</a></td><td>“minus”函数以小数精度减去两个数字。</td></tr><tr><td><a href="./robinson.mult.html">mult(number1, number2)</a></td><td><code>mult</code> 函数接受两个数字作为参数，并以十进制精度返回它们的乘积。</td></tr><tr><td><a href="./robinson.nodetostring.html">nodeToString(node)</a></td><td>函数 <code>nodeToString</code> 接受一个 HTML 元素并返回它的字符串表示形式。</td></tr><tr><td><a href="./robinson.preventdefault.html">preventDefault(event)</a></td><td>该函数可防止事件的默认行为。</td></tr><tr><td><a href="./robinson.removeclass.html">removeClass(dom, classNm)</a></td><td>该函数从给定的 DOM 元素中删除指定的类名。</td></tr><tr><td><a href="./robinson.removenode.html">removeNode(parentNode, dom)</a></td><td>该函数从其父节点中删除指定的 DOM 元素。</td></tr><tr><td><a href="./robinson.replaceclass.html">replaceClass(dom, newClass, oldClass)</a></td><td>该函数将给定 DOM 元素上的旧类替换为新类。</td></tr><tr><td><a href="./robinson.replacenode.html">replaceNode(parentNode, newDom, oldDom)</a></td><td>函数“replaceNode”用新的 DOM 元素或给定父元素中的字符串替换旧的 DOM 元素。</td></tr><tr><td><a href="./robinson.stoppropagation.html">stopPropagation(event)</a></td><td>函数 stopPropagation 阻止事件在事件链中向上冒泡。</td></tr><tr><td><a href="./robinson.stringtonode.html">stringToNode(str)</a></td><td>该函数接受一个字符串并返回新创建的 div 元素的第一个子节点，并将该字符串作为其innerHTML。</td></tr><tr><td><a href="./robinson.throttle.html">throttle(fn, immediate, leading, trailing)</a></td><td><code>throttle</code> 函数是节流机制的 TypeScript 实现，它限制函数调用的速率。</td></tr><tr><td><a href="./robinson.unbind.html">unBind(dom, eventType, fnName)</a></td><td>函数 unBind 从 DOM 元素中删除事件侦听器。</td></tr></tbody></table><h2 id="variables" tabindex="-1">Variables <a class="header-anchor" href="#variables" aria-label="Permalink to &quot;Variables&quot;">​</a></h2><table><thead><tr><th>Variable</th><th>Description</th></tr></thead><tbody><tr><td><a href="./robinson.cache.html">cache</a></td><td>createCache 函数创建一个缓存对象，该对象可以使用指定的存储机制和编码/解码函数来存储和检索数据。</td></tr></tbody></table>',8),o=[n];function i(s,l,h,m,b,c){return e(),r("div",null,o)}const p=t(a,[["render",i]]);export{u as __pageData,p as default};
