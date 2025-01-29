const { spawn, exec } = require('child_process');
const packageJson = require('../package.json');
const npmNM = process.platform === 'win32' ? 'npm.cmd' : 'npm';
const { logNextLone, logError, logSuccess, logLogo } = require('./utils');

/**
 * 设置镜像源 清除代理
 */
function setRegistry () {
  exec('npm config set registry https://registry.npmjs.org/', (error, stdout, stderr) => {
    if (error) {
      return logError('设置 npm 镜像失败: ', error);
    }
    logSuccess('已成功将 npm 镜像设置为源镜像:', stdout);

    build();
  });
}

/**
 * 发布
 */

function publish () {
  console.log('正在发布...');
  const buildProcess = spawn(npmNM, [ 'publish']);

  // 当有数据输出到标准输出时的处理
  buildProcess.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });

  // 当有数据输出到标准错误时的处理
  buildProcess.stderr.on('data', (buff) => {
    // 创建一个 FileReader 对象
    buff.toString();
  });

  // 当进程结束时的处理
  buildProcess.on('close', (code) => {
    logSuccess(`npm publish 成功: version:${packageJson.version}`);
  });
}

/**
 * 提升版本
 */

function prePatch () {
  console.log('正在提升版本号...');
  exec('npm version patch', (error, stdout, stderr) => {
    if (error) {
      logError('npm version 失败: ', error);
      return;
    }
    // npm version patch && npm run build && npm publish && exit 1
    publish();
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
    prePatch();
  });
}

(function () {
  logLogo();
  logNextLone();
  setRegistry();
})();