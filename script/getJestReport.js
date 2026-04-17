const fs = require('fs');
const converter = require('html-to-md');
const path = require('path');
const { series, task } = require('gulp');
const { logNextLone, logSuccess, logLogo } = require('./utils')

let markdownContent;

/**
 * 读取html文件并且将文件读成字符串
 */
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


/**
 * 将转换后的markdown内容写入到指定文件中
 */
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


/**
 * 把代码测试覆盖率报告（HTML 格式），自动转换成干净的 Markdown 文档，方便放到文档网站里展示。
 */
exports.default = series('read-html', 'write-md');




