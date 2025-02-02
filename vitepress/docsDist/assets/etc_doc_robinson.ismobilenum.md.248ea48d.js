import{_ as s,o as a,c as o,Q as n}from"./chunks/framework.a333c6fb.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"etc/doc/robinson.ismobilenum.md","filePath":"etc/doc/robinson.ismobilenum.md","lastUpdated":1737297940000}'),e={name:"etc/doc/robinson.ismobilenum.md"},l=n(`<p><a href="./">Home</a> &gt; <a href="./robinson.html">robinson</a> &gt; <a href="./robinson.ismobilenum.html">isMobileNum</a></p><h2 id="ismobilenum-function" tabindex="-1">isMobileNum() function <a class="header-anchor" href="#ismobilenum-function" aria-label="Permalink to &quot;isMobileNum() function&quot;">​</a></h2><blockquote><p>This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.</p></blockquote><p>是否为合法手机号</p><p><strong>Signature:</strong></p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">declare</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">isMobileNum</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">s</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">number</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">boolean</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#0000FF;">declare</span><span style="color:#000000;"> </span><span style="color:#0000FF;">function</span><span style="color:#000000;"> </span><span style="color:#795E26;">isMobileNum</span><span style="color:#000000;">(</span><span style="color:#001080;">s</span><span style="color:#000000;">: </span><span style="color:#267F99;">string</span><span style="color:#000000;"> | </span><span style="color:#267F99;">number</span><span style="color:#000000;">): </span><span style="color:#267F99;">boolean</span><span style="color:#000000;">;</span></span></code></pre></div><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>s</td><td>string | number</td><td>手机号</td></tr></tbody></table><p><strong>Returns:</strong></p><p>boolean</p><p>{boolean} - 一个布尔值。</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-JavaScript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">JavaScript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> phone </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;13800138000&#39;</span><span style="color:#E1E4E8;">; </span><span style="color:#B392F0;">isMobileNum</span><span style="color:#E1E4E8;">(phone) </span><span style="color:#6A737D;">// true</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> phone </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;12345678901&#39;</span><span style="color:#E1E4E8;">; </span><span style="color:#B392F0;">isMobileNum</span><span style="color:#E1E4E8;">(phone)</span><span style="color:#6A737D;">// false</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#000000;"> </span><span style="color:#0000FF;">let</span><span style="color:#000000;"> </span><span style="color:#001080;">phone</span><span style="color:#000000;"> = </span><span style="color:#A31515;">&#39;13800138000&#39;</span><span style="color:#000000;">; </span><span style="color:#795E26;">isMobileNum</span><span style="color:#000000;">(</span><span style="color:#001080;">phone</span><span style="color:#000000;">) </span><span style="color:#008000;">// true</span></span>
<span class="line"><span style="color:#000000;"> </span><span style="color:#0000FF;">let</span><span style="color:#000000;"> </span><span style="color:#001080;">phone</span><span style="color:#000000;"> = </span><span style="color:#A31515;">&#39;12345678901&#39;</span><span style="color:#000000;">; </span><span style="color:#795E26;">isMobileNum</span><span style="color:#000000;">(</span><span style="color:#001080;">phone</span><span style="color:#000000;">)</span><span style="color:#008000;">// false</span></span></code></pre></div>`,13),p=[l];function t(r,c,i,y,d,E){return a(),o("div",null,p)}const u=s(e,[["render",t]]);export{m as __pageData,u as default};
