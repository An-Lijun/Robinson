import{_ as s,o as a,c as o,Q as n}from"./chunks/framework.a7175731.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"etc/doc/robinson.issymbol.md","filePath":"etc/doc/robinson.issymbol.md"}'),l={name:"etc/doc/robinson.issymbol.md"},e=n('<p><a href="./">Home</a> &gt; <a href="./robinson.html">robinson</a> &gt; <a href="./robinson.issymbol.html">isSymbol</a></p><h2 id="issymbol-function" tabindex="-1">isSymbol() function <a class="header-anchor" href="#issymbol-function" aria-label="Permalink to &quot;isSymbol() function&quot;">​</a></h2><p>该函数检查值是否是Symbol 类型的对象。</p><p><strong>Signature:</strong></p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">declare</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">isSymbol</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">value</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">any</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">boolean</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#0000FF;">declare</span><span style="color:#000000;"> </span><span style="color:#0000FF;">function</span><span style="color:#000000;"> </span><span style="color:#795E26;">isSymbol</span><span style="color:#000000;">(</span><span style="color:#001080;">value</span><span style="color:#000000;">: </span><span style="color:#267F99;">any</span><span style="color:#000000;">): </span><span style="color:#267F99;">boolean</span><span style="color:#000000;">;</span></span></code></pre></div><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>value</td><td>any</td><td>参数“value”可以是任何数据类型。</td></tr></tbody></table><p><strong>Returns:</strong></p><p>boolean</p><p>函数 isSymbol 返回一个布尔值。</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-JavaScript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">JavaScript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">=</span><span style="color:#B392F0;">Symbol</span><span style="color:#E1E4E8;">(); </span><span style="color:#B392F0;">isSymbol</span><span style="color:#E1E4E8;">(a) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#0000FF;">let</span><span style="color:#000000;"> </span><span style="color:#001080;">a</span><span style="color:#000000;"> =</span><span style="color:#795E26;">Symbol</span><span style="color:#000000;">(); </span><span style="color:#795E26;">isSymbol</span><span style="color:#000000;">(</span><span style="color:#001080;">a</span><span style="color:#000000;">) </span><span style="color:#0000FF;">=&gt;</span><span style="color:#000000;"> </span><span style="color:#0000FF;">true</span></span></code></pre></div>',12),t=[e];function p(r,c,i,y,d,h){return a(),o("div",null,t)}const E=s(l,[["render",p]]);export{m as __pageData,E as default};
