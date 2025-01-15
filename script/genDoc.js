const { spawn, exec } = require('child_process');
const packageJson = require('../package.json');
const { logNextLone, logError, logSuccess, logLogo } = require('./utils');
const npmNM = process.platform === 'win32' ? 'npm.cmd' : 'npm';

function buildDoc () {
  console.log('正在生成MD...');
  const buildProcess = spawn(npmNM, ['run', 'docetc']);

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
  });
}
function buildDocApi () {
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
    buildDoc();
  });
}

/**
 * 打包
 */
function build () {
  console.log('正在打包中...');

  const buildProcess = spawn(npmNM, ['run', 'build']);

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
    buildDocApi();
  });
}

(function () {
  logLogo();
  logNextLone();
  build();
})();