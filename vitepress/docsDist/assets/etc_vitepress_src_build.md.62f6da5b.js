import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.a333c6fb.js";const F=JSON.parse('{"title":"部署","description":"","frontmatter":{},"headers":[],"relativePath":"etc/vitepress/src/build.md","filePath":"etc/vitepress/src/build.md","lastUpdated":1738076829000}'),l={name:"etc/vitepress/src/build.md"},o=p(`<h1 id="部署" tabindex="-1">部署 <a class="header-anchor" href="#部署" aria-label="Permalink to &quot;部署&quot;">​</a></h1><h2 id="本地构建与测试" tabindex="-1">本地构建与测试 <a class="header-anchor" href="#本地构建与测试" aria-label="Permalink to &quot;本地构建与测试&quot;">​</a></h2><ol><li>可以运行以下命令来构建文档：</li></ol><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">docs:build</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#795E26;">$</span><span style="color:#000000;"> </span><span style="color:#A31515;">npm</span><span style="color:#000000;"> </span><span style="color:#A31515;">run</span><span style="color:#000000;"> </span><span style="color:#A31515;">docs:build</span></span></code></pre></div><ol start="2"><li><p>构建文档后，通过运行以下命令可以在本地预览它：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">docs:preview</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#795E26;">$</span><span style="color:#000000;"> </span><span style="color:#A31515;">npm</span><span style="color:#000000;"> </span><span style="color:#A31515;">run</span><span style="color:#000000;"> </span><span style="color:#A31515;">docs:preview</span></span></code></pre></div><p><code>preview</code> 命令将启动一个本地静态 Web 服务 <code>http://localhost:4173</code>，该服务以 <code>.vitepress/dist</code> 作为源文件。这是检查生产版本在本地环境中是否正常的一种简单方法。</p></li><li><p>可以通过传递 <code>--port</code> 作为参数来配置服务器的端口。</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;scripts&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;docs:preview&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;vitepress preview docs --port 8080&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#000000;">{</span></span>
<span class="line"><span style="color:#000000;">  </span><span style="color:#0451A5;">&quot;scripts&quot;</span><span style="color:#000000;">: {</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#0451A5;">&quot;docs:preview&quot;</span><span style="color:#000000;">: </span><span style="color:#A31515;">&quot;vitepress preview docs --port 8080&quot;</span></span>
<span class="line"><span style="color:#000000;">  }</span></span>
<span class="line"><span style="color:#000000;">}</span></span></code></pre></div></li></ol><p>现在 <code>docs:preview</code> 方法将会在 <code>http://localhost:8080</code> 启动服务。</p><h2 id="设置public-根目录" tabindex="-1">设置public 根目录 <a class="header-anchor" href="#设置public-根目录" aria-label="Permalink to &quot;设置public 根目录&quot;">​</a></h2><p>// 服务器访问前缀</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      title: </span><span style="color:#9ECBFF;">&#39;Robinson&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      description: </span><span style="color:#9ECBFF;">&#39;Documentations of @taiyuuki/utils&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      base: </span><span style="color:#9ECBFF;">&#39;/Robinson/&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">//public根目录</span></span>
<span class="line"><span style="color:#E1E4E8;">      outDir: </span><span style="color:#9ECBFF;">&quot;./docsDist&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      lastUpdated: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#000000;">  </span><span style="color:#AF00DB;">export</span><span style="color:#000000;"> </span><span style="color:#AF00DB;">default</span><span style="color:#000000;"> </span><span style="color:#795E26;">defineConfig</span><span style="color:#000000;">({</span></span>
<span class="line"><span style="color:#000000;">      </span><span style="color:#001080;">title:</span><span style="color:#000000;"> </span><span style="color:#A31515;">&#39;Robinson&#39;</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">      </span><span style="color:#001080;">description:</span><span style="color:#000000;"> </span><span style="color:#A31515;">&#39;Documentations of @taiyuuki/utils&#39;</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">      </span><span style="color:#001080;">base:</span><span style="color:#000000;"> </span><span style="color:#A31515;">&#39;/Robinson/&#39;</span><span style="color:#000000;">, </span><span style="color:#008000;">//public根目录</span></span>
<span class="line"><span style="color:#000000;">      </span><span style="color:#001080;">outDir:</span><span style="color:#000000;"> </span><span style="color:#A31515;">&quot;./docsDist&quot;</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">      </span><span style="color:#001080;">lastUpdated:</span><span style="color:#000000;"> </span><span style="color:#0000FF;">true</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">  })</span></span></code></pre></div><h2 id="githubpage部署" tabindex="-1">githubPage部署 <a class="header-anchor" href="#githubpage部署" aria-label="Permalink to &quot;githubPage部署&quot;">​</a></h2><p>在项目的 <code>.github/workflows</code> 目录中创建一个名为 <code>deploy.yml</code> 的文件，其中包含这样的内容：</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 构建 VitePress 站点并将其部署到 GitHub Pages 的示例工作流程</span></span>
<span class="line"><span style="color:#6A737D;">#</span></span>
<span class="line"><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Deploy VitePress site to Pages</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">on</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># 在针对 \`main\` 分支的推送上运行。如果你</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># 使用 \`master\` 分支作为默认分支，请将其更改为 \`master\`</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">push</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">branches</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">main</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># 允许你从 Actions 选项卡手动运行此工作流程</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">workflow_dispatch</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 设置 GITHUB_TOKEN 的权限，以允许部署到 GitHub Pages</span></span>
<span class="line"><span style="color:#85E89D;">permissions</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">contents</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">read</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">pages</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">write</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">id-token</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">write</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 只允许同时进行一次部署，跳过正在运行和最新队列之间的运行队列</span></span>
<span class="line"><span style="color:#6A737D;"># 但是，不要取消正在进行的运行，因为我们希望允许这些生产部署完成</span></span>
<span class="line"><span style="color:#85E89D;">concurrency</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">group</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">pages</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">cancel-in-progress</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">jobs</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># 构建工作</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">build</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">runs-on</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">ubuntu-latest</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">steps</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Checkout</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">uses</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">actions/checkout@v4</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">with</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">fetch-depth</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 如果未启用 lastUpdated，则不需要</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;"># - uses: pnpm/action-setup@v3 # 如果使用 pnpm，请取消此区域注释</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">#   with:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">#     version: 9</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;"># - uses: oven-sh/setup-bun@v1 # 如果使用 Bun，请取消注释</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Setup Node</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">uses</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">actions/setup-node@v4</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">with</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">node-version</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">20</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">cache</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 或 pnpm / yarn</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Setup Pages</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">uses</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">actions/configure-pages@v4</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Install dependencies</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">run</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">npm ci</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 或 pnpm install / yarn install / bun install</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Build with VitePress</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">run</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">npm run docs:build</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 或 pnpm docs:build / yarn docs:build / bun run docs:build</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Upload artifact</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">uses</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">actions/upload-pages-artifact@v3</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">with</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">path</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">docs/.vitepress/dist</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># 部署工作</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">deploy</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">environment</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">github-pages</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">url</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">\${{ steps.deployment.outputs.page_url }}</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">needs</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">build</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">runs-on</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">ubuntu-latest</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Deploy</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">steps</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Deploy to GitHub Pages</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">id</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">deployment</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">uses</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">actions/deploy-pages@v4</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#008000;"># 构建 VitePress 站点并将其部署到 GitHub Pages 的示例工作流程</span></span>
<span class="line"><span style="color:#008000;">#</span></span>
<span class="line"><span style="color:#800000;">name</span><span style="color:#000000;">: </span><span style="color:#0000FF;">Deploy VitePress site to Pages</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0000FF;">on</span><span style="color:#000000;">:</span></span>
<span class="line"><span style="color:#000000;">  </span><span style="color:#008000;"># 在针对 \`main\` 分支的推送上运行。如果你</span></span>
<span class="line"><span style="color:#000000;">  </span><span style="color:#008000;"># 使用 \`master\` 分支作为默认分支，请将其更改为 \`master\`</span></span>
<span class="line"><span style="color:#000000;">  </span><span style="color:#800000;">push</span><span style="color:#000000;">:</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#800000;">branches</span><span style="color:#000000;">: [</span><span style="color:#0000FF;">main</span><span style="color:#000000;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#000000;">  </span><span style="color:#008000;"># 允许你从 Actions 选项卡手动运行此工作流程</span></span>
<span class="line"><span style="color:#000000;">  </span><span style="color:#800000;">workflow_dispatch</span><span style="color:#000000;">:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#008000;"># 设置 GITHUB_TOKEN 的权限，以允许部署到 GitHub Pages</span></span>
<span class="line"><span style="color:#800000;">permissions</span><span style="color:#000000;">:</span></span>
<span class="line"><span style="color:#000000;">  </span><span style="color:#800000;">contents</span><span style="color:#000000;">: </span><span style="color:#0000FF;">read</span></span>
<span class="line"><span style="color:#000000;">  </span><span style="color:#800000;">pages</span><span style="color:#000000;">: </span><span style="color:#0000FF;">write</span></span>
<span class="line"><span style="color:#000000;">  </span><span style="color:#800000;">id-token</span><span style="color:#000000;">: </span><span style="color:#0000FF;">write</span></span>
<span class="line"></span>
<span class="line"><span style="color:#008000;"># 只允许同时进行一次部署，跳过正在运行和最新队列之间的运行队列</span></span>
<span class="line"><span style="color:#008000;"># 但是，不要取消正在进行的运行，因为我们希望允许这些生产部署完成</span></span>
<span class="line"><span style="color:#800000;">concurrency</span><span style="color:#000000;">:</span></span>
<span class="line"><span style="color:#000000;">  </span><span style="color:#800000;">group</span><span style="color:#000000;">: </span><span style="color:#0000FF;">pages</span></span>
<span class="line"><span style="color:#000000;">  </span><span style="color:#800000;">cancel-in-progress</span><span style="color:#000000;">: </span><span style="color:#0000FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#800000;">jobs</span><span style="color:#000000;">:</span></span>
<span class="line"><span style="color:#000000;">  </span><span style="color:#008000;"># 构建工作</span></span>
<span class="line"><span style="color:#000000;">  </span><span style="color:#800000;">build</span><span style="color:#000000;">:</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#800000;">runs-on</span><span style="color:#000000;">: </span><span style="color:#0000FF;">ubuntu-latest</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#800000;">steps</span><span style="color:#000000;">:</span></span>
<span class="line"><span style="color:#000000;">      - </span><span style="color:#800000;">name</span><span style="color:#000000;">: </span><span style="color:#0000FF;">Checkout</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#800000;">uses</span><span style="color:#000000;">: </span><span style="color:#0000FF;">actions/checkout@v4</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#800000;">with</span><span style="color:#000000;">:</span></span>
<span class="line"><span style="color:#000000;">          </span><span style="color:#800000;">fetch-depth</span><span style="color:#000000;">: </span><span style="color:#098658;">0</span><span style="color:#000000;"> </span><span style="color:#008000;"># 如果未启用 lastUpdated，则不需要</span></span>
<span class="line"><span style="color:#000000;">      </span><span style="color:#008000;"># - uses: pnpm/action-setup@v3 # 如果使用 pnpm，请取消此区域注释</span></span>
<span class="line"><span style="color:#000000;">      </span><span style="color:#008000;">#   with:</span></span>
<span class="line"><span style="color:#000000;">      </span><span style="color:#008000;">#     version: 9</span></span>
<span class="line"><span style="color:#000000;">      </span><span style="color:#008000;"># - uses: oven-sh/setup-bun@v1 # 如果使用 Bun，请取消注释</span></span>
<span class="line"><span style="color:#000000;">      - </span><span style="color:#800000;">name</span><span style="color:#000000;">: </span><span style="color:#0000FF;">Setup Node</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#800000;">uses</span><span style="color:#000000;">: </span><span style="color:#0000FF;">actions/setup-node@v4</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#800000;">with</span><span style="color:#000000;">:</span></span>
<span class="line"><span style="color:#000000;">          </span><span style="color:#800000;">node-version</span><span style="color:#000000;">: </span><span style="color:#098658;">20</span></span>
<span class="line"><span style="color:#000000;">          </span><span style="color:#800000;">cache</span><span style="color:#000000;">: </span><span style="color:#0000FF;">npm</span><span style="color:#000000;"> </span><span style="color:#008000;"># 或 pnpm / yarn</span></span>
<span class="line"><span style="color:#000000;">      - </span><span style="color:#800000;">name</span><span style="color:#000000;">: </span><span style="color:#0000FF;">Setup Pages</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#800000;">uses</span><span style="color:#000000;">: </span><span style="color:#0000FF;">actions/configure-pages@v4</span></span>
<span class="line"><span style="color:#000000;">      - </span><span style="color:#800000;">name</span><span style="color:#000000;">: </span><span style="color:#0000FF;">Install dependencies</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#800000;">run</span><span style="color:#000000;">: </span><span style="color:#0000FF;">npm ci</span><span style="color:#000000;"> </span><span style="color:#008000;"># 或 pnpm install / yarn install / bun install</span></span>
<span class="line"><span style="color:#000000;">      - </span><span style="color:#800000;">name</span><span style="color:#000000;">: </span><span style="color:#0000FF;">Build with VitePress</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#800000;">run</span><span style="color:#000000;">: </span><span style="color:#0000FF;">npm run docs:build</span><span style="color:#000000;"> </span><span style="color:#008000;"># 或 pnpm docs:build / yarn docs:build / bun run docs:build</span></span>
<span class="line"><span style="color:#000000;">      - </span><span style="color:#800000;">name</span><span style="color:#000000;">: </span><span style="color:#0000FF;">Upload artifact</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#800000;">uses</span><span style="color:#000000;">: </span><span style="color:#0000FF;">actions/upload-pages-artifact@v3</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#800000;">with</span><span style="color:#000000;">:</span></span>
<span class="line"><span style="color:#000000;">          </span><span style="color:#800000;">path</span><span style="color:#000000;">: </span><span style="color:#0000FF;">docs/.vitepress/dist</span></span>
<span class="line"></span>
<span class="line"><span style="color:#000000;">  </span><span style="color:#008000;"># 部署工作</span></span>
<span class="line"><span style="color:#000000;">  </span><span style="color:#800000;">deploy</span><span style="color:#000000;">:</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#800000;">environment</span><span style="color:#000000;">:</span></span>
<span class="line"><span style="color:#000000;">      </span><span style="color:#800000;">name</span><span style="color:#000000;">: </span><span style="color:#0000FF;">github-pages</span></span>
<span class="line"><span style="color:#000000;">      </span><span style="color:#800000;">url</span><span style="color:#000000;">: </span><span style="color:#0000FF;">\${{ steps.deployment.outputs.page_url }}</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#800000;">needs</span><span style="color:#000000;">: </span><span style="color:#0000FF;">build</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#800000;">runs-on</span><span style="color:#000000;">: </span><span style="color:#0000FF;">ubuntu-latest</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#800000;">name</span><span style="color:#000000;">: </span><span style="color:#0000FF;">Deploy</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#800000;">steps</span><span style="color:#000000;">:</span></span>
<span class="line"><span style="color:#000000;">      - </span><span style="color:#800000;">name</span><span style="color:#000000;">: </span><span style="color:#0000FF;">Deploy to GitHub Pages</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#800000;">id</span><span style="color:#000000;">: </span><span style="color:#0000FF;">deployment</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#800000;">uses</span><span style="color:#000000;">: </span><span style="color:#0000FF;">actions/deploy-pages@v4</span></span></code></pre></div><ol><li>在存储库设置中的“Pages”菜单项下，选择“Build and deployment &gt; Source &gt; GitHub Actions”。</li><li>将更改推送到 <code>main</code> 分支并等待 GitHub Action 工作流完成。你应该看到站点部署到 <code>https://&lt;username&gt;.github.io/[repository]/</code> 或 <code>https://&lt;custom-domain&gt;/</code>，这取决于你的设置。你的站点将在每次推送到 <code>main</code> 分支时自动部署。</li></ol>`,13),e=[o];function c(t,r,y,E,i,d){return n(),a("div",null,e)}const h=s(l,[["render",c]]);export{F as __pageData,h as default};
