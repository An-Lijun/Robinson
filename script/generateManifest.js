/**
 * Robinson AI Manifest 生成脚本
 * 从 TSDoc 注释自动提取函数信息，生成 AI 可读的 manifest
 *
 * 使用方法: node script/generateManifest.js
 */

const fs = require('fs');
const path = require('path');

/**
 * 解析 TSDoc 注释块
 */
function parseJSDoc(commentBlock) {
  if (!commentBlock) return null;

  const result = {
    description: '',
    params: {},
    returns: null,
    examples: [],
    stability: 'stable',
    synonyms: []
  };

  // 移除注释块的 /** 和 */ 以及每行的 *
  const lines = commentBlock
    .replace(/\/\*\*?/, '')
    .replace(/\*\/?$/, '')
    .split('\n')
    .map(l => l.replace(/^\s*\*\s?/, '').trim())
    .filter(l => l);

  let currentTag = null;
  let currentTagContent = [];

  for (const line of lines) {
    // @param
    if (line.startsWith('@param')) {
      if (currentTag) saveCurrentTag(result, currentTag, currentTagContent);
      currentTag = 'param';
      currentTagContent = [line.replace('@param', '').trim()];
    }
    // @returns / @return
    else if (line.startsWith('@returns') || line.startsWith('@return')) {
      if (currentTag) saveCurrentTag(result, currentTag, currentTagContent);
      currentTag = 'returns';
      currentTagContent = [line.replace(/@returns?|@return/, '').trim()];
    }
    // @example
    else if (line.startsWith('@example')) {
      if (currentTag) saveCurrentTag(result, currentTag, currentTagContent);
      currentTag = 'example';
      currentTagContent = [line.replace('@example', '').trim()];
    }
    // @beta
    else if (line.startsWith('@beta')) {
      result.stability = 'beta';
    }
    // @synonyms
    else if (line.startsWith('@synonyms')) {
      if (currentTag) saveCurrentTag(result, currentTag, currentTagContent);
      currentTag = 'synonyms';
      currentTagContent = [line.replace('@synonyms', '').trim()];
    }
    // 代码行（属于 example）
    else if (line.startsWith('```') || (currentTag === 'example' && line)) {
      currentTagContent.push(line);
    }
    // 其他内容
    else if (currentTag) {
      currentTagContent.push(line);
    }
    // 描述行
    else if (line && !line.startsWith('@')) {
      result.description = result.description ? `${result.description} ${line}` : line;
    }
  }

  if (currentTag) {
    saveCurrentTag(result, currentTag, currentTagContent);
  }

  return result;
}

function saveCurrentTag(result, tag, content) {
  const text = content.join(' ').trim().replace(/```\w*/g, '').trim();

  if (tag === 'param') {
    // 格式: @param {type} name - description
    // 或: @param name - description
    const typeMatch = text.match(/\{([^}]+)\}\s+(\w+)\s*[-–—]?\s*(.*)/);
    const simpleMatch = text.match(/(\w+)\s*[-–—]\s*(.*)/);

    if (typeMatch) {
      result.params[typeMatch[2]] = {
        type: typeMatch[1],
        description: typeMatch[3] || ''
      };
    } else if (simpleMatch) {
      result.params[simpleMatch[1]] = {
        type: 'any',
        description: simpleMatch[2] || ''
      };
    }
  } else if (tag === 'returns') {
    const typeMatch = text.match(/\{([^}]+)\}/);
    const descMatch = text.replace(/\{[^}]+\}/, '').trim().replace(/^[-–—]\s*/, '');
    result.returns = {
      type: typeMatch ? typeMatch[1] : 'any',
      description: descMatch
    };
  } else if (tag === 'example') {
    if (text) result.examples.push({ code: text });
  } else if (tag === 'synonyms') {
    result.synonyms = text.split(/[,，]/).map(s => s.trim()).filter(Boolean);
  }
}

/**
 * 解析 TypeScript 源文件，提取所有导出的函数
 */
function extractFunctionsFromFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const functions = [];

  // 匹配: /** ... */ export function name(...)
  // 使用非贪婪匹配 *
  const regex = /\/\*\*([\s\S]*?)\*\/\s*export\s+(?:async\s+)?function\s+(\w+)/g;

  let match;
  while ((match = regex.exec(content)) !== null) {
    const jsdoc = parseJSDoc(match[1]);
    const name = match[2];

    if (!jsdoc || !jsdoc.description) {
      // 如果没有 JSDoc 描述，跳过
      continue;
    }

    functions.push({
      name,
      description: jsdoc.description,
      params: jsdoc.params,
      returns: jsdoc.returns,
      examples: jsdoc.examples,
      stability: jsdoc.stability,
      synonyms: jsdoc.synonyms
    });
  }

  return functions;
}

/**
 * 从文件路径推断函数分类
 */
function inferCategory(filePath) {
  const categories = {
    '/array/': 'array',
    '/string/': 'string',
    '/number/': 'number',
    '/object/': 'object',
    '/date/': 'date',
    '/function/': 'function',
    '/color/': 'color',
    '/web/': 'web',
    '/math/': 'math',
    '/symbol/': 'symbol',
    '/file/': 'file',
    '/format/': 'format',
    '/common/': 'validation',
    '/mask/': 'mask',
    '/boolean/': 'boolean'
  };

  for (const [key, category] of Object.entries(categories)) {
    if (filePath.includes(key)) return category;
  }

  return 'validation';
}

/**
 * 转换为 OpenAI function calling 格式
 */
function toOpenAIFormat(fn) {
  const properties = {};
  const required = [];

  for (const [name, param] of Object.entries(fn.params)) {
    properties[name] = {
      type: mapToJSONSchemaType(param.type),
      description: param.description
    };
    required.push(name);
  }

  return {
    name: fn.name,
    description: fn.description,
    parameters: {
      type: 'object',
      properties,
      required
    }
  };
}

/**
 * 将 TSDoc 类型映射为 JSON Schema 类型
 */
function mapToJSONSchemaType(tsType) {
  const typeMap = {
    'string': 'string',
    'number': 'number',
    'boolean': 'boolean',
    'any': 'any',
    'object': 'object',
    'Array': 'array',
    'array': 'array',
    'void': 'null',
    'null': 'null',
    'undefined': 'null',
    'Promise': 'object',
    'Function': 'function',
    'object[]': 'array',
    'HTMLElement': 'object',
    'Element': 'object',
    'Blob': 'object',
    'File': 'object'
  };

  return typeMap[tsType] || 'any';
}

/**
 * 主函数：生成完整 manifest
 */
function generateManifest() {
  const srcDir = path.resolve(__dirname, '../src/core');

  // 收集所有要扫描的文件
  const filesToScan = [];

  function walkDir(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        if (!entry.name.startsWith('.') && entry.name !== 'node_modules') {
          walkDir(fullPath);
        }
      } else if (entry.name.endsWith('.ts') || entry.name.endsWith('.js')) {
        filesToScan.push(fullPath);
      }
    }
  }

  walkDir(srcDir);

  // 提取所有函数
  const allFunctions = [];

  for (const file of filesToScan) {
    const category = inferCategory(file);
    const functions = extractFunctionsFromFile(file);

    for (const fn of functions) {
      allFunctions.push({
        ...fn,
        category,
        file: file.replace(path.resolve(__dirname, '..'), '').replace(/\\/g, '/')
      });
    }
  }

  // 生成 manifest
  const manifest = {
    version: require('../package.json').version,
    libraryName: 'Robinson',
    generatedAt: new Date().toISOString(),
    totalFunctions: allFunctions.length,
    categories: {
      validation: '验证类函数 - 验证邮箱、手机、URL、身份证等',
      array: '数组类函数 - 分组、去重、过滤、切片等',
      string: '字符串类函数 - 插入、截取、转换等',
      number: '数字类函数 - 随机数、范围判断等',
      object: '对象类函数 - 类型判断、属性操作等',
      date: '日期类函数 - 格式化、日期差计算等',
      function: '函数式编程 - 组合、柯里化、防抖节流等',
      color: '颜色类函数 - 颜色格式转换、验证等',
      web: 'Web类函数 - DOM操作、事件绑定等',
      math: '数学类函数 - 精确计算等',
      symbol: 'Symbol类函数',
      file: '文件类函数 - 格式转换、下载等',
      format: '格式化类函数',
      mask: '遮罩类函数',
      boolean: '布尔类函数'
    },
    functions: allFunctions,
    openAITools: allFunctions.map(fn => toOpenAIFormat(fn))
  };

  return manifest;
}

// 执行生成
console.log('\n🚀 Robinson AI Manifest 生成器\n');

const manifest = generateManifest();

// 确保输出目录存在
const outputDir = path.resolve(__dirname, '../src/ai');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// 写入 manifest.json
const manifestPath = path.join(outputDir, 'manifest.json');
fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), 'utf-8');
console.log(`✅ manifest.json 已生成: ${manifestPath}`);
console.log(`   共 ${manifest.totalFunctions} 个函数\n`);

// 写入 openai-tools.json
const toolsPath = path.join(outputDir, 'openai-tools.json');
fs.writeFileSync(toolsPath, JSON.stringify(manifest.openAITools, null, 2), 'utf-8');
console.log(`✅ openai-tools.json 已生成: ${toolsPath}`);
console.log(`   可直接用于 OpenAI function calling\n`);

// 按分类统计
const categoryCount = {};
for (const fn of manifest.functions) {
  categoryCount[fn.category] = (categoryCount[fn.category] || 0) + 1;
}

console.log('📊 函数分类统计:');
for (const [category, count] of Object.entries(categoryCount)) {
  console.log(`   ${category}: ${count} 个`);
}

console.log('\n✨ 生成完成！\n');
