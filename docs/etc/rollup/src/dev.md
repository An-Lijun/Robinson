---
url: /etc\rollup\src/dev.md
---
# 手动开发一个插件

```JavaScript
export default function (options) {

    return {
        name: 'replace-plugin',
        transform (code, id) {
            if (options.target && options.replacement) {
                return code.replace(new RegExp(options.target, 'g'), options.replacement);
            }
            return null;
        }
    }
}
```

注意如果报错 \`\[!] RollupError: Node tried to load your configuration file as CommonJS even though it is likely an ES module. To resolve this, change the extension of your configuration to ".mjs", set "type": "module" in your package.json file or pass the "--bundleConfigAsCjs" flag.

Original error: Cannot use import statement outside a module\`

可以加package.json 里添加 "type" :"module" 就可以解决

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/6da6bf5ae96c4fdda971a8d064bb4988~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5a6J5Yip5ZCbX0FuTGlqdW4=:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMjUwMjk2MDY4NjA0MDI4NiJ9\&rk3s=f64ab15b\&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018\&x-orig-expires=1737871278\&x-orig-sign=c7IFw104m4OHKO80acfog1U8v3E%3D)
