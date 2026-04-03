/**
 * 性能测试工具
 * 用于测试 Robinson 工具函数的性能表现
 */

const fs = require('fs');
const path = require('path');

class PerformanceTester {
  constructor() {
    this.results = [];
    this.startTime = 0;
    this.memoryBefore = 0;
  }

  /**
   * 开始性能测试
   */
  start() {
    this.startTime = performance.now();
    if (global.gc) {
      global.gc();
    }
    this.memoryBefore = process.memoryUsage().heapUsed / 1024 / 1024; // MB
  }

  /**
   * 结束性能测试
   */
  end(testName, description = '') {
    const endTime = performance.now();
    const executionTime = endTime - this.startTime;
    
    if (global.gc) {
      global.gc();
    }
    const memoryAfter = process.memoryUsage().heapUsed / 1024 / 1024; // MB
    const memoryUsage = memoryAfter - this.memoryBefore;

    const result = {
      name: testName,
      description,
      executionTime: parseFloat(executionTime.toFixed(2)),
      memoryUsage: parseFloat(memoryUsage.toFixed(2)),
      passed: true,
      timestamp: new Date().toISOString()
    };

    this.results.push(result);
    return result;
  }

  /**
   * 测试函数性能
   */
  testFunction(testName, testFunction, iterations = 1000, description = '') {
    console.log(`🧪 测试: ${testName} (${iterations} 次迭代)`);
    
    this.start();
    
    try {
      for (let i = 0; i < iterations; i++) {
        testFunction();
      }
      const result = this.end(testName, description);
      console.log(`✅ ${testName}: ${result.executionTime}ms (平均 ${(result.executionTime / iterations).toFixed(3)}ms/次)`);
      return result;
    } catch (error) {
      const endTime = performance.now();
      const executionTime = endTime - this.startTime;
      console.log(`❌ ${testName}: 测试失败 - ${error.message}`);
      
      const result = {
        name: testName,
        description,
        executionTime: parseFloat(executionTime.toFixed(2)),
        memoryUsage: 0,
        passed: false,
        error: error.message,
        timestamp: new Date().toISOString()
      };
      
      this.results.push(result);
      return result;
    }
  }

  /**
   * 测试函数性能（带参数）
   */
  testFunctionWithArgs(testName, testFunction, args, iterations = 1000, description = '') {
    console.log(`🧪 测试: ${testName} (${iterations} 次迭代)`);
    
    this.start();
    
    try {
      for (let i = 0; i < iterations; i++) {
        testFunction(...args);
      }
      const result = this.end(testName, description);
      console.log(`✅ ${testName}: ${result.executionTime}ms (平均 ${(result.executionTime / iterations).toFixed(3)}ms/次)`);
      return result;
    } catch (error) {
      const endTime = performance.now();
      const executionTime = endTime - this.startTime;
      console.log(`❌ ${testName}: 测试失败 - ${error.message}`);
      
      const result = {
        name: testName,
        description,
        executionTime: parseFloat(executionTime.toFixed(2)),
        memoryUsage: 0,
        passed: false,
        error: error.message,
        timestamp: new Date().toISOString()
      };
      
      this.results.push(result);
      return result;
    }
  }

  /**
   * 生成测试摘要
   */
  generateSummary() {
    const passedTests = this.results.filter(r => r.passed);
    const failedTests = this.results.filter(r => !r.passed);
    const totalExecutionTime = this.results.reduce((sum, r) => sum + r.executionTime, 0);
    const averageExecutionTime = totalExecutionTime / this.results.length;

    return {
      totalTests: this.results.length,
      passedTests: passedTests.length,
      failedTests: failedTests.length,
      averageExecutionTime: parseFloat(averageExecutionTime.toFixed(2)),
      timestamp: new Date().toISOString()
    };
  }

  /**
   * 保存结果到文件
   */
  saveResults(filePath) {
    const summary = this.generateSummary();
    const data = {
      timestamp: summary.timestamp,
      tests: this.results,
      summary,
      trends: this.loadTrends()
    };

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`📄 性能测试结果已保存到: ${filePath}`);
  }

  /**
   * 加载历史趋势数据
   */
  loadTrends() {
    const resultsPath = path.resolve('./performance-results.json');
    let trends = [];
    
    if (fs.existsSync(resultsPath)) {
      try {
        const data = JSON.parse(fs.readFileSync(resultsPath, 'utf8'));
        trends = data.trends || [];
      } catch (error) {
        console.warn('⚠️ 无法加载历史趋势数据');
      }
    }
    
    // 添加当前趋势
    const summary = this.generateSummary();
    trends.push({
      version: this.getCurrentVersion(),
      averageExecutionTime: summary.averageExecutionTime,
      passRate: (summary.passedTests / summary.totalTests) * 100,
      timestamp: summary.timestamp
    });
    
    // 只保留最近 10 次的趋势
    if (trends.length > 10) {
      trends = trends.slice(-10);
    }
    
    return trends;
  }

  /**
   * 获取当前版本
   */
  getCurrentVersion() {
    try {
      const packageJson = JSON.parse(fs.readFileSync(path.resolve('./package.json'), 'utf8'));
      return packageJson.version;
    } catch (error) {
      return 'unknown';
    }
  }

  /**
   * 打印摘要报告
   */
  printSummary() {
    const summary = this.generateSummary();
    console.log('\n' + '='.repeat(50));
    console.log('📊 性能测试摘要');
    console.log('='.repeat(50));
    console.log(`总测试数: ${summary.totalTests}`);
    console.log(`通过测试: ${summary.passedTests}`);
    console.log(`失败测试: ${summary.failedTests}`);
    console.log(`平均执行时间: ${summary.averageExecutionTime}ms`);
    console.log(`通过率: ${((summary.passedTests / summary.totalTests) * 100).toFixed(2)}%`);
    console.log('='.repeat(50) + '\n');
  }
}

module.exports = { PerformanceTester };
