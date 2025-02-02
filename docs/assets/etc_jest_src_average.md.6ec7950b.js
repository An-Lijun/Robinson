import{_ as s,o as e,c as a,Q as n}from"./chunks/framework.a333c6fb.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"etc/jest/src/average.md","filePath":"etc/jest/src/average.md","lastUpdated":1738049586000}'),l={name:"etc/jest/src/average.md"},p=n(`<h2 id="五、断言与匹配器" tabindex="-1">五、断言与匹配器 <a class="header-anchor" href="#五、断言与匹配器" aria-label="Permalink to &quot;五、断言与匹配器&quot;">​</a></h2><h3 id="_5-1-常用断言方法" tabindex="-1">5.1 常用断言方法 <a class="header-anchor" href="#_5-1-常用断言方法" aria-label="Permalink to &quot;5.1 常用断言方法&quot;">​</a></h3><ul><li><strong>toBe</strong>：判断两个值是否严格相等（使用===）。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">test(&#39;two plus two is four&#39;, () =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">    expect(2 + 2).toBe(4);</span></span>
<span class="line"><span style="color:#e1e4e8;">});</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#000000;">test(&#39;two plus two is four&#39;, () =&gt; {</span></span>
<span class="line"><span style="color:#000000;">    expect(2 + 2).toBe(4);</span></span>
<span class="line"><span style="color:#000000;">});</span></span></code></pre></div><ul><li><strong>toEqual</strong>：用于比较对象或数组的内容是否相等。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">test(&#39;objects are equal&#39;, () =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">    const obj1 = { a: 1 };</span></span>
<span class="line"><span style="color:#e1e4e8;">    const obj2 = { a: 1 };</span></span>
<span class="line"><span style="color:#e1e4e8;">    expect(obj1).toEqual(obj2);</span></span>
<span class="line"><span style="color:#e1e4e8;">});</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#000000;">test(&#39;objects are equal&#39;, () =&gt; {</span></span>
<span class="line"><span style="color:#000000;">    const obj1 = { a: 1 };</span></span>
<span class="line"><span style="color:#000000;">    const obj2 = { a: 1 };</span></span>
<span class="line"><span style="color:#000000;">    expect(obj1).toEqual(obj2);</span></span>
<span class="line"><span style="color:#000000;">});</span></span></code></pre></div><ul><li><strong>toBeTruthy</strong>：判断值是否为真。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">test(&#39;true is truthy&#39;, () =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">    expect(true).toBeTruthy();</span></span>
<span class="line"><span style="color:#e1e4e8;">});</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#000000;">test(&#39;true is truthy&#39;, () =&gt; {</span></span>
<span class="line"><span style="color:#000000;">    expect(true).toBeTruthy();</span></span>
<span class="line"><span style="color:#000000;">});</span></span></code></pre></div><ul><li><strong>toBeFalsy</strong>：判断值是否为假。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">test(&#39;false is falsy&#39;, () =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">    expect(false).toBeFalsy();</span></span>
<span class="line"><span style="color:#e1e4e8;">});</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#000000;">test(&#39;false is falsy&#39;, () =&gt; {</span></span>
<span class="line"><span style="color:#000000;">    expect(false).toBeFalsy();</span></span>
<span class="line"><span style="color:#000000;">});</span></span></code></pre></div><ul><li><strong>toBeGreaterThan</strong>：判断值是否大于某个值。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">test(&#39;5 is greater than 3&#39;, () =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">    expect(5).toBeGreaterThan(3);</span></span>
<span class="line"><span style="color:#e1e4e8;">});</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#000000;">test(&#39;5 is greater than 3&#39;, () =&gt; {</span></span>
<span class="line"><span style="color:#000000;">    expect(5).toBeGreaterThan(3);</span></span>
<span class="line"><span style="color:#000000;">});</span></span></code></pre></div><ul><li><strong>toBeLessThan</strong>：判断值是否小于某个值。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">test(&#39;3 is less than 5&#39;, () =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">    expect(3).toBeLessThan(5);</span></span>
<span class="line"><span style="color:#e1e4e8;">});</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#000000;">test(&#39;3 is less than 5&#39;, () =&gt; {</span></span>
<span class="line"><span style="color:#000000;">    expect(3).toBeLessThan(5);</span></span>
<span class="line"><span style="color:#000000;">});</span></span></code></pre></div><h3 id="_5-2-高级断言技巧" tabindex="-1">5.2 高级断言技巧 <a class="header-anchor" href="#_5-2-高级断言技巧" aria-label="Permalink to &quot;5.2 高级断言技巧&quot;">​</a></h3><ul><li><strong>嵌套断言</strong>：可以在一个断言中嵌套多个断言，以更细粒度地验证复杂数据结构。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">test(&#39;nested objects are equal&#39;, () =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">    const obj1 = { a: { b: 1 } };</span></span>
<span class="line"><span style="color:#e1e4e8;">    const obj2 = { a: { b: 1 } };</span></span>
<span class="line"><span style="color:#e1e4e8;">    expect(obj1).toEqual({</span></span>
<span class="line"><span style="color:#e1e4e8;">        a: expect.objectContaining({</span></span>
<span class="line"><span style="color:#e1e4e8;">            b: expect.any(Number)</span></span>
<span class="line"><span style="color:#e1e4e8;">        })</span></span>
<span class="line"><span style="color:#e1e4e8;">    });</span></span>
<span class="line"><span style="color:#e1e4e8;">});</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#000000;">test(&#39;nested objects are equal&#39;, () =&gt; {</span></span>
<span class="line"><span style="color:#000000;">    const obj1 = { a: { b: 1 } };</span></span>
<span class="line"><span style="color:#000000;">    const obj2 = { a: { b: 1 } };</span></span>
<span class="line"><span style="color:#000000;">    expect(obj1).toEqual({</span></span>
<span class="line"><span style="color:#000000;">        a: expect.objectContaining({</span></span>
<span class="line"><span style="color:#000000;">            b: expect.any(Number)</span></span>
<span class="line"><span style="color:#000000;">        })</span></span>
<span class="line"><span style="color:#000000;">    });</span></span>
<span class="line"><span style="color:#000000;">});</span></span></code></pre></div><ul><li><strong>自定义匹配器</strong>：Jest 允许开发者自定义匹配器，以满足特定的测试需求。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">expect.extend({</span></span>
<span class="line"><span style="color:#e1e4e8;">    toBeEven: (received) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">        const pass = received % 2 === 0;</span></span>
<span class="line"><span style="color:#e1e4e8;">        if (pass) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            return {</span></span>
<span class="line"><span style="color:#e1e4e8;">                message: () =&gt; \`expected \${received} not to be even\`,</span></span>
<span class="line"><span style="color:#e1e4e8;">                pass: true</span></span>
<span class="line"><span style="color:#e1e4e8;">            };</span></span>
<span class="line"><span style="color:#e1e4e8;">        } else {</span></span>
<span class="line"><span style="color:#e1e4e8;">            return {</span></span>
<span class="line"><span style="color:#e1e4e8;">                message: () =&gt; \`expected \${received} to be even\`,</span></span>
<span class="line"><span style="color:#e1e4e8;">                pass: false</span></span>
<span class="line"><span style="color:#e1e4e8;">            };</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">});</span></span>
<span class="line"><span style="color:#e1e4e8;">test(&#39;2 is even&#39;, () =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">    expect(2).toBeEven();</span></span>
<span class="line"><span style="color:#e1e4e8;">});</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#000000;">expect.extend({</span></span>
<span class="line"><span style="color:#000000;">    toBeEven: (received) =&gt; {</span></span>
<span class="line"><span style="color:#000000;">        const pass = received % 2 === 0;</span></span>
<span class="line"><span style="color:#000000;">        if (pass) {</span></span>
<span class="line"><span style="color:#000000;">            return {</span></span>
<span class="line"><span style="color:#000000;">                message: () =&gt; \`expected \${received} not to be even\`,</span></span>
<span class="line"><span style="color:#000000;">                pass: true</span></span>
<span class="line"><span style="color:#000000;">            };</span></span>
<span class="line"><span style="color:#000000;">        } else {</span></span>
<span class="line"><span style="color:#000000;">            return {</span></span>
<span class="line"><span style="color:#000000;">                message: () =&gt; \`expected \${received} to be even\`,</span></span>
<span class="line"><span style="color:#000000;">                pass: false</span></span>
<span class="line"><span style="color:#000000;">            };</span></span>
<span class="line"><span style="color:#000000;">        }</span></span>
<span class="line"><span style="color:#000000;">    }</span></span>
<span class="line"><span style="color:#000000;">});</span></span>
<span class="line"><span style="color:#000000;">test(&#39;2 is even&#39;, () =&gt; {</span></span>
<span class="line"><span style="color:#000000;">    expect(2).toBeEven();</span></span>
<span class="line"><span style="color:#000000;">});</span></span></code></pre></div>`,19),t=[p];function o(c,i,r,d,y,g){return e(),a("div",null,t)}const v=s(l,[["render",o]]);export{h as __pageData,v as default};
