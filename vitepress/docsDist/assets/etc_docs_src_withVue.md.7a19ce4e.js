import{_ as s,o as a,c as e,Q as n}from"./chunks/framework.a333c6fb.js";const h=JSON.parse('{"title":"rollup 集成vue","description":"","frontmatter":{},"headers":[],"relativePath":"etc/docs/src/withVue.md","filePath":"etc/docs/src/withVue.md","lastUpdated":1737297940000}'),l={name:"etc/docs/src/withVue.md"},p=n(`<h1 id="rollup-集成vue" tabindex="-1">rollup 集成vue <a class="header-anchor" href="#rollup-集成vue" aria-label="Permalink to &quot;rollup 集成vue&quot;">​</a></h1><p>一般没有这么干的</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">npm install rollup rollup-plugin-vue vue-template-compiler -D</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#000000;">npm install rollup rollup-plugin-vue vue-template-compiler -D</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;h1&gt;{{ message }}&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">export default {</span></span>
<span class="line"><span style="color:#e1e4e8;">  data() {</span></span>
<span class="line"><span style="color:#e1e4e8;">    return {</span></span>
<span class="line"><span style="color:#e1e4e8;">      message: &#39;Hello, Vue with Rollup!&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">    };</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">};</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/script&gt;</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#000000;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#000000;">  &lt;div&gt;</span></span>
<span class="line"><span style="color:#000000;">    &lt;h1&gt;{{ message }}&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#000000;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#000000;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#000000;"></span></span>
<span class="line"><span style="color:#000000;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#000000;">export default {</span></span>
<span class="line"><span style="color:#000000;">  data() {</span></span>
<span class="line"><span style="color:#000000;">    return {</span></span>
<span class="line"><span style="color:#000000;">      message: &#39;Hello, Vue with Rollup!&#39;</span></span>
<span class="line"><span style="color:#000000;">    };</span></span>
<span class="line"><span style="color:#000000;">  }</span></span>
<span class="line"><span style="color:#000000;">};</span></span>
<span class="line"><span style="color:#000000;">&lt;/script&gt;</span></span></code></pre></div>`,4),t=[p];function o(c,r,i,d,u,y){return a(),e("div",null,t)}const v=s(l,[["render",o]]);export{h as __pageData,v as default};
