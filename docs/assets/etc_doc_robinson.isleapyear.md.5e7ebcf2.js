import{_ as s,o as a,c as n,Q as p}from"./chunks/framework.a7175731.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"etc/doc/robinson.isleapyear.md","filePath":"etc/doc/robinson.isleapyear.md"}'),o={name:"etc/doc/robinson.isleapyear.md"},l=p(`<p><a href="./">Home</a> &gt; <a href="./robinson.html">robinson</a> &gt; <a href="./robinson.isleapyear.html">isLeapYear</a></p><h2 id="isleapyear-function" tabindex="-1">isLeapYear() function <a class="header-anchor" href="#isleapyear-function" aria-label="Permalink to &quot;isLeapYear() function&quot;">​</a></h2><p>判断是否是闰年</p><p><strong>Signature:</strong></p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">declare</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">isLeapYear</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">year</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">number</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">boolean</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#0000FF;">declare</span><span style="color:#000000;"> </span><span style="color:#0000FF;">function</span><span style="color:#000000;"> </span><span style="color:#795E26;">isLeapYear</span><span style="color:#000000;">(</span><span style="color:#001080;">year</span><span style="color:#000000;">: </span><span style="color:#267F99;">string</span><span style="color:#000000;"> | </span><span style="color:#267F99;">number</span><span style="color:#000000;">): </span><span style="color:#267F99;">boolean</span><span style="color:#000000;">;</span></span></code></pre></div><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>year</td><td>string | number</td><td>要判断的年份</td></tr></tbody></table><p><strong>Returns:</strong></p><p>boolean</p><p>{Boolean}</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#B392F0;">isLeapYear</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;2024&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#B392F0;">isLeapYear</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;2025&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#B392F0;">isLeapYear</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;2026&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#B392F0;">isLeapYear</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;2027&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#B392F0;">isLeapYear</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;2028&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#000000;">   </span><span style="color:#795E26;">isLeapYear</span><span style="color:#000000;">(</span><span style="color:#A31515;">&#39;2024&#39;</span><span style="color:#000000;">) </span><span style="color:#0000FF;">=&gt;</span><span style="color:#000000;"> </span><span style="color:#0000FF;">true</span></span>
<span class="line"><span style="color:#000000;">   </span><span style="color:#795E26;">isLeapYear</span><span style="color:#000000;">(</span><span style="color:#A31515;">&#39;2025&#39;</span><span style="color:#000000;">) </span><span style="color:#0000FF;">=&gt;</span><span style="color:#000000;"> </span><span style="color:#0000FF;">false</span></span>
<span class="line"><span style="color:#000000;">   </span><span style="color:#795E26;">isLeapYear</span><span style="color:#000000;">(</span><span style="color:#A31515;">&#39;2026&#39;</span><span style="color:#000000;">) </span><span style="color:#0000FF;">=&gt;</span><span style="color:#000000;"> </span><span style="color:#0000FF;">false</span></span>
<span class="line"><span style="color:#000000;">   </span><span style="color:#795E26;">isLeapYear</span><span style="color:#000000;">(</span><span style="color:#A31515;">&#39;2027&#39;</span><span style="color:#000000;">) </span><span style="color:#0000FF;">=&gt;</span><span style="color:#000000;"> </span><span style="color:#0000FF;">false</span></span>
<span class="line"><span style="color:#000000;">   </span><span style="color:#795E26;">isLeapYear</span><span style="color:#000000;">(</span><span style="color:#A31515;">&#39;2028&#39;</span><span style="color:#000000;">) </span><span style="color:#0000FF;">=&gt;</span><span style="color:#000000;"> </span><span style="color:#0000FF;">true</span></span></code></pre></div>`,11),e=[l];function t(r,c,y,i,E,F){return a(),n("div",null,e)}const u=s(o,[["render",t]]);export{h as __pageData,u as default};