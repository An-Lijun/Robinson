---
url: /etc\rollup\src/withVue.md
---
# rollup 集成vue

一般没有这么干的

```
npm install rollup rollup-plugin-vue vue-template-compiler -D
```

```vue
<template>
  <div>
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello, Vue with Rollup!'
    };
  }
};
</script>
```
