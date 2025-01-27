const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const cmd = 'git log --pretty=format:"%H,%an,%ad,%s,%aE" --date=iso8601'

// 执行 git log 命令并获取输出，指定输出格式为逗号分隔的信息
const gitLogOutput = execSync(cmd).toString();

// 将输出按行分割 遍历每一行并解析信息
const commits = gitLogOutput.split('\n').map(line => {
    if (line) {
        console.log(line);

        const [gitHash, author, date, message, emil] = line.split(',', 5);
        const commitDate = new Date(date);
        // 获取年、月、日
        const year = commitDate.getFullYear();
        // 月份从 0 开始，所以要加 1
        const month = String(commitDate.getMonth() + 1).padStart(2, '0');
        const day = String(commitDate.getDate()).padStart(2, '0');
        // 格式化为中国时区的年月日
        const formattedDate = `${year}-${month}-${day}`;
        let packageVersion
        try {
            // 执行 git show 命令获取指定提交时的 package.json 内容
            const packageJsonContent = execSync(`git show ${gitHash}:package.json`).toString();
            const packageJson = JSON.parse(packageJsonContent);
            packageVersion = packageJson.version;

        } catch (error) {
            console.error(`Error getting version for commit ${comgitHashmitHash}:`, error.message);
        }
        return {
            author,
            formattedDate,
            message,
            packageVersion,
            emil
        };
    }
});


// 合成更新日志
const upDateLogs = commits.reduce((obj,commit) => {
    if (obj[commit.packageVersion]) {
        obj[commit.packageVersion].push(commit)
    } else {
        obj[commit.packageVersion] = [commit]
    }
    return obj
  }, {})
// 生成更新日志内容
const changelogContent = `# 更新日志\n\n
    ${Object.keys(upDateLogs).map(version => {
            return `## ${version}\n${upDateLogs[version].map((commit, index) =>
                `${index + 1}. <div style="display:flex;justify-content:space-between">
                    <div>
                        <span style="color:var(--vp-c-text-2);margin-right:10px">${commit.message}</span> 
                        <i style="color:var(--vp-c-text-3)">${commit.formattedDate}</i> 
                    </div> 
                    <a href="mailto:${commit.emil}" class="mail-link">${commit.author}</a> </div>  \n `
            ).join('\n')}`
        }).join('\n')
    }
`;

// 将更新日志内容写入文件
fs.writeFileSync(path.join(__dirname, '../vitepress/etc/changelog.md'), changelogContent);
