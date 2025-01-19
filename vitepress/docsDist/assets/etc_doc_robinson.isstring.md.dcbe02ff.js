import{_ as s,o as a,c as n,Q as o}from"./chunks/framework.a333c6fb.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"etc/doc/robinson.isstring.md","filePath":"etc/doc/robinson.isstring.md"}'),e={name:"etc/doc/robinson.isstring.md"},l=o(`<p><a href="./">Home</a> &gt; <a href="./robinson.html">robinson</a> &gt; <a href="./robinson.isstring.html">isString</a></p><h2 id="isstring-function" tabindex="-1">isString() function <a class="header-anchor" href="#isstring-function" aria-label="Permalink to &quot;isString() function&quot;">​</a></h2><blockquote><p>This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.</p></blockquote><p>函数isString 检查给定值是否是字符串。</p><p><strong>Signature:</strong></p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">declare</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">isString</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">value</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">any</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">boolean</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#0000FF;">declare</span><span style="color:#000000;"> </span><span style="color:#0000FF;">function</span><span style="color:#000000;"> </span><span style="color:#795E26;">isString</span><span style="color:#000000;">(</span><span style="color:#001080;">value</span><span style="color:#000000;">: </span><span style="color:#267F99;">any</span><span style="color:#000000;">): </span><span style="color:#267F99;">boolean</span><span style="color:#000000;">;</span></span></code></pre></div><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>value</td><td>any</td><td>参数“value”的类型为“any”，这意味着它可以接受任何数据类型。</td></tr></tbody></table><p><strong>Returns:</strong></p><p>boolean</p><p>{boolean} - 一个布尔值。</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-JavaScript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">JavaScript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> str </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;Hello&#39;</span><span style="color:#E1E4E8;">; </span><span style="color:#B392F0;">isString</span><span style="color:#E1E4E8;">(str) </span><span style="color:#6A737D;">// true</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> num </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">123</span><span style="color:#E1E4E8;">; </span><span style="color:#B392F0;">isString</span><span style="color:#E1E4E8;">(num) </span><span style="color:#6A737D;">// false</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#000000;"> </span><span style="color:#0000FF;">let</span><span style="color:#000000;"> </span><span style="color:#001080;">str</span><span style="color:#000000;"> = </span><span style="color:#A31515;">&#39;Hello&#39;</span><span style="color:#000000;">; </span><span style="color:#795E26;">isString</span><span style="color:#000000;">(</span><span style="color:#001080;">str</span><span style="color:#000000;">) </span><span style="color:#008000;">// true</span></span>
<span class="line"><span style="color:#000000;"> </span><span style="color:#0000FF;">let</span><span style="color:#000000;"> </span><span style="color:#001080;">num</span><span style="color:#000000;"> = </span><span style="color:#098658;">123</span><span style="color:#000000;">; </span><span style="color:#795E26;">isString</span><span style="color:#000000;">(</span><span style="color:#001080;">num</span><span style="color:#000000;">) </span><span style="color:#008000;">// false</span></span></code></pre></div>`,13),t=[l];function p(r,c,i,y,d,E){return a(),n("div",null,t)}const g=s(e,[["render",p]]);export{u as __pageData,g as default};
