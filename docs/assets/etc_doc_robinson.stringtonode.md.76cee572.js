import{_ as s,o as a,c as n,Q as o}from"./chunks/framework.80c893c1.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"etc/doc/robinson.stringtonode.md","filePath":"etc/doc/robinson.stringtonode.md"}'),t={name:"etc/doc/robinson.stringtonode.md"},e=o(`<p><a href="./">Home</a> &gt; <a href="./robinson.html">robinson</a> &gt; <a href="./robinson.stringtonode.html">stringToNode</a></p><h2 id="stringtonode-function" tabindex="-1">stringToNode() function <a class="header-anchor" href="#stringtonode-function" aria-label="Permalink to &quot;stringToNode() function&quot;">​</a></h2><p>该函数接受一个字符串并返回新创建的 div 元素的第一个子节点，并将该字符串作为其innerHTML。</p><p><strong>Signature:</strong></p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">declare</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">stringToNode</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">str</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Node</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#0000FF;">declare</span><span style="color:#000000;"> </span><span style="color:#0000FF;">function</span><span style="color:#000000;"> </span><span style="color:#795E26;">stringToNode</span><span style="color:#000000;">(</span><span style="color:#001080;">str</span><span style="color:#000000;">: </span><span style="color:#267F99;">string</span><span style="color:#000000;">): </span><span style="color:#267F99;">Node</span><span style="color:#000000;"> | </span><span style="color:#267F99;">null</span><span style="color:#000000;">;</span></span></code></pre></div><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>str</td><td>string</td><td><code>str</code> 参数是一个字符串，表示一个 HTML 元素或一组 HTML 元素。</td></tr></tbody></table><p><strong>Returns:</strong></p><p>Node | null</p><p>创建的 div 元素的第一个子节点。</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-JavaScript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">JavaScript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> str </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;&lt;div&gt;123&lt;/div&gt;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">   document.body.</span><span style="color:#B392F0;">append</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">stringToNode</span><span style="color:#E1E4E8;">(str))</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#000000;">   </span><span style="color:#0000FF;">let</span><span style="color:#000000;"> </span><span style="color:#001080;">str</span><span style="color:#000000;"> =</span><span style="color:#A31515;">&#39;&lt;div&gt;123&lt;/div&gt;&#39;</span></span>
<span class="line"><span style="color:#000000;">   </span><span style="color:#001080;">document</span><span style="color:#000000;">.</span><span style="color:#001080;">body</span><span style="color:#000000;">.</span><span style="color:#795E26;">append</span><span style="color:#000000;">(</span><span style="color:#795E26;">stringToNode</span><span style="color:#000000;">(</span><span style="color:#001080;">str</span><span style="color:#000000;">))</span></span></code></pre></div>`,12),p=[e];function l(r,c,i,d,y,E){return a(),n("div",null,p)}const u=s(t,[["render",l]]);export{g as __pageData,u as default};