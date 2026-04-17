const { series, task } = require('gulp');
const { execSync } = require('child_process');
const { logNextLone,logSuccess,logLogo } = require('./utils')
const fs = require('fs');
const path = require('path');

let globcommits, globUpDateLogs

/**
 * 获取这个提交当时的 package.json 里的 version 版本号
 * @param {*} gitHash 
 * @returns 
 */
function getPackageVersion(gitHash){
    try {
        // 执行 git show 命令获取指定提交时的 package.json 内容
        const packageJsonContent = execSync(`git show ${gitHash}:package.json`).toString();
        const packageJson = JSON.parse(packageJsonContent);
        return packageJson.version;

    } catch (error) {
        logError(`Error getting version for commit ${gitHash}:`, error.message);
        return 'unknown'
    }
}


/**
 * 获取项目所有的 Git 提交记录，并给每一条记录自动匹配当时的版本号，生成一份完整的发布日志数据。
 */
task('get-log-data', (done) => {
    logLogo()
    logNextLone()
    const cmd = 'git log --pretty=format:"%H,%an,%ad,%s,%aE" --date=iso8601'
    // 执行 git log 命令并获取输出，指定输出格式为逗号分隔的信息
    const gitLogOutput = execSync(cmd).toString();
    function getDate(date) {
        const commitDate = new Date(date);
        const year = commitDate.getFullYear();
        const month = String(commitDate.getMonth() + 1).padStart(2, '0');
        const day = String(commitDate.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }
    // 将输出按行分割 遍历每一行并解析信息
    globcommits = gitLogOutput.split('\n').map(line => {
        if (line) {
            console.log(line);

            const [gitHash, author, date, message, email] = line.split(',', 5);
            return {
                author,
                formattedDate: getDate(date),
                message,
                packageVersion:getPackageVersion(gitHash),
                email,
                gitHash
            };
        }
    });
    done()
})

/**
 * 把上一步拿到的所有提交记录，按【版本号】分组归类，最终变成一个 “版本 → 该版本下所有提交” 的结构化日志
 */
task('mix-update-log', (done) => {
    // 合成更新日志
    globUpDateLogs = globcommits.reduce((obj, commit) => {
        if (obj[commit.packageVersion]) {
            obj[commit.packageVersion].push(commit)
        } else {
            obj[commit.packageVersion] = [commit]
        }
        return obj
    }, {})
    done()
})

/**
 * 整理好的 “按版本分组的提交记录”，生成一份美观、带样式、可直接在网站上展示的 HTML 格式更新日志（changelog），并保存成 .md 文件。
 */
task('generate-changelog', (done) => {
    // 生成更新日志内容
    let changelogContent = "<h1>更新日志</h1>"
    Object.keys(globUpDateLogs).map(version => {
        changelogContent += `\n\n`
        changelogContent += `## ${version}\n`
        globUpDateLogs[version].forEach((commit, index) => {
            changelogContent += '\n <ul>';
            changelogContent += ` <li style="display:flex;justify-content:space-between">
                <div>
                    ${index + 1}.
                    <span style="color:var(--vp-c-text-2);margin-right:10px">${commit.message}</span> 
                    <i style="color:var(--vp-c-text-3)">${commit.formattedDate}</i> 
                </div> 
                <a href="mailto:${commit.email}" class="mail-link" title="${commit.gitHash}">${commit.author}</a> </li>  \n `
            changelogContent += '</ul>';

        })
    })
    fs.writeFileSync(path.join(__dirname, '../vitepress/etc/changelog.md'), changelogContent);
    logNextLone()
    logSuccess('生成更新日志成功')
    done()
})

// 将提交记录转换为md文档
exports.default = series('get-log-data', 'mix-update-log','generate-changelog');