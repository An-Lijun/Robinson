const fs = require('fs');
const converter = require('html-to-md');
const path = require('path');
const { series, task } = require('gulp');
const { logNextLone, logSuccess, logLogo } = require('./utils')

let markdownContent;
task('read-html', (done) => {
    logLogo()
    logNextLone()
    // 读取 HTML 文件
    const htmlFilePath = path.resolve(__dirname, '../coverage/lcov-report/index.html');
    const htmlContent = fs.readFileSync(htmlFilePath, 'utf8');
    // 将 HTML 转换为 Markdown
    markdownContent = converter(htmlContent);
    done()
})

task('write-md',(done)=>{
    let str = ''
    markdownContent.split('\n').forEach((line, index) => {
        if (line.includes('|---|---|---|---|---|---|---|')) {
            str += '|---|---|---|---|---| \n'
        } else {
            str += line + '\n'
        }
    })
    
    // 将 Markdown 内容写入文件
    const outputFilePath = path.resolve(__dirname, '../vitepress/etc/report.md');;
    fs.writeFileSync(outputFilePath, str, 'utf8');
    done()
    logSuccess(`HTML 文件已成功转换为 Markdown，输出文件: ${outputFilePath}`);
})

exports.default = series('read-html', 'write-md');




