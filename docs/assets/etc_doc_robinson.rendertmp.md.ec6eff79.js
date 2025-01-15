import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.a7175731.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"etc/doc/robinson.rendertmp.md","filePath":"etc/doc/robinson.rendertmp.md"}'),p={name:"etc/doc/robinson.rendertmp.md"},o=l(`<p><a href="./">Home</a> &gt; <a href="./robinson.html">robinson</a> &gt; <a href="./robinson.rendertmp.html">renderTmp</a></p><h2 id="rendertmp-function" tabindex="-1">renderTmp() function <a class="header-anchor" href="#rendertmp-function" aria-label="Permalink to &quot;renderTmp() function&quot;">​</a></h2><p>该函数获取元素的InnerHtml字符串模板,填写好内容并返回</p><p><strong>Signature:</strong></p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">declare</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">renderTmp</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">selecter</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">data</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">any</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#0000FF;">declare</span><span style="color:#000000;"> </span><span style="color:#0000FF;">function</span><span style="color:#000000;"> </span><span style="color:#795E26;">renderTmp</span><span style="color:#000000;">(</span><span style="color:#001080;">selecter</span><span style="color:#000000;">: </span><span style="color:#267F99;">string</span><span style="color:#000000;">, </span><span style="color:#001080;">data</span><span style="color:#000000;">: </span><span style="color:#267F99;">any</span><span style="color:#000000;">): </span><span style="color:#267F99;">string</span><span style="color:#000000;">;</span></span></code></pre></div><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>selecter</td><td>string</td><td>css 选择器</td></tr><tr><td>data</td><td>any</td><td><code>dom</code> 模板需要的数据</td></tr></tbody></table><p><strong>Returns:</strong></p><p>string</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-JavaScript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">JavaScript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">html</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;user-box&#39;</span><span style="color:#E1E4E8;">&gt; &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;text/html&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;tpl-user&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">          &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;姓名:{{name}}&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">          &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;年龄:{{  age  }}&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">          &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;性别:{{  gender}}&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">          &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;住址:{{address  }}&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">JavaScript</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> data </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">{name:</span><span style="color:#9ECBFF;">&quot;张三&quot;</span><span style="color:#E1E4E8;">,age:</span><span style="color:#79B8FF;">28</span><span style="color:#E1E4E8;">,gender:</span><span style="color:#9ECBFF;">&quot;男&quot;</span><span style="color:#E1E4E8;">,address:</span><span style="color:#9ECBFF;">&quot;北京顺路&quot;</span><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">//调用模板引擎</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> htmlStr</span><span style="color:#F97583;">=</span><span style="color:#B392F0;">renderTmp</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;tpl-user&#39;</span><span style="color:#E1E4E8;">,data)</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">//操作dom渲染html结构</span></span>
<span class="line"><span style="color:#E1E4E8;">      document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;user-box&#39;</span><span style="color:#E1E4E8;">).innerHTML</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">htmlStr</span></span>
<span class="line"><span style="color:#E1E4E8;">      resule</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;user-box&#39;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">          &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;姓名:{{ 张三 }}&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">          &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;年龄:{{ </span><span style="color:#79B8FF;">28</span><span style="color:#E1E4E8;"> }}&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">          &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;性别:{{ 男 }}&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">          &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;住址:{{ 北京顺路 }}&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#000000;">      html:</span></span>
<span class="line"><span style="color:#000000;">      </span><span style="color:#800000;">&lt;div</span><span style="color:#000000;"> </span><span style="color:#E50000;">id</span><span style="color:#000000;">=</span><span style="color:#A31515;">&#39;user-box&#39;</span><span style="color:#800000;">&gt;</span><span style="color:#000000;"> </span><span style="color:#800000;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#000000;">      </span><span style="color:#800000;">&lt;script</span><span style="color:#000000;"> </span><span style="color:#E50000;">type</span><span style="color:#000000;">=</span><span style="color:#A31515;">&quot;text/html&quot;</span><span style="color:#000000;"> </span><span style="color:#E50000;">id</span><span style="color:#000000;">=</span><span style="color:#A31515;">&quot;tpl-user&quot;</span><span style="color:#800000;">&gt;</span></span>
<span class="line"><span style="color:#000000;">          </span><span style="color:#800000;">&lt;div&gt;</span><span style="color:#000000;">姓名:</span><span style="color:#0000FF;">{</span><span style="color:#000000FF;">{</span><span style="color:#001080;">name</span><span style="color:#000000FF;">}</span><span style="color:#0000FF;">}</span><span style="color:#800000;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#000000;">          </span><span style="color:#800000;">&lt;div&gt;</span><span style="color:#000000;">年龄:</span><span style="color:#0000FF;">{</span><span style="color:#000000FF;">{  </span><span style="color:#001080;">age</span><span style="color:#000000FF;">  }</span><span style="color:#0000FF;">}</span><span style="color:#800000;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#000000;">          </span><span style="color:#800000;">&lt;div&gt;</span><span style="color:#000000;">性别:</span><span style="color:#0000FF;">{</span><span style="color:#000000FF;">{  </span><span style="color:#001080;">gender</span><span style="color:#000000FF;">}</span><span style="color:#0000FF;">}</span><span style="color:#800000;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#000000;">          </span><span style="color:#800000;">&lt;div&gt;</span><span style="color:#000000;">住址:</span><span style="color:#0000FF;">{</span><span style="color:#000000FF;">{</span><span style="color:#001080;">address</span><span style="color:#000000FF;">  }</span><span style="color:#0000FF;">}</span><span style="color:#800000;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#000000;">      </span><span style="color:#800000;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#000000;">      JavaScript:</span></span>
<span class="line"><span style="color:#000000;">      </span><span style="color:#0000FF;">let</span><span style="color:#000000;"> </span><span style="color:#001080;">data</span><span style="color:#000000;"> ={</span><span style="color:#001080;">name:</span><span style="color:#A31515;">&quot;张三&quot;</span><span style="color:#000000;">,</span><span style="color:#001080;">age:</span><span style="color:#098658;">28</span><span style="color:#000000;">,</span><span style="color:#001080;">gender:</span><span style="color:#A31515;">&quot;男&quot;</span><span style="color:#000000;">,</span><span style="color:#001080;">address:</span><span style="color:#A31515;">&quot;北京顺路&quot;</span><span style="color:#000000;">}</span></span>
<span class="line"><span style="color:#000000;">      </span><span style="color:#008000;">//调用模板引擎</span></span>
<span class="line"><span style="color:#000000;">      </span><span style="color:#0000FF;">let</span><span style="color:#000000;"> </span><span style="color:#001080;">htmlStr</span><span style="color:#000000;">=</span><span style="color:#795E26;">renderTmp</span><span style="color:#000000;">(</span><span style="color:#A31515;">&#39;tpl-user&#39;</span><span style="color:#000000;">,</span><span style="color:#001080;">data</span><span style="color:#000000;">)</span></span>
<span class="line"><span style="color:#000000;">      </span><span style="color:#008000;">//操作dom渲染html结构</span></span>
<span class="line"><span style="color:#000000;">      </span><span style="color:#001080;">document</span><span style="color:#000000;">.</span><span style="color:#795E26;">getElementById</span><span style="color:#000000;">(</span><span style="color:#A31515;">&#39;user-box&#39;</span><span style="color:#000000;">).</span><span style="color:#001080;">innerHTML</span><span style="color:#000000;">=</span><span style="color:#001080;">htmlStr</span></span>
<span class="line"><span style="color:#000000;">      </span><span style="color:#001080;">resule</span></span>
<span class="line"><span style="color:#000000;">      </span><span style="color:#800000;">&lt;div</span><span style="color:#000000;"> </span><span style="color:#E50000;">id</span><span style="color:#000000;">=</span><span style="color:#A31515;">&#39;user-box&#39;</span><span style="color:#800000;">&gt;</span></span>
<span class="line"><span style="color:#000000;">          </span><span style="color:#800000;">&lt;div&gt;</span><span style="color:#000000;">姓名:</span><span style="color:#0000FF;">{</span><span style="color:#000000FF;">{ </span><span style="color:#001080;">张三</span><span style="color:#000000FF;"> }</span><span style="color:#0000FF;">}</span><span style="color:#800000;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#000000;">          </span><span style="color:#800000;">&lt;div&gt;</span><span style="color:#000000;">年龄:</span><span style="color:#0000FF;">{</span><span style="color:#000000FF;">{ </span><span style="color:#098658;">28</span><span style="color:#000000FF;"> }</span><span style="color:#0000FF;">}</span><span style="color:#800000;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#000000;">          </span><span style="color:#800000;">&lt;div&gt;</span><span style="color:#000000;">性别:</span><span style="color:#0000FF;">{</span><span style="color:#000000FF;">{ </span><span style="color:#001080;">男</span><span style="color:#000000FF;"> }</span><span style="color:#0000FF;">}</span><span style="color:#800000;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#000000;">          </span><span style="color:#800000;">&lt;div&gt;</span><span style="color:#000000;">住址:</span><span style="color:#0000FF;">{</span><span style="color:#000000FF;">{ </span><span style="color:#001080;">北京顺路</span><span style="color:#000000FF;"> }</span><span style="color:#0000FF;">}</span><span style="color:#800000;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#000000;">      </span><span style="color:#800000;">&lt;/div&gt;</span></span></code></pre></div>`,11),t=[o];function e(r,c,y,E,i,d){return n(),a("div",null,t)}const u=s(p,[["render",e]]);export{g as __pageData,u as default};
