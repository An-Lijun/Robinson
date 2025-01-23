import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.a333c6fb.js";const b=JSON.parse('{"title":"使用缓存","description":"","frontmatter":{},"headers":[],"relativePath":"etc/docs/src/use.md","filePath":"etc/docs/src/use.md","lastUpdated":1737297940000}'),p={name:"etc/docs/src/use.md"},e=l(`<h1 id="使用缓存" tabindex="-1">使用缓存 <a class="header-anchor" href="#使用缓存" aria-label="Permalink to &quot;使用缓存&quot;">​</a></h1><p>缓存可以显著提高构建速度，特别是在开发环境中。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">import { rollup } from &#39;rollup&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">const inputOptions = {</span></span>
<span class="line"><span style="color:#e1e4e8;">  input: &#39;src/main.js&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">  cache: true, // 启用缓存</span></span>
<span class="line"><span style="color:#e1e4e8;">};</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">const outputOptions = {</span></span>
<span class="line"><span style="color:#e1e4e8;">  file: &#39;bundle.js&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">  format: &#39;cjs&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">};</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">async function build() {</span></span>
<span class="line"><span style="color:#e1e4e8;">  const bundle = await rollup(inputOptions);</span></span>
<span class="line"><span style="color:#e1e4e8;">  await bundle.write(outputOptions);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">build();</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#000000;">import { rollup } from &#39;rollup&#39;;</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">const inputOptions = {</span></span>
<span class="line"><span style="color:#000000;">  input: &#39;src/main.js&#39;,</span></span>
<span class="line"><span style="color:#000000;">  cache: true, // 启用缓存</span></span>
<span class="line"><span style="color:#000000;">};</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">const outputOptions = {</span></span>
<span class="line"><span style="color:#000000;">  file: &#39;bundle.js&#39;,</span></span>
<span class="line"><span style="color:#000000;">  format: &#39;cjs&#39;,</span></span>
<span class="line"><span style="color:#000000;">};</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">async function build() {</span></span>
<span class="line"><span style="color:#000000;">  const bundle = await rollup(inputOptions);</span></span>
<span class="line"><span style="color:#000000;">  await bundle.write(outputOptions);</span></span>
<span class="line"><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">build();</span></span></code></pre></div><p>Rollup 的缓存机制是指在构建过程中，Rollup 会将模块的解析结果（如依赖关系）和转换结果（如通过插件处理后的代码）存储在内存中。这样，在后续的构建过程中，如果模块没有发生变化，Rollup 可以直接使用缓存中的结果，而不需要重新解析和转换模块。</p><h3 id="缓存的作用" tabindex="-1">缓存的作用 <a class="header-anchor" href="#缓存的作用" aria-label="Permalink to &quot;缓存的作用&quot;">​</a></h3><ol><li><strong>提高构建速度</strong>：缓存可以显著减少重复的解析和转换工作，特别是在大型项目中，构建速度的提升会非常明显。</li><li><strong>减少资源消耗</strong>：由于缓存减少了重复工作，因此也减少了 CPU 和内存的消耗。</li></ol><h3 id="缓存的局限性" tabindex="-1">缓存的局限性 <a class="header-anchor" href="#缓存的局限性" aria-label="Permalink to &quot;缓存的局限性&quot;">​</a></h3><ol><li><strong>内存占用</strong>：缓存存储在内存中，因此在构建大型项目时，可能会占用较多的内存。</li><li><strong>缓存失效</strong>：如果模块发生了变化（如文件内容修改），Rollup 会自动使缓存失效，并重新解析和转换该模块。</li></ol><h3 id="手动管理缓存" tabindex="-1">手动管理缓存 <a class="header-anchor" href="#手动管理缓存" aria-label="Permalink to &quot;手动管理缓存&quot;">​</a></h3><p>在某些情况下，你可能需要手动管理缓存。例如，你可以通过 <code>rollup.rollup</code> 方法的返回值来获取当前的缓存对象，并在后续构建中复用这个缓存对象：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// www.javascriptcn.com code example</span></span>
<span class="line"><span style="color:#e1e4e8;">async function build() {</span></span>
<span class="line"><span style="color:#e1e4e8;">  const bundle = await rollup(inputOptions);</span></span>
<span class="line"><span style="color:#e1e4e8;">  const { cache } = bundle; // 获取缓存对象</span></span>
<span class="line"><span style="color:#e1e4e8;">  await bundle.write(outputOptions);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  // 在后续构建中复用缓存</span></span>
<span class="line"><span style="color:#e1e4e8;">  const inputOptionsWithCache = {</span></span>
<span class="line"><span style="color:#e1e4e8;">    ...inputOptions,</span></span>
<span class="line"><span style="color:#e1e4e8;">    cache, // 复用缓存</span></span>
<span class="line"><span style="color:#e1e4e8;">  };</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  const bundle2 = await rollup(inputOptionsWithCache);</span></span>
<span class="line"><span style="color:#e1e4e8;">  await bundle2.write(outputOptions);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#000000;">// www.javascriptcn.com code example</span></span>
<span class="line"><span style="color:#000000;">async function build() {</span></span>
<span class="line"><span style="color:#000000;">  const bundle = await rollup(inputOptions);</span></span>
<span class="line"><span style="color:#000000;">  const { cache } = bundle; // 获取缓存对象</span></span>
<span class="line"><span style="color:#000000;">  await bundle.write(outputOptions);</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">  // 在后续构建中复用缓存</span></span>
<span class="line"><span style="color:#000000;">  const inputOptionsWithCache = {</span></span>
<span class="line"><span style="color:#000000;">    ...inputOptions,</span></span>
<span class="line"><span style="color:#000000;">    cache, // 复用缓存</span></span>
<span class="line"><span style="color:#000000;">  };</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">  const bundle2 = await rollup(inputOptionsWithCache);</span></span>
<span class="line"><span style="color:#000000;">  await bundle2.write(outputOptions);</span></span>
<span class="line"><span style="color:#000000;">}</span></span></code></pre></div><p>通过这种方式，你可以在多个构建任务之间共享缓存，进一步提高构建效率。</p>`,12),o=[e];function t(c,i,r,u,d,y){return n(),a("div",null,o)}const m=s(p,[["render",t]]);export{b as __pageData,m as default};
