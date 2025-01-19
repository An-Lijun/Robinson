import{_ as s,o as n,c as e,Q as a}from"./chunks/framework.a333c6fb.js";const g=JSON.parse('{"title":"集成Ts","description":"","frontmatter":{},"headers":[],"relativePath":"etc/docs/src/withTs.md","filePath":"etc/docs/src/withTs.md"}'),l={name:"etc/docs/src/withTs.md"},p=a(`<h1 id="集成ts" tabindex="-1">集成Ts <a class="header-anchor" href="#集成ts" aria-label="Permalink to &quot;集成Ts&quot;">​</a></h1><ol><li>安装依赖</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">npm install rollup @rollup/plugin-typescript typescript tslib -D</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#000000;">npm install rollup @rollup/plugin-typescript typescript tslib -D</span></span></code></pre></div><ul><li><strong><code>rollup</code></strong>：Rollup 的核心库。</li><li><strong><code>@rollup/plugin-typescript</code></strong>：Rollup 的 TypeScript 插件，用于处理 TypeScript 文件。</li><li><strong><code>typescript</code></strong>：TypeScript 编译器。</li><li><strong><code>tslib</code></strong>：TypeScript 运行时库，用于支持一些 TypeScript 特性。</li></ul><ol start="2"><li>配置rollup</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// www.javascriptcn.com code example</span></span>
<span class="line"><span style="color:#e1e4e8;">import typescript from &#39;@rollup/plugin-typescript&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">export default {</span></span>
<span class="line"><span style="color:#e1e4e8;">  input: &#39;src/main.ts&#39;, // 入口文件</span></span>
<span class="line"><span style="color:#e1e4e8;">  output: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    file: &#39;dist/bundle.js&#39;, // 输出文件</span></span>
<span class="line"><span style="color:#e1e4e8;">    format: &#39;cjs&#39;, // 输出格式</span></span>
<span class="line"><span style="color:#e1e4e8;">  },</span></span>
<span class="line"><span style="color:#e1e4e8;">  plugins: [</span></span>
<span class="line"><span style="color:#e1e4e8;">    typescript(), // 使用 TypeScript 插件</span></span>
<span class="line"><span style="color:#e1e4e8;">  ],</span></span>
<span class="line"><span style="color:#e1e4e8;">};</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#000000;">// www.javascriptcn.com code example</span></span>
<span class="line"><span style="color:#000000;">import typescript from &#39;@rollup/plugin-typescript&#39;;</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">export default {</span></span>
<span class="line"><span style="color:#000000;">  input: &#39;src/main.ts&#39;, // 入口文件</span></span>
<span class="line"><span style="color:#000000;">  output: {</span></span>
<span class="line"><span style="color:#000000;">    file: &#39;dist/bundle.js&#39;, // 输出文件</span></span>
<span class="line"><span style="color:#000000;">    format: &#39;cjs&#39;, // 输出格式</span></span>
<span class="line"><span style="color:#000000;">  },</span></span>
<span class="line"><span style="color:#000000;">  plugins: [</span></span>
<span class="line"><span style="color:#000000;">    typescript(), // 使用 TypeScript 插件</span></span>
<span class="line"><span style="color:#000000;">  ],</span></span>
<span class="line"><span style="color:#000000;">};</span></span></code></pre></div><ol start="3"><li>配置 tsconfig.json 在项目根目录下创建 <code>tsconfig.json</code> 文件，配置 TypeScript 编译选项：</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;compilerOptions&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;target&quot;: &quot;es5&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;module&quot;: &quot;esnext&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;moduleResolution&quot;: &quot;node&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;strict&quot;: true,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;esModuleInterop&quot;: true,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;skipLibCheck&quot;: true,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;forceConsistentCasingInFileNames&quot;: true,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;outDir&quot;: &quot;dist&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;declaration&quot;: true</span></span>
<span class="line"><span style="color:#e1e4e8;">  },</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;include&quot;: [&quot;src/**/*&quot;]</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#000000;">{</span></span>
<span class="line"><span style="color:#000000;">  &quot;compilerOptions&quot;: {</span></span>
<span class="line"><span style="color:#000000;">    &quot;target&quot;: &quot;es5&quot;,</span></span>
<span class="line"><span style="color:#000000;">    &quot;module&quot;: &quot;esnext&quot;,</span></span>
<span class="line"><span style="color:#000000;">    &quot;moduleResolution&quot;: &quot;node&quot;,</span></span>
<span class="line"><span style="color:#000000;">    &quot;strict&quot;: true,</span></span>
<span class="line"><span style="color:#000000;">    &quot;esModuleInterop&quot;: true,</span></span>
<span class="line"><span style="color:#000000;">    &quot;skipLibCheck&quot;: true,</span></span>
<span class="line"><span style="color:#000000;">    &quot;forceConsistentCasingInFileNames&quot;: true,</span></span>
<span class="line"><span style="color:#000000;">    &quot;outDir&quot;: &quot;dist&quot;,</span></span>
<span class="line"><span style="color:#000000;">    &quot;declaration&quot;: true</span></span>
<span class="line"><span style="color:#000000;">  },</span></span>
<span class="line"><span style="color:#000000;">  &quot;include&quot;: [&quot;src/**/*&quot;]</span></span>
<span class="line"><span style="color:#000000;">}</span></span></code></pre></div><ul><li><p><strong><code>tsconfig.json</code></strong>：TypeScript 的配置文件，用于指定编译选项。</p><ul><li><strong><code>target</code></strong>：指定编译后的 JavaScript 版本。</li><li><strong><code>module</code></strong>：指定模块系统。</li><li><strong><code>strict</code></strong>：启用所有严格类型检查选项。</li><li><strong><code>outDir</code></strong>：指定输出目录。</li><li><strong><code>declaration</code></strong>：生成 <code>.d.ts</code> 类型声明文件。</li></ul></li></ul>`,9),o=[p];function t(c,i,r,u,d,y){return n(),e("div",null,o)}const m=s(l,[["render",t]]);export{g as __pageData,m as default};
