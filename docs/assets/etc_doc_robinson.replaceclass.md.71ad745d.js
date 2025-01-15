import{_ as s,o as a,c as l,Q as n}from"./chunks/framework.a7175731.js";const F=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"etc/doc/robinson.replaceclass.md","filePath":"etc/doc/robinson.replaceclass.md"}'),o={name:"etc/doc/robinson.replaceclass.md"},p=n(`<p><a href="./">Home</a> &gt; <a href="./robinson.html">robinson</a> &gt; <a href="./robinson.replaceclass.html">replaceClass</a></p><h2 id="replaceclass-function" tabindex="-1">replaceClass() function <a class="header-anchor" href="#replaceclass-function" aria-label="Permalink to &quot;replaceClass() function&quot;">​</a></h2><p>该函数将给定 DOM 元素上的旧类替换为新类。</p><p><strong>Signature:</strong></p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">declare</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">replaceClass</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">dom</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Node</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">newClass</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">oldClass</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">void</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#0000FF;">declare</span><span style="color:#000000;"> </span><span style="color:#0000FF;">function</span><span style="color:#000000;"> </span><span style="color:#795E26;">replaceClass</span><span style="color:#000000;">(</span><span style="color:#001080;">dom</span><span style="color:#000000;">: </span><span style="color:#267F99;">Node</span><span style="color:#000000;">, </span><span style="color:#001080;">newClass</span><span style="color:#000000;">: </span><span style="color:#267F99;">string</span><span style="color:#000000;">, </span><span style="color:#001080;">oldClass</span><span style="color:#000000;">: </span><span style="color:#267F99;">string</span><span style="color:#000000;">): </span><span style="color:#267F99;">void</span><span style="color:#000000;">;</span></span></code></pre></div><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>dom</td><td>Node</td><td><code>dom</code> 参数的类型为 <code>Node</code>，表示将执行类替换的 DOM 元素。</td></tr><tr><td>newClass</td><td>string</td><td>要添加到 DOM 元素的新 CSS 类。</td></tr><tr><td>oldClass</td><td>string</td><td>oldClass 参数是一个字符串，表示要替换的类名。</td></tr></tbody></table><p><strong>Returns:</strong></p><p>void</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-JavaScript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">JavaScript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> div </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">creatElement</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;div&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;"> div.className </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;a11&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">replaceClass</span><span style="color:#E1E4E8;">(div,</span><span style="color:#9ECBFF;">&#39;a22&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&#39;a11&#39;</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#000000;"> </span><span style="color:#0000FF;">let</span><span style="color:#000000;"> </span><span style="color:#001080;">div</span><span style="color:#000000;"> = </span><span style="color:#001080;">document</span><span style="color:#000000;">.</span><span style="color:#795E26;">creatElement</span><span style="color:#000000;">(</span><span style="color:#A31515;">&#39;div&#39;</span><span style="color:#000000;">);</span></span>
<span class="line"><span style="color:#000000;"> </span><span style="color:#001080;">div</span><span style="color:#000000;">.</span><span style="color:#001080;">className</span><span style="color:#000000;"> = </span><span style="color:#A31515;">&#39;a11&#39;</span></span>
<span class="line"><span style="color:#000000;"> </span><span style="color:#795E26;">replaceClass</span><span style="color:#000000;">(</span><span style="color:#001080;">div</span><span style="color:#000000;">,</span><span style="color:#A31515;">&#39;a22&#39;</span><span style="color:#000000;">,</span><span style="color:#A31515;">&#39;a11&#39;</span><span style="color:#000000;">)</span></span></code></pre></div>`,11),e=[p];function t(r,c,d,y,i,E){return a(),l("div",null,e)}const m=s(o,[["render",t]]);export{F as __pageData,m as default};
