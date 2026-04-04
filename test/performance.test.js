/**
 * Robinson 性能测试
 * 测试关键函数的性能表现
 */

const { PerformanceTester } = require('../script/performanceTester');

// 直接定义一些测试函数，避免导入 TypeScript 文件
// 数组操作函数
function isArray(arr) {
  return Array.isArray(arr);
}

function getRelArray(arr) {
  return arr.filter(item => item != null && item !== '' && item !== false && item !== 0);
}

function getChunkArray(arr, size) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

// DOM 操作函数
function hasClass(element, className) {
  return element.classList && element.classList.contains(className);
}

function getNode(selector) {
  return document.querySelector(selector);
}

function getNodes(selector) {
  return document.querySelectorAll(selector);
}

// 函数式编程工具
function deepClone(obj) {
  if (obj == null || typeof obj !== 'object') return obj;
  if (obj instanceof Date) return new Date(obj.getTime());
  if (obj instanceof Array) return obj.map(item => deepClone(item));
  if (typeof obj === 'object') {
    const clonedObj = {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        clonedObj[key] = deepClone(obj[key]);
      }
    }
    return clonedObj;
  }
  return obj;
}

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

function compose(...fns) {
  return fns.reduce((a, b) => (...args) => a(b(...args)));
}

function pipe(...fns) {
  return fns.reduce((a, b) => (...args) => b(a(...args)));
}

// 对象操作函数
function isObjectLike(value) {
  return value != null && typeof value === 'object';
}

function isPromise(value) {
  return value != null && typeof value.then === 'function';
}

function isRegExp(value) {
  return value instanceof RegExp;
}

const tester = new PerformanceTester();

// 准备测试数据
const largeArray = Array(10000).fill(0).map((_, i) => i);
const largeObject = {};
for (let i = 0; i < 1000; i++) {
  largeObject[`key${i}`] = { value: i, nested: { deep: i * 2 } };
}

// 数组函数性能测试
console.log('\n🔢 数组函数性能测试\n');

tester.testFunction(
  'isArray - 大数组检查',
  () => isArray(largeArray),
  10000,
  '检查 10000 个元素的数组'
);

tester.testFunction(
  'getRelArray - 过滤空值',
  () => getRelArray([1, null, 2, undefined, 3, '', 4, 0, false, 5]),
  1000,
  '过滤包含空值的数组'
);

tester.testFunction(
  'getChunkArray - 数组分块',
  () => getChunkArray(largeArray, 100),
  1000,
  '将 10000 个元素分块为 100 个一组'
);

// DOM 函数性能测试
console.log('\n🌐 DOM 函数性能测试\n');

const mockElement = {
  classList: {
    contains: () => true,
    add: () => {},
    remove: () => {}
  }
};

tester.testFunction(
  'hasClass - 类名检查',
  () => hasClass(mockElement, 'test-class'),
  10000,
  '检查元素是否包含指定类名'
);

// 函数式编程工具性能测试
console.log('\n⚡ 函数式编程工具性能测试\n');

const simpleFunction = (x) => x * 2;
const addOne = (x) => x + 1;
const multiplyByTwo = (x) => x * 2;

tester.testFunction(
  'compose - 函数组合',
  () => {
    const composed = compose(multiplyByTwo, addOne);
    return composed(5);
  },
  10000,
  '组合两个函数并执行'
);

tester.testFunction(
  'pipe - 函数管道',
  () => {
    const piped = pipe(addOne, multiplyByTwo);
    return piped(5);
  },
  10000,
  '通过管道执行两个函数'
);

// 对象操作性能测试
console.log('\n📦 对象操作性能测试\n');

tester.testFunction(
  'isObjectLike - 对象类型检查',
  () => isObjectLike(largeObject),
  10000,
  '检查大型对象是否为类对象类型'
);

// 深度克隆性能测试
console.log('\n🔍 深度克隆性能测试\n');

const complexObject = {
  level1: {
    level2: {
      level3: {
        data: Array(100).fill(0).map((_, i) => ({ id: i, value: `item${i}` }))
      }
    }
  },
  array: Array(50).fill(0).map((_, i) => ({ id: i, nested: { data: `nested${i}` }}))
};

tester.testFunction(
  'deepClone - 复杂对象克隆',
  () => deepClone(complexObject),
  100,
  '克隆包含嵌套对象和数组的复杂结构'
);

// 防抖和节流性能测试
console.log('\n⏱️ 防抖和节流性能测试\n');

let debounceCounter = 0;
const debouncedFn = debounce(() => {
  debounceCounter++;
}, 100);

tester.testFunction(
  'debounce - 防抖函数',
  () => {
    for (let i = 0; i < 100; i++) {
      debouncedFn();
    }
    return debounceCounter;
  },
  100,
  '快速调用防抖函数 100 次'
);

let throttleCounter = 0;
const throttledFn = throttle(() => {
  throttleCounter++;
}, 100);

tester.testFunction(
  'throttle - 节流函数',
  () => {
    for (let i = 0; i < 100; i++) {
      throttledFn();
    }
    return throttleCounter;
  },
  100,
  '快速调用节流函数 100 次'
);

// 边界情况性能测试
console.log('\n⚠️ 边界情况性能测试\n');

tester.testFunction(
  'getChunkArray - 空数组',
  () => getChunkArray([], 10),
  10000,
  '处理空数组'
);

tester.testFunction(
  'getChunkArray - 单元素数组',
  () => getChunkArray([1], 10),
  10000,
  '处理单元素数组'
);

tester.testFunction(
  'getChunkArray - 块大小大于数组',
  () => getChunkArray([1, 2, 3], 10),
  10000,
  '块大小大于数组长度'
);

// 内存使用测试
console.log('\n💾 内存使用测试\n');

tester.testFunction(
  '大数组处理内存测试',
  () => {
    const hugeArray = Array(100000).fill(0).map((_, i) => ({ id: i, data: `item${i}` }));
    return getRelArray(hugeArray);
  },
  10,
  '处理 100000 个对象的大数组'
);

// 生成最终报告
console.log('\n📄 生成性能测试报告...\n');

tester.printSummary();

// 保存结果到文件
const resultsPath = require('path').resolve('./performance-results.json');
tester.saveResults(resultsPath);

console.log(`\n✅ 性能测试完成！结果已保存到: ${resultsPath}`);
console.log('💡 运行以下命令生成详细报告:');
console.log('   npm run doc:performanceReport');
