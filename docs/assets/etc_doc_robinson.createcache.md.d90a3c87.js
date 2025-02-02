import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.a333c6fb.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"etc/doc/robinson.createcache.md","filePath":"etc/doc/robinson.createcache.md","lastUpdated":1737775930000}'),o={name:"etc/doc/robinson.createcache.md"},p=e(`<p><a href="./">Home</a> &gt; <a href="./robinson.html">robinson</a> &gt; <a href="./robinson.createcache.html">createCache</a></p><h2 id="createcache-function" tabindex="-1">createCache() function <a class="header-anchor" href="#createcache-function" aria-label="Permalink to &quot;createCache() function&quot;">​</a></h2><blockquote><p>This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.</p></blockquote><p>createCache 函数创建一个缓存对象，该对象可以使用指定的存储机制和编码/解码函数来存储和检索数据。</p><p><strong>Signature:</strong></p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">createCache</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">storage</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">any</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">parmas</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ParamsInter</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;__#9309@#storage&quot;</span><span style="color:#E1E4E8;">: any;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;__#9309@#encode&quot;</span><span style="color:#E1E4E8;">: Function;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;__#9309@#decode&quot;</span><span style="color:#E1E4E8;">: Function;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">setCache</span><span style="color:#E1E4E8;">(key: string, value: any, expire: number): </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">getCache</span><span style="color:#E1E4E8;">(encodeKey: string): any;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">removeCache</span><span style="color:#E1E4E8;">(key: string): </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(key: string): boolean;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">length</span><span style="color:#E1E4E8;">(): any;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">clear</span><span style="color:#E1E4E8;">(): </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#000000;">createCache: (</span><span style="color:#001080;">storage</span><span style="color:#000000;">: </span><span style="color:#267F99;">any</span><span style="color:#000000;">, </span><span style="color:#001080;">parmas</span><span style="color:#000000;">?: </span><span style="color:#267F99;">ParamsInter</span><span style="color:#000000;">) </span><span style="color:#0000FF;">=&gt;</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#A31515;">&quot;__#9309@#storage&quot;</span><span style="color:#000000;">: </span><span style="color:#001080;">any</span><span style="color:#000000;">;</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#A31515;">&quot;__#9309@#encode&quot;</span><span style="color:#000000;">: </span><span style="color:#001080;">Function</span><span style="color:#000000;">;</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#A31515;">&quot;__#9309@#decode&quot;</span><span style="color:#000000;">: </span><span style="color:#001080;">Function</span><span style="color:#000000;">;</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#795E26;">setCache</span><span style="color:#000000;">(</span><span style="color:#001080;">key</span><span style="color:#000000;">: </span><span style="color:#001080;">string</span><span style="color:#000000;">, </span><span style="color:#001080;">value</span><span style="color:#000000;">: </span><span style="color:#001080;">any</span><span style="color:#000000;">, </span><span style="color:#001080;">expire</span><span style="color:#000000;">: </span><span style="color:#001080;">number</span><span style="color:#000000;">): </span><span style="color:#0000FF;">void</span><span style="color:#000000;">;</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#795E26;">getCache</span><span style="color:#000000;">(</span><span style="color:#001080;">encodeKey</span><span style="color:#000000;">: </span><span style="color:#001080;">string</span><span style="color:#000000;">): </span><span style="color:#001080;">any</span><span style="color:#000000;">;</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#795E26;">removeCache</span><span style="color:#000000;">(</span><span style="color:#001080;">key</span><span style="color:#000000;">: </span><span style="color:#001080;">string</span><span style="color:#000000;">): </span><span style="color:#0000FF;">void</span><span style="color:#000000;">;</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#795E26;">has</span><span style="color:#000000;">(</span><span style="color:#001080;">key</span><span style="color:#000000;">: </span><span style="color:#001080;">string</span><span style="color:#000000;">): </span><span style="color:#001080;">boolean</span><span style="color:#000000;">;</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#795E26;">length</span><span style="color:#000000;">(): </span><span style="color:#001080;">any</span><span style="color:#000000;">;</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#795E26;">clear</span><span style="color:#000000;">(): </span><span style="color:#0000FF;">void</span><span style="color:#000000;">;</span></span>
<span class="line"><span style="color:#000000;">}</span></span></code></pre></div><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>storage</td><td>any</td><td><code>storage</code> 参数是一个可选参数，它指定用于缓存的存储机制。它可以是实现与 localStorage 对象相同接口的任何对象，例如 sessionStorage 或自定义存储实现。如果没有提供存储对象，则<code>localStorage</code></td></tr><tr><td>parmas</td><td>ParamsInter</td><td><em>(Optional)</em> “parmas”参数是一个包含两个属性的对象：“encode”和“decode”。这些属性是用于在将值存储到缓存之前对值进行编码和解码的函数。 这些函数的默认值是恒等函数，这意味着它们不执行任何编码或解码。</td></tr></tbody></table><p><strong>Returns:</strong></p><p>{ &quot;__#9309@#storage&quot;: any; &quot;__#9309@#encode&quot;: Function; &quot;__#9309@#decode&quot;: Function; setCache(key: string, value: any, expire: number): void; getCache(encodeKey: string): any; removeCache(key: string): void; has(key: string): boolean; length(): any; clear(): void; }</p><p>函数“createCache”返回“Cache”类的实例。 setCache(key:String,value:Any,expire:超时时间) 设置单个缓存 return undefined getCache(key:String) 根据传入key获取单个缓存 return undefined removeCache(key:String)根据传入KEY删除单个缓存 return undefined has(key:String) 根据传入key 判断是否已经有这个数据了 return Boolean length(), return 缓存总条数 clear() 清空缓存</p>`,11),l=[p];function t(r,c,y,i,E,d){return a(),n("div",null,l)}const g=s(o,[["render",t]]);export{u as __pageData,g as default};
