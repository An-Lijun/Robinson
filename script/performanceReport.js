const fs = require('fs');
const path = require('path');
const { series, task, src, dest } = require('gulp');
const { logNextLone, logSuccess, logLogo, logError } = require('./utils');

let performanceData = {};

/**
 * 读取性能测试结果
 */
task('read-performance', (done) => {
  logLogo();
  logNextLone('开始读取性能测试数据...');
  
  try {
    const performanceFilePath = path.resolve(__dirname, '../performance-results.json');
    if (fs.existsSync(performanceFilePath)) {
      performanceData = JSON.parse(fs.readFileSync(performanceFilePath, 'utf8'));
      logSuccess('性能测试数据读取成功');
    } else {
      logError('未找到性能测试数据文件，将生成空报告');
      performanceData = {
        timestamp: new Date().toISOString(),
        tests: [],
        summary: {
          totalTests: 0,
          passedTests: 0,
          failedTests: 0,
          averageExecutionTime: 0
        }
      };
    }
    done();
  } catch (error) {
    logError(`读取性能测试数据失败: ${error.message}`);
    done(error);
  }
});

/**
 * 生成性能报告 Markdown
 */
task('generate-performance-md', (done) => {
  try {
    let markdown = '# 性能测试报告\n\n';
    markdown += `生成时间: ${performanceData.timestamp || new Date().toISOString()}\n\n`;
    
    // 添加摘要
    if (performanceData.summary) {
      markdown += '## 📊 测试摘要\n\n';
      markdown += `| 指标 | 数值 |\n`;
      markdown += `|------|------|\n`;
      markdown += `| 总测试数 | ${performanceData.summary.totalTests || 0} |\n`;
      markdown += `| 通过测试 | ${performanceData.summary.passedTests || 0} |\n`;
      markdown += `| 失败测试 | ${performanceData.summary.failedTests || 0} |\n`;
      markdown += `| 平均执行时间 | ${performanceData.summary.averageExecutionTime || 0}ms |\n`;
      markdown += `| 通过率 | ${calculatePassRate()}% |\n\n`;
    }
    
    // 添加详细测试结果
    if (performanceData.tests && performanceData.tests.length > 0) {
      markdown += '## 📋 详细测试结果\n\n';
      
      performanceData.tests.forEach((test, index) => {
        const status = test.passed ? '✅ 通过' : '❌ 失败';
        const performance = test.executionTime < 100 ? '🚀 优秀' : 
                         test.executionTime < 500 ? '⚡ 良好' : 
                         test.executionTime < 1000 ? '⏳ 一般' : '🐢 需要优化';
        
        markdown += `### ${index + 1}. ${test.name}\n\n`;
        markdown += `**状态**: ${status}\n\n`;
        markdown += `**执行时间**: ${test.executionTime}ms\n\n`;
        markdown += `**性能评级**: ${performance}\n\n`;
        
        if (test.description) {
          markdown += `**描述**: ${test.description}\n\n`;
        }
        
        if (test.memoryUsage) {
          markdown += `**内存使用**: ${test.memoryUsage}MB\n\n`;
        }
        
        if (!test.passed && test.error) {
          markdown += `**错误信息**: \`${test.error}\`\n\n`;
        }
        
        markdown += '---\n\n';
      });
    }
    
    // 添加性能优化建议
    markdown += generateOptimizationSuggestions();
    
    // 添加性能趋势分析
    if (performanceData.trends && performanceData.trends.length > 0) {
      markdown += generateTrendAnalysis();
    }
    
    // 写入文件
    const outputFilePath = path.resolve(__dirname, '../vitepress/etc/performance-report.md');
    // 确保目录存在
    const outputDir = path.dirname(outputFilePath);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    fs.writeFileSync(outputFilePath, markdown, 'utf8');
    logSuccess(`性能报告已生成: ${outputFilePath}`);
    done();
  } catch (error) {
    logError(`生成性能报告失败: ${error.message}`);
    done(error);
  }
});

/**
 * 复制性能相关文件
 */
task('copy-performance-files', () => {
  return src('../performance-results.json')
    .pipe(dest('../vitepress/etc/'));
});

/**
 * 计算通过率
 */
function calculatePassRate() {
  if (!performanceData.summary || performanceData.summary.totalTests === 0) {
    return 0;
  }
  const passRate = (performanceData.summary.passedTests / performanceData.summary.totalTests) * 100;
  return passRate.toFixed(2);
}

/**
 * 生成优化建议
 */
function generateOptimizationSuggestions() {
  let suggestions = '## 💡 性能优化建议\n\n';
  
  const slowTests = performanceData.tests ? 
    performanceData.tests.filter(test => test.executionTime > 500) : [];
  
  if (slowTests.length > 0) {
    suggestions += '### 需要优化的函数\n\n';
    slowTests.forEach(test => {
      suggestions += `- **${test.name}**: 执行时间 ${test.executionTime}ms，建议优化算法或使用缓存\n`;
    });
    suggestions += '\n';
  }
  
  const memoryIntensiveTests = performanceData.tests ?
    performanceData.tests.filter(test => test.memoryUsage && test.memoryUsage > 50) : [];
  
  if (memoryIntensiveTests.length > 0) {
    suggestions += '### 内存使用较高的函数\n\n';
    memoryIntensiveTests.forEach(test => {
      suggestions += `- **${test.name}**: 内存使用 ${test.memoryUsage}MB，建议优化数据结构或减少临时对象创建\n`;
    });
    suggestions += '\n';
  }
  
  // 通用优化建议
  suggestions += '### 通用优化建议\n\n';
  suggestions += '- 使用原生 API 替代手动实现\n';
  suggestions += '- 避免在循环中进行重复计算\n';
  suggestions += '- 使用适当的数据结构（Map vs Object）\n';
  suggestions += '- 考虑使用缓存机制优化重复操作\n';
  suggestions += '- 使用泛型提高类型安全性和性能\n';
  suggestions += '- 避免不必要的类型转换和断言\n';
  
  return suggestions;
}

/**
 * 生成趋势分析
 */
function generateTrendAnalysis() {
  let analysis = '## 📈 性能趋势分析\n\n';
  
  const trends = performanceData.trends;
  const latestTrend = trends[trends.length - 1];
  const previousTrend = trends[trends.length - 2];
  
  if (previousTrend) {
    const avgTimeChange = latestTrend.averageExecutionTime - previousTrend.averageExecutionTime;
    const changePercent = ((avgTimeChange / previousTrend.averageExecutionTime) * 100).toFixed(2);
    
    analysis += `### 执行时间变化\n\n`;
    if (avgTimeChange > 0) {
      analysis += `⚠️ 平均执行时间增加了 ${Math.abs(changePercent)}% (${avgTimeChange > 0 ? '+' : ''}${avgTimeChange.toFixed(2)}ms)\n\n`;
    } else {
      analysis += `✅ 平均执行时间减少了 ${Math.abs(changePercent)}% (${avgTimeChange.toFixed(2)}ms)\n\n`;
    }
  }
  
  // 性能趋势图表
  analysis += '### 历史趋势\n\n';
  analysis += '| 版本 | 平均执行时间 | 通过率 |\n';
  analysis += '|------|--------------|--------|\n';
  
  trends.forEach(trend => {
    analysis += `| ${trend.version} | ${trend.averageExecutionTime.toFixed(2)}ms | ${trend.passRate.toFixed(2)}% |\n`;
  });
  
  return analysis;
}

/**
 * 生成完整的性能报告
 */
exports.default = series(
  'read-performance',
  'generate-performance-md',
  'copy-performance-files'
);
