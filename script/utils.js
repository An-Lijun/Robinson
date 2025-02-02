//@ 我用的是 2.4.2 因为是nodejs脚本所以用老版本的cjs模块化 npm i chalk@2.4.2
const chalk = require('chalk');
const { spawn } = require('child_process');
const npmNM = process.platform === 'win32' ? 'npm.cmd' : 'npm';
const packageJson = require('../package.json');

/**
 * 输出logo
 */
// 生成网站  https://patorjk.com/software/taag/#p=display&f=Graffiti&t=Type%20Something%20
function logLogo () {
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


function build (fun) {
  console.log('正在打包...');
  const buildProcess = spawn(npmNM, ['run', 'buildViteDocs']);

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
    logSuccess('文档打包成功', packageJson.version);
    if(fun){
      fun()
    }
  });
}

module.exports = { logNextLone,
  logError,
  logSuccess,
  logLogo ,build};