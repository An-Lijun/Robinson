
const { spawn, exec } = require('child_process');
const packageJson = require('../package.json');
const chalk = require('chalk'); //@ 我用的是 2.4.2 因为是nodejs脚本所以用老版本的cjs模块化 npm i chalk@2.4.2
const npmNM = process.platform === 'win32' ? 'npm.cmd' : 'npm';

/**
 * 输出logo
 */
function logLogo () { // 生成网站  https://patorjk.com/software/taag/#p=display&f=Graffiti&t=Type%20Something%20
  console.log(chalk.green(`
      _   _      _ _        ______      _     _                 
     | | | |    | | |       | ___ \\    | |   (_)                
     | |_| | ___| | | ___   | |_/ /___ | |__  _ _ __  ___  ___  
     |  _  |/ _ \\ | |/ _ \\  |    // _ \\| '_ \\| | '_ \\/ __|/ _ \\ 
     | | | |  __/ | | (_) | | |\\ \\ (_) | |_) | | | | \\__ \\ (_) |
     \\_| |_/\\___|_|_|\\___/  \\_| \\_\\___/|_.__/|_|_| |_|___/\\___/ 
                                                                
     `));
}

/**
 * 分行
 */
function logNextLone () {
  console.log('_________________________________________________________________________________');
  console.log('\n');
}

/**
 * 控制台输出错误
 * @param  {...any} arg
 */
function logError (...arg) {
  console.log(chalk.bgRed.white('[Error] ', ...arg));

}
function logSuccess (...arg) {
  console.log(chalk.green('[Success] ', ...arg));

}

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
  buildProcess.stderr.on('data', (blob) => {
    // 创建一个 FileReader 对象
    let reader = new FileReader();
    // 定义 onload 事件处理函数
    reader.onload = function (event) {
      // 获取转换后的字符串内容
      let content = reader.result;
      console.log(content);
    };

    // 读取 Blob 对象并将其转换为字符串
    reader.readAsText(blob);
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