import{_ as s,o as a,c as n,Q as o}from"./chunks/framework.a333c6fb.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"etc/doc/robinson.calc.md","filePath":"etc/doc/robinson.calc.md"}'),l={name:"etc/doc/robinson.calc.md"},p=o(`<p><a href="./">Home</a> &gt; <a href="./robinson.html">robinson</a> &gt; <a href="./robinson.calc.html">calc</a></p><h2 id="calc-function" tabindex="-1">calc() function <a class="header-anchor" href="#calc-function" aria-label="Permalink to &quot;calc() function&quot;">​</a></h2><blockquote><p>This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.</p></blockquote><p>数值计算</p><p><strong>Signature:</strong></p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">declare</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">calc</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">number1</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">BigSource</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">number2</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">BigSource</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">operate</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">TOperate</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#0000FF;">declare</span><span style="color:#000000;"> </span><span style="color:#0000FF;">function</span><span style="color:#000000;"> </span><span style="color:#795E26;">calc</span><span style="color:#000000;">(</span><span style="color:#001080;">number1</span><span style="color:#000000;">: </span><span style="color:#267F99;">BigSource</span><span style="color:#000000;">, </span><span style="color:#001080;">number2</span><span style="color:#000000;">: </span><span style="color:#267F99;">BigSource</span><span style="color:#000000;">, </span><span style="color:#001080;">operate</span><span style="color:#000000;">?: </span><span style="color:#267F99;">TOperate</span><span style="color:#000000;">): </span><span style="color:#267F99;">string</span><span style="color:#000000;">;</span></span></code></pre></div><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>number1</td><td>BigSource</td><td>第一个数字。</td></tr><tr><td>number2</td><td>BigSource</td><td>第二个数字。</td></tr><tr><td>operate</td><td>TOperate</td><td><em>(Optional)</em> 操作符，默认为 &#39;+&#39;。</td></tr></tbody></table><p><strong>Returns:</strong></p><p>string</p><p>{number} - 计算结果。</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">calc</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0.1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0.2</span><span style="color:#E1E4E8;">);</span><span style="color:#6A737D;">// 返回 0.3</span></span>
<span class="line"><span style="color:#B392F0;">calc</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0.1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0.2</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;-&#39;</span><span style="color:#E1E4E8;">);</span><span style="color:#6A737D;">// 返回 -0.1</span></span>
<span class="line"><span style="color:#B392F0;">calc</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0.1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0.2</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;*&#39;</span><span style="color:#E1E4E8;">);</span><span style="color:#6A737D;">// 返回 0.02</span></span>
<span class="line"><span style="color:#B392F0;">calc</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0.1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0.2</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;/&#39;</span><span style="color:#E1E4E8;">);</span><span style="color:#6A737D;">// 返回 0.5</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#795E26;">calc</span><span style="color:#000000;">(</span><span style="color:#098658;">0.1</span><span style="color:#000000;">, </span><span style="color:#098658;">0.2</span><span style="color:#000000;">);</span><span style="color:#008000;">// 返回 0.3</span></span>
<span class="line"><span style="color:#795E26;">calc</span><span style="color:#000000;">(</span><span style="color:#098658;">0.1</span><span style="color:#000000;">, </span><span style="color:#098658;">0.2</span><span style="color:#000000;">, </span><span style="color:#A31515;">&#39;-&#39;</span><span style="color:#000000;">);</span><span style="color:#008000;">// 返回 -0.1</span></span>
<span class="line"><span style="color:#795E26;">calc</span><span style="color:#000000;">(</span><span style="color:#098658;">0.1</span><span style="color:#000000;">, </span><span style="color:#098658;">0.2</span><span style="color:#000000;">, </span><span style="color:#A31515;">&#39;*&#39;</span><span style="color:#000000;">);</span><span style="color:#008000;">// 返回 0.02</span></span>
<span class="line"><span style="color:#795E26;">calc</span><span style="color:#000000;">(</span><span style="color:#098658;">0.1</span><span style="color:#000000;">, </span><span style="color:#098658;">0.2</span><span style="color:#000000;">, </span><span style="color:#A31515;">&#39;/&#39;</span><span style="color:#000000;">);</span><span style="color:#008000;">// 返回 0.5</span></span></code></pre></div>`,13),e=[p];function t(c,r,y,i,E,d){return a(),n("div",null,e)}const u=s(l,[["render",t]]);export{h as __pageData,u as default};
