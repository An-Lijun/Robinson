import{_ as e,o as s,c as a,Q as t}from"./chunks/framework.a333c6fb.js";const f=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"etc/doc/robinson.getfilesize.md","filePath":"etc/doc/robinson.getfilesize.md"}'),n={name:"etc/doc/robinson.getfilesize.md"},o=t('<p><a href="./">Home</a> &gt; <a href="./robinson.html">robinson</a> &gt; <a href="./robinson.getfilesize.html">getFileSize</a></p><h2 id="getfilesize-function" tabindex="-1">getFileSize() function <a class="header-anchor" href="#getfilesize-function" aria-label="Permalink to &quot;getFileSize() function&quot;">​</a></h2><blockquote><p>This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.</p></blockquote><p>获取文件大小</p><p><strong>Signature:</strong></p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">declare</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getFileSize</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">file</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">File</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">unit</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">number</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#0000FF;">declare</span><span style="color:#000000;"> </span><span style="color:#0000FF;">function</span><span style="color:#000000;"> </span><span style="color:#795E26;">getFileSize</span><span style="color:#000000;">(</span><span style="color:#001080;">file</span><span style="color:#000000;">: </span><span style="color:#267F99;">File</span><span style="color:#000000;">, </span><span style="color:#001080;">unit</span><span style="color:#000000;">?: </span><span style="color:#267F99;">string</span><span style="color:#000000;">): </span><span style="color:#267F99;">number</span><span style="color:#000000;">;</span></span></code></pre></div><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>file</td><td>File</td><td>源文件</td></tr><tr><td>unit</td><td>string</td><td><em>(Optional)</em> 单位（&#39;b&#39;, &#39;kb&#39;, &#39;m&#39;, &#39;g&#39;），默认为&#39;b&#39;</td></tr></tbody></table><p><strong>Returns:</strong></p><p>number</p><p>文件大小（指定单位）</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><p>getFileSize(fileInput.files[0], &#39;kb&#39;); // 返回文件大小（KB）</p>',13),l=[o];function p(r,i,c,d,h,y){return s(),a("div",null,l)}const m=e(n,[["render",p]]);export{f as __pageData,m as default};
