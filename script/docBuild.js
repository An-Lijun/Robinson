const { spawn, exec } = require('child_process');
const packageJson = require('../package.json');
const { logNextLone, logError, logSuccess, logLogo } = require('./utils');
const fs = require('fs');
const path = require('path');
const npmNM = process.platform === 'win32' ? 'npm.cmd' : 'npm';

// 源文件路径
const sourceFilePath = path.join(__dirname, '../assets/robinson.png');
// 目标文件路径
const targetFilePath = path.join(__dirname, '../docs/assets/robinson.png');
// 检查并修改权限的函数
function checkAndModifyPermissions (filePath, permission) {
  fs.access(filePath, fs.constants[permission], (err) => {
    if (err) {
      // 尝试修改权限
      const command = process.platform === 'win32' ? `icacls "${filePath}" /grant "${process.env.USERDOMAIN}\\${process.env.USERNAME}:${permission === 'R_OK' ? 'R' : 'W'}"` : `chmod u+${permission === 'R_OK' ? 'r' : 'w'} "${filePath}"`;
      exec(command, (err) => {
        if (err) {
          console.error(`修改权限失败: ${err}`);
          return;
        }
        console.log(`权限已修改为 ${permission}`);
      });
    } else {
      console.log(`已具有 ${permission} 权限`);
    }
  });
}
// 拷贝文件的函数
function copyFile (source, target) {
  checkAndModifyPermissions(source, 'R_OK');
  checkAndModifyPermissions(target, 'W_OK');
  fs.copyFile(source, target, (err) => {
    if (err) {
      console.error(`拷贝文件出错: ${err}`);
      return;
    }
    console.log('文件拷贝成功');
  });
}

function build () {
  console.log('正在打包...');
  const buildProcess = spawn(npmNM, ['run', 'docsvite']);

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
    // copyFile(sourceFilePath, targetFilePath);
    logSuccess('文档打包成功', packageJson.version);
  });
}

(function () {
  logLogo();
  logNextLone();
  build();
})();