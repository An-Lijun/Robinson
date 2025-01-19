import{_ as s,o as a,c as o,Q as n}from"./chunks/framework.a333c6fb.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"etc/doc/robinson.torgbastring.md","filePath":"etc/doc/robinson.torgbastring.md"}'),t={name:"etc/doc/robinson.torgbastring.md"},e=n(`<p><a href="./">Home</a> &gt; <a href="./robinson.html">robinson</a> &gt; <a href="./robinson.torgbastring.html">toRgbaString</a></p><h2 id="torgbastring-function" tabindex="-1">toRgbaString() function <a class="header-anchor" href="#torgbastring-function" aria-label="Permalink to &quot;toRgbaString() function&quot;">​</a></h2><blockquote><p>This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.</p></blockquote><p>将颜色对象转换为rgba颜色字符串</p><p><strong>Signature:</strong></p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">toRgbaString</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">colorObj</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">IRgba</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">n</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">number</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> string</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#000000;">toRgbaString: (</span><span style="color:#001080;">colorObj</span><span style="color:#000000;">: </span><span style="color:#267F99;">IRgba</span><span style="color:#000000;">, </span><span style="color:#001080;">n</span><span style="color:#000000;">?: </span><span style="color:#267F99;">number</span><span style="color:#000000;">) </span><span style="color:#0000FF;">=&gt;</span><span style="color:#000000;"> </span><span style="color:#001080;">string</span></span></code></pre></div><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>colorObj</td><td>IRgba</td><td>颜色对象，包含r、g、b分量，可选a分量</td></tr><tr><td>n</td><td>number</td><td><em>(Optional)</em></td></tr></tbody></table><p><strong>Returns:</strong></p><p>string</p><p>{string} 返回一个rgba格式的字符串</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> obj </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> { r: </span><span style="color:#79B8FF;">255</span><span style="color:#E1E4E8;">, g: </span><span style="color:#79B8FF;">255</span><span style="color:#E1E4E8;">, b: </span><span style="color:#79B8FF;">255</span><span style="color:#E1E4E8;"> };</span></span>
<span class="line"><span style="color:#B392F0;">toRgbaString</span><span style="color:#E1E4E8;">(obj); </span><span style="color:#6A737D;">// &quot;rgba(255,255,255,1)&quot;</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#0000FF;">let</span><span style="color:#000000;"> </span><span style="color:#001080;">obj</span><span style="color:#000000;"> = { </span><span style="color:#001080;">r:</span><span style="color:#000000;"> </span><span style="color:#098658;">255</span><span style="color:#000000;">, </span><span style="color:#001080;">g:</span><span style="color:#000000;"> </span><span style="color:#098658;">255</span><span style="color:#000000;">, </span><span style="color:#001080;">b:</span><span style="color:#000000;"> </span><span style="color:#098658;">255</span><span style="color:#000000;"> };</span></span>
<span class="line"><span style="color:#795E26;">toRgbaString</span><span style="color:#000000;">(</span><span style="color:#001080;">obj</span><span style="color:#000000;">); </span><span style="color:#008000;">// &quot;rgba(255,255,255,1)&quot;</span></span></code></pre></div>`,13),p=[e];function l(r,c,i,d,y,g){return a(),o("div",null,p)}const E=s(t,[["render",l]]);export{h as __pageData,E as default};
