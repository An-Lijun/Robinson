const { spawn } = require('child_process');
const packageJson = require('../package.json');
const { logNextLone, build, logSuccess, logLogo } = require('./utils');
const { series, task } = require('gulp');
const npmNM = process.platform === 'win32' ? 'npm.cmd' : 'npm';

// const report = require('./report');
// const getUpdateLog = require('./getUpdateLog');

/**
 * 生成jest自动化测试报告=>Md
 */
task('gen-etc',(done)=>{
  console.log('正在生成report...');
  const buildProcess = spawn(npmNM, ['run', 'doc:report']);
  buildProcess.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });

  // 当有数据输出到标准错误时的处理
  buildProcess.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });

  // 当进程结束时的处理
  buildProcess.on('close', (code) => {
    logSuccess('report生成成功', packageJson.version);
    done()
  });
})


/**
 * 将ts类型转换为Md文档
 */
task('gen-doc',(done)=>{
  console.log('正在生成MD...');
  const buildProcess = spawn(npmNM, ['run', 'api:tsToMd']);

  // 当有数据输出到标准输出时的处理
  buildProcess.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });

  // 当有数据输出到标准错误时的处理
  buildProcess.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });

  // 当进程结束时的处理
  buildProcess.on('close', (code) => {
    logSuccess('文档生成成功', packageJson.version);
    done()
  });

})

/**
 * 生成更新日志=> Md
 */
task('gen-updatelog',(done)=>{
  console.log('正在生成更新日志...');
  const buildProcess = spawn(npmNM, ['run', 'doc:updatelog']);

  // 当有数据输出到标准输出时的处理
  buildProcess.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });

  // 当有数据输出到标准错误时的处理
  buildProcess.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });

  // 当进程结束时的处理
  buildProcess.on('close', (code) => {
    logSuccess('更新日志生成成功', packageJson.version);
    done()
  });

})

/**
 * 自动提取、整理、规范化你项目里的 TypeScript 类型和 API 接口，并生成统一的 API 文档文件。
 */
task('build-doc-temp',(done)=>{
  console.log('正在生成temp...');
  const buildProcess = spawn(npmNM, ['run', 'api']);

  // 当有数据输出到标准输出时的处理
  buildProcess.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });

  // 当有数据输出到标准错误时的处理
  buildProcess.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });

  // 当进程结束时的处理
  buildProcess.on('close', (code) => {
    logSuccess('temp生成成功')
    done()
  });
})


/**
 * 打包方法 生成ts类型
 */
task('build-function',(done)=>{
  logLogo()
  logNextLone()
  build(done);
})


exports.default = series('build-function', 'build-doc-temp','gen-etc','gen-updatelog','gen-doc');
