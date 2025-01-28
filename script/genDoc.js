const { spawn } = require('child_process');
const packageJson = require('../package.json');
const { logNextLone, build, logSuccess, logLogo } = require('./utils');
const { series, task } = require('gulp');
const npmNM = process.platform === 'win32' ? 'npm.cmd' : 'npm';

// const report = require('./report');
// const updateLogGulp = require('./updateLogGulp');

task('gen-etc',(done)=>{
  console.log('正在生成report...');
  const buildProcess = spawn(npmNM, ['run', 'genReport']);
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


task('gen-doc',(done)=>{
  console.log('正在生成MD...');
  const buildProcess = spawn(npmNM, ['run', 'genEtc']);

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

task('gen-updatelog',(done)=>{
  console.log('正在生成更新日志...');
  const buildProcess = spawn(npmNM, ['run', 'genUpdatelog']);

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

task('build-doc-temp',(done)=>{
  console.log('正在生成temp...');
  const buildProcess = spawn(npmNM, ['run', 'doc']);

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


task('build-function',(done)=>{
  logLogo()
  logNextLone()
  build(done);
})


exports.default = series('build-function', 'build-doc-temp','gen-etc','gen-updatelog','gen-doc');
