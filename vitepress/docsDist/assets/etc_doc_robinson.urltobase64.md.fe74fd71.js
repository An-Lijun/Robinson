import{_ as s,o as a,c as e,Q as o}from"./chunks/framework.a333c6fb.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"etc/doc/robinson.urltobase64.md","filePath":"etc/doc/robinson.urltobase64.md"}'),t={name:"etc/doc/robinson.urltobase64.md"},n=o('<p><a href="./">Home</a> &gt; <a href="./robinson.html">robinson</a> &gt; <a href="./robinson.urltobase64.html">urlToBase64</a></p><h2 id="urltobase64-function" tabindex="-1">urlToBase64() function <a class="header-anchor" href="#urltobase64-function" aria-label="Permalink to &quot;urlToBase64() function&quot;">​</a></h2><blockquote><p>This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.</p></blockquote><p>将图片URL转换为Base64编码的字符串</p><p><strong>Signature:</strong></p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">declare</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">urlToBase64</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">url</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">suffix</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Promise</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">&gt;;</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#0000FF;">declare</span><span style="color:#000000;"> </span><span style="color:#0000FF;">function</span><span style="color:#000000;"> </span><span style="color:#795E26;">urlToBase64</span><span style="color:#000000;">(</span><span style="color:#001080;">url</span><span style="color:#000000;">: </span><span style="color:#267F99;">string</span><span style="color:#000000;">, </span><span style="color:#001080;">suffix</span><span style="color:#000000;">?: </span><span style="color:#267F99;">string</span><span style="color:#000000;">): </span><span style="color:#267F99;">Promise</span><span style="color:#000000;">&lt;</span><span style="color:#267F99;">string</span><span style="color:#000000;">&gt;;</span></span></code></pre></div><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>url</td><td>string</td><td>图片URL</td></tr><tr><td>suffix</td><td>string</td><td><em>(Optional)</em> 文件后缀，默认为&#39;image/png&#39;</td></tr></tbody></table><p><strong>Returns:</strong></p><p>Promise&lt;string&gt;</p><p>Promise对象，解析为Base64编码的字符串</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><p>urlToBase64(&#39;<a href="https://example.com/image.png" target="_blank" rel="noreferrer">https://example.com/image.png</a>&#39;).then(base64 =&gt; console.log(base64));</p>',13),r=[n];function l(p,c,i,d,h,y){return a(),e("div",null,r)}const g=s(t,[["render",l]]);export{m as __pageData,g as default};
