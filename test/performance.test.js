/**
 * Robinson 完整性能测试
 * 测试所有工具函数的性能表现
 */

const { PerformanceTester } = require('../script/performanceTester');

const tester = new PerformanceTester();

const largeArray = Array(10000).fill(0).map((_, i) => i);
const largeObject = {};
for (let i = 0; i < 1000; i++) {
  largeObject[`key${i}`] = { value: i, nested: { deep: i * 2 } };
}

console.log('\n========================================');
console.log('🚀 Robinson 完整性能测试开始');
console.log('========================================\n');

console.log('\n🔢 Common 通用函数性能测试\n');

function getStringType(value) {
  return Object.prototype.toString.call(value);
}

function is(value, type) {
  return getStringType(value) === `[object ${type.toLowerCase()}]`;
}

function isArray(arr) {
  return Array.isArray(arr);
}

function isEmpty(value) {
  if (value === null) return true;
  if (isArray(value) || is(value, 'string')) return value.length === 0;
  if (is(value, 'set') || is(value, 'map')) return Number(value.size) === 0;
  if (typeof value === 'object') return !Object.keys(value).length;
  return !value;
}

function isNull(value) {
  return value === null;
}

function isUndefined(value) {
  return Object.is(value, void 0);
}

function hasTypeIn(value, types) {
  return types.some(item => is(value, item));
}

function isSimpleType(value) {
  const type = typeof value;
  if (value === null) return true;
  return type !== 'object' && type !== 'function';
}

function isRefType(value) {
  return value instanceof Object;
}

function isEqType(value, value2) {
  return getStringType(value) === getStringType(value2);
}

tester.testFunction(
  'is - 类型判断',
  () => {
    is(123, 'number');
    is('hello', 'string');
    is({}, 'object');
    is([], 'array');
  },
  10000,
  '测试 is 函数类型判断性能'
);

tester.testFunction(
  'isEmpty - 空值判断',
  () => {
    isEmpty(null);
    isEmpty(undefined);
    isEmpty('');
    isEmpty([]);
    isEmpty({});
    isEmpty(0);
    isEmpty(false);
  },
  10000,
  '测试 isEmpty 各种空值情况'
);

tester.testFunction(
  'isNull - null 判断',
  () => {
    isNull(null);
    isNull(undefined);
    isNull(0);
  },
  10000,
  '测试 isNull 函数'
);

tester.testFunction(
  'isUndefined - undefined 判断',
  () => {
    isUndefined(undefined);
    isUndefined(null);
    isUndefined(0);
  },
  10000,
  '测试 isUndefined 函数'
);

tester.testFunction(
  'hasTypeIn - 类型数组判断',
  () => {
    hasTypeIn(123, ['number', 'string']);
    hasTypeIn('hello', ['number', 'string']);
    hasTypeIn({}, ['array', 'object']);
  },
  10000,
  '测试 hasTypeIn 函数'
);

tester.testFunction(
  'isSimpleType - 简单类型判断',
  () => {
    isSimpleType(123);
    isSimpleType('hello');
    isSimpleType(true);
    isSimpleType(null);
    isSimpleType(undefined);
    isSimpleType(Symbol('id'));
    isSimpleType({});
    isSimpleType([]);
    isSimpleType(() => {});
  },
  10000,
  '测试 isSimpleType 函数'
);

tester.testFunction(
  'isRefType - 引用类型判断',
  () => {
    isRefType({});
    isRefType([]);
    isRefType(() => {});
    isRefType(123);
    isRefType('hello');
  },
  10000,
  '测试 isRefType 函数'
);

tester.testFunction(
  'isEqType - 类型相等判断',
  () => {
    isEqType(1, 2);
    isEqType('1', '2');
    isEqType(new Number(1), new Number(2));
  },
  10000,
  '测试 isEqType 函数'
);

console.log('\n📦 Array 数组函数性能测试\n');

function getRelArray(array) {
  if (!isArray(array)) throw new TypeError('not a array');
  return array.filter(item => !isEmpty(item));
}

function getChunkArray(array, size) {
  if (!isArray(array)) throw new TypeError('params is not a array');
  if (size <= 0) return [];
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

function isEqual(a, b) {
  if (Number.isNaN(a) && Number.isNaN(b)) return true;
  if (Object.is(a, b)) return true;
  if (a == null || b == null) return a === b;
  if (typeof a !== 'object' || typeof b !== 'object') return a === b;
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false;
    return a.every((item, index) => isEqual(item, b[index]));
  }
  if (Array.isArray(a) || Array.isArray(b)) return false;
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);
  if (keysA.length !== keysB.length) return false;
  return keysA.every(key => isEqual(a[key], b[key]));
}

function getUniqueValues(array) {
  if (!Array.isArray(array)) return [];
  const arr = JSON.parse(JSON.stringify(array));
  const result = [];
  for (const item of arr) {
    const exists = result.some(existing => isEqual(existing, item));
    if (!exists) result.push(item);
  }
  return result;
}

function getGroupArray(array, groupBy) {
  if (!Array.isArray(array)) return [];
  const groups = {};
  array.forEach(item => {
    let key;
    if (typeof groupBy === 'function') {
      key = groupBy(item);
    } else {
      key = item[groupBy];
    }
    if (key !== undefined) {
      if (!groups[key]) groups[key] = [];
      groups[key].push(item);
    }
  });
  return Object.values(groups);
}

function getToggleArray(array, item) {
  const arr = JSON.parse(JSON.stringify(array));
  const index = arr.findIndex(element => {
    if (typeof element === 'object' && element !== null && typeof item === 'object' && item !== null) {
      return JSON.stringify(element) === JSON.stringify(item);
    }
    return element === item;
  });
  if (index !== -1) {
    arr.splice(index, 1);
  } else {
    arr.push(item);
  }
  return arr;
}

tester.testFunction(
  'isArray - 数组判断',
  () => {
    isArray([]);
    isArray(largeArray);
    isArray({});
    isArray('string');
  },
  10000,
  '测试 isArray 函数'
);

tester.testFunction(
  'getRelArray - 过滤空值',
  () => {
    getRelArray([1, null, 2, undefined, 3, '', 4, 0, false, 5]);
    getRelArray([true, {}, [], NaN]);
  },
  5000,
  '测试 getRelArray 函数'
);

tester.testFunction(
  'getChunkArray - 数组分块',
  () => {
    getChunkArray(largeArray, 100);
    getChunkArray(largeArray, 500);
    getChunkArray(largeArray, 1000);
  },
  5000,
  '测试 getChunkArray 函数'
);

tester.testFunction(
  'getToggleArray - 数组元素切换',
  () => {
    getToggleArray([1, 2, 3], 4);
    getToggleArray([1, 2, 3], 2);
    getToggleArray([], 1);
  },
  5000,
  '测试 getToggleArray 函数'
);

tester.testFunction(
  'getUniqueValues - 数组去重',
  () => {
    getUniqueValues([1, 2, 2, 3, 3, 3, 4, 4, 4, 4]);
    getUniqueValues(['a', 'b', 'a', 'c', 'b', 'd']);
    getUniqueValues([{id: 1}, {id: 2}, {id: 1}]);
  },
  1000,
  '测试 getUniqueValues 函数'
);

tester.testFunction(
  'getGroupArray - 数组分组',
  () => {
    getGroupArray([{age: 20, name: 'a'}, {age: 20, name: 'b'}, {age: 30, name: 'c'}], 'age');
    getGroupArray([1, 2, 3, 4, 5], num => num % 2 === 0 ? 'even' : 'odd');
  },
  1000,
  '测试 getGroupArray 函数'
);

console.log('\n🧮 Number 数字函数性能测试\n');

function isNumber(value) {
  return typeof value === 'number' || is(value, 'Number');
}

function isNaNNum(value) {
  return Object.is(value, NaN);
}

function isInt(value) {
  return Number.isInteger(value);
}

function isFiniteNum(value) {
  return Number.isFinite(value);
}

function getRandom(min, max, point = 0) {
  let res = `${Math.random() * (max - min + 1) + min}`;
  let [integer, float] = res.split('.');
  if (integer === `${max}`) {
    integer += '.';
    for (let i = 0; i < point; i++) {
      integer += '0';
    }
  } else {
    integer += '.';
    integer += float.slice(0, point);
  }
  return Number(integer);
}

function isRange(value, min, max) {
  return value >= min && value < max;
}

tester.testFunction(
  'isNumber - 数字判断',
  () => {
    isNumber(123);
    isNumber('123');
    isNumber(NaN);
    isNumber(Infinity);
  },
  10000,
  '测试 isNumber 函数'
);

tester.testFunction(
  'isNaN - NaN 判断',
  () => {
    isNaNNum(NaN);
    isNaNNum('abc');
    isNaNNum(123);
    isNaNNum(0 / 0);
  },
  10000,
  '测试 isNaN 函数'
);

tester.testFunction(
  'isInt - 整数判断',
  () => {
    isInt(123);
    isInt(123.45);
    isInt('123');
    isInt(Infinity);
  },
  10000,
  '测试 isInt 函数'
);

tester.testFunction(
  'isFinite - 有限数判断',
  () => {
    isFiniteNum(123);
    isFiniteNum(Infinity);
    isFiniteNum(NaN);
    isFiniteNum('123');
  },
  10000,
  '测试 isFinite 函数'
);

tester.testFunction(
  'getRandom - 随机数生成',
  () => {
    getRandom(1, 100);
    getRandom(1, 100, 2);
    getRandom(0, 1, 4);
  },
  5000,
  '测试 getRandom 函数'
);

tester.testFunction(
  'isRange - 范围判断',
  () => {
    isRange(5, 1, 10);
    isRange(0, 1, 10);
    isRange(10, 1, 10);
    isRange(-1, 1, 10);
  },
  10000,
  '测试 isRange 函数'
);

console.log('\n⚡ Function 函数式编程工具性能测试\n');

function isFunction(value) {
  return is(value, 'Function') || is(value, 'AsyncFunction');
}

function deepClone(originalValue) {
  if (is(originalValue, 'symbol')) {
    return Symbol(originalValue.description);
  }
  if (isSimpleType(originalValue)) return originalValue;
  if (originalValue instanceof Set) {
    let set = new Set();
    for (const iterator of originalValue) {
      set.add(deepClone(iterator));
    }
    return set;
  }
  if (originalValue instanceof Map) {
    let map = new Map();
    for (const iterator of originalValue) {
      map.set(deepClone(iterator[0]), deepClone(iterator[1]));
    }
    return map;
  }
  if (typeof originalValue === 'function') return originalValue;
  let newValue = Array.isArray(originalValue) ? [] : {};
  for (const key in originalValue) {
    newValue[key] = deepClone(originalValue[key]);
  }
  const symbolKeys = Object.getOwnPropertySymbols(originalValue);
  for (const symbolKey of symbolKeys) {
    newValue[Symbol(symbolKey.description)] = deepClone(originalValue[symbolKey]);
  }
  return newValue;
}

function asignData(obj1, obj2) {
  let obj = deepClone(obj1);
  for (const key in obj1) {
    if (Object.hasOwnProperty.call(obj2, key)) {
      obj[key] = deepClone(obj2[key]);
    }
  }
  return obj;
}

function mapping(enumData, options, expty = '--') {
  if (Array.isArray(enumData) && is(options, 'object')) {
    let data = enumData.find(item => item[options.key] === options.keyValue);
    if (data) {
      switch (options.type) {
        case 'value':
          return data[options.label] || expty;
        case 'object':
          return data;
        default:
          return data;
      }
    }
    return expty;
  } else if (Object.prototype.toString.call(enumData) === '[object Object]') {
    if (options in enumData) return enumData[options];
    return expty;
  }
  return expty;
}

function compose(...fns) {
  if (!fns.length || !fns) return () => void 0;
  const popFn = fns.pop();
  if (isFunction(popFn) && !fns.length) return popFn;
  return function (...args) {
    return fns.reduceRight((acc, fn) => fn(acc), popFn(...args));
  };
}

function pipe(...fns) {
  if (!fns.length || !fns) return () => void 0;
  const shiftfN = fns.shift();
  if (isFunction(shiftfN) && !fns.length) return shiftfN;
  return function (...args) {
    return fns.reduce((acc, fn) => fn(acc), shiftfN(...args));
  };
}

function currying(fn) {
  return function curr(...args) {
    if (args.length >= fn.length) return fn(...args);
    return function (...newArr) {
      return curr(...args.concat(newArr));
    };
  };
}

function debounce(fn, delay, isLimmediate = false) {
  let timer = null;
  let limmediate = isLimmediate;
  const _debounceFn = function (...args) {
    return new Promise((resolve, reject) => {
      try {
        if (timer) clearTimeout(timer);
        if (limmediate) {
          limmediate = false;
          resolve(fn.apply(this, args));
          return;
        }
        timer = setTimeout(() => {
          resolve(fn.apply(this, args));
          timer = null;
          limmediate = isLimmediate;
        }, delay);
      } catch (error) {
        reject(error);
      }
    });
  };
  _debounceFn.cancel = function () {
    if (timer) clearTimeout(timer);
  };
  return _debounceFn;
}

function throttle(fn, immediate, leading = true, trailing = false) {
  let startTime = 0;
  let timer = null;
  const _throttle = function (...args) {
    return new Promise((resolve, reject) => {
      try {
        let nowTime = new Date();
        if (!leading && startTime === 0) startTime = nowTime;
        const waitTime = immediate - (nowTime - startTime);
        if (waitTime <= 0) {
          startTime = nowTime;
          timer = null;
          resolve(fn.apply(this, args));
          return;
        }
        if (trailing && !timer) {
          timer = setTimeout(() => {
            startTime = new Date();
            timer = null;
            return resolve(fn.apply(this, args));
          }, waitTime);
        }
      } catch (error) {
        reject(error);
      }
    });
  };
  _throttle.cancel = function () {
    clearTimeout(timer);
    startTime = 0;
    timer = null;
  };
  return _throttle;
}

tester.testFunction(
  'isFunction - 函数判断',
  () => {
    isFunction(() => {});
    isFunction(async () => {});
    isFunction(123);
    isFunction({});
  },
  10000,
  '测试 isFunction 函数'
);

tester.testFunction(
  'deepClone - 深度克隆',
  () => {
    const complexObject = {
      level1: {
        level2: {
          level3: { data: Array(50).fill(0).map((_, i) => ({ id: i, value: `item${i}` })) }
        }
      },
      array: Array(20).fill(0).map((_, i) => ({ id: i, nested: { data: `nested${i}` }}))
    };
    deepClone(complexObject);
  },
  500,
  '测试 deepClone 函数'
);

tester.testFunction(
  'deepClone - Set/Map 克隆',
  () => {
    const objWithSet = { set: new Set([1, 2, 3]), map: new Map([['a', 1], ['b', 2]]) };
    deepClone(objWithSet);
  },
  1000,
  '测试 deepClone 对 Set/Map 的处理'
);

tester.testFunction(
  'asignData - 对象数据分配',
  () => {
    const obj1 = { a: 1, b: 2, c: 3 };
    const obj2 = { a: 10, b: 20 };
    asignData(obj1, obj2);
  },
  5000,
  '测试 asignData 函数'
);

tester.testFunction(
  'mapping - 映射函数',
  () => {
    const enum1 = [{ value: 'USD', label: '美元' }, { value: 'AUD', label: '澳大利亚元' }, { value: 'EUR', label: '欧元' }];
    mapping(enum1, { key: 'value', keyValue: 'USD', label: 'label', type: 'value' });
    mapping(enum1, { key: 'value', keyValue: 'EUR', label: 'label', type: 'object' });
    const enum2 = { USD: '美元', AUD: '澳大利亚元', EUR: '欧元' };
    mapping(enum2, 'USD');
  },
  5000,
  '测试 mapping 函数'
);

tester.testFunction(
  'compose - 函数组合',
  () => {
    const addOne = x => x + 1;
    const double = x => x * 2;
    const triple = x => x * 3;
    const composed = compose(double, addOne);
    composed(5);
    compose(addOne, double, triple)(5);
  },
  10000,
  '测试 compose 函数'
);

tester.testFunction(
  'currying - 柯里化',
  () => {
    const add = (a, b) => a + b;
    const multiply = (a, b) => a * b;
    const curriedAdd = currying(add);
    const curriedMultiply = currying(multiply);
    curriedAdd(2)(3);
    curriedMultiply(2)(3);
  },
  10000,
  '测试 currying 函数'
);

let debounceCounter = 0;
tester.testFunction(
  'debounce - 防抖函数',
  () => {
    debounceCounter = 0;
    const debouncedFn = debounce(() => { debounceCounter++; }, 100);
    for (let i = 0; i < 50; i++) {
      debouncedFn();
    }
    return debounceCounter;
  },
  500,
  '测试 debounce 函数'
);

tester.testFunction(
  'pipe - 函数管道',
  () => {
    const addOne = x => x + 1;
    const double = x => x * 2;
    const triple = x => x * 3;
    const piped = pipe(addOne, double);
    piped(5);
    pipe(addOne, double, triple)(5);
  },
  10000,
  '测试 pipe 函数'
);

let throttleCounter = 0;
tester.testFunction(
  'throttle - 节流函数',
  () => {
    throttleCounter = 0;
    const throttledFn = throttle(() => { throttleCounter++; }, 50);
    for (let i = 0; i < 100; i++) {
      throttledFn();
    }
    return throttleCounter;
  },
  500,
  '测试 throttle 函数'
);

console.log('\n🧮 Math 数学函数性能测试\n');

const Big = require('big.js');

const calcMap = { '+': 'add', '-': 'sub', '*': 'mul', '/': 'div' };

function calc(number1, number2, operate = '+') {
  const op = calcMap[operate];
  if (!op) return '';
  return new Big(number1)[op](number2).toNumber();
}

tester.testFunction(
  'calc - 精确计算',
  () => {
    calc(0.1, 0.2);
    calc(0.1, 0.2, '-');
    calc(0.1, 0.2, '*');
    calc(0.1, 0.2, '/');
    calc(100, 50, '+');
    calc(100, 50, '-');
    calc(100, 50, '*');
    calc(100, 50, '/');
  },
  5000,
  '测试 calc 函数'
);

console.log('\n📝 String 字符串函数性能测试\n');

function isString(value) {
  return typeof value === 'string' || is(value, 'String');
}

function isExternal(path) {
  return typeof path === 'string' && (/^(https?:|mailto:|tel:)/).test(path);
}

function isIdCard(id) {
  const value = id.toUpperCase();
  if (!value || value.length !== 18) return false;
  const temp = value.substr(0, 17);
  for (let i = 0; i < temp.length; i++) {
    if (temp.charAt(i) < '0' || temp.charAt(i) > '9') return false;
  }
  let nowYear = new Date().getFullYear();
  let year = parseInt(value.substr(6, 4), 10);
  let month = parseInt(value.substr(10, 2), 10);
  let day = parseInt(value.substr(12, 2), 10);
  if (year < nowYear - 150 || year > nowYear + 150) return false;
  if (month > 12 || month < 1) return false;
  if (day > 31 || day < 1) return false;
  const WI = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1];
  const AI = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];
  const checkDigit = value.charAt(17);
  let cardSum = 0;
  for (let j = 0; j < value.length - 1; j++) {
    cardSum = cardSum + parseInt(value.charAt(j), 10) * WI[j];
  }
  const seq = cardSum % 11;
  const getCheckDigit = AI[seq];
  if (checkDigit !== getCheckDigit) return false;
  return true;
}

function isUrl(url) {
  const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;
  return reg.test(url);
}

function isEmail(s) {
  return (/^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/).test(s);
}

function isMobileNum(s) {
  return (/^1[3-9]\d{9}$/).test(String(s));
}

function insertStr(str, start, char) {
  return str.slice(0, start) + char + str.slice(start);
}

function getEtc(value, len, etcStr = '...') {
  if (!is(value, 'string')) throw new TypeError('params mast be string');
  return value.slice(0, len) + etcStr;
}

function getUniqueId() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : r & 0x3 | 0x8;
    return v.toString(16);
  });
}

tester.testFunction(
  'isString - 字符串判断',
  () => {
    isString('hello');
    isString(new String('hello'));
    isString(123);
    isString(true);
  },
  10000,
  '测试 isString 函数'
);

tester.testFunction(
  'isExternal - 外链判断',
  () => {
    isExternal('https://example.com');
    isExternal('http://example.com');
    isExternal('mailto:test@example.com');
    isExternal('tel:1234567890');
    isExternal('/internal/path');
    isExternal('./relative/path');
  },
  5000,
  '测试 isExternal 函数'
);

tester.testFunction(
  'isIdCard - 身份证验证',
  () => {
    isIdCard('11010519491231002X');
    isIdCard('11010519491231002Y');
    isIdCard('123456789012345678');
    isIdCard('invalid');
  },
  5000,
  '测试 isIdCard 函数'
);

tester.testFunction(
  'isUrl - URL 判断',
  () => {
    isUrl('https://www.example.com');
    isUrl('http://example.com/path?query=1');
    isUrl('invalid-url');
    isUrl('ftp://files.example.com');
    isUrl('www.example.com');
  },
  5000,
  '测试 isUrl 函数'
);

tester.testFunction(
  'isEmail - 邮箱判断',
  () => {
    isEmail('test@example.com');
    isEmail('user.name@company.co.uk');
    isEmail('invalid-email');
    isEmail('@example.com');
    isEmail('test@');
  },
  5000,
  '测试 isEmail 函数'
);

tester.testFunction(
  'isMobileNum - 手机号判断',
  () => {
    isMobileNum('13800138000');
    isMobileNum('15912345678');
    isMobileNum('12345678901');
    isMobileNum('08613800138000');
  },
  5000,
  '测试 isMobileNum 函数'
);

tester.testFunction(
  'insertStr - 字符串插入',
  () => {
    insertStr('Hello', 2, 'X');
    insertStr('Hello World', 5, ' inserted');
    insertStr('ABC', 0, 'prefix');
    insertStr('ABC', 3, 'suffix');
  },
  5000,
  '测试 insertStr 函数'
);

tester.testFunction(
  'getEtc - 字符串截取',
  () => {
    getEtc('Hello World', 5);
    getEtc('Hello World', 8, '...');
    getEtc('Hi', 10, 'etc');
    getEtc('1234567890', 3, '***');
  },
  5000,
  '测试 getEtc 函数'
);

tester.testFunction(
  'getUniqueId - 唯一ID生成',
  () => {
    getUniqueId();
    getUniqueId();
    getUniqueId();
  },
  5000,
  '测试 getUniqueId 函数'
);

console.log('\n🎨 Color 颜色函数性能测试\n');

function isHex(color) {
  const reg = /^#([0-9a-fA-F]{3}|[0-9a-fA-f]{6})$/;
  return reg.test(color);
}

function isRgb(color) {
  if (!color || !is(color, 'string')) return false;
  const lowColor = color.toLowerCase();
  const reg = /^rgb\(([0-9]{1,3}\,[0-9]{1,3}\,[0-9]{1,3})\)$/;
  if (reg.test(lowColor)) {
    const arr = lowColor.match(reg)[1].split(',');
    return reg.test(lowColor) && Number(arr[0]) <= 255 && Number(arr[1]) <= 255 && Number(arr[2]) <= 255;
  }
  return false;
}

function isRgba(color) {
  if (!color || !is(color, 'string')) return false;
  const lowColor = color.toLowerCase();
  const reg = /^rgba\(([0-9]{1,3}\,[0-9]{1,3}\,[0-9]{1,3}\,[0-9.]+)\)$/;
  if (reg.test(lowColor)) {
    const arr = lowColor.match(reg)[1].split(',');
    return reg.test(lowColor) && Number(arr[0]) <= 255 && Number(arr[1]) <= 255 && Number(arr[2]) <= 255 && Number(arr[3]) <= 1;
  }
  return false;
}

function hexToRgb(hex) {
  if (!isHex(hex)) return '';
  let color = hex.slice(1, hex.length);
  if (color.length === 3) color = color.repeat(2);
  let r = parseInt(color.substring(0, 2), 16);
  let g = parseInt(color.substring(2, 4), 16);
  let b = parseInt(color.substring(4, 6), 16);
  return `rgb(${r},${g},${b})`;
}

function rgbToHex(color) {
  if (!color || !isRgb(color)) return '';
  const arr = color.match(/(\d+)/g) || [];
  const r = parseInt(arr[0], 10);
  const g = parseInt(arr[1], 10);
  const b = parseInt(arr[2], 10);
  const hex = ((r << 16 | g << 8 | b)).toString(16);
  return `#${'0'.repeat(6 - hex.length)}${hex}`;
}

function toRgbaString(colorObj, n = 10000) {
  const { r, g, b, a = 1 } = colorObj;
  return `rgba(${r},${g},${b},${Math.floor(a * n) / n})`;
}

function parseHexColor(color) {
  let hex = color.slice(1);
  let a = 1;
  if (hex.length === 3) hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
  if (hex.length === 8) {
    a = parseInt(hex.slice(6), 16) / 255;
    hex = hex.slice(0, 6);
  }
  const bigint = parseInt(hex, 16);
  return { r: bigint >> 16 & 255, g: bigint >> 8 & 255, b: bigint & 255, a };
}

function parseRgbaColor(color) {
  const arr = color.match(/(\d+(\.\d+)?)+/g) || [];
  const res = arr.map((s) => parseInt(s, 10));
  return { r: res[0], g: res[1], b: res[2], a: parseFloat(arr[3]) };
}

function parseColorString(color) {
  if (color.startsWith('#')) return parseHexColor(color);
  else if (color.startsWith('rgb')) return parseRgbaColor(color);
  return '';
}

function hexToRgba(hex) {
  if (!hex || !isHex(hex)) return '';
  const colorObj = parseColorString(hex);
  return toRgbaString(colorObj);
}

function rgbaToHex(color) {
  if (!color || !isRgba(color)) return '';
  const { r, g, b } = parseColorString(color);
  const hex = ((r << 16 | g << 8 | b)).toString(16);
  return `#${'0'.repeat(6 - hex.length)}${hex}`;
}

tester.testFunction(
  'isHex - 十六进制颜色判断',
  () => {
    isHex('#FD7086');
    isHex('#FD7');
    isHex('FD7086');
    isHex('rgba(253,112,134,0.9)');
  },
  5000,
  '测试 isHex 函数'
);

tester.testFunction(
  'isRgb - RGB 颜色判断',
  () => {
    isRgb('rgb(255,255,255)');
    isRgb('rgb(0,0,0)');
    isRgb('rgb(256,256,256)');
    isRgb('#FD7086');
    isRgb('invalid');
  },
  5000,
  '测试 isRgb 函数'
);

tester.testFunction(
  'isRgba - RGBA 颜色判断',
  () => {
    isRgba('rgba(255,255,255,0.5)');
    isRgba('rgba(0,0,0,1)');
    isRgba('rgba(256,0,0,0.5)');
    isRgba('rgb(255,255,255)');
  },
  5000,
  '测试 isRgba 函数'
);

tester.testFunction(
  'hexToRgb - 十六进制转RGB',
  () => {
    hexToRgb('#FF0000');
    hexToRgb('#FD7086');
    hexToRgb('#F70');
    hexToRgb('invalid');
  },
  5000,
  '测试 hexToRgb 函数'
);

tester.testFunction(
  'rgbToHex - RGB转十六进制',
  () => {
    rgbToHex('rgb(255,0,0)');
    rgbToHex('rgb(253,112,134)');
    rgbToHex('rgb(0,0,0)');
    rgbToHex('rgb(255,255,255)');
  },
  5000,
  '测试 rgbToHex 函数'
);

tester.testFunction(
  'hexToRgba - 十六进制转RGBA',
  () => {
    hexToRgba('#FF0000');
    hexToRgba('#FD7086');
    hexToRgba('#F70');
    hexToRgba('invalid');
  },
  5000,
  '测试 hexToRgba 函数'
);

tester.testFunction(
  'rgbaToHex - RGBA转十六进制',
  () => {
    rgbaToHex('rgba(255,0,0,1)');
    rgbaToHex('rgba(253,112,134,0.9)');
    rgbaToHex('rgba(0,0,0,0)');
  },
  5000,
  '测试 rgbaToHex 函数'
);

tester.testFunction(
  'toRgbaString - 颜色对象转RGBA字符串',
  () => {
    toRgbaString({ r: 255, g: 0, b: 0, a: 1 });
    toRgbaString({ r: 100, g: 150, b: 200 });
    toRgbaString({ r: 0, g: 0, b: 0, a: 0.5 });
  },
  5000,
  '测试 toRgbaString 函数'
);

tester.testFunction(
  'parseHexColor - 解析十六进制颜色',
  () => {
    parseHexColor('#FF0000');
    parseHexColor('#FD7086');
    parseHexColor('#F70');
    parseHexColor('#FF000080');
  },
  5000,
  '测试 parseHexColor 函数'
);

tester.testFunction(
  'parseRgbaColor - 解析RGBA颜色',
  () => {
    parseRgbaColor('rgba(255, 0, 0, 1)');
    parseRgbaColor('rgba(253, 112, 134, 0.9)');
  },
  5000,
  '测试 parseRgbaColor 函数'
);

tester.testFunction(
  'parseColorString - 解析颜色字符串',
  () => {
    parseColorString('#FF0000');
    parseColorString('rgba(255, 0, 0, 1)');
    parseColorString('rgb(255, 0, 0)');
  },
  5000,
  '测试 parseColorString 函数'
);

console.log('\n📅 Date 日期函数性能测试\n');

function formatDate(date, pattern = 'YYYY-MM-DD') {
  if (!date) return '';
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  const hours = String(d.getHours()).padStart(2, '0');
  const minutes = String(d.getMinutes()).padStart(2, '0');
  const seconds = String(d.getSeconds()).padStart(2, '0');
  return pattern.replace('YYYY', year).replace('MM', month).replace('DD', day).replace('HH', hours).replace('mm', minutes).replace('ss', seconds);
}

function getBeforeDate(date, option) {
  const { unit = 1, unitType = 'd', pattern = 'YYYY-MM-DD' } = option;
  const d = new Date(date);
  let result;
  switch (unitType) {
    case 'd': result = new Date(d.getTime() - unit * 24 * 60 * 60 * 1000); break;
    case 'M': result = new Date(d.getFullYear(), d.getMonth() - unit, d.getDate()); break;
    case 'y': result = new Date(d.getFullYear() - unit, d.getMonth(), d.getDate()); break;
    default: result = new Date(d.getTime() - unit * 24 * 60 * 60 * 1000);
  }
  return formatDate(result, pattern);
}

function getAfterDate(date, option) {
  const { unit = 1, unitType = 'd', pattern = 'YYYY-MM-DD' } = option;
  const d = new Date(date);
  let result;
  switch (unitType) {
    case 'd': result = new Date(d.getTime() + unit * 24 * 60 * 60 * 1000); break;
    case 'M': result = new Date(d.getFullYear(), d.getMonth() + unit, d.getDate()); break;
    case 'y': result = new Date(d.getFullYear() + unit, d.getMonth(), d.getDate()); break;
    default: result = new Date(d.getTime() + unit * 24 * 60 * 60 * 1000);
  }
  return formatDate(result, pattern);
}

function getDiff(start, end) {
  const d1 = new Date(start);
  const d2 = new Date(end);
  return Math.floor((d2.getTime() - d1.getTime()) / (1000 * 60 * 60 * 24));
}

function isLeapYear(year) {
  const y = parseInt(year, 10);
  return (y % 4 === 0 && y % 100 !== 0) || (y % 400 === 0);
}

function isBefore(start, end) {
  return new Date(start).getTime() < new Date(end).getTime();
}

function isAfter(start, end) {
  return new Date(start).getTime() > new Date(end).getTime();
}

tester.testFunction(
  'getTimestamp - 获取时间戳',
  () => {
    new Date('2024-03-01').getTime();
    new Date().getTime();
    new Date('2024-12-31 23:59:59').getTime();
  },
  5000,
  '测试 getTimestamp 函数'
);

tester.testFunction(
  'formatDate - 日期格式化',
  () => {
    formatDate('2024-03-01', 'YYYY-MM-DD');
    formatDate('2024-03-01', 'YYYY年MM月DD日');
    formatDate('2024-03-01 12:30:45', 'YYYY-MM-DD HH:mm:ss');
  },
  5000,
  '测试 formatDate 函数'
);

tester.testFunction(
  'getBeforeDate - 获取之前日期',
  () => {
    getBeforeDate('2024-03-02', { unit: 1, unitType: 'd', pattern: 'YYYY-MM-DD' });
    getBeforeDate('2024-03-02', { unit: 1, unitType: 'M', pattern: 'YYYY-MM-DD' });
    getBeforeDate('2024-03-02', { unit: 1, unitType: 'y', pattern: 'YYYY' });
  },
  5000,
  '测试 getBeforeDate 函数'
);

tester.testFunction(
  'getAfterDate - 获取之后日期',
  () => {
    getAfterDate('2024-03-01', { unit: 1, unitType: 'd', pattern: 'YYYY-MM-DD' });
    getAfterDate('2024-03-01', { unit: 1, unitType: 'M', pattern: 'YYYY-MM-DD' });
    getAfterDate('2024-03-01', { unit: 1, unitType: 'y', pattern: 'YYYY' });
  },
  5000,
  '测试 getAfterDate 函数'
);

tester.testFunction(
  'getDiff - 日期差值计算',
  () => {
    getDiff('2024-03-01', '2024-03-02');
    getDiff('2024-03-01', '2024-04-01');
    getDiff('2024-01-01', '2024-12-31');
  },
  5000,
  '测试 getDiff 函数'
);

tester.testFunction(
  'isLeapYear - 闰年判断',
  () => {
    isLeapYear(2024);
    isLeapYear(2025);
    isLeapYear(2000);
    isLeapYear(1900);
  },
  5000,
  '测试 isLeapYear 函数'
);

tester.testFunction(
  'isBefore - 日期之前判断',
  () => {
    isBefore('2024-03-01', '2024-03-02');
    isBefore('2024-03-02', '2024-03-01');
    isBefore('2024-03-01', '2024-03-01');
  },
  5000,
  '测试 isBefore 函数'
);

tester.testFunction(
  'isAfter - 日期之后判断',
  () => {
    isAfter('2024-03-02', '2024-03-01');
    isAfter('2024-03-01', '2024-03-02');
    isAfter('2024-03-01', '2024-03-01');
  },
  5000,
  '测试 isAfter 函数'
);

console.log('\n🔷 Symbol 函数性能测试\n');

function isSymbol(value) {
  return is(value, 'symbol');
}

tester.testFunction(
  'isSymbol - Symbol 判断',
  () => {
    isSymbol(Symbol('id'));
    isSymbol(Symbol());
    isSymbol('symbol');
    isSymbol(123);
    isSymbol({});
  },
  5000,
  '测试 isSymbol 函数'
);

console.log('\n🌐 Web DOM 函数性能测试\n');

function isNode(el) {
  if (hasTypeIn(el, ['null', 'undefined', 'NaN'])) return false;
  return el.nodeType === 1 || el.nodeType === 9 || el.nodeType === 11;
}

function hasClass(element, className) {
  return element.classList && element.classList.contains(className);
}

function addClass(element, className) {
  if (element.classList && !element.classList.contains(className)) {
    element.classList.add(className);
  }
}

function removeClass(element, className) {
  if (element.classList && element.classList.contains(className)) {
    element.classList.remove(className);
  }
}

function replaceClass(element, oldClass, newClass) {
  if (element.classList && element.classList.contains(oldClass)) {
    element.classList.replace(oldClass, newClass);
  }
}

function stringToNode(str) {
  if (!str) return null;
  const tempNode = document.createElement('div');
  tempNode.innerHTML = str;
  return tempNode.firstChild;
}

const mockParent = {
  nodeType: 1,
  insertAdjacentHTML: () => {},
  appendChild: () => {},
  removeChild: () => {},
  replaceChild: () => {},
  querySelector: () => ({ nodeType: 1, classList: { contains: () => true, add: () => {}, remove: () => {} } }),
  querySelectorAll: () => [{ nodeType: 1 }, { nodeType: 1 }],
  addEventListener: () => {},
  removeEventListener: () => {}
};

const mockElement = {
  nodeType: 1,
  tagName: 'DIV',
  classList: { contains: () => true, add: () => {}, remove: () => {}, replace: () => {} },
  cloneNode: () => ({ innerHTML: '' })
};

tester.testFunction(
  'isNode - DOM 节点判断',
  () => {
    isNode(mockElement);
    isNode({ nodeType: 1 });
    isNode({ nodeType: 9 });
    isNode(null);
    isNode(undefined);
  },
  5000,
  '测试 isNode 函数'
);

tester.testFunction(
  'hasClass - 类名判断',
  () => {
    hasClass(mockElement, 'test-class');
    hasClass({ classList: { contains: () => false } }, 'other-class');
  },
  10000,
  '测试 hasClass 函数'
);

tester.testFunction(
  'addClass - 添加类名',
  () => {
    const el = { classList: { contains: () => false, add: () => {} } };
    addClass(el, 'new-class');
  },
  5000,
  '测试 addClass 函数'
);

tester.testFunction(
  'removeClass - 移除类名',
  () => {
    const el = { classList: { contains: () => true, remove: () => {} } };
    removeClass(el, 'old-class');
  },
  5000,
  '测试 removeClass 函数'
);

tester.testFunction(
  'replaceClass - 替换类名',
  () => {
    const el = { classList: { contains: () => true, replace: () => {} } };
    replaceClass(el, 'old-class', 'new-class');
  },
  5000,
  '测试 replaceClass 函数'
);

tester.testFunction(
  'stringToNode - 字符串转节点',
  () => {
    stringToNode('<div>test</div>');
    stringToNode('<span>content</span>');
    stringToNode('');
  },
  5000,
  '测试 stringToNode 函数'
);

tester.testFunction(
  'getNode - 获取单个节点',
  () => {
    const { getNode } = require('../src/core/web/src/dom');
    getNode('#test-id');
    getNode('.test-class');
    getNode('div');
  },
  10000,
  '测试 getNode 函数'
);

tester.testFunction(
  'getNodes - 获取节点列表',
  () => {
    const { getNodes } = require('../src/core/web/src/dom');
    getNodes('.test-class');
    getNodes('li');
    getNodes('div');
  },
  10000,
  '测试 getNodes 函数'
);

tester.testFunction(
  'bind - 绑定事件',
  () => {
    const handler = () => {};
    mockParent.addEventListener('click', handler);
    mockParent.addEventListener('input', handler, true);
  },
  5000,
  '测试 bind 函数'
);

tester.testFunction(
  'unbind - 解绑事件',
  () => {
    const handler = () => {};
    mockParent.removeEventListener('click', handler);
  },
  5000,
  '测试 unbind 函数'
);

console.log('\n📰 Web Other 函数性能测试\n');

function transHightLight(str, keyWords, color = '#0053db') {
  let reg;
  if (Array.isArray(keyWords)) {
    reg = new RegExp(`(${keyWords.join('|')})`, 'ig');
  } else {
    reg = new RegExp(`(${keyWords})`, 'ig');
  }
  return str.replace(reg, `<span style="color:${color}">$1</span>`);
}

tester.testFunction(
  'transHightLight - 高亮转换',
  () => {
    transHightLight('Hello World', 'World');
    transHightLight('JavaScript is great', ['JavaScript', 'great']);
    transHightLight('Hello React and Vue', 'React', '#ff0000');
  },
  5000,
  '测试 transHightLight 函数'
);

console.log('\n💾 Web Cache 函数性能测试\n');

class Cache {
  constructor(storage, encode, decode) {
    this.#storage = storage || localStorage;
    this.#encode = encode || ((value) => value);
    this.#decode = decode || ((value) => value);
  }
  #storage;
  #encode;
  #decode;
  setCache(key, value, expire) {
    if (value === undefined) throw new Error('The value cannot be undefined !');
    const data = JSON.stringify({ value, expire });
    this.#storage.setItem(this.#encode(key), this.#encode(data));
  }
  getCache(encodeKey) {
    const key = this.#encode(encodeKey);
    const encodeData = this.#storage.getItem(key);
    if (!encodeData) return undefined;
    const data = JSON.parse(this.#decode(encodeData));
    if (data.expire && new Date().getTime() > data.expire) {
      this.removeCache(encodeKey);
      return undefined;
    }
    return data.value;
  }
  removeCache(key) {
    this.#storage.removeItem(this.#encode(key));
  }
  has(key) {
    return Object.keys(this.#storage).some(item => item === this.#encode(key));
  }
  length() {
    return Object.keys(this.#storage).length;
  }
  clear() {
    this.#storage.clear();
  }
}

function createCache(storage, parmas = { encode: (value) => value, decode: (value) => value }) {
  return new Cache(storage, parmas.encode, parmas.decode);
}

const mockStorage = {
  data: {},
  setItem(key, value) { this.data[key] = value; },
  getItem(key) { return this.data[key]; },
  removeItem(key) { delete this.data[key]; },
  clear() { this.data = {}; }
};

tester.testFunction(
  'createCache - 创建缓存实例',
  () => {
    const cache = createCache(mockStorage);
    cache.setCache('key1', 'value1', 60000);
    cache.getCache('key1');
    cache.has('key1');
    cache.removeCache('key1');
    cache.clear();
  },
  1000,
  '测试 createCache 基本操作'
);

tester.testFunction(
  'createCache - 大数据缓存',
  () => {
    const cache = createCache(mockStorage);
    const largeData = { items: Array(100).fill(0).map((_, i) => ({ id: i, data: `item${i}` })) };
    cache.setCache('largeData', largeData, 60000);
    cache.getCache('largeData');
  },
  500,
  '测试 createCache 处理大数据'
);

console.log('\n📡 Web EventBus 函数性能测试\n');

class EventBus {
  constructor() {
    this.#eventObj = {};
  }
  #eventObj;
  on(eventName, eventFn) {
    eventName in this.#eventObj ? this.#eventObj[eventName].push(eventFn) : this.#eventObj[eventName] = [eventFn];
  }
  emit(eventName, ...args) {
    this.#eventObj[eventName]?.forEach(fn => fn(...args));
  }
  off(eventName, fn) {
    if (!this.#eventObj[eventName]) return;
    this.#eventObj[eventName].forEach((item, index) => {
      if (item === fn) {
        this.#eventObj[eventName].splice(index, 1);
        if (this.#eventObj[eventName].length === 0) delete this.#eventObj[eventName];
      }
    });
  }
  clear(eventName) {
    delete this.#eventObj[eventName];
  }
}

tester.testFunction(
  'EventBus - 事件发布订阅',
  () => {
    const eventBus = new EventBus();
    const handler1 = () => {};
    const handler2 = () => {};
    eventBus.on('testEvent', handler1);
    eventBus.on('testEvent', handler2);
    eventBus.emit('testEvent', 'param1', 'param2');
    eventBus.off('testEvent', handler1);
    eventBus.clear('testEvent');
  },
  5000,
  '测试 EventBus on/off/emit/clear'
);

tester.testFunction(
  'EventBus - 多次触发',
  () => {
    const eventBus = new EventBus();
    let counter = 0;
    eventBus.on('click', () => { counter++; });
    for (let i = 0; i < 100; i++) {
      eventBus.emit('click');
    }
    return counter;
  },
  1000,
  '测试 EventBus 事件触发性能'
);

console.log('\n📊 Object 对象函数性能测试\n');

function isObjectLike(value) {
  return value !== null && (typeof value === 'object' || typeof value === 'function');
}

function isOriginDate(val) {
  return is(val, 'Date');
}

function isPromise(val) {
  return is(val, 'Promise');
}

function isRegExp(val) {
  return is(val, 'RegExp');
}

function isElement(val) {
  return is(val, 'object') && Boolean(val.tagName);
}

function isIE(win) {
  const userAgentArr = ['MSIE', 'TRIDENT', 'EDGE'];
  const userAgent = (win && win.navigator && win.navigator.userAgent) || '';
  return userAgentArr.some(item => userAgent.indexOf(item) > -1);
}

tester.testFunction(
  'isObjectLike - 类对象判断',
  () => {
    isObjectLike({});
    isObjectLike([]);
    isObjectLike(null);
    isObjectLike(() => {});
    isObjectLike('string');
    isObjectLike(123);
  },
  10000,
  '测试 isObjectLike 函数'
);

tester.testFunction(
  'isOriginDate - 日期对象判断',
  () => {
    isOriginDate(new Date());
    isOriginDate('2024-03-01');
    isOriginDate(1234567890);
    isOriginDate({});
  },
  5000,
  '测试 isOriginDate 函数'
);

tester.testFunction(
  'isPromise - Promise 判断',
  () => {
    isPromise(new Promise(() => {}));
    isPromise(Promise.resolve());
    isPromise(async () => {});
    isPromise('promise');
    isPromise({ then: 1 });
  },
  5000,
  '测试 isPromise 函数'
);

tester.testFunction(
  'isRegExp - 正则表达式判断',
  () => {
    isRegExp(/abc/);
    isRegExp(new RegExp('def'));
    isRegExp('abc');
    isRegExp({});
  },
  5000,
  '测试 isRegExp 函数'
);

tester.testFunction(
  'isElement - DOM 元素判断',
  () => {
    isElement({ tagName: 'DIV' });
    isElement({ tagName: 'SPAN' });
    isElement('not an element');
    isElement({});
    isElement(null);
  },
  5000,
  '测试 isElement 函数'
);

tester.testFunction(
  'isIE - IE 浏览器判断',
  () => {
    const ieUserAgent = { navigator: { userAgent: 'MSIE 10.0' } };
    const edgeUserAgent = { navigator: { userAgent: 'Mozilla/5.0' } };
    const chromeUserAgent = { navigator: { userAgent: 'Chrome/120.0.0.0' } };
    isIE(ieUserAgent);
    isIE(edgeUserAgent);
    isIE(chromeUserAgent);
  },
  5000,
  '测试 isIE 函数'
);

console.log('\n⚠️ 边界情况性能测试\n');

tester.testFunction(
  'getChunkArray - 空数组',
  () => {
    getChunkArray([], 10);
  },
  10000,
  '处理空数组'
);

tester.testFunction(
  'getChunkArray - 单元素数组',
  () => {
    getChunkArray([1], 10);
  },
  10000,
  '处理单元素数组'
);

tester.testFunction(
  'getChunkArray - 块大小大于数组',
  () => {
    getChunkArray([1, 2, 3], 10);
  },
  10000,
  '块大小大于数组长度'
);

tester.testFunction(
  'deepClone - null 和 undefined',
  () => {
    deepClone(null);
    deepClone(undefined);
    deepClone(123);
    deepClone('string');
    deepClone(true);
  },
  5000,
  '测试 deepClone 处理基本类型'
);

tester.testFunction(
  'calc - 边界计算',
  () => {
    calc(0.1, 0.2);
    calc(1, 1, '/');
  },
  5000,
  '测试 calc 边界情况'
);

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

tester.testFunction(
  '深度嵌套对象克隆',
  () => {
    let obj = {};
    for (let i = 0; i < 50; i++) {
      obj = { nested: obj, value: i, data: { array: Array(100).fill(0) } };
    }
    return deepClone(obj);
  },
  10,
  '测试深度嵌套对象的克隆性能'
);

console.log('\n========================================');
console.log('📄 生成性能测试报告...\n');

tester.printSummary();

const resultsPath = require('path').resolve('./performance-results.json');
tester.saveResults(resultsPath);

console.log(`\n✅ 完整性能测试完成！结果已保存到: ${resultsPath}`);
console.log('💡 运行以下命令生成详细报告:');
console.log('   npm run doc:performanceReport');
console.log('========================================\n');