import{_ as s,o as a,c as n,Q as t}from"./chunks/framework.a333c6fb.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"etc/doc/robinson.getafterdate.md","filePath":"etc/doc/robinson.getafterdate.md","lastUpdated":1737297940000}'),e={name:"etc/doc/robinson.getafterdate.md"},o=t(`<p><a href="./">Home</a> &gt; <a href="./robinson.html">robinson</a> &gt; <a href="./robinson.getafterdate.html">getAfterDate</a></p><h2 id="getafterdate-function" tabindex="-1">getAfterDate() function <a class="header-anchor" href="#getafterdate-function" aria-label="Permalink to &quot;getAfterDate() function&quot;">​</a></h2><blockquote><p>This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.</p></blockquote><p>计算给定日期之后的日期，并返回格式化后的结果。</p><p><strong>Signature:</strong></p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">declare</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getAfterDate</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">date</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Tday</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">option</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">IOptions</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#0000FF;">declare</span><span style="color:#000000;"> </span><span style="color:#0000FF;">function</span><span style="color:#000000;"> </span><span style="color:#795E26;">getAfterDate</span><span style="color:#000000;">(</span><span style="color:#001080;">date</span><span style="color:#000000;">: </span><span style="color:#267F99;">Tday</span><span style="color:#000000;">, </span><span style="color:#001080;">option</span><span style="color:#000000;">: </span><span style="color:#267F99;">IOptions</span><span style="color:#000000;">): </span><span style="color:#267F99;">string</span><span style="color:#000000;">;</span></span></code></pre></div><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>date</td><td>Tday</td><td>起始日期，可以是 dayjs 对象、Date 对象或字符串。</td></tr><tr><td>option</td><td>IOptions</td><td>操作选项。</td></tr></tbody></table><p><strong>Returns:</strong></p><p>string</p><p>{string} - 返回格式化后的日期字符串。</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">getAfterDate</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">dayjs</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;2024-03-02 08:00:00&#39;</span><span style="color:#E1E4E8;">), { pattern: </span><span style="color:#9ECBFF;">&#39;YYYY年MM月DD日&#39;</span><span style="color:#E1E4E8;"> }) </span><span style="color:#6A737D;">// &#39;2024年03月03日&#39;</span></span>
<span class="line"><span style="color:#B392F0;">getAfterDate</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">dayjs</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;2024-03-02 08:00:00&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">{ unitType: </span><span style="color:#9ECBFF;">&#39;M&#39;</span><span style="color:#E1E4E8;">, pattern: </span><span style="color:#9ECBFF;">&#39;YYYY年MM月DD日&#39;</span><span style="color:#E1E4E8;"> }) </span><span style="color:#6A737D;">// &#39;2024年04月02日&#39;</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#795E26;">getAfterDate</span><span style="color:#000000;">(</span><span style="color:#795E26;">dayjs</span><span style="color:#000000;">(</span><span style="color:#A31515;">&#39;2024-03-02 08:00:00&#39;</span><span style="color:#000000;">), { </span><span style="color:#001080;">pattern:</span><span style="color:#000000;"> </span><span style="color:#A31515;">&#39;YYYY年MM月DD日&#39;</span><span style="color:#000000;"> }) </span><span style="color:#008000;">// &#39;2024年03月03日&#39;</span></span>
<span class="line"><span style="color:#795E26;">getAfterDate</span><span style="color:#000000;">(</span><span style="color:#795E26;">dayjs</span><span style="color:#000000;">(</span><span style="color:#A31515;">&#39;2024-03-02 08:00:00&#39;</span><span style="color:#000000;">),</span></span>
<span class="line"><span style="color:#000000;">{ </span><span style="color:#001080;">unitType:</span><span style="color:#000000;"> </span><span style="color:#A31515;">&#39;M&#39;</span><span style="color:#000000;">, </span><span style="color:#001080;">pattern:</span><span style="color:#000000;"> </span><span style="color:#A31515;">&#39;YYYY年MM月DD日&#39;</span><span style="color:#000000;"> }) </span><span style="color:#008000;">// &#39;2024年04月02日&#39;</span></span></code></pre></div>`,13),p=[o];function l(r,c,y,i,d,E){return a(),n("div",null,p)}const f=s(e,[["render",l]]);export{g as __pageData,f as default};
