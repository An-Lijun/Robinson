import{_ as o,o as s,c as a,Q as t}from"./chunks/framework.a333c6fb.js";const E=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"etc/doc/robinson.printbyblob.md","filePath":"etc/doc/robinson.printbyblob.md"}'),n={name:"etc/doc/robinson.printbyblob.md"},e=t('<p><a href="./">Home</a> &gt; <a href="./robinson.html">robinson</a> &gt; <a href="./robinson.printbyblob.html">printByBlob</a></p><h2 id="printbyblob-function" tabindex="-1">printByBlob() function <a class="header-anchor" href="#printbyblob-function" aria-label="Permalink to &quot;printByBlob() function&quot;">​</a></h2><blockquote><p>This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.</p></blockquote><p>通过Blob对象打印内容</p><p><strong>Signature:</strong></p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">declare</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">printByBlob</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">blob</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Blob</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">type</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">void</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#0000FF;">declare</span><span style="color:#000000;"> </span><span style="color:#0000FF;">function</span><span style="color:#000000;"> </span><span style="color:#795E26;">printByBlob</span><span style="color:#000000;">(</span><span style="color:#001080;">blob</span><span style="color:#000000;">: </span><span style="color:#267F99;">Blob</span><span style="color:#000000;">, </span><span style="color:#001080;">type</span><span style="color:#000000;">?: </span><span style="color:#267F99;">string</span><span style="color:#000000;">): </span><span style="color:#267F99;">void</span><span style="color:#000000;">;</span></span></code></pre></div><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>blob</td><td>Blob</td><td>Blob对象</td></tr><tr><td>type</td><td>string</td><td><em>(Optional)</em> MIME类型，默认为&#39;application/pdf&#39;</td></tr></tbody></table><p><strong>Returns:</strong></p><p>void</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><p>printByBlob(new Blob([&#39;Hello, world!&#39;], { type: &#39;text/plain&#39; }));</p>',12),p=[e];function l(r,c,i,d,b,y){return s(),a("div",null,p)}const m=o(n,[["render",l]]);export{E as __pageData,m as default};
