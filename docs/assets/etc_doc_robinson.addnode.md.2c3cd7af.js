import{_ as s,o as a,c as n,Q as o}from"./chunks/framework.a7175731.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"etc/doc/robinson.addnode.md","filePath":"etc/doc/robinson.addnode.md"}'),p={name:"etc/doc/robinson.addnode.md"},l=o(`<p><a href="./">Home</a> &gt; <a href="./robinson.html">robinson</a> &gt; <a href="./robinson.addnode.html">addNode</a></p><h2 id="addnode-function" tabindex="-1">addNode() function <a class="header-anchor" href="#addnode-function" aria-label="Permalink to &quot;addNode() function&quot;">​</a></h2><p>函数“addNode”将 DOM 元素或字符串插入到父 DOM 元素的指定位置。</p><p><strong>Signature:</strong></p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">declare</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">addNode</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">parentDom</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Element</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">dom</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Element</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">String</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">position</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">position</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">void</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#0000FF;">declare</span><span style="color:#000000;"> </span><span style="color:#0000FF;">function</span><span style="color:#000000;"> </span><span style="color:#795E26;">addNode</span><span style="color:#000000;">(</span><span style="color:#001080;">parentDom</span><span style="color:#000000;">: </span><span style="color:#267F99;">Element</span><span style="color:#000000;">, </span><span style="color:#001080;">dom</span><span style="color:#000000;">: </span><span style="color:#267F99;">Element</span><span style="color:#000000;"> | </span><span style="color:#267F99;">String</span><span style="color:#000000;">, </span><span style="color:#001080;">position</span><span style="color:#000000;">?: </span><span style="color:#267F99;">position</span><span style="color:#000000;">): </span><span style="color:#267F99;">void</span><span style="color:#000000;">;</span></span></code></pre></div><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>parentDom</td><td>Element</td><td><code>parentDom</code> 参数是将新节点插入的 DOM 元素。</td></tr><tr><td>dom</td><td>Element | String</td><td>“dom”参数可以是“Element”或“String”。它表示需要添加到“parentDom”的元素或 HTML 字符串。</td></tr><tr><td>position</td><td>position</td><td><em>(Optional)</em> “position”参数是可选的，默认值为“afterbegin”。它指定新节点相对于父节点应插入的位置。 “position。它可以具有以下值之一： beforebegin parentDom元素的前面 afterbegin parentDom元素内部的第一个子节点之前 beforeend parentDom元素内部的最后一个子节点之后 afterend parentDom元素的后面</td></tr></tbody></table><p><strong>Returns:</strong></p><p>void</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-JavaScript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">JavaScript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> parent </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">document.</span><span style="color:#B392F0;">querySelect</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;#box&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> newDom </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">document.</span><span style="color:#B392F0;">createElement</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;div&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">addNode</span><span style="color:#E1E4E8;">(parent,newDom,</span><span style="color:#9ECBFF;">&#39;beforeBegin&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">---</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> parent </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">document.</span><span style="color:#B392F0;">querySelect</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;#box&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> str </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">\`&lt;div&gt;123 &lt;/div&gt;\`</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">addNode</span><span style="color:#E1E4E8;">(parent,str,</span><span style="color:#9ECBFF;">&#39;beforeBegin&#39;</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#000000;"> </span><span style="color:#0000FF;">let</span><span style="color:#000000;"> </span><span style="color:#001080;">parent</span><span style="color:#000000;"> =</span><span style="color:#001080;">document</span><span style="color:#000000;">.</span><span style="color:#795E26;">querySelect</span><span style="color:#000000;">(</span><span style="color:#A31515;">&#39;#box&#39;</span><span style="color:#000000;">);</span></span>
<span class="line"><span style="color:#000000;"> </span><span style="color:#0000FF;">let</span><span style="color:#000000;"> </span><span style="color:#001080;">newDom</span><span style="color:#000000;"> =</span><span style="color:#001080;">document</span><span style="color:#000000;">.</span><span style="color:#795E26;">createElement</span><span style="color:#000000;">(</span><span style="color:#A31515;">&#39;div&#39;</span><span style="color:#000000;">)</span></span>
<span class="line"><span style="color:#000000;"> </span><span style="color:#795E26;">addNode</span><span style="color:#000000;">(</span><span style="color:#001080;">parent</span><span style="color:#000000;">,</span><span style="color:#001080;">newDom</span><span style="color:#000000;">,</span><span style="color:#A31515;">&#39;beforeBegin&#39;</span><span style="color:#000000;">)</span></span>
<span class="line"><span style="color:#000000;">---</span></span>
<span class="line"><span style="color:#000000;">  </span><span style="color:#0000FF;">let</span><span style="color:#000000;"> </span><span style="color:#001080;">parent</span><span style="color:#000000;"> =</span><span style="color:#001080;">document</span><span style="color:#000000;">.</span><span style="color:#795E26;">querySelect</span><span style="color:#000000;">(</span><span style="color:#A31515;">&#39;#box&#39;</span><span style="color:#000000;">);</span></span>
<span class="line"><span style="color:#000000;">  </span><span style="color:#0000FF;">let</span><span style="color:#000000;"> </span><span style="color:#001080;">str</span><span style="color:#000000;"> = </span><span style="color:#A31515;">\`&lt;div&gt;123 &lt;/div&gt;\`</span></span>
<span class="line"><span style="color:#000000;">  </span><span style="color:#795E26;">addNode</span><span style="color:#000000;">(</span><span style="color:#001080;">parent</span><span style="color:#000000;">,</span><span style="color:#001080;">str</span><span style="color:#000000;">,</span><span style="color:#A31515;">&#39;beforeBegin&#39;</span><span style="color:#000000;">)</span></span></code></pre></div>`,11),e=[l];function t(r,c,y,d,E,i){return a(),n("div",null,e)}const h=s(p,[["render",t]]);export{m as __pageData,h as default};
