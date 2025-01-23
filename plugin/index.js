const { writeFileSync } = require('fs');
const folderObj = {};
function recordInfo () {
  return { name: 'recordInfo',
    generateBundle (options, bundle) {

      for (const fileName in bundle) {
        const [nm] = fileName.split('.');
        const [, folder] = nm.split('/');
        let exports = bundle[fileName].exports;
        if (exports.length) {
          exports.forEach(item=>{
            folderObj[item.toLowerCase()] = { folderNm: folder,
              functionNm: item };
          });
        }

      }
    },
    writeBundle () {
      // 将信息写入 JSON 文件
      writeFileSync('vitepress/temp/info.json', JSON.stringify(folderObj, null, 2));
    } };

}
module.exports = { recordInfo };