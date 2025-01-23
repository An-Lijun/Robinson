import{_ as s,o as a,c as o,Q as e}from"./chunks/framework.a333c6fb.js";const E=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"etc/doc/robinson.parsehexcolor.md","filePath":"etc/doc/robinson.parsehexcolor.md","lastUpdated":1737297940000}'),n={name:"etc/doc/robinson.parsehexcolor.md"},p=e(`<p><a href="./">Home</a> &gt; <a href="./robinson.html">robinson</a> &gt; <a href="./robinson.parsehexcolor.html">parseHexColor</a></p><h2 id="parsehexcolor-function" tabindex="-1">parseHexColor() function <a class="header-anchor" href="#parsehexcolor-function" aria-label="Permalink to &quot;parseHexColor() function&quot;">​</a></h2><blockquote><p>This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.</p></blockquote><p>解析十六进制颜色字符串为RGBA对象</p><p>该函数接受一个十六进制颜色字符串（例如 &quot;#RRGGBB&quot; 或 &quot;#RGB&quot;）， 并将其解析为一个包含红（r）、绿（g）、蓝（b）和透明度（a）分量的对象</p><p><strong>Signature:</strong></p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">parseHexColor</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">color</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> IRgba</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#000000;">parseHexColor: (</span><span style="color:#001080;">color</span><span style="color:#000000;">: </span><span style="color:#267F99;">string</span><span style="color:#000000;">) </span><span style="color:#0000FF;">=&gt;</span><span style="color:#000000;"> </span><span style="color:#001080;">IRgba</span></span></code></pre></div><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>color</td><td>string</td><td>十六进制颜色字符串</td></tr></tbody></table><p><strong>Returns:</strong></p><p>IRgba</p><p>{{r:&quot;&quot;,g:&quot;&quot;,b:&quot;&quot;,a:&quot;&quot;}} 包含RGBA分量的对象</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">parseHexColor</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;#FF0000&#39;</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// { r: 255, g: 0, b: 0, a: 1 }</span></span>
<span class="line"><span style="color:#B392F0;">parseHexColor</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;#F00&#39;</span><span style="color:#E1E4E8;">);    </span><span style="color:#6A737D;">// { r: 255, g: 0, b: 0, a: 1 }</span></span>
<span class="line"><span style="color:#B392F0;">parseHexColor</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;#FF0000FF&#39;</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// { r: 255, g: 0, b: 0, a: 1 }</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#795E26;">parseHexColor</span><span style="color:#000000;">(</span><span style="color:#A31515;">&#39;#FF0000&#39;</span><span style="color:#000000;">); </span><span style="color:#008000;">// { r: 255, g: 0, b: 0, a: 1 }</span></span>
<span class="line"><span style="color:#795E26;">parseHexColor</span><span style="color:#000000;">(</span><span style="color:#A31515;">&#39;#F00&#39;</span><span style="color:#000000;">);    </span><span style="color:#008000;">// { r: 255, g: 0, b: 0, a: 1 }</span></span>
<span class="line"><span style="color:#795E26;">parseHexColor</span><span style="color:#000000;">(</span><span style="color:#A31515;">&#39;#FF0000FF&#39;</span><span style="color:#000000;">); </span><span style="color:#008000;">// { r: 255, g: 0, b: 0, a: 1 }</span></span></code></pre></div>`,14),t=[p];function l(r,c,i,d,h,y){return a(),o("div",null,t)}const b=s(n,[["render",l]]);export{E as __pageData,b as default};
