const { defineConfig } = require('rollup');
const path = require('path');
const ts = require('rollup-plugin-typescript2');
const alias = require('@rollup/plugin-alias');
const terser = require('@rollup/plugin-terser');
const { getBabelOutputPlugin } = require('@rollup/plugin-babel');
const { dts } = require('rollup-plugin-dts');
const {visualizer} =require('rollup-plugin-visualizer');
// 由于暂时不写cjs 的nodejs 包所以这里就忽略cjs的模块了
module.exports = defineConfig([{
  input: ['./src/index.ts'], //入口文件
  output: [
    {
      dir: 'dist/esm', //出口文件
      format: 'esm', //打包格式
      preserveModules: true // 开启单独打包有利于树摇晃
    },
    // {
    //   dir: 'dist/cjs',
    //   format: 'cjs',
    //   preserveModules: true
    // },
    {
      file: 'dist/iife.js',
      format: 'iife',
      name: '$robinson'
    }
  ],
  plugins: [
    alias({
      entries: [{
        find: '@',
        replacement: path.resolve(__dirname, './src')
      }]
    }),
    ts({ tsconfig: path.resolve(__dirname, 'tsconfig.json') }),
    // getBabelOutputPlugin({ allowAllFormats: true,
    //   exclude: 'node_modules/**',
    //   'presets': [
    //     '@babel/preset-env'
    //   ] }),
    terser(),
    visualizer({
      filename: 'stats.html', // 生成的分析文件名称
      open: true, // 是否在生成后自动打开浏览器
      template: 'treemap', // 可视化模板，可选 'sunburst', 'network', 'treemap', 'raw-data'
      gzipSize: true, // 是否显示 gzip 压缩后的大小
      brotliSize: true // 是否显示 brotli 压缩后的大小
    })
  ]
},
  // 类型文件
  { input: 'src/index.ts',
    output: { dir: 'dist/esm/types',
      format: 'esm',
      preserveModules: true },
    plugins: [
      dts()
    ] }
  // { input: 'src/index.ts',
  //   output: { dir: 'dist/cjs/types',
  //     format: 'cjs',
  //     preserveModules: true },
  //   plugins: [
  //     dts()
  //   ] }
]);