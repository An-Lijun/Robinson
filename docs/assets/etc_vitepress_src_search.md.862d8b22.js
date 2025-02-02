import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.a333c6fb.js";const F=JSON.parse('{"title":"搜索","description":"","frontmatter":{},"headers":[],"relativePath":"etc/vitepress/src/search.md","filePath":"etc/vitepress/src/search.md","lastUpdated":1738076829000}'),p={name:"etc/vitepress/src/search.md"},o=l(`<h1 id="搜索" tabindex="-1">搜索 <a class="header-anchor" href="#搜索" aria-label="Permalink to &quot;搜索&quot;">​</a></h1><p>得益于 <a href="https://github.com/lucaong/minisearch/" target="_blank" rel="noreferrer">minisearch</a>，VitePress 支持使用浏览器内索引进行模糊全文搜索。要启用此功能，只需在 <code>.vitepress/config.ts</code> 文件中将 <code>themeConfig.search.provider</code> 选项设置为 <code>&#39;local&#39;</code> 即可：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { defineConfig } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vitepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      themeConfig: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        search: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          provider: </span><span style="color:#9ECBFF;">&#39;local&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#AF00DB;">import</span><span style="color:#000000;"> { </span><span style="color:#001080;">defineConfig</span><span style="color:#000000;"> } </span><span style="color:#AF00DB;">from</span><span style="color:#000000;"> </span><span style="color:#A31515;">&#39;vitepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#AF00DB;">export</span><span style="color:#000000;"> </span><span style="color:#AF00DB;">default</span><span style="color:#000000;"> </span><span style="color:#795E26;">defineConfig</span><span style="color:#000000;">({</span></span>
<span class="line"><span style="color:#000000;">      </span><span style="color:#001080;">themeConfig:</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#001080;">search:</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#000000;">          </span><span style="color:#001080;">provider:</span><span style="color:#000000;"> </span><span style="color:#A31515;">&#39;local&#39;</span></span>
<span class="line"><span style="color:#000000;">        }</span></span>
<span class="line"><span style="color:#000000;">      }</span></span>
<span class="line"><span style="color:#000000;">    })</span></span></code></pre></div><p>或者，你可以使用 <a href="https://vitepress.dev/zh/reference/default-theme-search#algolia-search" target="_blank" rel="noreferrer">Algolia DocSearch</a> 或一些社区插件，例如：<a href="https://www.npmjs.com/package/vitepress-plugin-search" target="_blank" rel="noreferrer">https://www.npmjs.com/package/vitepress-plugin-search</a> 或者 <a href="https://www.npmjs.com/package/vitepress-plugin-pagefind" target="_blank" rel="noreferrer">https://www.npmjs.com/package/vitepress-plugin-pagefind</a>。</p><h3 id="i18n​" tabindex="-1">i18n<a href="https://vitepress.dev/zh/reference/default-theme-search#local-search-i18n" target="_blank" rel="noreferrer">​</a> <a class="header-anchor" href="#i18n​" aria-label="Permalink to &quot;i18n[​](https://vitepress.dev/zh/reference/default-theme-search#local-search-i18n)&quot;">​</a></h3><p>你可以使用这样的配置来使用多语言搜索：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { defineConfig } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vitepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      themeConfig: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        search: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          provider: </span><span style="color:#9ECBFF;">&#39;local&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          options: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            locales: {</span></span>
<span class="line"><span style="color:#E1E4E8;">              zh: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                translations: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                  button: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    buttonText: </span><span style="color:#9ECBFF;">&#39;搜索文档&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    buttonAriaLabel: </span><span style="color:#9ECBFF;">&#39;搜索文档&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">                  },</span></span>
<span class="line"><span style="color:#E1E4E8;">                  modal: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    noResultsText: </span><span style="color:#9ECBFF;">&#39;无法找到相关结果&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    resetButtonTitle: </span><span style="color:#9ECBFF;">&#39;清除查询条件&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    footer: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                      selectText: </span><span style="color:#9ECBFF;">&#39;选择&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                      navigateText: </span><span style="color:#9ECBFF;">&#39;切换&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">                    }</span></span>
<span class="line"><span style="color:#E1E4E8;">                  }</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"><span style="color:#E1E4E8;">              }</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#AF00DB;">import</span><span style="color:#000000;"> { </span><span style="color:#001080;">defineConfig</span><span style="color:#000000;"> } </span><span style="color:#AF00DB;">from</span><span style="color:#000000;"> </span><span style="color:#A31515;">&#39;vitepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#AF00DB;">export</span><span style="color:#000000;"> </span><span style="color:#AF00DB;">default</span><span style="color:#000000;"> </span><span style="color:#795E26;">defineConfig</span><span style="color:#000000;">({</span></span>
<span class="line"><span style="color:#000000;">      </span><span style="color:#001080;">themeConfig:</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#001080;">search:</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#000000;">          </span><span style="color:#001080;">provider:</span><span style="color:#000000;"> </span><span style="color:#A31515;">&#39;local&#39;</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">          </span><span style="color:#001080;">options:</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#001080;">locales:</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#000000;">              </span><span style="color:#001080;">zh:</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#000000;">                </span><span style="color:#001080;">translations:</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#000000;">                  </span><span style="color:#001080;">button:</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#000000;">                    </span><span style="color:#001080;">buttonText:</span><span style="color:#000000;"> </span><span style="color:#A31515;">&#39;搜索文档&#39;</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">                    </span><span style="color:#001080;">buttonAriaLabel:</span><span style="color:#000000;"> </span><span style="color:#A31515;">&#39;搜索文档&#39;</span></span>
<span class="line"><span style="color:#000000;">                  },</span></span>
<span class="line"><span style="color:#000000;">                  </span><span style="color:#001080;">modal:</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#000000;">                    </span><span style="color:#001080;">noResultsText:</span><span style="color:#000000;"> </span><span style="color:#A31515;">&#39;无法找到相关结果&#39;</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">                    </span><span style="color:#001080;">resetButtonTitle:</span><span style="color:#000000;"> </span><span style="color:#A31515;">&#39;清除查询条件&#39;</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">                    </span><span style="color:#001080;">footer:</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#000000;">                      </span><span style="color:#001080;">selectText:</span><span style="color:#000000;"> </span><span style="color:#A31515;">&#39;选择&#39;</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">                      </span><span style="color:#001080;">navigateText:</span><span style="color:#000000;"> </span><span style="color:#A31515;">&#39;切换&#39;</span></span>
<span class="line"><span style="color:#000000;">                    }</span></span>
<span class="line"><span style="color:#000000;">                  }</span></span>
<span class="line"><span style="color:#000000;">                }</span></span>
<span class="line"><span style="color:#000000;">              }</span></span>
<span class="line"><span style="color:#000000;">            }</span></span>
<span class="line"><span style="color:#000000;">          }</span></span>
<span class="line"><span style="color:#000000;">        }</span></span>
<span class="line"><span style="color:#000000;">      }</span></span>
<span class="line"><span style="color:#000000;">    })</span></span></code></pre></div><h3 id="minisearch-配置项​" tabindex="-1">MiniSearch 配置项<a href="https://vitepress.dev/zh/reference/default-theme-search#mini-search-options" target="_blank" rel="noreferrer">​</a> <a class="header-anchor" href="#minisearch-配置项​" aria-label="Permalink to &quot;MiniSearch 配置项[​](https://vitepress.dev/zh/reference/default-theme-search#mini-search-options)&quot;">​</a></h3><p>你可以像这样配置 MiniSearch ：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { defineConfig } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vitepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      themeConfig: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        search: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          provider: </span><span style="color:#9ECBFF;">&#39;local&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          options: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            miniSearch: {</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">               * </span><span style="color:#F97583;">@type</span><span style="color:#6A737D;"> </span><span style="color:#B392F0;">{Pick&lt;import(&#39;minisearch&#39;).Options, &#39;extractField&#39; | &#39;tokenize&#39; | &#39;processTerm&#39;&gt;}</span></span>
<span class="line"><span style="color:#6A737D;">               */</span></span>
<span class="line"><span style="color:#E1E4E8;">              options: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">/* ... */</span></span>
<span class="line"><span style="color:#E1E4E8;">              },</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">               * </span><span style="color:#F97583;">@type</span><span style="color:#6A737D;"> </span><span style="color:#B392F0;">{import(&#39;minisearch&#39;).SearchOptions}</span></span>
<span class="line"><span style="color:#6A737D;">               * </span><span style="color:#F97583;">@default</span></span>
<span class="line"><span style="color:#6A737D;">               * { fuzzy: 0.2, prefix: true, boost: { title: 4, text: 2, titles: 1 } }</span></span>
<span class="line"><span style="color:#6A737D;">               */</span></span>
<span class="line"><span style="color:#E1E4E8;">              searchOptions: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">/* ... */</span></span>
<span class="line"><span style="color:#E1E4E8;">              }</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#AF00DB;">import</span><span style="color:#000000;"> { </span><span style="color:#001080;">defineConfig</span><span style="color:#000000;"> } </span><span style="color:#AF00DB;">from</span><span style="color:#000000;"> </span><span style="color:#A31515;">&#39;vitepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#AF00DB;">export</span><span style="color:#000000;"> </span><span style="color:#AF00DB;">default</span><span style="color:#000000;"> </span><span style="color:#795E26;">defineConfig</span><span style="color:#000000;">({</span></span>
<span class="line"><span style="color:#000000;">      </span><span style="color:#001080;">themeConfig:</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#001080;">search:</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#000000;">          </span><span style="color:#001080;">provider:</span><span style="color:#000000;"> </span><span style="color:#A31515;">&#39;local&#39;</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">          </span><span style="color:#001080;">options:</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#001080;">miniSearch:</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#000000;">              </span><span style="color:#008000;">/**</span></span>
<span class="line"><span style="color:#008000;">               * </span><span style="color:#0000FF;">@type</span><span style="color:#008000;"> </span><span style="color:#267F99;">{Pick&lt;import(&#39;minisearch&#39;).Options, &#39;extractField&#39; | &#39;tokenize&#39; | &#39;processTerm&#39;&gt;}</span></span>
<span class="line"><span style="color:#008000;">               */</span></span>
<span class="line"><span style="color:#000000;">              </span><span style="color:#001080;">options:</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#000000;">                </span><span style="color:#008000;">/* ... */</span></span>
<span class="line"><span style="color:#000000;">              },</span></span>
<span class="line"><span style="color:#000000;">              </span><span style="color:#008000;">/**</span></span>
<span class="line"><span style="color:#008000;">               * </span><span style="color:#0000FF;">@type</span><span style="color:#008000;"> </span><span style="color:#267F99;">{import(&#39;minisearch&#39;).SearchOptions}</span></span>
<span class="line"><span style="color:#008000;">               * </span><span style="color:#0000FF;">@default</span></span>
<span class="line"><span style="color:#008000;">               * { fuzzy: 0.2, prefix: true, boost: { title: 4, text: 2, titles: 1 } }</span></span>
<span class="line"><span style="color:#008000;">               */</span></span>
<span class="line"><span style="color:#000000;">              </span><span style="color:#001080;">searchOptions:</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#000000;">                </span><span style="color:#008000;">/* ... */</span></span>
<span class="line"><span style="color:#000000;">              }</span></span>
<span class="line"><span style="color:#000000;">            }</span></span>
<span class="line"><span style="color:#000000;">          }</span></span>
<span class="line"><span style="color:#000000;">        }</span></span>
<span class="line"><span style="color:#000000;">      }</span></span>
<span class="line"><span style="color:#000000;">    })</span></span></code></pre></div><p>参阅 <a href="https://lucaong.github.io/minisearch/classes/MiniSearch.MiniSearch.html" target="_blank" rel="noreferrer">MiniSearch 文档</a>了解更多信息。</p><h3 id="自定义渲染内容​" tabindex="-1">自定义渲染内容<a href="https://vitepress.dev/zh/reference/default-theme-search#custom-content-renderer" target="_blank" rel="noreferrer">​</a> <a class="header-anchor" href="#自定义渲染内容​" aria-label="Permalink to &quot;自定义渲染内容[​](https://vitepress.dev/zh/reference/default-theme-search#custom-content-renderer)&quot;">​</a></h3><p>可以在索引之前自定义用于渲染 Markdown 内容的函数：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { defineConfig } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vitepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      themeConfig: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        search: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          provider: </span><span style="color:#9ECBFF;">&#39;local&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          options: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">             * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#B392F0;">{string}</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">src</span></span>
<span class="line"><span style="color:#6A737D;">             * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#B392F0;">{import(&#39;vitepress&#39;).MarkdownEnv}</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">env</span></span>
<span class="line"><span style="color:#6A737D;">             * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#B392F0;">{import(&#39;markdown-it-async&#39;)}</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">md</span></span>
<span class="line"><span style="color:#6A737D;">             */</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">_render</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">src</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">env</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">md</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#6A737D;">// 返回 html 字符串</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#AF00DB;">import</span><span style="color:#000000;"> { </span><span style="color:#001080;">defineConfig</span><span style="color:#000000;"> } </span><span style="color:#AF00DB;">from</span><span style="color:#000000;"> </span><span style="color:#A31515;">&#39;vitepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#AF00DB;">export</span><span style="color:#000000;"> </span><span style="color:#AF00DB;">default</span><span style="color:#000000;"> </span><span style="color:#795E26;">defineConfig</span><span style="color:#000000;">({</span></span>
<span class="line"><span style="color:#000000;">      </span><span style="color:#001080;">themeConfig:</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#001080;">search:</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#000000;">          </span><span style="color:#001080;">provider:</span><span style="color:#000000;"> </span><span style="color:#A31515;">&#39;local&#39;</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">          </span><span style="color:#001080;">options:</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#008000;">/**</span></span>
<span class="line"><span style="color:#008000;">             * </span><span style="color:#0000FF;">@param</span><span style="color:#008000;"> </span><span style="color:#267F99;">{string}</span><span style="color:#008000;"> </span><span style="color:#001080;">src</span></span>
<span class="line"><span style="color:#008000;">             * </span><span style="color:#0000FF;">@param</span><span style="color:#008000;"> </span><span style="color:#267F99;">{import(&#39;vitepress&#39;).MarkdownEnv}</span><span style="color:#008000;"> </span><span style="color:#001080;">env</span></span>
<span class="line"><span style="color:#008000;">             * </span><span style="color:#0000FF;">@param</span><span style="color:#008000;"> </span><span style="color:#267F99;">{import(&#39;markdown-it-async&#39;)}</span><span style="color:#008000;"> </span><span style="color:#001080;">md</span></span>
<span class="line"><span style="color:#008000;">             */</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#0000FF;">async</span><span style="color:#000000;"> </span><span style="color:#795E26;">_render</span><span style="color:#000000;">(</span><span style="color:#001080;">src</span><span style="color:#000000;">, </span><span style="color:#001080;">env</span><span style="color:#000000;">, </span><span style="color:#001080;">md</span><span style="color:#000000;">) {</span></span>
<span class="line"><span style="color:#000000;">              </span><span style="color:#008000;">// 返回 html 字符串</span></span>
<span class="line"><span style="color:#000000;">            }</span></span>
<span class="line"><span style="color:#000000;">          }</span></span>
<span class="line"><span style="color:#000000;">        }</span></span>
<span class="line"><span style="color:#000000;">      }</span></span>
<span class="line"><span style="color:#000000;">    })</span></span></code></pre></div><p>该函数将从客户端站点数据中剥离，因此你可以在其中使用 Node.js API。</p><h4 id="示例-从搜索中排除页面​" tabindex="-1">示例：从搜索中排除页面<a href="https://vitepress.dev/zh/reference/default-theme-search#example-excluding-pages-from-search" target="_blank" rel="noreferrer">​</a> <a class="header-anchor" href="#示例-从搜索中排除页面​" aria-label="Permalink to &quot;示例：从搜索中排除页面[​](https://vitepress.dev/zh/reference/default-theme-search#example-excluding-pages-from-search)&quot;">​</a></h4><p>你可以通过将 <code>search: false</code> 添加到页面的 <code>frontmatter</code> 来从搜索中排除页面。或者：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { defineConfig } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vitepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      themeConfig: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        search: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          provider: </span><span style="color:#9ECBFF;">&#39;local&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          options: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">_render</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">src</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">env</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">md</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">html</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> md.</span><span style="color:#B392F0;">renderAsync</span><span style="color:#E1E4E8;">(src, env)</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (env.frontmatter?.search </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (env.relativePath.</span><span style="color:#B392F0;">startsWith</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;some/path&#39;</span><span style="color:#E1E4E8;">)) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> html</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#AF00DB;">import</span><span style="color:#000000;"> { </span><span style="color:#001080;">defineConfig</span><span style="color:#000000;"> } </span><span style="color:#AF00DB;">from</span><span style="color:#000000;"> </span><span style="color:#A31515;">&#39;vitepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#AF00DB;">export</span><span style="color:#000000;"> </span><span style="color:#AF00DB;">default</span><span style="color:#000000;"> </span><span style="color:#795E26;">defineConfig</span><span style="color:#000000;">({</span></span>
<span class="line"><span style="color:#000000;">      </span><span style="color:#001080;">themeConfig:</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#001080;">search:</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#000000;">          </span><span style="color:#001080;">provider:</span><span style="color:#000000;"> </span><span style="color:#A31515;">&#39;local&#39;</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">          </span><span style="color:#001080;">options:</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#0000FF;">async</span><span style="color:#000000;"> </span><span style="color:#795E26;">_render</span><span style="color:#000000;">(</span><span style="color:#001080;">src</span><span style="color:#000000;">, </span><span style="color:#001080;">env</span><span style="color:#000000;">, </span><span style="color:#001080;">md</span><span style="color:#000000;">) {</span></span>
<span class="line"><span style="color:#000000;">              </span><span style="color:#0000FF;">const</span><span style="color:#000000;"> </span><span style="color:#0070C1;">html</span><span style="color:#000000;"> = </span><span style="color:#AF00DB;">await</span><span style="color:#000000;"> </span><span style="color:#001080;">md</span><span style="color:#000000;">.</span><span style="color:#795E26;">renderAsync</span><span style="color:#000000;">(</span><span style="color:#001080;">src</span><span style="color:#000000;">, </span><span style="color:#001080;">env</span><span style="color:#000000;">)</span></span>
<span class="line"><span style="color:#000000;">              </span><span style="color:#AF00DB;">if</span><span style="color:#000000;"> (</span><span style="color:#001080;">env</span><span style="color:#000000;">.</span><span style="color:#001080;">frontmatter</span><span style="color:#000000;">?.</span><span style="color:#001080;">search</span><span style="color:#000000;"> === </span><span style="color:#0000FF;">false</span><span style="color:#000000;">) </span><span style="color:#AF00DB;">return</span><span style="color:#000000;"> </span><span style="color:#A31515;">&#39;&#39;</span></span>
<span class="line"><span style="color:#000000;">              </span><span style="color:#AF00DB;">if</span><span style="color:#000000;"> (</span><span style="color:#001080;">env</span><span style="color:#000000;">.</span><span style="color:#001080;">relativePath</span><span style="color:#000000;">.</span><span style="color:#795E26;">startsWith</span><span style="color:#000000;">(</span><span style="color:#A31515;">&#39;some/path&#39;</span><span style="color:#000000;">)) </span><span style="color:#AF00DB;">return</span><span style="color:#000000;"> </span><span style="color:#A31515;">&#39;&#39;</span></span>
<span class="line"><span style="color:#000000;">              </span><span style="color:#AF00DB;">return</span><span style="color:#000000;"> </span><span style="color:#001080;">html</span></span>
<span class="line"><span style="color:#000000;">            }</span></span>
<span class="line"><span style="color:#000000;">          }</span></span>
<span class="line"><span style="color:#000000;">        }</span></span>
<span class="line"><span style="color:#000000;">      }</span></span>
<span class="line"><span style="color:#000000;">    })</span></span></code></pre></div><p>注意</p><p>如果提供了自定义的 <code>_render</code> 函数，你需要自己处理 <code>search: false</code> 的 frontmatter。此外，在调用 <code>md.renderAsync</code> 之前，<code>env</code> 对象不会完全填充，因此对可选 <code>env</code> 属性 (如 <code>frontmatter</code>) 的任何检查都应该在此之后完成。</p><h4 id="示例-转换内容——添加锚点​" tabindex="-1">示例：转换内容——添加锚点<a href="https://vitepress.dev/zh/reference/default-theme-search#example-transforming-content-adding-anchors" target="_blank" rel="noreferrer">​</a> <a class="header-anchor" href="#示例-转换内容——添加锚点​" aria-label="Permalink to &quot;示例：转换内容——添加锚点[​](https://vitepress.dev/zh/reference/default-theme-search#example-transforming-content-adding-anchors)&quot;">​</a></h4><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { defineConfig } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vitepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      themeConfig: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        search: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          provider: </span><span style="color:#9ECBFF;">&#39;local&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          options: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">_render</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">src</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">env</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">md</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">html</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> md.</span><span style="color:#B392F0;">renderAsync</span><span style="color:#E1E4E8;">(src, env)</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (env.frontmatter?.title)</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> md.</span><span style="color:#B392F0;">renderAsync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`# \${</span><span style="color:#E1E4E8;">env</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">frontmatter</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">title</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> html</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> html</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#AF00DB;">import</span><span style="color:#000000;"> { </span><span style="color:#001080;">defineConfig</span><span style="color:#000000;"> } </span><span style="color:#AF00DB;">from</span><span style="color:#000000;"> </span><span style="color:#A31515;">&#39;vitepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#AF00DB;">export</span><span style="color:#000000;"> </span><span style="color:#AF00DB;">default</span><span style="color:#000000;"> </span><span style="color:#795E26;">defineConfig</span><span style="color:#000000;">({</span></span>
<span class="line"><span style="color:#000000;">      </span><span style="color:#001080;">themeConfig:</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#001080;">search:</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#000000;">          </span><span style="color:#001080;">provider:</span><span style="color:#000000;"> </span><span style="color:#A31515;">&#39;local&#39;</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">          </span><span style="color:#001080;">options:</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#0000FF;">async</span><span style="color:#000000;"> </span><span style="color:#795E26;">_render</span><span style="color:#000000;">(</span><span style="color:#001080;">src</span><span style="color:#000000;">, </span><span style="color:#001080;">env</span><span style="color:#000000;">, </span><span style="color:#001080;">md</span><span style="color:#000000;">) {</span></span>
<span class="line"><span style="color:#000000;">              </span><span style="color:#0000FF;">const</span><span style="color:#000000;"> </span><span style="color:#0070C1;">html</span><span style="color:#000000;"> = </span><span style="color:#AF00DB;">await</span><span style="color:#000000;"> </span><span style="color:#001080;">md</span><span style="color:#000000;">.</span><span style="color:#795E26;">renderAsync</span><span style="color:#000000;">(</span><span style="color:#001080;">src</span><span style="color:#000000;">, </span><span style="color:#001080;">env</span><span style="color:#000000;">)</span></span>
<span class="line"><span style="color:#000000;">              </span><span style="color:#AF00DB;">if</span><span style="color:#000000;"> (</span><span style="color:#001080;">env</span><span style="color:#000000;">.</span><span style="color:#001080;">frontmatter</span><span style="color:#000000;">?.</span><span style="color:#001080;">title</span><span style="color:#000000;">)</span></span>
<span class="line"><span style="color:#000000;">                </span><span style="color:#AF00DB;">return</span><span style="color:#000000;"> </span><span style="color:#AF00DB;">await</span><span style="color:#000000;"> </span><span style="color:#001080;">md</span><span style="color:#000000;">.</span><span style="color:#795E26;">renderAsync</span><span style="color:#000000;">(</span><span style="color:#A31515;">\`# </span><span style="color:#0000FF;">\${</span><span style="color:#001080;">env</span><span style="color:#000000FF;">.</span><span style="color:#001080;">frontmatter</span><span style="color:#000000FF;">.</span><span style="color:#001080;">title</span><span style="color:#0000FF;">}</span><span style="color:#A31515;">\`</span><span style="color:#000000;">) + </span><span style="color:#001080;">html</span></span>
<span class="line"><span style="color:#000000;">              </span><span style="color:#AF00DB;">return</span><span style="color:#000000;"> </span><span style="color:#001080;">html</span></span>
<span class="line"><span style="color:#000000;">            }</span></span>
<span class="line"><span style="color:#000000;">          }</span></span>
<span class="line"><span style="color:#000000;">        }</span></span>
<span class="line"><span style="color:#000000;">      }</span></span>
<span class="line"><span style="color:#000000;">    })</span></span></code></pre></div><h2 id="algolia-search​" tabindex="-1">Algolia Search<a href="https://vitepress.dev/zh/reference/default-theme-search#algolia-search" target="_blank" rel="noreferrer">​</a> <a class="header-anchor" href="#algolia-search​" aria-label="Permalink to &quot;Algolia Search[​](https://vitepress.dev/zh/reference/default-theme-search#algolia-search)&quot;">​</a></h2><p>VitePress 支持使用 <a href="https://docsearch.algolia.com/docs/what-is-docsearch" target="_blank" rel="noreferrer">Algolia DocSearch</a> 搜索文档站点。请参阅他们的入门指南。在你的 <code>.vitepress/config.ts</code> 中，你至少需要提供以下内容才能使其正常工作：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { defineConfig } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vitepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      themeConfig: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        search: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          provider: </span><span style="color:#9ECBFF;">&#39;algolia&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          options: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            appId: </span><span style="color:#9ECBFF;">&#39;...&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            apiKey: </span><span style="color:#9ECBFF;">&#39;...&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            indexName: </span><span style="color:#9ECBFF;">&#39;...&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#AF00DB;">import</span><span style="color:#000000;"> { </span><span style="color:#001080;">defineConfig</span><span style="color:#000000;"> } </span><span style="color:#AF00DB;">from</span><span style="color:#000000;"> </span><span style="color:#A31515;">&#39;vitepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#AF00DB;">export</span><span style="color:#000000;"> </span><span style="color:#AF00DB;">default</span><span style="color:#000000;"> </span><span style="color:#795E26;">defineConfig</span><span style="color:#000000;">({</span></span>
<span class="line"><span style="color:#000000;">      </span><span style="color:#001080;">themeConfig:</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#001080;">search:</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#000000;">          </span><span style="color:#001080;">provider:</span><span style="color:#000000;"> </span><span style="color:#A31515;">&#39;algolia&#39;</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">          </span><span style="color:#001080;">options:</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#001080;">appId:</span><span style="color:#000000;"> </span><span style="color:#A31515;">&#39;...&#39;</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#001080;">apiKey:</span><span style="color:#000000;"> </span><span style="color:#A31515;">&#39;...&#39;</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#001080;">indexName:</span><span style="color:#000000;"> </span><span style="color:#A31515;">&#39;...&#39;</span></span>
<span class="line"><span style="color:#000000;">          }</span></span>
<span class="line"><span style="color:#000000;">        }</span></span>
<span class="line"><span style="color:#000000;">      }</span></span>
<span class="line"><span style="color:#000000;">    })</span></span></code></pre></div><h3 id="i18n​-1" tabindex="-1">i18n<a href="https://vitepress.dev/zh/reference/default-theme-search#algolia-search-i18n" target="_blank" rel="noreferrer">​</a> <a class="header-anchor" href="#i18n​-1" aria-label="Permalink to &quot;i18n[​](https://vitepress.dev/zh/reference/default-theme-search#algolia-search-i18n)&quot;">​</a></h3><p>你可以使用这样的配置来使用多语言搜索：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { defineConfig } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vitepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      themeConfig: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        search: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          provider: </span><span style="color:#9ECBFF;">&#39;algolia&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          options: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            appId: </span><span style="color:#9ECBFF;">&#39;...&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            apiKey: </span><span style="color:#9ECBFF;">&#39;...&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            indexName: </span><span style="color:#9ECBFF;">&#39;...&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            locales: {</span></span>
<span class="line"><span style="color:#E1E4E8;">              zh: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                placeholder: </span><span style="color:#9ECBFF;">&#39;搜索文档&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                translations: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                  button: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    buttonText: </span><span style="color:#9ECBFF;">&#39;搜索文档&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    buttonAriaLabel: </span><span style="color:#9ECBFF;">&#39;搜索文档&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">                  },</span></span>
<span class="line"><span style="color:#E1E4E8;">                  modal: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    searchBox: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                      resetButtonTitle: </span><span style="color:#9ECBFF;">&#39;清除查询条件&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                      resetButtonAriaLabel: </span><span style="color:#9ECBFF;">&#39;清除查询条件&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                      cancelButtonText: </span><span style="color:#9ECBFF;">&#39;取消&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                      cancelButtonAriaLabel: </span><span style="color:#9ECBFF;">&#39;取消&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">                    },</span></span>
<span class="line"><span style="color:#E1E4E8;">                    startScreen: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                      recentSearchesTitle: </span><span style="color:#9ECBFF;">&#39;搜索历史&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                      noRecentSearchesText: </span><span style="color:#9ECBFF;">&#39;没有搜索历史&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                      saveRecentSearchButtonTitle: </span><span style="color:#9ECBFF;">&#39;保存至搜索历史&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                      removeRecentSearchButtonTitle: </span><span style="color:#9ECBFF;">&#39;从搜索历史中移除&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                      favoriteSearchesTitle: </span><span style="color:#9ECBFF;">&#39;收藏&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                      removeFavoriteSearchButtonTitle: </span><span style="color:#9ECBFF;">&#39;从收藏中移除&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">                    },</span></span>
<span class="line"><span style="color:#E1E4E8;">                    errorScreen: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                      titleText: </span><span style="color:#9ECBFF;">&#39;无法获取结果&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                      helpText: </span><span style="color:#9ECBFF;">&#39;你可能需要检查你的网络连接&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">                    },</span></span>
<span class="line"><span style="color:#E1E4E8;">                    footer: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                      selectText: </span><span style="color:#9ECBFF;">&#39;选择&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                      navigateText: </span><span style="color:#9ECBFF;">&#39;切换&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                      closeText: </span><span style="color:#9ECBFF;">&#39;关闭&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                      searchByText: </span><span style="color:#9ECBFF;">&#39;搜索提供者&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">                    },</span></span>
<span class="line"><span style="color:#E1E4E8;">                    noResultsScreen: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                      noResultsText: </span><span style="color:#9ECBFF;">&#39;无法找到相关结果&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                      suggestedQueryText: </span><span style="color:#9ECBFF;">&#39;你可以尝试查询&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                      reportMissingResultsText: </span><span style="color:#9ECBFF;">&#39;你认为该查询应该有结果？&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                      reportMissingResultsLinkText: </span><span style="color:#9ECBFF;">&#39;点击反馈&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">                    }</span></span>
<span class="line"><span style="color:#E1E4E8;">                  }</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"><span style="color:#E1E4E8;">              }</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#AF00DB;">import</span><span style="color:#000000;"> { </span><span style="color:#001080;">defineConfig</span><span style="color:#000000;"> } </span><span style="color:#AF00DB;">from</span><span style="color:#000000;"> </span><span style="color:#A31515;">&#39;vitepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#AF00DB;">export</span><span style="color:#000000;"> </span><span style="color:#AF00DB;">default</span><span style="color:#000000;"> </span><span style="color:#795E26;">defineConfig</span><span style="color:#000000;">({</span></span>
<span class="line"><span style="color:#000000;">      </span><span style="color:#001080;">themeConfig:</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#001080;">search:</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#000000;">          </span><span style="color:#001080;">provider:</span><span style="color:#000000;"> </span><span style="color:#A31515;">&#39;algolia&#39;</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">          </span><span style="color:#001080;">options:</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#001080;">appId:</span><span style="color:#000000;"> </span><span style="color:#A31515;">&#39;...&#39;</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#001080;">apiKey:</span><span style="color:#000000;"> </span><span style="color:#A31515;">&#39;...&#39;</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#001080;">indexName:</span><span style="color:#000000;"> </span><span style="color:#A31515;">&#39;...&#39;</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#001080;">locales:</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#000000;">              </span><span style="color:#001080;">zh:</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#000000;">                </span><span style="color:#001080;">placeholder:</span><span style="color:#000000;"> </span><span style="color:#A31515;">&#39;搜索文档&#39;</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">                </span><span style="color:#001080;">translations:</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#000000;">                  </span><span style="color:#001080;">button:</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#000000;">                    </span><span style="color:#001080;">buttonText:</span><span style="color:#000000;"> </span><span style="color:#A31515;">&#39;搜索文档&#39;</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">                    </span><span style="color:#001080;">buttonAriaLabel:</span><span style="color:#000000;"> </span><span style="color:#A31515;">&#39;搜索文档&#39;</span></span>
<span class="line"><span style="color:#000000;">                  },</span></span>
<span class="line"><span style="color:#000000;">                  </span><span style="color:#001080;">modal:</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#000000;">                    </span><span style="color:#001080;">searchBox:</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#000000;">                      </span><span style="color:#001080;">resetButtonTitle:</span><span style="color:#000000;"> </span><span style="color:#A31515;">&#39;清除查询条件&#39;</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">                      </span><span style="color:#001080;">resetButtonAriaLabel:</span><span style="color:#000000;"> </span><span style="color:#A31515;">&#39;清除查询条件&#39;</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">                      </span><span style="color:#001080;">cancelButtonText:</span><span style="color:#000000;"> </span><span style="color:#A31515;">&#39;取消&#39;</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">                      </span><span style="color:#001080;">cancelButtonAriaLabel:</span><span style="color:#000000;"> </span><span style="color:#A31515;">&#39;取消&#39;</span></span>
<span class="line"><span style="color:#000000;">                    },</span></span>
<span class="line"><span style="color:#000000;">                    </span><span style="color:#001080;">startScreen:</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#000000;">                      </span><span style="color:#001080;">recentSearchesTitle:</span><span style="color:#000000;"> </span><span style="color:#A31515;">&#39;搜索历史&#39;</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">                      </span><span style="color:#001080;">noRecentSearchesText:</span><span style="color:#000000;"> </span><span style="color:#A31515;">&#39;没有搜索历史&#39;</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">                      </span><span style="color:#001080;">saveRecentSearchButtonTitle:</span><span style="color:#000000;"> </span><span style="color:#A31515;">&#39;保存至搜索历史&#39;</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">                      </span><span style="color:#001080;">removeRecentSearchButtonTitle:</span><span style="color:#000000;"> </span><span style="color:#A31515;">&#39;从搜索历史中移除&#39;</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">                      </span><span style="color:#001080;">favoriteSearchesTitle:</span><span style="color:#000000;"> </span><span style="color:#A31515;">&#39;收藏&#39;</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">                      </span><span style="color:#001080;">removeFavoriteSearchButtonTitle:</span><span style="color:#000000;"> </span><span style="color:#A31515;">&#39;从收藏中移除&#39;</span></span>
<span class="line"><span style="color:#000000;">                    },</span></span>
<span class="line"><span style="color:#000000;">                    </span><span style="color:#001080;">errorScreen:</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#000000;">                      </span><span style="color:#001080;">titleText:</span><span style="color:#000000;"> </span><span style="color:#A31515;">&#39;无法获取结果&#39;</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">                      </span><span style="color:#001080;">helpText:</span><span style="color:#000000;"> </span><span style="color:#A31515;">&#39;你可能需要检查你的网络连接&#39;</span></span>
<span class="line"><span style="color:#000000;">                    },</span></span>
<span class="line"><span style="color:#000000;">                    </span><span style="color:#001080;">footer:</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#000000;">                      </span><span style="color:#001080;">selectText:</span><span style="color:#000000;"> </span><span style="color:#A31515;">&#39;选择&#39;</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">                      </span><span style="color:#001080;">navigateText:</span><span style="color:#000000;"> </span><span style="color:#A31515;">&#39;切换&#39;</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">                      </span><span style="color:#001080;">closeText:</span><span style="color:#000000;"> </span><span style="color:#A31515;">&#39;关闭&#39;</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">                      </span><span style="color:#001080;">searchByText:</span><span style="color:#000000;"> </span><span style="color:#A31515;">&#39;搜索提供者&#39;</span></span>
<span class="line"><span style="color:#000000;">                    },</span></span>
<span class="line"><span style="color:#000000;">                    </span><span style="color:#001080;">noResultsScreen:</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#000000;">                      </span><span style="color:#001080;">noResultsText:</span><span style="color:#000000;"> </span><span style="color:#A31515;">&#39;无法找到相关结果&#39;</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">                      </span><span style="color:#001080;">suggestedQueryText:</span><span style="color:#000000;"> </span><span style="color:#A31515;">&#39;你可以尝试查询&#39;</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">                      </span><span style="color:#001080;">reportMissingResultsText:</span><span style="color:#000000;"> </span><span style="color:#A31515;">&#39;你认为该查询应该有结果？&#39;</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">                      </span><span style="color:#001080;">reportMissingResultsLinkText:</span><span style="color:#000000;"> </span><span style="color:#A31515;">&#39;点击反馈&#39;</span></span>
<span class="line"><span style="color:#000000;">                    }</span></span>
<span class="line"><span style="color:#000000;">                  }</span></span>
<span class="line"><span style="color:#000000;">                }</span></span>
<span class="line"><span style="color:#000000;">              }</span></span>
<span class="line"><span style="color:#000000;">            }</span></span>
<span class="line"><span style="color:#000000;">          }</span></span>
<span class="line"><span style="color:#000000;">        }</span></span>
<span class="line"><span style="color:#000000;">      }</span></span>
<span class="line"><span style="color:#000000;">    })</span></span></code></pre></div><p><a href="https://github.com/vuejs/vitepress/blob/main/types/docsearch.d.ts" target="_blank" rel="noreferrer">这些选项</a>可以被覆盖。请参阅 Algolia 官方文档以了解更多信息。</p><h3 id="爬虫配置​" tabindex="-1">爬虫配置<a href="https://vitepress.dev/zh/reference/default-theme-search#crawler-config" target="_blank" rel="noreferrer">​</a> <a class="header-anchor" href="#爬虫配置​" aria-label="Permalink to &quot;爬虫配置[​](https://vitepress.dev/zh/reference/default-theme-search#crawler-config)&quot;">​</a></h3><p>以下是基于此站点使用的示例配置：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Crawler</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      appId: </span><span style="color:#9ECBFF;">&#39;...&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      apiKey: </span><span style="color:#9ECBFF;">&#39;...&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      rateLimit: </span><span style="color:#79B8FF;">8</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      startUrls: [</span><span style="color:#9ECBFF;">&#39;https://vitepress.dev/&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">      renderJavaScript: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      sitemaps: [],</span></span>
<span class="line"><span style="color:#E1E4E8;">      exclusionPatterns: [],</span></span>
<span class="line"><span style="color:#E1E4E8;">      ignoreCanonicalTo: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      discoveryPatterns: [</span><span style="color:#9ECBFF;">&#39;https://vitepress.dev/**&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">      schedule: </span><span style="color:#9ECBFF;">&#39;at 05:10 on Saturday&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      actions: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">          indexName: </span><span style="color:#9ECBFF;">&#39;vitepress&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          pathsToMatch: [</span><span style="color:#9ECBFF;">&#39;https://vitepress.dev/**&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#B392F0;">recordExtractor</span><span style="color:#E1E4E8;">: ({ </span><span style="color:#FFAB70;">$</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">helpers</span><span style="color:#E1E4E8;"> }) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> helpers.</span><span style="color:#B392F0;">docsearch</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">              recordProps: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                lvl1: </span><span style="color:#9ECBFF;">&#39;.content h1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                content: </span><span style="color:#9ECBFF;">&#39;.content p, .content li&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                lvl0: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                  selectors: </span><span style="color:#9ECBFF;">&#39;section.has-active div h2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                  defaultValue: </span><span style="color:#9ECBFF;">&#39;Documentation&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">                },</span></span>
<span class="line"><span style="color:#E1E4E8;">                lvl2: </span><span style="color:#9ECBFF;">&#39;.content h2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                lvl3: </span><span style="color:#9ECBFF;">&#39;.content h3&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                lvl4: </span><span style="color:#9ECBFF;">&#39;.content h4&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                lvl5: </span><span style="color:#9ECBFF;">&#39;.content h5&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">              },</span></span>
<span class="line"><span style="color:#E1E4E8;">              indexHeadings: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">            })</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      ],</span></span>
<span class="line"><span style="color:#E1E4E8;">      initialIndexSettings: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        vitepress: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          attributesForFaceting: [</span><span style="color:#9ECBFF;">&#39;type&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;lang&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">          attributesToRetrieve: [</span><span style="color:#9ECBFF;">&#39;hierarchy&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;content&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;anchor&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;url&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">          attributesToHighlight: [</span><span style="color:#9ECBFF;">&#39;hierarchy&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;hierarchy_camel&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;content&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">          attributesToSnippet: [</span><span style="color:#9ECBFF;">&#39;content:10&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">          camelCaseAttributes: [</span><span style="color:#9ECBFF;">&#39;hierarchy&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;hierarchy_radio&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;content&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">          searchableAttributes: [</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&#39;unordered(hierarchy_radio_camel.lvl0)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&#39;unordered(hierarchy_radio.lvl0)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&#39;unordered(hierarchy_radio_camel.lvl1)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&#39;unordered(hierarchy_radio.lvl1)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&#39;unordered(hierarchy_radio_camel.lvl2)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&#39;unordered(hierarchy_radio.lvl2)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&#39;unordered(hierarchy_radio_camel.lvl3)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&#39;unordered(hierarchy_radio.lvl3)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&#39;unordered(hierarchy_radio_camel.lvl4)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&#39;unordered(hierarchy_radio.lvl4)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&#39;unordered(hierarchy_radio_camel.lvl5)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&#39;unordered(hierarchy_radio.lvl5)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&#39;unordered(hierarchy_radio_camel.lvl6)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&#39;unordered(hierarchy_radio.lvl6)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&#39;unordered(hierarchy_camel.lvl0)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&#39;unordered(hierarchy.lvl0)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&#39;unordered(hierarchy_camel.lvl1)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&#39;unordered(hierarchy.lvl1)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&#39;unordered(hierarchy_camel.lvl2)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&#39;unordered(hierarchy.lvl2)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&#39;unordered(hierarchy_camel.lvl3)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&#39;unordered(hierarchy.lvl3)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&#39;unordered(hierarchy_camel.lvl4)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&#39;unordered(hierarchy.lvl4)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&#39;unordered(hierarchy_camel.lvl5)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&#39;unordered(hierarchy.lvl5)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&#39;unordered(hierarchy_camel.lvl6)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&#39;unordered(hierarchy.lvl6)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&#39;content&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">          ],</span></span>
<span class="line"><span style="color:#E1E4E8;">          distinct: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          attributeForDistinct: </span><span style="color:#9ECBFF;">&#39;url&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          customRanking: [</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&#39;desc(weight.pageRank)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&#39;desc(weight.level)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&#39;asc(weight.position)&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">          ],</span></span>
<span class="line"><span style="color:#E1E4E8;">          ranking: [</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&#39;words&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&#39;filters&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&#39;typo&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&#39;attribute&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&#39;proximity&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&#39;exact&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&#39;custom&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">          ],</span></span>
<span class="line"><span style="color:#E1E4E8;">          highlightPreTag: </span><span style="color:#9ECBFF;">&#39;&lt;span class=&quot;algolia-docsearch-suggestion--highlight&quot;&gt;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          highlightPostTag: </span><span style="color:#9ECBFF;">&#39;&lt;/span&gt;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          minWordSizefor1Typo: </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          minWordSizefor2Typos: </span><span style="color:#79B8FF;">7</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          allowTyposOnNumericTokens: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          minProximity: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          ignorePlurals: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          advancedSyntax: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          attributeCriteriaComputedByMinProximity: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          removeWordsIfNoResults: </span><span style="color:#9ECBFF;">&#39;allOptional&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#0000FF;">new</span><span style="color:#000000;"> </span><span style="color:#795E26;">Crawler</span><span style="color:#000000;">({</span></span>
<span class="line"><span style="color:#000000;">      </span><span style="color:#001080;">appId:</span><span style="color:#000000;"> </span><span style="color:#A31515;">&#39;...&#39;</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">      </span><span style="color:#001080;">apiKey:</span><span style="color:#000000;"> </span><span style="color:#A31515;">&#39;...&#39;</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">      </span><span style="color:#001080;">rateLimit:</span><span style="color:#000000;"> </span><span style="color:#098658;">8</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">      </span><span style="color:#001080;">startUrls:</span><span style="color:#000000;"> [</span><span style="color:#A31515;">&#39;https://vitepress.dev/&#39;</span><span style="color:#000000;">],</span></span>
<span class="line"><span style="color:#000000;">      </span><span style="color:#001080;">renderJavaScript:</span><span style="color:#000000;"> </span><span style="color:#0000FF;">false</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">      </span><span style="color:#001080;">sitemaps:</span><span style="color:#000000;"> [],</span></span>
<span class="line"><span style="color:#000000;">      </span><span style="color:#001080;">exclusionPatterns:</span><span style="color:#000000;"> [],</span></span>
<span class="line"><span style="color:#000000;">      </span><span style="color:#001080;">ignoreCanonicalTo:</span><span style="color:#000000;"> </span><span style="color:#0000FF;">false</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">      </span><span style="color:#001080;">discoveryPatterns:</span><span style="color:#000000;"> [</span><span style="color:#A31515;">&#39;https://vitepress.dev/**&#39;</span><span style="color:#000000;">],</span></span>
<span class="line"><span style="color:#000000;">      </span><span style="color:#001080;">schedule:</span><span style="color:#000000;"> </span><span style="color:#A31515;">&#39;at 05:10 on Saturday&#39;</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">      </span><span style="color:#001080;">actions:</span><span style="color:#000000;"> [</span></span>
<span class="line"><span style="color:#000000;">        {</span></span>
<span class="line"><span style="color:#000000;">          </span><span style="color:#001080;">indexName:</span><span style="color:#000000;"> </span><span style="color:#A31515;">&#39;vitepress&#39;</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">          </span><span style="color:#001080;">pathsToMatch:</span><span style="color:#000000;"> [</span><span style="color:#A31515;">&#39;https://vitepress.dev/**&#39;</span><span style="color:#000000;">],</span></span>
<span class="line"><span style="color:#000000;">          </span><span style="color:#795E26;">recordExtractor</span><span style="color:#001080;">:</span><span style="color:#000000;"> ({ </span><span style="color:#001080;">$</span><span style="color:#000000;">, </span><span style="color:#001080;">helpers</span><span style="color:#000000;"> }) </span><span style="color:#0000FF;">=&gt;</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#AF00DB;">return</span><span style="color:#000000;"> </span><span style="color:#001080;">helpers</span><span style="color:#000000;">.</span><span style="color:#795E26;">docsearch</span><span style="color:#000000;">({</span></span>
<span class="line"><span style="color:#000000;">              </span><span style="color:#001080;">recordProps:</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#000000;">                </span><span style="color:#001080;">lvl1:</span><span style="color:#000000;"> </span><span style="color:#A31515;">&#39;.content h1&#39;</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">                </span><span style="color:#001080;">content:</span><span style="color:#000000;"> </span><span style="color:#A31515;">&#39;.content p, .content li&#39;</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">                </span><span style="color:#001080;">lvl0:</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#000000;">                  </span><span style="color:#001080;">selectors:</span><span style="color:#000000;"> </span><span style="color:#A31515;">&#39;section.has-active div h2&#39;</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">                  </span><span style="color:#001080;">defaultValue:</span><span style="color:#000000;"> </span><span style="color:#A31515;">&#39;Documentation&#39;</span></span>
<span class="line"><span style="color:#000000;">                },</span></span>
<span class="line"><span style="color:#000000;">                </span><span style="color:#001080;">lvl2:</span><span style="color:#000000;"> </span><span style="color:#A31515;">&#39;.content h2&#39;</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">                </span><span style="color:#001080;">lvl3:</span><span style="color:#000000;"> </span><span style="color:#A31515;">&#39;.content h3&#39;</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">                </span><span style="color:#001080;">lvl4:</span><span style="color:#000000;"> </span><span style="color:#A31515;">&#39;.content h4&#39;</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">                </span><span style="color:#001080;">lvl5:</span><span style="color:#000000;"> </span><span style="color:#A31515;">&#39;.content h5&#39;</span></span>
<span class="line"><span style="color:#000000;">              },</span></span>
<span class="line"><span style="color:#000000;">              </span><span style="color:#001080;">indexHeadings:</span><span style="color:#000000;"> </span><span style="color:#0000FF;">true</span></span>
<span class="line"><span style="color:#000000;">            })</span></span>
<span class="line"><span style="color:#000000;">          }</span></span>
<span class="line"><span style="color:#000000;">        }</span></span>
<span class="line"><span style="color:#000000;">      ],</span></span>
<span class="line"><span style="color:#000000;">      </span><span style="color:#001080;">initialIndexSettings:</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#001080;">vitepress:</span><span style="color:#000000;"> {</span></span>
<span class="line"><span style="color:#000000;">          </span><span style="color:#001080;">attributesForFaceting:</span><span style="color:#000000;"> [</span><span style="color:#A31515;">&#39;type&#39;</span><span style="color:#000000;">, </span><span style="color:#A31515;">&#39;lang&#39;</span><span style="color:#000000;">],</span></span>
<span class="line"><span style="color:#000000;">          </span><span style="color:#001080;">attributesToRetrieve:</span><span style="color:#000000;"> [</span><span style="color:#A31515;">&#39;hierarchy&#39;</span><span style="color:#000000;">, </span><span style="color:#A31515;">&#39;content&#39;</span><span style="color:#000000;">, </span><span style="color:#A31515;">&#39;anchor&#39;</span><span style="color:#000000;">, </span><span style="color:#A31515;">&#39;url&#39;</span><span style="color:#000000;">],</span></span>
<span class="line"><span style="color:#000000;">          </span><span style="color:#001080;">attributesToHighlight:</span><span style="color:#000000;"> [</span><span style="color:#A31515;">&#39;hierarchy&#39;</span><span style="color:#000000;">, </span><span style="color:#A31515;">&#39;hierarchy_camel&#39;</span><span style="color:#000000;">, </span><span style="color:#A31515;">&#39;content&#39;</span><span style="color:#000000;">],</span></span>
<span class="line"><span style="color:#000000;">          </span><span style="color:#001080;">attributesToSnippet:</span><span style="color:#000000;"> [</span><span style="color:#A31515;">&#39;content:10&#39;</span><span style="color:#000000;">],</span></span>
<span class="line"><span style="color:#000000;">          </span><span style="color:#001080;">camelCaseAttributes:</span><span style="color:#000000;"> [</span><span style="color:#A31515;">&#39;hierarchy&#39;</span><span style="color:#000000;">, </span><span style="color:#A31515;">&#39;hierarchy_radio&#39;</span><span style="color:#000000;">, </span><span style="color:#A31515;">&#39;content&#39;</span><span style="color:#000000;">],</span></span>
<span class="line"><span style="color:#000000;">          </span><span style="color:#001080;">searchableAttributes:</span><span style="color:#000000;"> [</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#A31515;">&#39;unordered(hierarchy_radio_camel.lvl0)&#39;</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#A31515;">&#39;unordered(hierarchy_radio.lvl0)&#39;</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#A31515;">&#39;unordered(hierarchy_radio_camel.lvl1)&#39;</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#A31515;">&#39;unordered(hierarchy_radio.lvl1)&#39;</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#A31515;">&#39;unordered(hierarchy_radio_camel.lvl2)&#39;</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#A31515;">&#39;unordered(hierarchy_radio.lvl2)&#39;</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#A31515;">&#39;unordered(hierarchy_radio_camel.lvl3)&#39;</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#A31515;">&#39;unordered(hierarchy_radio.lvl3)&#39;</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#A31515;">&#39;unordered(hierarchy_radio_camel.lvl4)&#39;</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#A31515;">&#39;unordered(hierarchy_radio.lvl4)&#39;</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#A31515;">&#39;unordered(hierarchy_radio_camel.lvl5)&#39;</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#A31515;">&#39;unordered(hierarchy_radio.lvl5)&#39;</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#A31515;">&#39;unordered(hierarchy_radio_camel.lvl6)&#39;</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#A31515;">&#39;unordered(hierarchy_radio.lvl6)&#39;</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#A31515;">&#39;unordered(hierarchy_camel.lvl0)&#39;</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#A31515;">&#39;unordered(hierarchy.lvl0)&#39;</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#A31515;">&#39;unordered(hierarchy_camel.lvl1)&#39;</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#A31515;">&#39;unordered(hierarchy.lvl1)&#39;</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#A31515;">&#39;unordered(hierarchy_camel.lvl2)&#39;</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#A31515;">&#39;unordered(hierarchy.lvl2)&#39;</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#A31515;">&#39;unordered(hierarchy_camel.lvl3)&#39;</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#A31515;">&#39;unordered(hierarchy.lvl3)&#39;</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#A31515;">&#39;unordered(hierarchy_camel.lvl4)&#39;</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#A31515;">&#39;unordered(hierarchy.lvl4)&#39;</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#A31515;">&#39;unordered(hierarchy_camel.lvl5)&#39;</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#A31515;">&#39;unordered(hierarchy.lvl5)&#39;</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#A31515;">&#39;unordered(hierarchy_camel.lvl6)&#39;</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#A31515;">&#39;unordered(hierarchy.lvl6)&#39;</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#A31515;">&#39;content&#39;</span></span>
<span class="line"><span style="color:#000000;">          ],</span></span>
<span class="line"><span style="color:#000000;">          </span><span style="color:#001080;">distinct:</span><span style="color:#000000;"> </span><span style="color:#0000FF;">true</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">          </span><span style="color:#001080;">attributeForDistinct:</span><span style="color:#000000;"> </span><span style="color:#A31515;">&#39;url&#39;</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">          </span><span style="color:#001080;">customRanking:</span><span style="color:#000000;"> [</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#A31515;">&#39;desc(weight.pageRank)&#39;</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#A31515;">&#39;desc(weight.level)&#39;</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#A31515;">&#39;asc(weight.position)&#39;</span></span>
<span class="line"><span style="color:#000000;">          ],</span></span>
<span class="line"><span style="color:#000000;">          </span><span style="color:#001080;">ranking:</span><span style="color:#000000;"> [</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#A31515;">&#39;words&#39;</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#A31515;">&#39;filters&#39;</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#A31515;">&#39;typo&#39;</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#A31515;">&#39;attribute&#39;</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#A31515;">&#39;proximity&#39;</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#A31515;">&#39;exact&#39;</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#A31515;">&#39;custom&#39;</span></span>
<span class="line"><span style="color:#000000;">          ],</span></span>
<span class="line"><span style="color:#000000;">          </span><span style="color:#001080;">highlightPreTag:</span><span style="color:#000000;"> </span><span style="color:#A31515;">&#39;&lt;span class=&quot;algolia-docsearch-suggestion--highlight&quot;&gt;&#39;</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">          </span><span style="color:#001080;">highlightPostTag:</span><span style="color:#000000;"> </span><span style="color:#A31515;">&#39;&lt;/span&gt;&#39;</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">          </span><span style="color:#001080;">minWordSizefor1Typo:</span><span style="color:#000000;"> </span><span style="color:#098658;">3</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">          </span><span style="color:#001080;">minWordSizefor2Typos:</span><span style="color:#000000;"> </span><span style="color:#098658;">7</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">          </span><span style="color:#001080;">allowTyposOnNumericTokens:</span><span style="color:#000000;"> </span><span style="color:#0000FF;">false</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">          </span><span style="color:#001080;">minProximity:</span><span style="color:#000000;"> </span><span style="color:#098658;">1</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">          </span><span style="color:#001080;">ignorePlurals:</span><span style="color:#000000;"> </span><span style="color:#0000FF;">true</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">          </span><span style="color:#001080;">advancedSyntax:</span><span style="color:#000000;"> </span><span style="color:#0000FF;">true</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">          </span><span style="color:#001080;">attributeCriteriaComputedByMinProximity:</span><span style="color:#000000;"> </span><span style="color:#0000FF;">true</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">          </span><span style="color:#001080;">removeWordsIfNoResults:</span><span style="color:#000000;"> </span><span style="color:#A31515;">&#39;allOptional&#39;</span></span>
<span class="line"><span style="color:#000000;">        }</span></span>
<span class="line"><span style="color:#000000;">      }</span></span>
<span class="line"><span style="color:#000000;">    })</span></span></code></pre></div>`,32),e=[o];function c(r,t,y,E,i,d){return n(),a("div",null,e)}const u=s(p,[["render",c]]);export{F as __pageData,u as default};
