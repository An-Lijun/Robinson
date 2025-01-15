import{_ as s,o as a,c as o,Q as e}from"./chunks/framework.a7175731.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"etc/doc/robinson.isnode.md","filePath":"etc/doc/robinson.isnode.md"}'),n={name:"etc/doc/robinson.isnode.md"},l=e(`<p><a href="./">Home</a> &gt; <a href="./robinson.html">robinson</a> &gt; <a href="./robinson.isnode.html">isNode</a></p><h2 id="isnode-function" tabindex="-1">isNode() function <a class="header-anchor" href="#isnode-function" aria-label="Permalink to &quot;isNode() function&quot;">​</a></h2><p>该函数检查元素是否是节点。</p><p><strong>Signature:</strong></p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">declare</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">isNode</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">el</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">any</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Boolean</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#0000FF;">declare</span><span style="color:#000000;"> </span><span style="color:#0000FF;">function</span><span style="color:#000000;"> </span><span style="color:#795E26;">isNode</span><span style="color:#000000;">(</span><span style="color:#001080;">el</span><span style="color:#000000;">: </span><span style="color:#267F99;">any</span><span style="color:#000000;">): </span><span style="color:#267F99;">Boolean</span><span style="color:#000000;">;</span></span></code></pre></div><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>el</td><td>any</td><td><code>el</code> 参数的类型是 <code>Element</code>，它表示 HTML DOM 中的一个元素。</td></tr></tbody></table><p><strong>Returns:</strong></p><p>Boolean</p><p>一个布尔值。如果给定元素的 nodeType 为 1 (ELEMENT_NODE)、9 (DOCUMENT_NODE) 或 11 (DOCUMENT_FRAGMENT_NODE)，则返回 true。否则，返回 false。</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-JavaScript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">JavaScript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> div </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">document.</span><span style="color:#B392F0;">createElement</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;div&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#B392F0;">isNode</span><span style="color:#E1E4E8;">(div) </span><span style="color:#F97583;">=&gt;</span><span style="color:#79B8FF;">true</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#000000;">   </span><span style="color:#0000FF;">let</span><span style="color:#000000;"> </span><span style="color:#001080;">div</span><span style="color:#000000;"> =</span><span style="color:#001080;">document</span><span style="color:#000000;">.</span><span style="color:#795E26;">createElement</span><span style="color:#000000;">(</span><span style="color:#A31515;">&#39;div&#39;</span><span style="color:#000000;">);</span></span>
<span class="line"><span style="color:#000000;">   </span><span style="color:#795E26;">isNode</span><span style="color:#000000;">(</span><span style="color:#001080;">div</span><span style="color:#000000;">) </span><span style="color:#0000FF;">=&gt;true</span></span></code></pre></div>`,12),p=[l];function t(r,c,i,d,y,E){return a(),o("div",null,p)}const _=s(n,[["render",t]]);export{u as __pageData,_ as default};