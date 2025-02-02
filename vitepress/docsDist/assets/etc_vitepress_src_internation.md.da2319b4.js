import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.a333c6fb.js";const g=JSON.parse('{"title":"国际化","description":"","frontmatter":{},"headers":[],"relativePath":"etc/vitepress/src/internation.md","filePath":"etc/vitepress/src/internation.md","lastUpdated":1738076829000}'),p={name:"etc/vitepress/src/internation.md"},o=l(`<h1 id="国际化" tabindex="-1">国际化 <a class="header-anchor" href="#国际化" aria-label="Permalink to &quot;国际化&quot;">​</a></h1><p>要使用内置的 i18n (国际化) 功能，需要创建类似于下面的目录结构：</p><pre><code>docs/
├─ es/
│  ├─ foo.md
├─ fr/
│  ├─ foo.md
├─ foo.md
</code></pre><p>在viteptess/config.ts中</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { defineConfig } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vitepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 共享属性和其他顶层内容...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    locales: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      root: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        label: </span><span style="color:#9ECBFF;">&#39;English&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        lang: </span><span style="color:#9ECBFF;">&#39;en&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      fr: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        label: </span><span style="color:#9ECBFF;">&#39;French&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        lang: </span><span style="color:#9ECBFF;">&#39;fr&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 可选，将作为 \`lang\` 属性添加到 \`html\` 标签中</span></span>
<span class="line"><span style="color:#E1E4E8;">        link: </span><span style="color:#9ECBFF;">&#39;/fr/guide&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// 默认 /fr/ -- 显示在导航栏翻译菜单上，可以是外部的</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 其余 locale 特定属性...</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#000000;">  </span><span style="color:#AF00DB;">import</span><span style="color:#000000;"> { </span><span style="color:#001080;">defineConfig</span><span style="color:#000000;"> } </span><span style="color:#AF00DB;">from</span><span style="color:#000000;"> </span><span style="color:#A31515;">&#39;vitepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#000000;">  </span><span style="color:#AF00DB;">export</span><span style="color:#000000;"> </span><span style="color:#AF00DB;">default</span><span style="color:#000000;"> </span><span style="color:#795E26;">defineConfig</span><span style="color:#000000;">({</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#008000;">// 共享属性和其他顶层内容...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#001080;">locales:</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#000000;">      </span><span style="color:#001080;">root:</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#001080;">label:</span><span style="color:#000000;"> </span><span style="color:#A31515;">&#39;English&#39;</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#001080;">lang:</span><span style="color:#000000;"> </span><span style="color:#A31515;">&#39;en&#39;</span></span>
<span class="line"><span style="color:#000000;">      },</span></span>
<span class="line"><span style="color:#000000;">      </span><span style="color:#001080;">fr:</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#001080;">label:</span><span style="color:#000000;"> </span><span style="color:#A31515;">&#39;French&#39;</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#001080;">lang:</span><span style="color:#000000;"> </span><span style="color:#A31515;">&#39;fr&#39;</span><span style="color:#000000;">, </span><span style="color:#008000;">// 可选，将作为 \`lang\` 属性添加到 \`html\` 标签中</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#001080;">link:</span><span style="color:#000000;"> </span><span style="color:#A31515;">&#39;/fr/guide&#39;</span><span style="color:#000000;"> </span><span style="color:#008000;">// 默认 /fr/ -- 显示在导航栏翻译菜单上，可以是外部的</span></span>
<span class="line"></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#008000;">// 其余 locale 特定属性...</span></span>
<span class="line"><span style="color:#000000;">      }</span></span>
<span class="line"><span style="color:#000000;">    }</span></span>
<span class="line"><span style="color:#000000;">  })</span></span></code></pre></div><p>下面的属性能够被每个 locale 覆盖 (包括 root)：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">interface</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">LocaleSpecificConfig</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">ThemeConfig</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">any</span><span style="color:#E1E4E8;">&gt; {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#FFAB70;">lang</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#FFAB70;">dir</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#FFAB70;">title</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#FFAB70;">titleTemplate</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">boolean</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#FFAB70;">description</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#FFAB70;">head</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">HeadConfig</span><span style="color:#E1E4E8;">[] </span><span style="color:#6A737D;">// 将与现有的头部条目合并，重复的元标签将自动删除</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#FFAB70;">themeConfig</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ThemeConfig</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// 会进行浅层合并，常见内容可放在顶层的 themeConfig 属性中</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#0000FF;">interface</span><span style="color:#000000;"> </span><span style="color:#267F99;">LocaleSpecificConfig</span><span style="color:#000000;">&lt;</span><span style="color:#267F99;">ThemeConfig</span><span style="color:#000000;"> = </span><span style="color:#267F99;">any</span><span style="color:#000000;">&gt; {</span></span>
<span class="line"><span style="color:#000000;">      </span><span style="color:#001080;">lang</span><span style="color:#000000;">?: </span><span style="color:#267F99;">string</span></span>
<span class="line"><span style="color:#000000;">      </span><span style="color:#001080;">dir</span><span style="color:#000000;">?: </span><span style="color:#267F99;">string</span></span>
<span class="line"><span style="color:#000000;">      </span><span style="color:#001080;">title</span><span style="color:#000000;">?: </span><span style="color:#267F99;">string</span></span>
<span class="line"><span style="color:#000000;">      </span><span style="color:#001080;">titleTemplate</span><span style="color:#000000;">?: </span><span style="color:#267F99;">string</span><span style="color:#000000;"> | </span><span style="color:#267F99;">boolean</span></span>
<span class="line"><span style="color:#000000;">      </span><span style="color:#001080;">description</span><span style="color:#000000;">?: </span><span style="color:#267F99;">string</span></span>
<span class="line"><span style="color:#000000;">      </span><span style="color:#001080;">head</span><span style="color:#000000;">?: </span><span style="color:#267F99;">HeadConfig</span><span style="color:#000000;">[] </span><span style="color:#008000;">// 将与现有的头部条目合并，重复的元标签将自动删除</span></span>
<span class="line"><span style="color:#000000;">      </span><span style="color:#001080;">themeConfig</span><span style="color:#000000;">?: </span><span style="color:#267F99;">ThemeConfig</span><span style="color:#000000;"> </span><span style="color:#008000;">// 会进行浅层合并，常见内容可放在顶层的 themeConfig 属性中</span></span>
<span class="line"><span style="color:#000000;">    }</span></span></code></pre></div>`,7),e=[o];function c(t,r,y,i,E,F){return n(),a("div",null,e)}const f=s(p,[["render",c]]);export{g as __pageData,f as default};
