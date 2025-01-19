import{_ as s,o,c as a,Q as e}from"./chunks/framework.a333c6fb.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"etc/doc/robinson.removenode.md","filePath":"etc/doc/robinson.removenode.md"}'),n={name:"etc/doc/robinson.removenode.md"},p=e(`<p><a href="./">Home</a> &gt; <a href="./robinson.html">robinson</a> &gt; <a href="./robinson.removenode.html">removeNode</a></p><h2 id="removenode-function" tabindex="-1">removeNode() function <a class="header-anchor" href="#removenode-function" aria-label="Permalink to &quot;removeNode() function&quot;">​</a></h2><blockquote><p>This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.</p></blockquote><p>该函数从其父节点中删除指定的 DOM 元素。</p><p><strong>Signature:</strong></p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">declare</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">removeNode</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">parentNode</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Element</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">dom</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Element</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">void</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#0000FF;">declare</span><span style="color:#000000;"> </span><span style="color:#0000FF;">function</span><span style="color:#000000;"> </span><span style="color:#795E26;">removeNode</span><span style="color:#000000;">(</span><span style="color:#001080;">parentNode</span><span style="color:#000000;">: </span><span style="color:#267F99;">Element</span><span style="color:#000000;">, </span><span style="color:#001080;">dom</span><span style="color:#000000;">: </span><span style="color:#267F99;">Element</span><span style="color:#000000;">): </span><span style="color:#267F99;">void</span><span style="color:#000000;">;</span></span></code></pre></div><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>parentNode</td><td>Element</td><td><code>parentNode</code> 参数是包含 <code>dom</code> 元素的元素。它是您要从中删除“dom”元素的元素。</td></tr><tr><td>dom</td><td>Element</td><td><code>dom</code> 参数是要从其父节点中删除的元素。</td></tr></tbody></table><p><strong>Returns:</strong></p><p>void</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-JavaScript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">JavaScript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> div </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">document.</span><span style="color:#B392F0;">createElement</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;div&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">   document.body.</span><span style="color:#B392F0;">appendChild</span><span style="color:#E1E4E8;">(div)</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#B392F0;">removeNode</span><span style="color:#E1E4E8;">(document.body,div)</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#000000;">   </span><span style="color:#0000FF;">let</span><span style="color:#000000;"> </span><span style="color:#001080;">div</span><span style="color:#000000;"> =</span><span style="color:#001080;">document</span><span style="color:#000000;">.</span><span style="color:#795E26;">createElement</span><span style="color:#000000;">(</span><span style="color:#A31515;">&#39;div&#39;</span><span style="color:#000000;">);</span></span>
<span class="line"><span style="color:#000000;">   </span><span style="color:#001080;">document</span><span style="color:#000000;">.</span><span style="color:#001080;">body</span><span style="color:#000000;">.</span><span style="color:#795E26;">appendChild</span><span style="color:#000000;">(</span><span style="color:#001080;">div</span><span style="color:#000000;">)</span></span>
<span class="line"><span style="color:#000000;">   </span><span style="color:#795E26;">removeNode</span><span style="color:#000000;">(</span><span style="color:#001080;">document</span><span style="color:#000000;">.</span><span style="color:#001080;">body</span><span style="color:#000000;">,</span><span style="color:#001080;">div</span><span style="color:#000000;">)</span></span></code></pre></div>`,12),l=[p];function t(r,c,d,i,y,E){return o(),a("div",null,l)}const v=s(n,[["render",t]]);export{h as __pageData,v as default};
