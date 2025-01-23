import{_ as s,o as a,c as n,Q as o}from"./chunks/framework.a333c6fb.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"etc/doc/robinson.isnan_2.md","filePath":"etc/doc/robinson.isnan_2.md","lastUpdated":1737297940000}'),e={name:"etc/doc/robinson.isnan_2.md"},l=o(`<p><a href="./">Home</a> &gt; <a href="./robinson.html">robinson</a> &gt; <a href="./robinson.isnan_2.html">isNaN_2</a></p><h2 id="isnan-2-function" tabindex="-1">isNaN_2() function <a class="header-anchor" href="#isnan-2-function" aria-label="Permalink to &quot;isNaN\\_2() function&quot;">​</a></h2><blockquote><p>This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.</p></blockquote><p>该函数检查值是否为 NaN。</p><p><strong>Signature:</strong></p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">declare</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">isNaN</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">value</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">any</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">boolean</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#0000FF;">declare</span><span style="color:#000000;"> </span><span style="color:#0000FF;">function</span><span style="color:#000000;"> </span><span style="color:#795E26;">isNaN</span><span style="color:#000000;">(</span><span style="color:#001080;">value</span><span style="color:#000000;">: </span><span style="color:#267F99;">any</span><span style="color:#000000;">): </span><span style="color:#267F99;">boolean</span><span style="color:#000000;">;</span></span></code></pre></div><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>value</td><td>any</td><td>value 参数可以是任何数据类型，例如数字、字符串或对象。</td></tr></tbody></table><p><strong>Returns:</strong></p><p>boolean</p><p>{boolean} - 一个布尔值，指示给定值是否为 NaN（非数字）。</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-JavaScript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">JavaScript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> str </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;ad1&#39;</span><span style="color:#E1E4E8;">; </span><span style="color:#B392F0;">isNaN</span><span style="color:#E1E4E8;">(str) </span><span style="color:#6A737D;">// true</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> n </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">; </span><span style="color:#B392F0;">isNaN</span><span style="color:#E1E4E8;">(n) </span><span style="color:#6A737D;">// false</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#000000;">   </span><span style="color:#0000FF;">let</span><span style="color:#000000;"> </span><span style="color:#001080;">str</span><span style="color:#000000;"> = </span><span style="color:#A31515;">&#39;ad1&#39;</span><span style="color:#000000;">; </span><span style="color:#795E26;">isNaN</span><span style="color:#000000;">(</span><span style="color:#001080;">str</span><span style="color:#000000;">) </span><span style="color:#008000;">// true</span></span>
<span class="line"><span style="color:#000000;">   </span><span style="color:#0000FF;">let</span><span style="color:#000000;"> </span><span style="color:#001080;">n</span><span style="color:#000000;"> = </span><span style="color:#098658;">1</span><span style="color:#000000;">; </span><span style="color:#795E26;">isNaN</span><span style="color:#000000;">(</span><span style="color:#001080;">n</span><span style="color:#000000;">) </span><span style="color:#008000;">// false</span></span></code></pre></div>`,13),p=[l];function t(r,c,i,y,d,E){return a(),n("div",null,p)}const _=s(e,[["render",t]]);export{u as __pageData,_ as default};
