# 使用缓存
缓存可以显著提高构建速度，特别是在开发环境中。


```
import { rollup } from 'rollup';

const inputOptions = {
  input: 'src/main.js',
  cache: true, // 启用缓存
};

const outputOptions = {
  file: 'bundle.js',
  format: 'cjs',
};

async function build() {
  const bundle = await rollup(inputOptions);
  await bundle.write(outputOptions);
}

build();
```
Rollup 的缓存机制是指在构建过程中，Rollup 会将模块的解析结果（如依赖关系）和转换结果（如通过插件处理后的代码）存储在内存中。这样，在后续的构建过程中，如果模块没有发生变化，Rollup 可以直接使用缓存中的结果，而不需要重新解析和转换模块。

### 缓存的作用

1.  **提高构建速度**：缓存可以显著减少重复的解析和转换工作，特别是在大型项目中，构建速度的提升会非常明显。
1.  **减少资源消耗**：由于缓存减少了重复工作，因此也减少了 CPU 和内存的消耗。

### 缓存的局限性

1.  **内存占用**：缓存存储在内存中，因此在构建大型项目时，可能会占用较多的内存。
1.  **缓存失效**：如果模块发生了变化（如文件内容修改），Rollup 会自动使缓存失效，并重新解析和转换该模块。

### 手动管理缓存

在某些情况下，你可能需要手动管理缓存。例如，你可以通过 `rollup.rollup` 方法的返回值来获取当前的缓存对象，并在后续构建中复用这个缓存对象：

```
// www.javascriptcn.com code example
async function build() {
  const bundle = await rollup(inputOptions);
  const { cache } = bundle; // 获取缓存对象
  await bundle.write(outputOptions);

  // 在后续构建中复用缓存
  const inputOptionsWithCache = {
    ...inputOptions,
    cache, // 复用缓存
  };

  const bundle2 = await rollup(inputOptionsWithCache);
  await bundle2.write(outputOptions);
}
```

通过这种方式，你可以在多个构建任务之间共享缓存，进一步提高构建效率。
