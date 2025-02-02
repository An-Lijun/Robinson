import{_ as s,o as a,c as e,Q as o}from"./chunks/framework.a333c6fb.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"etc/doc/robinson.ishex.md","filePath":"etc/doc/robinson.ishex.md","lastUpdated":1737297940000}'),n={name:"etc/doc/robinson.ishex.md"},t=o(`<p><a href="./">Home</a> &gt; <a href="./robinson.html">robinson</a> &gt; <a href="./robinson.ishex.html">isHex</a></p><h2 id="ishex-function" tabindex="-1">isHex() function <a class="header-anchor" href="#ishex-function" aria-label="Permalink to &quot;isHex() function&quot;">​</a></h2><blockquote><p>This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.</p></blockquote><p>判断是否为16进制颜色</p><p><strong>Signature:</strong></p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">declare</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">isHex</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">color</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">boolean</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#0000FF;">declare</span><span style="color:#000000;"> </span><span style="color:#0000FF;">function</span><span style="color:#000000;"> </span><span style="color:#795E26;">isHex</span><span style="color:#000000;">(</span><span style="color:#001080;">color</span><span style="color:#000000;">: </span><span style="color:#267F99;">string</span><span style="color:#000000;">): </span><span style="color:#267F99;">boolean</span><span style="color:#000000;">;</span></span></code></pre></div><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>color</td><td>string</td><td>需要验证的颜色字符串</td></tr></tbody></table><p><strong>Returns:</strong></p><p>boolean</p><p>{boolean} 如果是16进制颜色返回true，否则返回false</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-JavaScript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">JavaScript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">isHex</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;#FD7086&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">//true</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">isHex</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;rgba(253,112,134,0.9)&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">// false</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#000000;">    </span><span style="color:#795E26;">isHex</span><span style="color:#000000;">(</span><span style="color:#A31515;">&#39;#FD7086&#39;</span><span style="color:#000000;">) </span><span style="color:#008000;">//true</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#795E26;">isHex</span><span style="color:#000000;">(</span><span style="color:#A31515;">&#39;rgba(253,112,134,0.9)&#39;</span><span style="color:#000000;">) </span><span style="color:#008000;">// false</span></span></code></pre></div>`,13),p=[t];function l(r,c,i,d,y,h){return a(),e("div",null,p)}const b=s(n,[["render",l]]);export{u as __pageData,b as default};
