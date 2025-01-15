import{_ as s,o as a,c as o,Q as n}from"./chunks/framework.a7175731.js";const F=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"etc/doc/robinson.ishex.md","filePath":"etc/doc/robinson.ishex.md"}'),e={name:"etc/doc/robinson.ishex.md"},l=n(`<p><a href="./">Home</a> &gt; <a href="./robinson.html">robinson</a> &gt; <a href="./robinson.ishex.html">isHex</a></p><h2 id="ishex-function" tabindex="-1">isHex() function <a class="header-anchor" href="#ishex-function" aria-label="Permalink to &quot;isHex() function&quot;">​</a></h2><p>判断是否为 16进制颜色</p><p><strong>Signature:</strong></p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">declare</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">isHex</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">color</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">boolean</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#0000FF;">declare</span><span style="color:#000000;"> </span><span style="color:#0000FF;">function</span><span style="color:#000000;"> </span><span style="color:#795E26;">isHex</span><span style="color:#000000;">(</span><span style="color:#001080;">color</span><span style="color:#000000;">: </span><span style="color:#267F99;">string</span><span style="color:#000000;">): </span><span style="color:#267F99;">boolean</span><span style="color:#000000;">;</span></span></code></pre></div><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>color</td><td>string</td><td></td></tr></tbody></table><p><strong>Returns:</strong></p><p>boolean</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-JavaScript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">JavaScript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">isHex</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;#FD7086&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">isHex</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;rgba(253,112,134,0.9)&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#000000;">    </span><span style="color:#795E26;">isHex</span><span style="color:#000000;">(</span><span style="color:#A31515;">&#39;#FD7086&#39;</span><span style="color:#000000;">) </span><span style="color:#0000FF;">=&gt;</span><span style="color:#000000;"> </span><span style="color:#0000FF;">true</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#795E26;">isHex</span><span style="color:#000000;">(</span><span style="color:#A31515;">&#39;rgba(253,112,134,0.9)&#39;</span><span style="color:#000000;">) </span><span style="color:#0000FF;">=&gt;</span><span style="color:#000000;"> </span><span style="color:#0000FF;">false</span></span></code></pre></div>`,11),p=[l];function t(r,c,i,y,d,E){return a(),o("div",null,p)}const u=s(e,[["render",t]]);export{F as __pageData,u as default};