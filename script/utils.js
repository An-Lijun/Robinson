const chalk = require('chalk'); //@ 我用的是 2.4.2 因为是nodejs脚本所以用老版本的cjs模块化 npm i chalk@2.4.2

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

module.exports = { logNextLone,
  logError,
  logSuccess,
  logLogo };