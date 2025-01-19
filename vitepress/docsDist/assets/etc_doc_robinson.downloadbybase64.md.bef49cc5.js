import{_ as s,o as a,c as o,Q as n}from"./chunks/framework.a333c6fb.js";const E=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"etc/doc/robinson.downloadbybase64.md","filePath":"etc/doc/robinson.downloadbybase64.md"}'),e={name:"etc/doc/robinson.downloadbybase64.md"},t=n('<p><a href="./">Home</a> &gt; <a href="./robinson.html">robinson</a> &gt; <a href="./robinson.downloadbybase64.html">downloadByBase64</a></p><h2 id="downloadbybase64-function" tabindex="-1">downloadByBase64() function <a class="header-anchor" href="#downloadbybase64-function" aria-label="Permalink to &quot;downloadByBase64() function&quot;">​</a></h2><blockquote><p>This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.</p></blockquote><p>通过Base64编码的字符串下载文件</p><p><strong>Signature:</strong></p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">declare</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">downloadByBase64</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">buf</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">fileNm</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">suffix</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">void</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#0000FF;">declare</span><span style="color:#000000;"> </span><span style="color:#0000FF;">function</span><span style="color:#000000;"> </span><span style="color:#795E26;">downloadByBase64</span><span style="color:#000000;">(</span><span style="color:#001080;">buf</span><span style="color:#000000;">: </span><span style="color:#267F99;">string</span><span style="color:#000000;">, </span><span style="color:#001080;">fileNm</span><span style="color:#000000;">: </span><span style="color:#267F99;">string</span><span style="color:#000000;">, </span><span style="color:#001080;">suffix</span><span style="color:#000000;">: </span><span style="color:#267F99;">string</span><span style="color:#000000;">): </span><span style="color:#267F99;">void</span><span style="color:#000000;">;</span></span></code></pre></div><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>buf</td><td>string</td><td>Base64编码的字符串</td></tr><tr><td>fileNm</td><td>string</td><td>下载后的文件名</td></tr><tr><td>suffix</td><td>string</td><td>下载后的文件后缀</td></tr></tbody></table><p><strong>Returns:</strong></p><p>void</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><p>downloadByBase64(&#39;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA...&#39;, &#39;example.png&#39;, &#39;png&#39;);</p>',12),l=[t];function p(r,c,d,i,y,h){return a(),o("div",null,l)}const f=s(e,[["render",p]]);export{E as __pageData,f as default};
