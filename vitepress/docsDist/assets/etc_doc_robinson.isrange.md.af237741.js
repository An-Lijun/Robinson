import{_ as s,o as a,c as n,Q as o}from"./chunks/framework.a333c6fb.js";const F=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"etc/doc/robinson.isrange.md","filePath":"etc/doc/robinson.isrange.md"}'),l={name:"etc/doc/robinson.isrange.md"},p=o(`<p><a href="./">Home</a> &gt; <a href="./robinson.html">robinson</a> &gt; <a href="./robinson.isrange.html">isRange</a></p><h2 id="isrange-function" tabindex="-1">isRange() function <a class="header-anchor" href="#isrange-function" aria-label="Permalink to &quot;isRange() function&quot;">​</a></h2><blockquote><p>This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.</p></blockquote><p>该函数检查给定值是否在指定范围内。</p><p><strong>Signature:</strong></p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">declare</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">isRange</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">value</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">number</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">min</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">number</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">max</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">number</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">boolean</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#0000FF;">declare</span><span style="color:#000000;"> </span><span style="color:#0000FF;">function</span><span style="color:#000000;"> </span><span style="color:#795E26;">isRange</span><span style="color:#000000;">(</span><span style="color:#001080;">value</span><span style="color:#000000;">: </span><span style="color:#267F99;">number</span><span style="color:#000000;">, </span><span style="color:#001080;">min</span><span style="color:#000000;">: </span><span style="color:#267F99;">number</span><span style="color:#000000;">, </span><span style="color:#001080;">max</span><span style="color:#000000;">: </span><span style="color:#267F99;">number</span><span style="color:#000000;">): </span><span style="color:#267F99;">boolean</span><span style="color:#000000;">;</span></span></code></pre></div><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>value</td><td>number</td><td>value 参数表示要检查的数字是否在某个范围内。</td></tr><tr><td>min</td><td>number</td><td>“value”参数可以是的最小值。</td></tr><tr><td>max</td><td>number</td><td>“max”参数表示范围的最大值。</td></tr></tbody></table><p><strong>Returns:</strong></p><p>boolean</p><p>{boolean} - 一个布尔值，指示给定值是否在指定范围内（包括最小值，不包括最大值）。</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-JavaScript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">JavaScript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> n </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">7</span><span style="color:#E1E4E8;">; </span><span style="color:#B392F0;">isRange</span><span style="color:#E1E4E8;">(n, </span><span style="color:#79B8FF;">7</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">8</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">// true 包含7 8</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> n </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">7</span><span style="color:#E1E4E8;">; </span><span style="color:#B392F0;">isRange</span><span style="color:#E1E4E8;">(n, </span><span style="color:#79B8FF;">7</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">7</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">// true 包含7</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#000000;"> </span><span style="color:#0000FF;">let</span><span style="color:#000000;"> </span><span style="color:#001080;">n</span><span style="color:#000000;"> = </span><span style="color:#098658;">7</span><span style="color:#000000;">; </span><span style="color:#795E26;">isRange</span><span style="color:#000000;">(</span><span style="color:#001080;">n</span><span style="color:#000000;">, </span><span style="color:#098658;">7</span><span style="color:#000000;">, </span><span style="color:#098658;">8</span><span style="color:#000000;">) </span><span style="color:#008000;">// true 包含7 8</span></span>
<span class="line"><span style="color:#000000;"> </span><span style="color:#0000FF;">let</span><span style="color:#000000;"> </span><span style="color:#001080;">n</span><span style="color:#000000;"> = </span><span style="color:#098658;">7</span><span style="color:#000000;">; </span><span style="color:#795E26;">isRange</span><span style="color:#000000;">(</span><span style="color:#001080;">n</span><span style="color:#000000;">, </span><span style="color:#098658;">7</span><span style="color:#000000;">, </span><span style="color:#098658;">7</span><span style="color:#000000;">) </span><span style="color:#008000;">// true 包含7</span></span></code></pre></div>`,13),e=[p];function t(r,c,y,i,E,d){return a(),n("div",null,e)}const h=s(l,[["render",t]]);export{F as __pageData,h as default};
