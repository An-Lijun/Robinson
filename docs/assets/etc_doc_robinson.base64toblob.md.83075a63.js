import{_ as a,o as s,c as o,Q as e}from"./chunks/framework.a333c6fb.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"etc/doc/robinson.base64toblob.md","filePath":"etc/doc/robinson.base64toblob.md","lastUpdated":1737297940000}'),t={name:"etc/doc/robinson.base64toblob.md"},n=e('<p><a href="./">Home</a> &gt; <a href="./robinson.html">robinson</a> &gt; <a href="./robinson.base64toblob.html">base64ToBlob</a></p><h2 id="base64toblob-function" tabindex="-1">base64ToBlob() function <a class="header-anchor" href="#base64toblob-function" aria-label="Permalink to &quot;base64ToBlob() function&quot;">​</a></h2><blockquote><p>This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.</p></blockquote><p>将Base64编码的字符串转换为Blob对象</p><p><strong>Signature:</strong></p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">declare</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">base64ToBlob</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">base64</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Blob</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#0000FF;">declare</span><span style="color:#000000;"> </span><span style="color:#0000FF;">function</span><span style="color:#000000;"> </span><span style="color:#795E26;">base64ToBlob</span><span style="color:#000000;">(</span><span style="color:#001080;">base64</span><span style="color:#000000;">: </span><span style="color:#267F99;">string</span><span style="color:#000000;">): </span><span style="color:#267F99;">Blob</span><span style="color:#000000;">;</span></span></code></pre></div><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>base64</td><td>string</td><td>Base64编码的字符串</td></tr></tbody></table><p><strong>Returns:</strong></p><p>Blob</p><p>Blob对象</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><p>const blob = base64ToBlob(&#39;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA...&#39;);</p>',13),l=[n];function p(r,c,i,b,d,h){return s(),o("div",null,l)}const u=a(t,[["render",p]]);export{m as __pageData,u as default};
