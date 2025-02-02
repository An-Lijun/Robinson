import{_ as a,o as e,c as p,Q as s}from"./chunks/framework.a333c6fb.js";const k=JSON.parse('{"title":"快速上手","description":"","frontmatter":{},"headers":[],"relativePath":"etc/apiExtractor/src/quick.md","filePath":"etc/apiExtractor/src/quick.md","lastUpdated":1738076829000}'),t={name:"etc/apiExtractor/src/quick.md"},i=s('<h1 id="快速上手" tabindex="-1">快速上手 <a class="header-anchor" href="#快速上手" aria-label="Permalink to &quot;快速上手&quot;">​</a></h1><p>注意这里默认已经配置好一个ts项目，这里我会使用tsc用于测试</p><ol><li>安装依赖</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">npm install  @microsoft/api-extractor -D</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#000000;">npm install  @microsoft/api-extractor -D</span></span></code></pre></div><ol start="2"><li>创建模板配置文件 以下命令将创建一个模板文件，其中显示所有设置及其默认值：<code>api-extractor.json</code></li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"> npx api-extractor init</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#000000;"> npx api-extractor init</span></span></code></pre></div><p>然后会多一个api-extractor.json, 这里由于给的json携带注释所以报错了。</p><p>如果觉得红色影响阅读 可以在vscode上方搜索 json with Comments,找到检索项后点击红色就消失了</p><p><img src="https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/088314a4f4fa40378fb9c96585989335~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5a6J5Yip5ZCbX0FuTGlqdW4=:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMjUwMjk2MDY4NjA0MDI4NiJ9&amp;rk3s=f64ab15b&amp;x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&amp;x-orig-expires=1738676231&amp;x-orig-sign=FtieBfgMmLIxMZqATPG3XEKxSjM%3D" alt="image.png"></p><p>这里需要将 mainEntryPointFilePath 改为自己的入口dts</p><p><img src="https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/a9389513480a41539b99d6da0667a7d8~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5a6J5Yip5ZCbX0FuTGlqdW4=:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMjUwMjk2MDY4NjA0MDI4NiJ9&amp;rk3s=f64ab15b&amp;x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&amp;x-orig-expires=1738676231&amp;x-orig-sign=KKF3TorHxHUkVm8dQH%2FSHD5%2Ffkc%3D" alt="image.png"></p><p>将 tsconfigFilePath 设置为tsconfig.json</p><p><img src="https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/d33be8841b764b2999b190ee9b40c244~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5a6J5Yip5ZCbX0FuTGlqdW4=:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMjUwMjk2MDY4NjA0MDI4NiJ9&amp;rk3s=f64ab15b&amp;x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&amp;x-orig-expires=1738676231&amp;x-orig-sign=cemuKI96XgifW2wWg%2BIDwCI0uLU%3D" alt="image.png"></p><p>创建一个ect文件夹 3. 执行打包命令</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">   npx api-extractor run --local --verbose</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#000000;">   npx api-extractor run --local --verbose</span></span></code></pre></div><p>这样就可以使用这个生成的json文件去生成api文档了，这篇不会教学怎么使用这个json生成md文件</p><p><img src="https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/9c075ad4d0264da192acbfa19c9a5fd2~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5a6J5Yip5ZCbX0FuTGlqdW4=:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMjUwMjk2MDY4NjA0MDI4NiJ9&amp;rk3s=f64ab15b&amp;x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&amp;x-orig-expires=1738676231&amp;x-orig-sign=tfU%2BqHkqnnFJiptUxs9HzEKy2jA%3D" alt="image.png"></p>',17),o=[i];function c(n,r,l,d,m,j){return e(),p("div",null,o)}const b=a(t,[["render",c]]);export{k as __pageData,b as default};
