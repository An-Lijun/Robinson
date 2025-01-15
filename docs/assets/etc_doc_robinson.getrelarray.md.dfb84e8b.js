import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.a7175731.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"etc/doc/robinson.getrelarray.md","filePath":"etc/doc/robinson.getrelarray.md"}'),o={name:"etc/doc/robinson.getrelarray.md"},p=l('<p><a href="./">Home</a> &gt; <a href="./robinson.html">robinson</a> &gt; <a href="./robinson.getrelarray.html">getRelArray</a></p><h2 id="getrelarray-function" tabindex="-1">getRelArray() function <a class="header-anchor" href="#getrelarray-function" aria-label="Permalink to &quot;getRelArray() function&quot;">​</a></h2><p>函数“getRelArray”接受一个数组作为输入，并返回一个包含所有非空元素的新数组。</p><p><strong>Signature:</strong></p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">declare</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getRelArray</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">array</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Array</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">any</span><span style="color:#E1E4E8;">&gt;)</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Array</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">any</span><span style="color:#E1E4E8;">&gt;;</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#0000FF;">declare</span><span style="color:#000000;"> </span><span style="color:#0000FF;">function</span><span style="color:#000000;"> </span><span style="color:#795E26;">getRelArray</span><span style="color:#000000;">(</span><span style="color:#001080;">array</span><span style="color:#000000;">: </span><span style="color:#267F99;">Array</span><span style="color:#000000;">&lt;</span><span style="color:#267F99;">any</span><span style="color:#000000;">&gt;): </span><span style="color:#267F99;">Array</span><span style="color:#000000;">&lt;</span><span style="color:#267F99;">any</span><span style="color:#000000;">&gt;;</span></span></code></pre></div><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>array</td><td>Array&lt;any&gt;</td><td>参数“array”是任意类型的数组。</td></tr></tbody></table><p><strong>Returns:</strong></p><p>Array&lt;any&gt;</p><p>过滤掉空数据的新数组。</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-JavaScript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">JavaScript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> arr </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">[</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">undefined</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">,[],{},</span><span style="color:#79B8FF;">NaN</span><span style="color:#E1E4E8;">]; </span><span style="color:#B392F0;">getRelArray</span><span style="color:#E1E4E8;">(arr)</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">]</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#000000;">   </span><span style="color:#0000FF;">let</span><span style="color:#000000;"> </span><span style="color:#001080;">arr</span><span style="color:#000000;"> =[</span><span style="color:#098658;">1</span><span style="color:#000000;">,</span><span style="color:#098658;">2</span><span style="color:#000000;">,</span><span style="color:#098658;">3</span><span style="color:#000000;">,</span><span style="color:#0000FF;">null</span><span style="color:#000000;">,</span><span style="color:#0000FF;">undefined</span><span style="color:#000000;">,</span><span style="color:#098658;">4</span><span style="color:#000000;">,[],{},</span><span style="color:#0000FF;">NaN</span><span style="color:#000000;">]; </span><span style="color:#795E26;">getRelArray</span><span style="color:#000000;">(</span><span style="color:#001080;">arr</span><span style="color:#000000;">)</span><span style="color:#0000FF;">=&gt;</span><span style="color:#000000;"> [</span><span style="color:#098658;">1</span><span style="color:#000000;">,</span><span style="color:#098658;">2</span><span style="color:#000000;">,</span><span style="color:#098658;">3</span><span style="color:#000000;">,</span><span style="color:#098658;">4</span><span style="color:#000000;">]</span></span></code></pre></div>',12),e=[p];function t(r,c,y,E,i,d){return a(),n("div",null,e)}const g=s(o,[["render",t]]);export{h as __pageData,g as default};
