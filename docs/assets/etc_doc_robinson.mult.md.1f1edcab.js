import{_ as s,o as a,c as n,Q as o}from"./chunks/framework.80c893c1.js";const E=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"etc/doc/robinson.mult.md","filePath":"etc/doc/robinson.mult.md"}'),t={name:"etc/doc/robinson.mult.md"},e=o('<p><a href="./">Home</a> &gt; <a href="./robinson.html">robinson</a> &gt; <a href="./robinson.mult.html">mult</a></p><h2 id="mult-function" tabindex="-1">mult() function <a class="header-anchor" href="#mult-function" aria-label="Permalink to &quot;mult() function&quot;">​</a></h2><p><code>mult</code> 函数接受两个数字作为参数，并以十进制精度返回它们的乘积。</p><p><strong>Signature:</strong></p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">declare</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">mult</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">number1</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">number</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">number2</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">number</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">number</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#0000FF;">declare</span><span style="color:#000000;"> </span><span style="color:#0000FF;">function</span><span style="color:#000000;"> </span><span style="color:#795E26;">mult</span><span style="color:#000000;">(</span><span style="color:#001080;">number1</span><span style="color:#000000;">: </span><span style="color:#267F99;">number</span><span style="color:#000000;">, </span><span style="color:#001080;">number2</span><span style="color:#000000;">: </span><span style="color:#267F99;">number</span><span style="color:#000000;">): </span><span style="color:#267F99;">number</span><span style="color:#000000;">;</span></span></code></pre></div><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>number1</td><td>number</td><td>“number1”参数是您要相乘的第一个数字。</td></tr><tr><td>number2</td><td>number</td><td>“number2”参数是一个数字，将在“mult”函数中与“number1”相乘。</td></tr></tbody></table><p><strong>Returns:</strong></p><p>number</p><p>执行一些计算后“number1”和“number2”的乘积。</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-JavaScript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">JavaScript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#B392F0;">mult</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0.1</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">0.2</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0.02</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#000000;">   </span><span style="color:#795E26;">mult</span><span style="color:#000000;">(</span><span style="color:#098658;">0.1</span><span style="color:#000000;">,</span><span style="color:#098658;">0.2</span><span style="color:#000000;">) </span><span style="color:#0000FF;">=&gt;</span><span style="color:#000000;"> </span><span style="color:#098658;">0.02</span></span></code></pre></div>',12),l=[e];function p(r,c,i,d,u,y){return a(),n("div",null,l)}const h=s(t,[["render",p]]);export{E as __pageData,h as default};