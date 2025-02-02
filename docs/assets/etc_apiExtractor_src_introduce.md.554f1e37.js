import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.a333c6fb.js";const q=JSON.parse('{"title":"api-extractor.json的配置","description":"","frontmatter":{},"headers":[],"relativePath":"etc/apiExtractor/src/introduce.md","filePath":"etc/apiExtractor/src/introduce.md","lastUpdated":1738076829000}'),p={name:"etc/apiExtractor/src/introduce.md"},o=l(`<h1 id="api-extractor-json的配置" tabindex="-1">api-extractor.json的配置 <a class="header-anchor" href="#api-extractor-json的配置" aria-label="Permalink to &quot;api-extractor.json的配置&quot;">​</a></h1><h2 id="入口和项目相关配置" tabindex="-1">入口和项目相关配置 <a class="header-anchor" href="#入口和项目相关配置" aria-label="Permalink to &quot;入口和项目相关配置&quot;">​</a></h2><ul><li><p><code>mainEntryPointFilePath</code>：</p><ul><li>这是一个必需的配置项，指定了 API Extractor 开始分析的主要入口文件的路径。例如</li></ul></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&quot;mainEntryPointFilePath&quot;: &quot;src/index.ts&quot;</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#000000;">&quot;mainEntryPointFilePath&quot;: &quot;src/index.ts&quot;</span></span></code></pre></div><p><code>projectFolder</code>：</p><ul><li>通常设置为 <code>&quot;.&quot;</code>，表示项目所在的根目录。例如：</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&quot;projectFolder&quot;: &quot;.&quot;</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#000000;">&quot;projectFolder&quot;: &quot;.&quot;</span></span></code></pre></div><h2 id="文档相关配置" tabindex="-1">文档相关配置 <a class="header-anchor" href="#文档相关配置" aria-label="Permalink to &quot;文档相关配置&quot;">​</a></h2><p><code>docModel</code>：</p><ul><li><p><code>enabled</code>：</p><ul><li>一个布尔值，当设置为 <code>true</code> 时，API Extractor 会生成文档模型。 启用此选项后，可为后续生成文档提供基础信息，方便后续将文档模型转换为各种格式的文档，如 Markdown 或 HTML。</li></ul></li></ul><p>例如：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&quot;docModel&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;enabled&quot;: true</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#000000;">&quot;docModel&quot;: {</span></span>
<span class="line"><span style="color:#000000;">    &quot;enabled&quot;: true</span></span>
<span class="line"><span style="color:#000000;">}</span></span></code></pre></div><p><code>tsdocMetadata</code>：</p><ul><li><code>enabled</code>： <ul><li>同样是一个布尔值，设置为 <code>true</code> 时，会启用 TSDoc 元数据的处理和存储。 TSDoc 是一种文档注释格式，启用该选项有助于更好地管理文档注释信息。</li></ul></li></ul><p>例如：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&quot;tsdocMetadata&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;enabled&quot;: false</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#000000;">&quot;tsdocMetadata&quot;: {</span></span>
<span class="line"><span style="color:#000000;">    &quot;enabled&quot;: false</span></span>
<span class="line"><span style="color:#000000;">}</span></span></code></pre></div><h2 id="dts-文件生成和处理配置" tabindex="-1">DTS 文件生成和处理配置 <a class="header-anchor" href="#dts-文件生成和处理配置" aria-label="Permalink to &quot;DTS 文件生成和处理配置&quot;">​</a></h2><p><code>dtsRollup</code>：</p><ul><li><p><code>enabled</code>：</p><ul><li>布尔值，设置为 <code>true</code> 时，将进行 DTS 文件的合并和整理操作。例如：</li></ul></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&quot;dtsRollup&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;enabled&quot;: true,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;untrimmedFilePath&quot;: &quot;dist/api-untrimmed.d.ts&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;trimmedFilePath&quot;: &quot;dist/api.d.ts&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#000000;">&quot;dtsRollup&quot;: {</span></span>
<span class="line"><span style="color:#000000;">    &quot;enabled&quot;: true,</span></span>
<span class="line"><span style="color:#000000;">    &quot;untrimmedFilePath&quot;: &quot;dist/api-untrimmed.d.ts&quot;,</span></span>
<span class="line"><span style="color:#000000;">    &quot;trimmedFilePath&quot;: &quot;dist/api.d.ts&quot;</span></span>
<span class="line"><span style="color:#000000;">}</span></span></code></pre></div><ul><li><p><code>untrimmedFilePath</code></p><ul><li>指定未处理的 DTS 文件的输出路径，其中包含了所有导出的 API 信息，包括可能的内部实现细节，方便调试和分析。</li></ul></li><li><p><code>trimmedFilePath</code></p><ul><li>指定处理后的 DTS 文件的输出路径，该文件仅包含公共 API，经过优化和裁剪，符合公共 API 的标准。</li></ul></li><li><p><code>publicTrimmedFilePath</code> -- 可以指定另一个路径，存储仅包含公共 API 的 DTS 文件，</p></li></ul><p>例如：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&quot;publicTrimmedFilePath&quot;: &quot;dist/public-api.d.ts&quot;</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#000000;">&quot;publicTrimmedFilePath&quot;: &quot;dist/public-api.d.ts&quot;</span></span></code></pre></div><h2 id="类型检查和-api-分析配置" tabindex="-1"><strong>类型检查和 API 分析配置</strong> <a class="header-anchor" href="#类型检查和-api-分析配置" aria-label="Permalink to &quot;**类型检查和 API 分析配置**&quot;">​</a></h2><p><code>apiReport</code>：</p><ul><li><p><code>enabled</code>：</p><ul><li>当设置为 <code>true</code> 时，会生成 API 报告，有助于检查 API 的一致性和问题。例如：</li></ul></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&quot;apiReport&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;enabled&quot;: true,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;reportFolder&quot;: &quot;reports/api&quot; //-   指定存储 API 报告的文件夹路径，方便查看和分析报告结果。</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#000000;">&quot;apiReport&quot;: {</span></span>
<span class="line"><span style="color:#000000;">    &quot;enabled&quot;: true,</span></span>
<span class="line"><span style="color:#000000;">    &quot;reportFolder&quot;: &quot;reports/api&quot; //-   指定存储 API 报告的文件夹路径，方便查看和分析报告结果。</span></span>
<span class="line"><span style="color:#000000;">}</span></span></code></pre></div><ul><li><code>validationRules</code><ul><li>可以配置各种验证规则，例如：</li></ul></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&quot;validationRules&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;missingReleaseTags&quot;: false, // 当设置为 \`false\` 时，不强制要求 API 元素具有发布标签。</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;exportedInternals&quot;: false //当设置为 \`false\` 时，不允许导出内部元素作为公共 API。</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#000000;">&quot;validationRules&quot;: {</span></span>
<span class="line"><span style="color:#000000;">    &quot;missingReleaseTags&quot;: false, // 当设置为 \`false\` 时，不强制要求 API 元素具有发布标签。</span></span>
<span class="line"><span style="color:#000000;">    &quot;exportedInternals&quot;: false //当设置为 \`false\` 时，不允许导出内部元素作为公共 API。</span></span>
<span class="line"><span style="color:#000000;">}</span></span></code></pre></div><h2 id="编译器选项配置" tabindex="-1"><strong>编译器选项配置</strong> <a class="header-anchor" href="#编译器选项配置" aria-label="Permalink to &quot;**编译器选项配置**&quot;">​</a></h2><ul><li><p><code>compilerOptions</code>：</p><ul><li>可以设置类似于 <code>tsconfig.json</code> 中的编译器选项，例如：</li></ul></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&quot;compilerOptions&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;baseUrl&quot;: &quot;.&quot;,//定义模块解析的基础 URL，帮助 API Extractor 正确解析模块引用</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;paths&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">        &quot;my-library/*&quot;: [&quot;src/my-library/*&quot;] //-   自定义模块解析路径，方便处理项目中自定义的模块别名。</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#000000;">&quot;compilerOptions&quot;: {</span></span>
<span class="line"><span style="color:#000000;">    &quot;baseUrl&quot;: &quot;.&quot;,//定义模块解析的基础 URL，帮助 API Extractor 正确解析模块引用</span></span>
<span class="line"><span style="color:#000000;">    &quot;paths&quot;: {</span></span>
<span class="line"><span style="color:#000000;">        &quot;my-library/*&quot;: [&quot;src/my-library/*&quot;] //-   自定义模块解析路径，方便处理项目中自定义的模块别名。</span></span>
<span class="line"><span style="color:#000000;">    }</span></span>
<span class="line"><span style="color:#000000;">}</span></span></code></pre></div><h2 id="打包和外部引用配置" tabindex="-1"><strong>打包和外部引用配置</strong> <a class="header-anchor" href="#打包和外部引用配置" aria-label="Permalink to &quot;**打包和外部引用配置**&quot;">​</a></h2><ul><li><p><code>bundledPackages</code>：</p><ul><li>可以指定需要打包在一起的包，例如</li></ul></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&quot;bundledPackages&quot;: [&quot;my-library-package&quot;] //当处理多个包时，可将某些包作为一个整体进行处理。</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#000000;">&quot;bundledPackages&quot;: [&quot;my-library-package&quot;] //当处理多个包时，可将某些包作为一个整体进行处理。</span></span></code></pre></div><ul><li><p><code>externalJsonFile</code>：</p><ul><li>可指定一个外部 JSON 文件，其中包含外部引用的信息，例如：</li></ul></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&quot;externalJsonFile&quot;: &quot;config/external.json&quot; //有助于处理项目中的外部依赖和引用，确保 API 提取时的准确性。</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#000000;">&quot;externalJsonFile&quot;: &quot;config/external.json&quot; //有助于处理项目中的外部依赖和引用，确保 API 提取时的准确性。</span></span></code></pre></div><p>-<code>unresolvedTypes</code>：</p><pre><code>-   可以定义如何处理未解析的类型，例如：
</code></pre><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&quot;unresolvedTypes&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">   &quot;ignore&quot;: [&quot;SomeUnresolvedType&quot;] //允许开发者指定哪些未解析的类型可以被忽略，避免分析过程中的错误或警告。</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#000000;">&quot;unresolvedTypes&quot;: {</span></span>
<span class="line"><span style="color:#000000;">   &quot;ignore&quot;: [&quot;SomeUnresolvedType&quot;] //允许开发者指定哪些未解析的类型可以被忽略，避免分析过程中的错误或警告。</span></span>
<span class="line"><span style="color:#000000;">}</span></span></code></pre></div><h2 id="其它配置" tabindex="-1">其它配置 <a class="header-anchor" href="#其它配置" aria-label="Permalink to &quot;其它配置&quot;">​</a></h2><ul><li><p><code>toolVersion</code>：</p><ul><li>可以指定 API Extractor 工具的版本，确保使用特定版本的工具进行分析。例如：</li></ul></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&quot;toolVersion&quot;: &quot;1.0.0&quot;</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#000000;">&quot;toolVersion&quot;: &quot;1.0.0&quot;</span></span></code></pre></div><ul><li>extensions <ul><li>可以添加自定义的扩展配置，以扩展 API Extractor 的功能，例如：</li></ul></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&quot;extensions&quot;: [</span></span>
<span class="line"><span style="color:#e1e4e8;">    {</span></span>
<span class="line"><span style="color:#e1e4e8;">        &quot;name&quot;: &quot;my-extension&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">        &quot;parameters&quot;: {}</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">]</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#000000;">&quot;extensions&quot;: [</span></span>
<span class="line"><span style="color:#000000;">    {</span></span>
<span class="line"><span style="color:#000000;">        &quot;name&quot;: &quot;my-extension&quot;,</span></span>
<span class="line"><span style="color:#000000;">        &quot;parameters&quot;: {}</span></span>
<span class="line"><span style="color:#000000;">    }</span></span>
<span class="line"><span style="color:#000000;">]</span></span></code></pre></div><ul><li><p><code>apiJsonFilePath</code>：</p><ul><li>指定生成 API 信息的 JSON 文件的存储路径，例如：</li></ul></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&quot;apiJsonFilePath&quot;: &quot;reports/api/api.json&quot;</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#000000;">&quot;apiJsonFilePath&quot;: &quot;reports/api/api.json&quot;</span></span></code></pre></div><ul><li><p><code>apiVersion</code>：</p><ul><li>可以设置 API 的版本信息，例如：</li></ul></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&quot;apiVersion&quot;: &quot;1.0.0&quot; //方便进行版本管理和发布流程中的 API 对比。</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#000000;">&quot;apiVersion&quot;: &quot;1.0.0&quot; //方便进行版本管理和发布流程中的 API 对比。</span></span></code></pre></div><h1 id="常用api-extractor配置" tabindex="-1">常用api-extractor配置 <a class="header-anchor" href="#常用api-extractor配置" aria-label="Permalink to &quot;常用api-extractor配置&quot;">​</a></h1><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 指定配置文件的 JSON 模式，有助于编辑器进行语法检查和智能提示</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;$schema&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;https://developer.microsoft.com/json-schemas/api-extractor/v7/api-extractor.schema.json&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 主入口点的 TypeScript 声明文件路径，通常是编译后的 .d.ts 文件</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// api-extractor 将从此文件开始分析整个项目的 API</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;mainEntryPointFilePath&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;./dist/index.d.ts&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 项目根文件夹的路径，默认为配置文件所在的文件夹</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 该配置用于解析相对路径</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;projectFolder&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;./&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 是否跳过 TypeScript 的库检查，设置为 true 可加快编译速度，但可能会忽略一些类型错误</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;skipLibCheck&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 是否启用循环引用检测</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 循环引用可能会导致文档生成和 API 分析出现问题，建议保持开启</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;enableCircularReferenceDetection&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// API 报告文件的输出文件夹路径</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;reportFolder&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;./etc&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// API 报告文件的名称，该文件记录了 API 的变化</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;reportFileName&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;MyLibrary.api.md&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// API 报告相关配置</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;apiReport&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 是否启用 API 报告功能</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 启用后会生成一个记录 API 变化的报告文件</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;enabled&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 文档模型相关配置</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;docModel&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 是否启用文档模型生成</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 启用后会生成一个中间文档模型，供 api-documenter 等工具使用</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;enabled&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// TSDoc 元数据相关配置</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;tsdocMetadata&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 是否启用 TSDoc 元数据生成</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 启用后会生成 TSDoc 元数据文件，用于跨项目的文档链接等功能</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;enabled&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// DTS 汇总文件相关配置</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;dtsRollup&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 是否启用 DTS 汇总文件生成</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 汇总文件将项目中的多个 .d.ts 文件合并为一个</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;enabled&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 未修剪的 DTS 汇总文件路径，包含所有 API 信息</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;untrimmedFilePath&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;./dist/my-library.d.ts&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 包含 beta 版本 API 的修剪后 DTS 汇总文件路径</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;betaTrimmedFilePath&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;./dist/my-library.beta.d.ts&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 仅包含公共 API 的修剪后 DTS 汇总文件路径</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;publicTrimmedFilePath&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;./dist/my-library.public.d.ts&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 消息报告相关配置</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;messages&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// api-extractor 消息报告配置</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;extractorMessageReporting&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 默认消息的日志级别，可设置为 &quot;verbose&quot;、&quot;info&quot;、&quot;warning&quot;、&quot;error&quot; 或 &quot;none&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;default&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">&quot;logLevel&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;warning&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 针对特定错误代码 &quot;ae-missing-release-tag&quot; 的日志级别设置</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 这里将缺少发布标签的错误设置为错误级别，会中断构建过程</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;ae-missing-release-tag&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">&quot;logLevel&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;error&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// TSDoc 消息报告配置</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;tsdocMessageReporting&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 默认 TSDoc 消息的日志级别</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;default&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">&quot;logLevel&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;warning&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 是否启用测试模式，测试模式下输出会有所不同，主要用于开发和调试</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;testMode&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 是否跳过错误检查，设置为 true 会忽略一些 API 提取过程中的错误</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;skipErrorChecking&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// TypeScript 编译器文件夹的路径</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 如果需要使用特定版本的 TypeScript 编译器，可以指定该路径</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;typescriptCompilerFolder&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 编译器相关配置</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;compiler&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 覆盖 TypeScript 编译器的配置</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 这里可以设置一些额外的 TypeScript 编译选项</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;overrideTsconfig&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;compilerOptions&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">// 启用严格的空值检查</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">&quot;strictNullChecks&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// TSDoc 元数据文件的输出路径</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;tsdocMetadataFilePath&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;./temp/tsdoc-metadata.json&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 换行符类型，可设置为 &quot;os&quot;（使用操作系统默认换行符）、&quot;crlf&quot; 或 &quot;lf&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;newlineKind&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;os&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 本地化相关配置</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;localization&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 输出文件夹路径，用于存放本地化后的文档文件</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;outputFolder&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;./docs/localized&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#000000;">{</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#008000;">// 指定配置文件的 JSON 模式，有助于编辑器进行语法检查和智能提示</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#0451A5;">&quot;$schema&quot;</span><span style="color:#000000;">: </span><span style="color:#A31515;">&quot;https://developer.microsoft.com/json-schemas/api-extractor/v7/api-extractor.schema.json&quot;</span><span style="color:#000000;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#008000;">// 主入口点的 TypeScript 声明文件路径，通常是编译后的 .d.ts 文件</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#008000;">// api-extractor 将从此文件开始分析整个项目的 API</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#0451A5;">&quot;mainEntryPointFilePath&quot;</span><span style="color:#000000;">: </span><span style="color:#A31515;">&quot;./dist/index.d.ts&quot;</span><span style="color:#000000;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#008000;">// 项目根文件夹的路径，默认为配置文件所在的文件夹</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#008000;">// 该配置用于解析相对路径</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#0451A5;">&quot;projectFolder&quot;</span><span style="color:#000000;">: </span><span style="color:#A31515;">&quot;./&quot;</span><span style="color:#000000;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#008000;">// 是否跳过 TypeScript 的库检查，设置为 true 可加快编译速度，但可能会忽略一些类型错误</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#0451A5;">&quot;skipLibCheck&quot;</span><span style="color:#000000;">: </span><span style="color:#0000FF;">false</span><span style="color:#000000;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#008000;">// 是否启用循环引用检测</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#008000;">// 循环引用可能会导致文档生成和 API 分析出现问题，建议保持开启</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#0451A5;">&quot;enableCircularReferenceDetection&quot;</span><span style="color:#000000;">: </span><span style="color:#0000FF;">true</span><span style="color:#000000;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#008000;">// API 报告文件的输出文件夹路径</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#0451A5;">&quot;reportFolder&quot;</span><span style="color:#000000;">: </span><span style="color:#A31515;">&quot;./etc&quot;</span><span style="color:#000000;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#008000;">// API 报告文件的名称，该文件记录了 API 的变化</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#0451A5;">&quot;reportFileName&quot;</span><span style="color:#000000;">: </span><span style="color:#A31515;">&quot;MyLibrary.api.md&quot;</span><span style="color:#000000;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#008000;">// API 报告相关配置</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#0451A5;">&quot;apiReport&quot;</span><span style="color:#000000;">: {</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#008000;">// 是否启用 API 报告功能</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#008000;">// 启用后会生成一个记录 API 变化的报告文件</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#0451A5;">&quot;enabled&quot;</span><span style="color:#000000;">: </span><span style="color:#0000FF;">false</span></span>
<span class="line"><span style="color:#000000;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#008000;">// 文档模型相关配置</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#0451A5;">&quot;docModel&quot;</span><span style="color:#000000;">: {</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#008000;">// 是否启用文档模型生成</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#008000;">// 启用后会生成一个中间文档模型，供 api-documenter 等工具使用</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#0451A5;">&quot;enabled&quot;</span><span style="color:#000000;">: </span><span style="color:#0000FF;">true</span></span>
<span class="line"><span style="color:#000000;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#008000;">// TSDoc 元数据相关配置</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#0451A5;">&quot;tsdocMetadata&quot;</span><span style="color:#000000;">: {</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#008000;">// 是否启用 TSDoc 元数据生成</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#008000;">// 启用后会生成 TSDoc 元数据文件，用于跨项目的文档链接等功能</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#0451A5;">&quot;enabled&quot;</span><span style="color:#000000;">: </span><span style="color:#0000FF;">true</span></span>
<span class="line"><span style="color:#000000;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#008000;">// DTS 汇总文件相关配置</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#0451A5;">&quot;dtsRollup&quot;</span><span style="color:#000000;">: {</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#008000;">// 是否启用 DTS 汇总文件生成</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#008000;">// 汇总文件将项目中的多个 .d.ts 文件合并为一个</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#0451A5;">&quot;enabled&quot;</span><span style="color:#000000;">: </span><span style="color:#0000FF;">true</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#008000;">// 未修剪的 DTS 汇总文件路径，包含所有 API 信息</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#0451A5;">&quot;untrimmedFilePath&quot;</span><span style="color:#000000;">: </span><span style="color:#A31515;">&quot;./dist/my-library.d.ts&quot;</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#008000;">// 包含 beta 版本 API 的修剪后 DTS 汇总文件路径</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#0451A5;">&quot;betaTrimmedFilePath&quot;</span><span style="color:#000000;">: </span><span style="color:#A31515;">&quot;./dist/my-library.beta.d.ts&quot;</span><span style="color:#000000;">,</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#008000;">// 仅包含公共 API 的修剪后 DTS 汇总文件路径</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#0451A5;">&quot;publicTrimmedFilePath&quot;</span><span style="color:#000000;">: </span><span style="color:#A31515;">&quot;./dist/my-library.public.d.ts&quot;</span></span>
<span class="line"><span style="color:#000000;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#008000;">// 消息报告相关配置</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#0451A5;">&quot;messages&quot;</span><span style="color:#000000;">: {</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#008000;">// api-extractor 消息报告配置</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#0451A5;">&quot;extractorMessageReporting&quot;</span><span style="color:#000000;">: {</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#008000;">// 默认消息的日志级别，可设置为 &quot;verbose&quot;、&quot;info&quot;、&quot;warning&quot;、&quot;error&quot; 或 &quot;none&quot;</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#0451A5;">&quot;default&quot;</span><span style="color:#000000;">: {</span></span>
<span class="line"><span style="color:#000000;">                </span><span style="color:#0451A5;">&quot;logLevel&quot;</span><span style="color:#000000;">: </span><span style="color:#A31515;">&quot;warning&quot;</span></span>
<span class="line"><span style="color:#000000;">            },</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#008000;">// 针对特定错误代码 &quot;ae-missing-release-tag&quot; 的日志级别设置</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#008000;">// 这里将缺少发布标签的错误设置为错误级别，会中断构建过程</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#0451A5;">&quot;ae-missing-release-tag&quot;</span><span style="color:#000000;">: {</span></span>
<span class="line"><span style="color:#000000;">                </span><span style="color:#0451A5;">&quot;logLevel&quot;</span><span style="color:#000000;">: </span><span style="color:#A31515;">&quot;error&quot;</span></span>
<span class="line"><span style="color:#000000;">            }</span></span>
<span class="line"><span style="color:#000000;">        },</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#008000;">// TSDoc 消息报告配置</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#0451A5;">&quot;tsdocMessageReporting&quot;</span><span style="color:#000000;">: {</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#008000;">// 默认 TSDoc 消息的日志级别</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#0451A5;">&quot;default&quot;</span><span style="color:#000000;">: {</span></span>
<span class="line"><span style="color:#000000;">                </span><span style="color:#0451A5;">&quot;logLevel&quot;</span><span style="color:#000000;">: </span><span style="color:#A31515;">&quot;warning&quot;</span></span>
<span class="line"><span style="color:#000000;">            }</span></span>
<span class="line"><span style="color:#000000;">        }</span></span>
<span class="line"><span style="color:#000000;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#008000;">// 是否启用测试模式，测试模式下输出会有所不同，主要用于开发和调试</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#0451A5;">&quot;testMode&quot;</span><span style="color:#000000;">: </span><span style="color:#0000FF;">false</span><span style="color:#000000;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#008000;">// 是否跳过错误检查，设置为 true 会忽略一些 API 提取过程中的错误</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#0451A5;">&quot;skipErrorChecking&quot;</span><span style="color:#000000;">: </span><span style="color:#0000FF;">false</span><span style="color:#000000;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#008000;">// TypeScript 编译器文件夹的路径</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#008000;">// 如果需要使用特定版本的 TypeScript 编译器，可以指定该路径</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#0451A5;">&quot;typescriptCompilerFolder&quot;</span><span style="color:#000000;">: </span><span style="color:#A31515;">&quot;&quot;</span><span style="color:#000000;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#008000;">// 编译器相关配置</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#0451A5;">&quot;compiler&quot;</span><span style="color:#000000;">: {</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#008000;">// 覆盖 TypeScript 编译器的配置</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#008000;">// 这里可以设置一些额外的 TypeScript 编译选项</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#0451A5;">&quot;overrideTsconfig&quot;</span><span style="color:#000000;">: {</span></span>
<span class="line"><span style="color:#000000;">            </span><span style="color:#0451A5;">&quot;compilerOptions&quot;</span><span style="color:#000000;">: {</span></span>
<span class="line"><span style="color:#000000;">                </span><span style="color:#008000;">// 启用严格的空值检查</span></span>
<span class="line"><span style="color:#000000;">                </span><span style="color:#0451A5;">&quot;strictNullChecks&quot;</span><span style="color:#000000;">: </span><span style="color:#0000FF;">true</span></span>
<span class="line"><span style="color:#000000;">            }</span></span>
<span class="line"><span style="color:#000000;">        }</span></span>
<span class="line"><span style="color:#000000;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#008000;">// TSDoc 元数据文件的输出路径</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#0451A5;">&quot;tsdocMetadataFilePath&quot;</span><span style="color:#000000;">: </span><span style="color:#A31515;">&quot;./temp/tsdoc-metadata.json&quot;</span><span style="color:#000000;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#008000;">// 换行符类型，可设置为 &quot;os&quot;（使用操作系统默认换行符）、&quot;crlf&quot; 或 &quot;lf&quot;</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#0451A5;">&quot;newlineKind&quot;</span><span style="color:#000000;">: </span><span style="color:#A31515;">&quot;os&quot;</span><span style="color:#000000;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#008000;">// 本地化相关配置</span></span>
<span class="line"><span style="color:#000000;">    </span><span style="color:#0451A5;">&quot;localization&quot;</span><span style="color:#000000;">: {</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#008000;">// 输出文件夹路径，用于存放本地化后的文档文件</span></span>
<span class="line"><span style="color:#000000;">        </span><span style="color:#0451A5;">&quot;outputFolder&quot;</span><span style="color:#000000;">: </span><span style="color:#A31515;">&quot;./docs/localized&quot;</span></span>
<span class="line"><span style="color:#000000;">    }</span></span>
<span class="line"><span style="color:#000000;">}</span></span></code></pre></div>`,51),e=[o];function t(c,r,i,y,u,E){return a(),n("div",null,e)}const h=s(p,[["render",t]]);export{q as __pageData,h as default};
