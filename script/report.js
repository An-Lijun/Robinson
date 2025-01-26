const fs = require('fs');
const converter = require('html-to-md');
const path = require('path');

// 读取 HTML 文件
const htmlFilePath = path.resolve(__dirname,'../coverage/lcov-report/index.html') ;
const htmlContent = fs.readFileSync(htmlFilePath, 'utf8');

// 将 HTML 转换为 Markdown
let markdownContent = converter(htmlContent);

console.log(markdownContent);

let str =''
markdownContent.split('\n').forEach((line,index)=>{
    if(line.includes('|---|---|---|---|---|---|---|')){
        str +='|---|---|---|---|---| \n'
    }else{
        str += line + '\n'
    }
})

// 将 Markdown 内容写入文件
const outputFilePath = path.resolve(__dirname,'../vitepress/etc/report.md') ;;
fs.writeFileSync(outputFilePath, str, 'utf8');

console.log(`HTML 文件已成功转换为 Markdown，输出文件: ${outputFilePath}`);