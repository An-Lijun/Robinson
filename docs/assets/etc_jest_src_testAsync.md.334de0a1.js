import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.a333c6fb.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"etc/jest/src/testAsync.md","filePath":"etc/jest/src/testAsync.md","lastUpdated":1738049586000}'),p={name:"etc/jest/src/testAsync.md"},o=l(`<h2 id="六、测试异步代码" tabindex="-1">六、测试异步代码 <a class="header-anchor" href="#六、测试异步代码" aria-label="Permalink to &quot;六、测试异步代码&quot;">​</a></h2><h3 id="_6-1-异步函数返回-promise" tabindex="-1">6.1 异步函数返回 Promise <a class="header-anchor" href="#_6-1-异步函数返回-promise" aria-label="Permalink to &quot;6.1 异步函数返回 Promise&quot;">​</a></h3><ul><li><strong>使用 async/await</strong>：通过async/await语法可以方便地测试返回 Promise 的异步函数。</li></ul><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">asyncAdd</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">a</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">b</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Promise</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">resolve</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(a </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> b);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }, </span><span style="color:#79B8FF;">1000</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#B392F0;">test</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;async add works&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">result</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">asyncAdd</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">expect</span><span style="color:#E1E4E8;">(result).</span><span style="color:#B392F0;">toBe</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#0000FF;">function</span><span style="color:#000000;"> </span><span style="color:#795E26;">asyncAdd</span><span style="color:#000000;">(</span><span style="color:#001080;">a</span><span style="color:#000000;">, </span><span style="color:#001080;">b</span><span style="color:#000000;">) {</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#AF00DB;">return</span><span style="color:#000000;"> </span><span style="color:#0000FF;">new</span><span style="color:#000000;"> </span><span style="color:#267F99;">Promise</span><span style="color:#000000;">((</span><span style="color:#001080;">resolve</span><span style="color:#000000;">) </span><span style="color:#0000FF;">=&gt;</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#795E26;">setTimeout</span><span style="color:#000000;">(() </span><span style="color:#0000FF;">=&gt;</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#795E26;">resolve</span><span style="color:#000000;">(</span><span style="color:#001080;">a</span><span style="color:#000000;"> + </span><span style="color:#001080;">b</span><span style="color:#000000;">);</span></span>
<span class="line"><span style="color:#000000;">        }, </span><span style="color:#098658;">1000</span><span style="color:#000000;">);</span></span>
<span class="line"><span style="color:#000000;">    });</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#795E26;">test</span><span style="color:#000000;">(</span><span style="color:#A31515;">&#39;async add works&#39;</span><span style="color:#000000;">, </span><span style="color:#0000FF;">async</span><span style="color:#000000;"> () </span><span style="color:#0000FF;">=&gt;</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#0000FF;">const</span><span style="color:#000000;"> </span><span style="color:#0070C1;">result</span><span style="color:#000000;"> = </span><span style="color:#AF00DB;">await</span><span style="color:#000000;"> </span><span style="color:#795E26;">asyncAdd</span><span style="color:#000000;">(</span><span style="color:#098658;">1</span><span style="color:#000000;">, </span><span style="color:#098658;">2</span><span style="color:#000000;">);</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#795E26;">expect</span><span style="color:#000000;">(</span><span style="color:#001080;">result</span><span style="color:#000000;">).</span><span style="color:#795E26;">toBe</span><span style="color:#000000;">(</span><span style="color:#098658;">3</span><span style="color:#000000;">);</span></span>
<span class="line"><span style="color:#000000;">});</span></span></code></pre></div><ul><li><strong>使用.then ()</strong> ：也可以使用.then()方法来处理 Promise。</li></ul><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">test</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;async add works with then&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">asyncAdd</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">result</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">expect</span><span style="color:#E1E4E8;">(result).</span><span style="color:#B392F0;">toBe</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#795E26;">test</span><span style="color:#000000;">(</span><span style="color:#A31515;">&#39;async add works with then&#39;</span><span style="color:#000000;">, () </span><span style="color:#0000FF;">=&gt;</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#AF00DB;">return</span><span style="color:#000000;"> </span><span style="color:#795E26;">asyncAdd</span><span style="color:#000000;">(</span><span style="color:#098658;">1</span><span style="color:#000000;">, </span><span style="color:#098658;">2</span><span style="color:#000000;">).</span><span style="color:#795E26;">then</span><span style="color:#000000;">((</span><span style="color:#001080;">result</span><span style="color:#000000;">) </span><span style="color:#0000FF;">=&gt;</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#795E26;">expect</span><span style="color:#000000;">(</span><span style="color:#001080;">result</span><span style="color:#000000;">).</span><span style="color:#795E26;">toBe</span><span style="color:#000000;">(</span><span style="color:#098658;">3</span><span style="color:#000000;">);</span></span>
<span class="line"><span style="color:#000000;">    });</span></span>
<span class="line"><span style="color:#000000;">});</span></span></code></pre></div><h3 id="_6-2-使用回调函数" tabindex="-1">6.2 使用回调函数 <a class="header-anchor" href="#_6-2-使用回调函数" aria-label="Permalink to &quot;6.2 使用回调函数&quot;">​</a></h3><ul><li><strong>使用 done ()</strong> ：在测试使用回调函数的异步代码时，需要调用done()方法来通知 Jest 测试完成。</li></ul><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">addWithCallback</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">a</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">b</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">callback</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">callback</span><span style="color:#E1E4E8;">(a </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> b);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }, </span><span style="color:#79B8FF;">1000</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#B392F0;">test</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;add with callback works&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">done</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">addWithCallback</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">result</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">expect</span><span style="color:#E1E4E8;">(result).</span><span style="color:#B392F0;">toBe</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">done</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#0000FF;">function</span><span style="color:#000000;"> </span><span style="color:#795E26;">addWithCallback</span><span style="color:#000000;">(</span><span style="color:#001080;">a</span><span style="color:#000000;">, </span><span style="color:#001080;">b</span><span style="color:#000000;">, </span><span style="color:#001080;">callback</span><span style="color:#000000;">) {</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#795E26;">setTimeout</span><span style="color:#000000;">(() </span><span style="color:#0000FF;">=&gt;</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#795E26;">callback</span><span style="color:#000000;">(</span><span style="color:#001080;">a</span><span style="color:#000000;"> + </span><span style="color:#001080;">b</span><span style="color:#000000;">);</span></span>
<span class="line"><span style="color:#000000;">    }, </span><span style="color:#098658;">1000</span><span style="color:#000000;">);</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#795E26;">test</span><span style="color:#000000;">(</span><span style="color:#A31515;">&#39;add with callback works&#39;</span><span style="color:#000000;">, (</span><span style="color:#001080;">done</span><span style="color:#000000;">) </span><span style="color:#0000FF;">=&gt;</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#795E26;">addWithCallback</span><span style="color:#000000;">(</span><span style="color:#098658;">1</span><span style="color:#000000;">, </span><span style="color:#098658;">2</span><span style="color:#000000;">, (</span><span style="color:#001080;">result</span><span style="color:#000000;">) </span><span style="color:#0000FF;">=&gt;</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#795E26;">expect</span><span style="color:#000000;">(</span><span style="color:#001080;">result</span><span style="color:#000000;">).</span><span style="color:#795E26;">toBe</span><span style="color:#000000;">(</span><span style="color:#098658;">3</span><span style="color:#000000;">);</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#795E26;">done</span><span style="color:#000000;">();</span></span>
<span class="line"><span style="color:#000000;">    });</span></span>
<span class="line"><span style="color:#000000;">});</span></span></code></pre></div><h3 id="_6-3-处理异步错误" tabindex="-1">6.3 处理异步错误 <a class="header-anchor" href="#_6-3-处理异步错误" aria-label="Permalink to &quot;6.3 处理异步错误&quot;">​</a></h3><ul><li><strong>使用 try/catch</strong>：在async/await中，可以使用try/catch来捕获异步错误。</li></ul><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">test</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;async function throws error&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">asyncError</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">throw</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Async error&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">asyncError</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">expect</span><span style="color:#E1E4E8;">(error.message).</span><span style="color:#B392F0;">toBe</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Async error&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#795E26;">test</span><span style="color:#000000;">(</span><span style="color:#A31515;">&#39;async function throws error&#39;</span><span style="color:#000000;">, </span><span style="color:#0000FF;">async</span><span style="color:#000000;"> () </span><span style="color:#0000FF;">=&gt;</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#0000FF;">async</span><span style="color:#000000;"> </span><span style="color:#0000FF;">function</span><span style="color:#000000;"> </span><span style="color:#795E26;">asyncError</span><span style="color:#000000;">() {</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#AF00DB;">throw</span><span style="color:#000000;"> </span><span style="color:#0000FF;">new</span><span style="color:#000000;"> </span><span style="color:#795E26;">Error</span><span style="color:#000000;">(</span><span style="color:#A31515;">&#39;Async error&#39;</span><span style="color:#000000;">);</span></span>
<span class="line"><span style="color:#000000;">    }</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#AF00DB;">try</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#AF00DB;">await</span><span style="color:#000000;"> </span><span style="color:#795E26;">asyncError</span><span style="color:#000000;">();</span></span>
<span class="line"><span style="color:#000000;">    } </span><span style="color:#AF00DB;">catch</span><span style="color:#000000;"> (</span><span style="color:#001080;">error</span><span style="color:#000000;">) {</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#795E26;">expect</span><span style="color:#000000;">(</span><span style="color:#001080;">error</span><span style="color:#000000;">.</span><span style="color:#001080;">message</span><span style="color:#000000;">).</span><span style="color:#795E26;">toBe</span><span style="color:#000000;">(</span><span style="color:#A31515;">&#39;Async error&#39;</span><span style="color:#000000;">);</span></span>
<span class="line"><span style="color:#000000;">    }</span></span>
<span class="line"><span style="color:#000000;">});</span></span></code></pre></div><ul><li><strong>使用.rejectWith ()</strong> ：在使用.then()时，可以使用.rejectWith()来处理 Promise 被拒绝的情况。</li></ul><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">test</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;async function throws error with then&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">asyncError</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">throw</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Async error&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">asyncError</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">catch</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">error</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">expect</span><span style="color:#E1E4E8;">(error.message).</span><span style="color:#B392F0;">toBe</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Async error&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#795E26;">test</span><span style="color:#000000;">(</span><span style="color:#A31515;">&#39;async function throws error with then&#39;</span><span style="color:#000000;">, () </span><span style="color:#0000FF;">=&gt;</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#0000FF;">async</span><span style="color:#000000;"> </span><span style="color:#0000FF;">function</span><span style="color:#000000;"> </span><span style="color:#795E26;">asyncError</span><span style="color:#000000;">() {</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#AF00DB;">throw</span><span style="color:#000000;"> </span><span style="color:#0000FF;">new</span><span style="color:#000000;"> </span><span style="color:#795E26;">Error</span><span style="color:#000000;">(</span><span style="color:#A31515;">&#39;Async error&#39;</span><span style="color:#000000;">);</span></span>
<span class="line"><span style="color:#000000;">    }</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#AF00DB;">return</span><span style="color:#000000;"> </span><span style="color:#795E26;">asyncError</span><span style="color:#000000;">().</span><span style="color:#795E26;">catch</span><span style="color:#000000;">((</span><span style="color:#001080;">error</span><span style="color:#000000;">) </span><span style="color:#0000FF;">=&gt;</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#795E26;">expect</span><span style="color:#000000;">(</span><span style="color:#001080;">error</span><span style="color:#000000;">.</span><span style="color:#001080;">message</span><span style="color:#000000;">).</span><span style="color:#795E26;">toBe</span><span style="color:#000000;">(</span><span style="color:#A31515;">&#39;Async error&#39;</span><span style="color:#000000;">);</span></span>
<span class="line"><span style="color:#000000;">    });</span></span>
<span class="line"><span style="color:#000000;">});</span></span></code></pre></div>`,14),e=[o];function c(t,r,y,E,i,F){return a(),n("div",null,e)}const B=s(p,[["render",c]]);export{h as __pageData,B as default};
