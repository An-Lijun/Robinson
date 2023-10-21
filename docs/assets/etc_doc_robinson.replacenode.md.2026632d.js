import{_ as s,o as a,c as n,Q as o}from"./chunks/framework.80c893c1.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"etc/doc/robinson.replacenode.md","filePath":"etc/doc/robinson.replacenode.md"}'),l={name:"etc/doc/robinson.replacenode.md"},p=o(`<p><a href="./">Home</a> &gt; <a href="./robinson.html">robinson</a> &gt; <a href="./robinson.replacenode.html">replaceNode</a></p><h2 id="replacenode-function" tabindex="-1">replaceNode() function <a class="header-anchor" href="#replacenode-function" aria-label="Permalink to &quot;replaceNode() function&quot;">​</a></h2><p>函数“replaceNode”用新的 DOM 元素或给定父元素中的字符串替换旧的 DOM 元素。</p><p><strong>Signature:</strong></p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">declare</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">replaceNode</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">parentNode</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Element</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">newDom</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Node</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">oldDom</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Element</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">void</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#0000FF;">declare</span><span style="color:#000000;"> </span><span style="color:#0000FF;">function</span><span style="color:#000000;"> </span><span style="color:#795E26;">replaceNode</span><span style="color:#000000;">(</span><span style="color:#001080;">parentNode</span><span style="color:#000000;">: </span><span style="color:#267F99;">Element</span><span style="color:#000000;">, </span><span style="color:#001080;">newDom</span><span style="color:#000000;">: </span><span style="color:#267F99;">string</span><span style="color:#000000;"> | </span><span style="color:#267F99;">Node</span><span style="color:#000000;">, </span><span style="color:#001080;">oldDom</span><span style="color:#000000;">: </span><span style="color:#267F99;">Element</span><span style="color:#000000;">): </span><span style="color:#267F99;">void</span><span style="color:#000000;">;</span></span></code></pre></div><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>parentNode</td><td>Element</td><td>ParentNode 参数是包含 oldDom 元素的元素。它是发生替换的父元素。</td></tr><tr><td>newDom</td><td>string | Node</td><td><code>newDom</code> 参数可以是字符串或 Node。如果它是一个字符串， 则它表示将使用“stringToNode”函数转换为节点的 HTML 标记。如果已经是一个Node，则代表新的Node将取代旧的Node</td></tr><tr><td>oldDom</td><td>Element</td><td>oldDom 参数是要替换为 newDom 的元素。</td></tr></tbody></table><p><strong>Returns:</strong></p><p>void</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-JavaScript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">JavaScript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> div </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">createElement</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;div&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">   div.id </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;aa6&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> body </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> docuement.body</span></span>
<span class="line"><span style="color:#E1E4E8;">   body.</span><span style="color:#B392F0;">appendChild</span><span style="color:#E1E4E8;">(div);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> span </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">document.</span><span style="color:#B392F0;">createElement</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;span&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#B392F0;">replaceNode</span><span style="color:#E1E4E8;">(body,span,div);</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#000000;">   </span><span style="color:#0000FF;">let</span><span style="color:#000000;"> </span><span style="color:#001080;">div</span><span style="color:#000000;"> = </span><span style="color:#001080;">document</span><span style="color:#000000;">.</span><span style="color:#795E26;">createElement</span><span style="color:#000000;">(</span><span style="color:#A31515;">&#39;div&#39;</span><span style="color:#000000;">)</span></span>
<span class="line"><span style="color:#000000;">   </span><span style="color:#001080;">div</span><span style="color:#000000;">.</span><span style="color:#001080;">id</span><span style="color:#000000;"> = </span><span style="color:#A31515;">&#39;aa6&#39;</span></span>
<span class="line"><span style="color:#000000;">   </span><span style="color:#0000FF;">let</span><span style="color:#000000;"> </span><span style="color:#001080;">body</span><span style="color:#000000;"> = </span><span style="color:#001080;">docuement</span><span style="color:#000000;">.</span><span style="color:#001080;">body</span></span>
<span class="line"><span style="color:#000000;">   </span><span style="color:#001080;">body</span><span style="color:#000000;">.</span><span style="color:#795E26;">appendChild</span><span style="color:#000000;">(</span><span style="color:#001080;">div</span><span style="color:#000000;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#000000;">   </span><span style="color:#0000FF;">let</span><span style="color:#000000;"> </span><span style="color:#001080;">span</span><span style="color:#000000;"> =</span><span style="color:#001080;">document</span><span style="color:#000000;">.</span><span style="color:#795E26;">createElement</span><span style="color:#000000;">(</span><span style="color:#A31515;">&#39;span&#39;</span><span style="color:#000000;">);</span></span>
<span class="line"><span style="color:#000000;">   </span><span style="color:#795E26;">replaceNode</span><span style="color:#000000;">(</span><span style="color:#001080;">body</span><span style="color:#000000;">,</span><span style="color:#001080;">span</span><span style="color:#000000;">,</span><span style="color:#001080;">div</span><span style="color:#000000;">);</span></span></code></pre></div>`,11),e=[p];function t(r,c,y,d,E,i){return a(),n("div",null,e)}const h=s(l,[["render",t]]);export{m as __pageData,h as default};