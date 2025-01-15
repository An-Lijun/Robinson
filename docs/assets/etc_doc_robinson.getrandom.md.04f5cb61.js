import{_ as s,o as a,c as n,Q as o}from"./chunks/framework.a7175731.js";const F=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"etc/doc/robinson.getrandom.md","filePath":"etc/doc/robinson.getrandom.md"}'),p={name:"etc/doc/robinson.getrandom.md"},l=o(`<p><a href="./">Home</a> &gt; <a href="./robinson.html">robinson</a> &gt; <a href="./robinson.getrandom.html">getRandom</a></p><h2 id="getrandom-function" tabindex="-1">getRandom() function <a class="header-anchor" href="#getrandom-function" aria-label="Permalink to &quot;getRandom() function&quot;">​</a></h2><p>函数 getRandom 生成指定范围内具有指定小数位数的随机数。</p><p><strong>Signature:</strong></p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">declare</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getRandom</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">min</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">number</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">max</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">number</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">point</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">number</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">number</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#0000FF;">declare</span><span style="color:#000000;"> </span><span style="color:#0000FF;">function</span><span style="color:#000000;"> </span><span style="color:#795E26;">getRandom</span><span style="color:#000000;">(</span><span style="color:#001080;">min</span><span style="color:#000000;">: </span><span style="color:#267F99;">number</span><span style="color:#000000;">, </span><span style="color:#001080;">max</span><span style="color:#000000;">: </span><span style="color:#267F99;">number</span><span style="color:#000000;">, </span><span style="color:#001080;">point</span><span style="color:#000000;">?: </span><span style="color:#267F99;">number</span><span style="color:#000000;">): </span><span style="color:#267F99;">number</span><span style="color:#000000;">;</span></span></code></pre></div><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>min</td><td>number</td><td>随机数范围的最小值。</td></tr><tr><td>max</td><td>number</td><td>“max”参数表示您要生成的最大值。</td></tr><tr><td>point</td><td>number</td><td><em>(Optional)</em> “point”参数是一个可选参数，它指定将随机数舍入到的小数位数。如果没有为“point”提供值，则随机数将以整数形式返回。</td></tr></tbody></table><p><strong>Returns:</strong></p><p>number</p><p>指定最小值和最大值之间的随机数，具有指定的小数位数。</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-JavaScript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">JavaScript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#B392F0;">getRandom</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#F97583;">~</span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;"> 包含1,</span><span style="color:#79B8FF;">5</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#B392F0;">getRandom</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) </span><span style="color:#79B8FF;">1.0</span><span style="color:#F97583;">~</span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;"> 包含 </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">5</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#000000;">   </span><span style="color:#795E26;">getRandom</span><span style="color:#000000;">(</span><span style="color:#098658;">1</span><span style="color:#000000;">,</span><span style="color:#098658;">5</span><span style="color:#000000;">)</span><span style="color:#0000FF;">=&gt;</span><span style="color:#000000;"> </span><span style="color:#098658;">1</span><span style="color:#000000;">~</span><span style="color:#098658;">5</span><span style="color:#000000;"> </span><span style="color:#001080;">包含1</span><span style="color:#000000;">,</span><span style="color:#098658;">5</span></span>
<span class="line"><span style="color:#000000;">   </span><span style="color:#795E26;">getRandom</span><span style="color:#000000;">(</span><span style="color:#098658;">1</span><span style="color:#000000;">,</span><span style="color:#098658;">5</span><span style="color:#000000;">,</span><span style="color:#098658;">1</span><span style="color:#000000;">) </span><span style="color:#098658;">1.0</span><span style="color:#000000;">~</span><span style="color:#098658;">5</span><span style="color:#000000;"> </span><span style="color:#001080;">包含</span><span style="color:#000000;"> </span><span style="color:#098658;">1</span><span style="color:#000000;"> </span><span style="color:#098658;">5</span></span></code></pre></div>`,12),t=[l];function e(r,c,y,d,i,E){return a(),n("div",null,t)}const h=s(p,[["render",e]]);export{F as __pageData,h as default};