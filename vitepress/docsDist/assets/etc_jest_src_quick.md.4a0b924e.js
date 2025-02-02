import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.a333c6fb.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"etc/jest/src/quick.md","filePath":"etc/jest/src/quick.md","lastUpdated":1738049586000}'),o={name:"etc/jest/src/quick.md"},p=l(`<h2 id="八、快照测试" tabindex="-1">八、快照测试 <a class="header-anchor" href="#八、快照测试" aria-label="Permalink to &quot;八、快照测试&quot;">​</a></h2><h3 id="_8-1-基本原理与使用方法" tabindex="-1">8.1 基本原理与使用方法 <a class="header-anchor" href="#_8-1-基本原理与使用方法" aria-label="Permalink to &quot;8.1 基本原理与使用方法&quot;">​</a></h3><ul><li><strong>原理</strong>：快照测试通过生成一个包含代码输出的快照文件，在后续测试中对比实际输出与快照文件的内容，从而判断代码的行为是否发生变化。</li></ul><ul><li><strong>使用方法</strong>：使用toMatchSnapshot()匹配器来进行快照测试。</li></ul><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">formatUser</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">user</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">\`Name: \${</span><span style="color:#E1E4E8;">user</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">name</span><span style="color:#9ECBFF;">}, Age: \${</span><span style="color:#E1E4E8;">user</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">age</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#B392F0;">test</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;format user snapshot&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">user</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> { name: </span><span style="color:#9ECBFF;">&#39;John&#39;</span><span style="color:#E1E4E8;">, age: </span><span style="color:#79B8FF;">30</span><span style="color:#E1E4E8;"> };</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">expect</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">formatUser</span><span style="color:#E1E4E8;">(user)).</span><span style="color:#B392F0;">toMatchSnapshot</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#0000FF;">function</span><span style="color:#000000;"> </span><span style="color:#795E26;">formatUser</span><span style="color:#000000;">(</span><span style="color:#001080;">user</span><span style="color:#000000;">) {</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#AF00DB;">return</span><span style="color:#000000;"> </span><span style="color:#A31515;">\`Name: </span><span style="color:#0000FF;">\${</span><span style="color:#001080;">user</span><span style="color:#000000FF;">.</span><span style="color:#001080;">name</span><span style="color:#0000FF;">}</span><span style="color:#A31515;">, Age: </span><span style="color:#0000FF;">\${</span><span style="color:#001080;">user</span><span style="color:#000000FF;">.</span><span style="color:#001080;">age</span><span style="color:#0000FF;">}</span><span style="color:#A31515;">\`</span><span style="color:#000000;">;</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#795E26;">test</span><span style="color:#000000;">(</span><span style="color:#A31515;">&#39;format user snapshot&#39;</span><span style="color:#000000;">, () </span><span style="color:#0000FF;">=&gt;</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#0000FF;">const</span><span style="color:#000000;"> </span><span style="color:#0070C1;">user</span><span style="color:#000000;"> = { </span><span style="color:#001080;">name:</span><span style="color:#000000;"> </span><span style="color:#A31515;">&#39;John&#39;</span><span style="color:#000000;">, </span><span style="color:#001080;">age:</span><span style="color:#000000;"> </span><span style="color:#098658;">30</span><span style="color:#000000;"> };</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#795E26;">expect</span><span style="color:#000000;">(</span><span style="color:#795E26;">formatUser</span><span style="color:#000000;">(</span><span style="color:#001080;">user</span><span style="color:#000000;">)).</span><span style="color:#795E26;">toMatchSnapshot</span><span style="color:#000000;">();</span></span>
<span class="line"><span style="color:#000000;">});</span></span></code></pre></div><h3 id="_8-2-快照文件管理" tabindex="-1">8.2 快照文件管理 <a class="header-anchor" href="#_8-2-快照文件管理" aria-label="Permalink to &quot;8.2 快照文件管理&quot;">​</a></h3><ul><li><strong>生成快照文件</strong>：首次运行快照测试时，Jest 会在__snapshots__目录下生成一个快照文件，文件名与测试文件相对应。</li></ul><ul><li><strong>更新快照文件</strong>：当代码发生变化，需要更新快照文件时，可以使用jest --updateSnapshot命令或在测试运行时按下u键。</li></ul><ul><li><strong>删除快照文件</strong>：如果不再需要某个快照文件，可以手动删除__snapshots__目录下对应的文件。</li></ul><h3 id="_8-3-快照测试的应用场景" tabindex="-1">8.3 快照测试的应用场景 <a class="header-anchor" href="#_8-3-快照测试的应用场景" aria-label="Permalink to &quot;8.3 快照测试的应用场景&quot;">​</a></h3><ul><li><strong>UI 组件测试</strong>：在测试 React、Vue 等前端框架的组件时，快照测试可以方便地验证组件的渲染结果是否符合预期。</li></ul><ul><li><strong>数据格式化测试</strong>：对于数据格式化函数，快照测试可以确保数据格式化的结果在代码修改后保持一致。</li></ul><ul><li><strong>API 响应测试</strong>：在测试 API 调用时，快照测试可以验证 API 响应的结构和内容是否发生变化。</li></ul>`,13),e=[p];function t(r,c,y,E,i,u){return a(),n("div",null,e)}const _=s(o,[["render",t]]);export{h as __pageData,_ as default};
