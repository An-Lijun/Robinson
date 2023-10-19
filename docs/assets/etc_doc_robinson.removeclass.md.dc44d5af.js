import{_ as s,o as a,c as n,Q as o}from"./chunks/framework.80c893c1.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"etc/doc/robinson.removeclass.md","filePath":"etc/doc/robinson.removeclass.md"}'),e={name:"etc/doc/robinson.removeclass.md"},l=o(`<p><a href="./">Home</a> &gt; <a href="./robinson.html">robinson</a> &gt; <a href="./robinson.removeclass.html">removeClass</a></p><h2 id="removeclass-function" tabindex="-1">removeClass() function <a class="header-anchor" href="#removeclass-function" aria-label="Permalink to &quot;removeClass() function&quot;">​</a></h2><p>该函数从给定的 DOM 元素中删除指定的类名。</p><p><strong>Signature:</strong></p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">declare</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">removeClass</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">dom</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Element</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">classNm</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">void</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#0000FF;">declare</span><span style="color:#000000;"> </span><span style="color:#0000FF;">function</span><span style="color:#000000;"> </span><span style="color:#795E26;">removeClass</span><span style="color:#000000;">(</span><span style="color:#001080;">dom</span><span style="color:#000000;">: </span><span style="color:#267F99;">Element</span><span style="color:#000000;">, </span><span style="color:#001080;">classNm</span><span style="color:#000000;">: </span><span style="color:#267F99;">string</span><span style="color:#000000;">): </span><span style="color:#267F99;">void</span><span style="color:#000000;">;</span></span></code></pre></div><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>dom</td><td>Element</td><td>“dom”参数的类型为“Element”，表示要从中删除类的 DOM 元素。</td></tr><tr><td>classNm</td><td>string</td><td>“classNm”参数是一个字符串，表示要从“dom”元素中删除的类的名称。</td></tr></tbody></table><p><strong>Returns:</strong></p><p>void</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-JavaScript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">JavaScript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> div </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">document.</span><span style="color:#B392F0;">createElement</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;div&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">   div.className </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;a1 a2 a3&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#B392F0;">removeClass</span><span style="color:#E1E4E8;">(div,</span><span style="color:#9ECBFF;">&#39;a1&#39;</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#000000;">   </span><span style="color:#0000FF;">let</span><span style="color:#000000;"> </span><span style="color:#001080;">div</span><span style="color:#000000;"> =</span><span style="color:#001080;">document</span><span style="color:#000000;">.</span><span style="color:#795E26;">createElement</span><span style="color:#000000;">(</span><span style="color:#A31515;">&#39;div&#39;</span><span style="color:#000000;">);</span></span>
<span class="line"><span style="color:#000000;">   </span><span style="color:#001080;">div</span><span style="color:#000000;">.</span><span style="color:#001080;">className</span><span style="color:#000000;"> =</span><span style="color:#A31515;">&#39;a1 a2 a3&#39;</span></span>
<span class="line"><span style="color:#000000;">   </span><span style="color:#795E26;">removeClass</span><span style="color:#000000;">(</span><span style="color:#001080;">div</span><span style="color:#000000;">,</span><span style="color:#A31515;">&#39;a1&#39;</span><span style="color:#000000;">)</span></span></code></pre></div>`,11),p=[l];function t(r,c,i,y,d,E){return a(),n("div",null,p)}const v=s(e,[["render",t]]);export{h as __pageData,v as default};
