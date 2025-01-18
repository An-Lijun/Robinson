import { isSimpleType, is } from '../../common/index';

interface deepData {
  [index: string]: any;
}
interface DAMNU_ENABLE {
  [key: string]: any;
}
interface optionsObj {
  key: string;
  keyValue: string;
  label: string;
  type: string;
}

type options = string | optionsObj;
type enumData = Object | Array<Object>;
type result = Object | string | undefined;

/**
 * @beta
 * @description 该函数检查给定值是否是函数。
 * @param {any} value - “value”参数是我们想要检查它是否是函数的任何值。
 * @returns {boolean} - 一个布尔值。
 * @example
 * isFunction(() => {}); // 返回 true
 * isFunction(123); // 返回 false
 */
export function isFunction (value: any): boolean {
  return is(value, 'Function') || is(value, 'AsyncFunction');
}

/**
 * @beta
 * @description “deepClone”函数用于创建对象或数组的深层副本，包括处理复杂类型，例如集合、映射和符号。
 * @param {any} originalValue - OriginalValue 参数是您要深度克隆的值。它可以是任何数据类型，包括对象、数组、集合、映射、函数以及字符串或数字等简单值。
 * @returns {any} - 函数“deepClone”返回“originalValue”参数的深度克隆。
 * @example
 * ```JavaScript
 *    let data = {
 *      a: [1, 2]
 *    };
 *    let cloneData = deepClone(data);
 * ```
 */
export function deepClone (originalValue: any): any {
  //步骤 零 : 如果值是Symbol
  if (is(originalValue, 'symbol')) {
    return Symbol(originalValue.description);
  }
  //步骤 一 :如果是普通值则直接返回原值
  if (isSimpleType(originalValue)) { return originalValue; }
  //步骤 二 :如果是Set 集合
  if (originalValue instanceof Set) {
    let set = new Set();
    for (const iterator of originalValue) {
      set.add(deepClone(iterator));
    }
    return set;
  }
  // 步骤 三 :如果是Map 集合
  if (originalValue instanceof Map) {
    let map = new Map();
    for (const iterator of originalValue) {
      map.set(deepClone(iterator[0]), deepClone(iterator[1]));
    }
    return map;
  }
  // 步骤四 : 如果是函数则共用一个函数
  if (typeof originalValue === 'function') {
    return originalValue;
  }
  //步骤 五 : 看他是对象还是数组并创建一个新的,
  // Array.isArray(originalValue)
  let newValue: deepData = Array.isArray(originalValue) ? [] : {};
  //步骤 六 : 遍历每个key赛到新数据中
  for (const key in originalValue) {
    //由于这个key可能是一个复杂的类型 也可能是一个简单的类型 所以这里递归的去获取一下
    newValue[key] = deepClone(originalValue[key]);
  }
  //步骤 七 : 如果key是Symbol 由于symbol 不会被 for of 遍历出来所以单独处理
  const symbolKeys = Object.getOwnPropertySymbols(originalValue);
  for (const symbolKey of symbolKeys) {
    newValue[Symbol(symbolKey.description) as any] = deepClone(originalValue[symbolKey]);
  }
  return newValue;
}

/**
 * @beta
 * @description 函数“asignData”将属性从“obj2”复制到“obj1”，并可选择执行附加函数。
 * @param {DAMNU_ENABLE} obj1 - obj1 是第一个将被分配数据的对象。
 * @param {DAMNU_ENABLE} obj2 - obj2 是一个对象，其中包含将根据匹配键分配给 obj1 的数据。
 * @returns {DAMNU_ENABLE} - 合并后的对象。
 * @example
 * ```JavaScript
 * let o = {
 *   a: 123,
 * };
 * let b = {
 *   a: 456,
 *   b: 111,
 * };
 * let result = asignData(o, b);
 * // result: { a: 456 }
 * ```
 */
export function asignData (obj1: DAMNU_ENABLE, obj2: DAMNU_ENABLE): DAMNU_ENABLE {
  let obj = deepClone(obj1);
  for (const key in obj1) {
    if (Object.hasOwnProperty.call(obj2, key)) {
      obj[key] = deepClone(obj2[key]);
    }
  }
  return obj;
}

/**
 * @beta
 * @description 映射函数可以将数据进行枚举映射。
 * @param {enumData} enumData - 枚举数据，可以是对象或数组。
 * @param {options} options - 选项，可以是字符串或对象。
 * @param {string | number} expty - 如果枚举中寻找不到，返回的默认值，默认为 '--'。
 * @returns {result} - 映射后的结果。
 * @example
 * ```JavaScript
 * let enum1 = [{ value: 'USD', label: '美元' }, { value: 'AUD', label: '澳大利亚元' }];
 * // 返回 { value: 'USD', label: '美元' }
 * mapping(enum1, { key: 'value', keyValue: 'USD', label: 'label', type: 'object' });
 * // 返回 '美元'
 * mapping(enum1, { key: 'value', keyValue: 'USD', label: 'label', type: 'value' });
 * let enum2 = { USD: '美元', AUD: '澳大利亚元' };
 * // 返回 '美元'
 * mapping(enum2, 'USD');
 * ```
 */
export function mapping (enumData: enumData, options: options, expty = '--'): result {
  if (Array.isArray(enumData) && is(options, 'object')) {
    // @ts-ignore
    let data = enumData.find(item => item[options.key] === options.keyValue);
    if (data) {
      // @ts-ignore
      switch (options.type) {
      case 'value':
        // @ts-ignore
        return data[options.label] || expty;
      case 'object':
        return data;
      default:
        return data;
      }
    }
    return expty;
  } else if (Object.prototype.toString.call(enumData) === '[object Object]') {
    // @ts-ignore
    if (options in enumData) { return enumData[options]; }
    return expty;
  }
  return expty;
}

/**
 * @beta
 * @description 组合函数，将多个函数从右到左依次调用。
 * @param {...Function} fns - 要组合的函数。
 * @returns {Function} - 返回一个组合后的函数。
 * @example
 * ```JavaScript
 * const addOne = x => x + 1;
 * const double = x => x * 2;
 * const composed = compose(double, addOne);
 * composed(2);// 返回 6
 * ```
 */
export function compose (...fns: Array<Function>): Function {
  if (!fns.length) {
    return ()=>void 0;
  }
  return function (...args:Array<any>) {
    return fns.reduceRight((acc, fn) => fn(acc), fns.pop()(...args));
  };
}
/**
 * @beta
 * @description 柯里化函数接受一个函数作为输入并返回一个新函数，该函数可以使用多个参数或以柯里化方式调用。
 * @param {Function} fn - 参数“fn”是我们要应用柯里化的函数。
 * @returns {Function} - 正在返回柯里化函数。
 * @example
 * ```JavaScript
 * const add = (a, b) => a + b;
 * const curriedAdd = currying(add);
 * curriedAdd(2)(3);// 返回 5
 * ```
 */
export function currying (fn: Function): Function {
  return function curr (...args: any) {
    if (args.length >= fn.length) {
      return fn(...args);
    }
    return function (...newArr: any) {
      return curr(...args.concat(newArr));
    };
  };
}

/**
 * @beta
 * @description 防抖函数，限制函数调用的频率。
 * @param {Function} fn - “fn”参数是您想要限制的函数。
 * @param {number} delay - “delay”参数是函数调用之间的最小时间间隔（以毫秒为单位）。
 * @param {boolean} isLimmediate - “isLimmediate”参数决定该函数是在调用时立即执行还是等待指定的“delay”时间过去后才第一次执行该函数。
 * @returns {Function} - 返回一个防抖函数。
 * @example
 * ```JavaScript
 * const log = () => console.log('Logged');
 * const debouncedLog = debounce(log, 1000, true);
 * debouncedLog(); // 立即执行
 * debouncedLog(); // 1秒内再次调用不会执行
 * debouncedLog.cancel(); // 取消执行
 * ```
 */
export function debounce (fn: Function, delay: number, isLimmediate: boolean = false): Function {
  let timer: any = null;
  let limmediate = isLimmediate;
  //函数体
  const _debounceFn = function (...args: any) {
    return new Promise((resolve, reject) => {
      try {
        //如果有延迟回调则先清除
        if (timer) { clearTimeout(timer); }

        //如果是true 那就以为这第一次需要马上执行
        if (limmediate) {
          limmediate = false;
          resolve(fn.apply(this, args));
          return;
        }

        //正常的执行
        timer = setTimeout(() => {
          //绑定this并传参数
          resolve(fn.apply(this, args));
          timer = null;
          limmediate = isLimmediate;
        }, delay);

      } catch (error) {
        reject(error);
      }
    });
  };
  //取消执行
  _debounceFn.cancel = function () {
    if (timer) { clearTimeout(timer); }
  };
  return _debounceFn;
}

/**
 * @beta
 * @description 从左向右执行函数。
 * @param {...Function} fns - 要组合的函数。
 * @returns {Function} - 返回一个组合后的函数。
 * @example
 * ```JavaScript
 * const addOne = x => x + 1;
 * const double = x => x * 2;
 * const piped = pipe(addOne, double);
 * piped(2);// 返回 6
 * ```
 */
export function pipe (...fns: Array<Function>): Function {

  if (!fns.length) {
    return ()=>void 0;
  }
  return function (...args:Array<any>) {
    return fns.reduce((acc, fn) => fn(acc), fns.shift()(...args));
  };
}

/**
 * @beta
 * @description 节流函数，限制函数调用的频率。
 * @param {Function} fn - “fn”参数是您想要限制的函数。
 * @param {number} immediate - “immediate”参数是函数调用之间的最小时间间隔（以毫秒为单位）。
 * @param {boolean} leading - “leading”参数决定该函数是在调用时立即执行还是等待指定的“immediate”时间过去后才第一次执行该函数。
 * @param {boolean} trailing - “trailing”参数决定是否应在上次调用后立即调用节流函数，即使指定的时间间隔（“immediate”）尚未过去。
 * @returns {Function} - 返回一个节流函数。
 * @example
 * ```JavaScript
 * const log = () => console.log('Logged');
 * const throttledLog = throttle(log, 1000, true, false);
 * throttledLog(); // 立即执行
 * throttledLog(); // 1秒内再次调用不会执行
 * throttledLog.cancel(); // 取消执行
 * ```
 */
// eslint-disable-next-line
export function throttle (fn: Function, immediate: number, leading = true, trailing = false): Function {
  let startTime = 0;
  let timer: any = null;
  const _throttle = function (...args: any) {
    return new Promise((resolve, reject) => {
      try {
        let nowTime = new Date().getTime();
        if (!leading && startTime === 0) {
          startTime = nowTime;
        }
        const waitTime = immediate - (nowTime - startTime);
        if (waitTime <= 0) {
          startTime = nowTime;
          timer = null;
          resolve(fn.apply(this, args));
          return;
        }
        if (trailing && !timer) {
          timer = setTimeout(() => {
            startTime = new Date().getTime();
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