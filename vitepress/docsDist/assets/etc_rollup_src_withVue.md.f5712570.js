import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.a333c6fb.js";const g=JSON.parse('{"title":"rollup 集成vue","description":"","frontmatter":{},"headers":[],"relativePath":"etc/rollup/src/withVue.md","filePath":"etc/rollup/src/withVue.md","lastUpdated":1738049586000}'),p={name:"etc/rollup/src/withVue.md"},e=l(`<h1 id="rollup-集成vue" tabindex="-1">rollup 集成vue <a class="header-anchor" href="#rollup-集成vue" aria-label="Permalink to &quot;rollup 集成vue&quot;">​</a></h1><p>一般没有这么干的</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">npm install rollup rollup-plugin-vue vue-template-compiler -D</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#000000;">npm install rollup rollup-plugin-vue vue-template-compiler -D</span></span></code></pre></div><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;{{ message }}&lt;/</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      message: </span><span style="color:#9ECBFF;">&#39;Hello, Vue with Rollup!&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#800000;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#000000;">  </span><span style="color:#800000;">&lt;div&gt;</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#800000;">&lt;h1&gt;</span><span style="color:#000000;">{{ message }}</span><span style="color:#800000;">&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#000000;">  </span><span style="color:#800000;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#800000;">&lt;/template&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#800000;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#AF00DB;">export</span><span style="color:#000000;"> </span><span style="color:#AF00DB;">default</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#000000;">  </span><span style="color:#795E26;">data</span><span style="color:#000000;">() {</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#AF00DB;">return</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#000000;">      </span><span style="color:#001080;">message:</span><span style="color:#000000;"> </span><span style="color:#A31515;">&#39;Hello, Vue with Rollup!&#39;</span></span>
<span class="line"><span style="color:#000000;">    };</span></span>
<span class="line"><span style="color:#000000;">  }</span></span>
<span class="line"><span style="color:#000000;">};</span></span>
<span class="line"><span style="color:#800000;">&lt;/script&gt;</span></span></code></pre></div>`,4),o=[e];function t(c,r,i,E,y,u){return a(),n("div",null,o)}const h=s(p,[["render",t]]);export{g as __pageData,h as default};
