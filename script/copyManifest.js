/**
 * 复制 AI manifest 文件到 dist 目录
 * 运行：node script/copyManifest.js
 */

const fs = require('fs');
const path = require('path');

function copyManifest() {
  const distDir = path.resolve('./dist');
  const aiDir = path.resolve('./src/ai');
  
  // 确保 dist/ai 目录存在
  const distAiDir = path.join(distDir, 'ai');
  if (!fs.existsSync(distAiDir)) {
    fs.mkdirSync(distAiDir, { recursive: true });
  }
  
  // 复制 manifest.json
  const manifestSrc = path.join(aiDir, 'manifest.json');
  const manifestDest = path.join(distAiDir, 'manifest.json');
  if (fs.existsSync(manifestSrc)) {
    fs.copyFileSync(manifestSrc, manifestDest);
    console.log(`✅ 复制 manifest.json 到 ${manifestDest}`);
  } else {
    console.log('❌ manifest.json 不存在');
  }
  
  // 复制 openai-tools.json
  const toolsSrc = path.join(aiDir, 'openai-tools.json');
  const toolsDest = path.join(distAiDir, 'openai-tools.json');
  if (fs.existsSync(toolsSrc)) {
    fs.copyFileSync(toolsSrc, toolsDest);
    console.log(`✅ 复制 openai-tools.json 到 ${toolsDest}`);
  } else {
    console.log('❌ openai-tools.json 不存在');
  }
  
  console.log('\n✨ 复制完成！');
}

// 执行复制
console.log('🚀 复制 AI manifest 文件\n');
copyManifest();
