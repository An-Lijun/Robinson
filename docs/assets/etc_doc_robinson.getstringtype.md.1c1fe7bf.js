import{_ as s,o as a,c as n,Q as t}from"./chunks/framework.80c893c1.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"etc/doc/robinson.getstringtype.md","filePath":"etc/doc/robinson.getstringtype.md"}'),e={name:"etc/doc/robinson.getstringtype.md"},o=t(`<p><a href="./">Home</a> &gt; <a href="./robinson.html">robinson</a> &gt; <a href="./robinson.getstringtype.html">getStringType</a></p><h2 id="getstringtype-function" tabindex="-1">getStringType() function <a class="header-anchor" href="#getstringtype-function" aria-label="Permalink to &quot;getStringType() function&quot;">​</a></h2><p>函数“getStringType”以字符串形式返回输入值的类型。</p><p><strong>Signature:</strong></p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">declare</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getStringType</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">value</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">any</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">String</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#0000FF;">declare</span><span style="color:#000000;"> </span><span style="color:#0000FF;">function</span><span style="color:#000000;"> </span><span style="color:#795E26;">getStringType</span><span style="color:#000000;">(</span><span style="color:#001080;">value</span><span style="color:#000000;">: </span><span style="color:#267F99;">any</span><span style="color:#000000;">): </span><span style="color:#267F99;">String</span><span style="color:#000000;">;</span></span></code></pre></div><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>value</td><td>any</td><td>“value”参数可以是任何数据类型或您想要确定其类型的值。</td></tr></tbody></table><p><strong>Returns:</strong></p><p>String</p><p>返回输入值类型的字符串表示形式 如 [object object]。</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-JavaScript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">JavaScript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> num </span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">123</span><span style="color:#E1E4E8;">; </span><span style="color:#B392F0;">getStringType</span><span style="color:#E1E4E8;">(num) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;[object number]&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> obj </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{}; </span><span style="color:#B392F0;">getStringType</span><span style="color:#E1E4E8;">(obj) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;[object object]&#39;</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#000000;">   </span><span style="color:#0000FF;">let</span><span style="color:#000000;"> </span><span style="color:#001080;">num</span><span style="color:#000000;"> =</span><span style="color:#098658;">123</span><span style="color:#000000;">; </span><span style="color:#795E26;">getStringType</span><span style="color:#000000;">(</span><span style="color:#001080;">num</span><span style="color:#000000;">) </span><span style="color:#0000FF;">=&gt;</span><span style="color:#000000;"> </span><span style="color:#A31515;">&#39;[object number]&#39;</span></span>
<span class="line"><span style="color:#000000;">   </span><span style="color:#0000FF;">let</span><span style="color:#000000;"> </span><span style="color:#001080;">obj</span><span style="color:#000000;"> ={}; </span><span style="color:#795E26;">getStringType</span><span style="color:#000000;">(</span><span style="color:#001080;">obj</span><span style="color:#000000;">) </span><span style="color:#0000FF;">=&gt;</span><span style="color:#000000;"> </span><span style="color:#A31515;">&#39;[object object]&#39;</span></span></code></pre></div>`,12),p=[o];function l(r,c,y,i,d,g){return a(),n("div",null,p)}const u=s(e,[["render",l]]);export{h as __pageData,u as default};