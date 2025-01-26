const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const cmd ='git log --pretty=format:"%an,%ad,%s" --date=iso8601'

// 读取 package.json 文件获取版本号
const packageJsonPath = path.join(__dirname, '../package.json');
const packageJsonContent = fs.readFileSync(packageJsonPath, 'utf8');
const packageJson = JSON.parse(packageJsonContent);
const packageVersion = packageJson.version;

// 执行 git log 命令并获取输出，指定输出格式为逗号分隔的信息
const gitLogOutput = execSync(cmd).toString();

// 将输出按行分割 遍历每一行并解析信息
const commits = gitLogOutput.split('\n').map(line => {
    if (line) {
        const [author, date, message] = line.split(',', 3);
        const commitDate = new Date(date);
        // 获取年、月、日
        const year = commitDate.getFullYear();
        // 月份从 0 开始，所以要加 1
        const month = String(commitDate.getMonth() + 1).padStart(2, '0');
        const day = String(commitDate.getDate()).padStart(2, '0');
        // 格式化为中国时区的年月日
        const formattedDate = `${year}-${month}-${day}`;
        return {
            author,
            formattedDate,
            message,
            packageVersion
        };
    }
});

// 生成更新日志内容
const changelogContent = `# 更新日志\n\n
${commits.map(commit => `## ${packageVersion}(${commit.formattedDate})\n > ${commit.message} \n ${commit.author}`).join('\n')}`;

// 将更新日志内容写入文件
fs.writeFileSync(path.join(__dirname, '../vitepress/etc/changelog.md'), changelogContent);
