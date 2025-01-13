const { exec } = require('child_process');
const packageJson = require('../package.json');
const chalk = require('chalk');

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
function logNextLone () {
  console.log('_________________________________________________________________________________');
  console.log('\n');
}

function logError (...arg) {
  console.log(chalk.bgRed.white('[Error] ', ...arg));

}
function logSuccess (...arg) {
  console.log(chalk.green('[Success] ', ...arg));

}

function publish () {
  console.log('正在发布...');

  exec('npm publish', (error, stdout) => {
    if (error) {
      // 当 npm publish 命令执行失败时，error 对象将包含错误信息
      logError('npm publish 失败: ', error);
      // 你可以根据具体的错误信息进行更详细的处理，例如分析错误码等
      if (error.code === 1) {
        logError('npm publish 失败: 可能是权限问题或包名称已存在等错误', error);

      } else if (error.code === 2) {
        logError('npm publish 失败: 可能是网络问题或 npm 服务器问题', error);

      }
      logNextLone();
      logError('npm publish 失败，正在重试...', error);
      publish();
      // 可以根据需要添加更多的错误码判断
    } else {
      logSuccess(`npm publish 成功: version:${packageJson.version}`);
    }
  });
}

logLogo();
logNextLone();

exec('npm config set registry https://registry.npmjs.org/', (error, stdout, stderr) => {
  if (error) {
    return logError('设置 npm 镜像失败: ', error);
  }
  logSuccess('已成功将 npm 镜像设置为源镜像:', stdout);

  console.log('正在打包中...');

  exec('npm run build', (error, stdout)=>{
    if (error) {
      logError('npm run build 失败: ', error);
      if (error.code === 1) {
        logError('可能是权限问题或 package.json 文件有问题，请检查文件权限和文件内容');
      } else if (error.code === 2) {
        logError('可能是网络问题，请检查网络连接');
      }
      return;

    }
    console.log('正在提升版本号...');

    exec('npm version patch', (error, stdout, stderr) => {
      if (error) {
        logError('npm version 失败: ', error);
        return;
      }
      // npm version patch && npm run build && npm publish && exit 1
      publish();
    });
  });

});
