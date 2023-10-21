import{_ as t,o as e,c as s,Q as a}from"./chunks/framework.80c893c1.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"etc/doc/robinson.eventbus.emit.md","filePath":"etc/doc/robinson.eventbus.emit.md"}'),n={name:"etc/doc/robinson.eventbus.emit.md"},o=a('<p><a href="./">Home</a> &gt; <a href="./robinson.html">robinson</a> &gt; <a href="./robinson.eventbus.html">eventBus</a> &gt; <a href="./robinson.eventbus.emit.html">emit</a></p><h2 id="eventbus-emit-method" tabindex="-1">eventBus.emit() method <a class="header-anchor" href="#eventbus-emit-method" aria-label="Permalink to &quot;eventBus.emit() method&quot;">​</a></h2><p>“emit”函数触发与特定事件名称关联的所有事件处理程序，并将任何参数传递给它们。</p><p><strong>Signature:</strong></p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">emit</span><span style="color:#E1E4E8;">(eventName: string, </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">Args: any): </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#795E26;">emit</span><span style="color:#000000;">(</span><span style="color:#001080;">eventName</span><span style="color:#000000;">: </span><span style="color:#001080;">string</span><span style="color:#000000;">, ...</span><span style="color:#001080;">Args</span><span style="color:#000000;">: </span><span style="color:#001080;">any</span><span style="color:#000000;">): </span><span style="color:#0000FF;">void</span><span style="color:#000000;">;</span></span></code></pre></div><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>eventName</td><td>string</td><td>表示要发出的事件名称的字符串。</td></tr><tr><td>Args</td><td>any</td><td>Args 是一个剩余参数，允许将无限数量的参数传递给 emit 函数。这些参数可以是任何类型。</td></tr></tbody></table><p><strong>Returns:</strong></p><p>void</p>',9),r=[o];function p(l,i,c,d,m,h){return e(),s("div",null,r)}const b=t(n,[["render",p]]);export{y as __pageData,b as default};