import{_ as s,o as a,c as n,Q as o}from"./chunks/framework.80c893c1.js";const F=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"etc/doc/robinson.isarray.md","filePath":"etc/doc/robinson.isarray.md"}'),l={name:"etc/doc/robinson.isarray.md"},p=o(`<p><a href="./">Home</a> &gt; <a href="./robinson.html">robinson</a> &gt; <a href="./robinson.isarray.html">isArray</a></p><h2 id="isarray-function" tabindex="-1">isArray() function <a class="header-anchor" href="#isarray-function" aria-label="Permalink to &quot;isArray() function&quot;">​</a></h2><p>接受一个任意类型判断该类型是否是数组并返回。</p><p><strong>Signature:</strong></p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">declare</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">isArray</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">value</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">any</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">boolean</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#0000FF;">declare</span><span style="color:#000000;"> </span><span style="color:#0000FF;">function</span><span style="color:#000000;"> </span><span style="color:#795E26;">isArray</span><span style="color:#000000;">(</span><span style="color:#001080;">value</span><span style="color:#000000;">: </span><span style="color:#267F99;">any</span><span style="color:#000000;">): </span><span style="color:#267F99;">boolean</span><span style="color:#000000;">;</span></span></code></pre></div><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>value</td><td>any</td><td>参数“value”的类型为“any”，这意味着它可以接受任何数据类型。</td></tr></tbody></table><p><strong>Returns:</strong></p><p>boolean</p><p>一个布尔值。</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;789&quot;</span><span style="color:#E1E4E8;">; </span><span style="color:#B392F0;">isArray</span><span style="color:#E1E4E8;">(a) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> n</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">[] </span><span style="color:#B392F0;">isArray</span><span style="color:#E1E4E8;">(n) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#000000;">   </span><span style="color:#0000FF;">let</span><span style="color:#000000;"> </span><span style="color:#001080;">a</span><span style="color:#000000;"> =</span><span style="color:#A31515;">&quot;789&quot;</span><span style="color:#000000;">; </span><span style="color:#795E26;">isArray</span><span style="color:#000000;">(</span><span style="color:#001080;">a</span><span style="color:#000000;">) </span><span style="color:#0000FF;">=&gt;</span><span style="color:#000000;"> </span><span style="color:#0000FF;">false</span></span>
<span class="line"><span style="color:#000000;">   </span><span style="color:#0000FF;">let</span><span style="color:#000000;"> </span><span style="color:#001080;">n</span><span style="color:#000000;">=[] </span><span style="color:#795E26;">isArray</span><span style="color:#000000;">(</span><span style="color:#001080;">n</span><span style="color:#000000;">) </span><span style="color:#0000FF;">=&gt;</span><span style="color:#000000;"> </span><span style="color:#0000FF;">true</span></span></code></pre></div>`,12),e=[p];function t(r,c,y,i,d,E){return a(),n("div",null,e)}const u=s(l,[["render",t]]);export{F as __pageData,u as default};