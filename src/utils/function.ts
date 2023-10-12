import { isSimpleType, is } from './common/index';

/**
 * @description 该函数检查给定值是函数还是异步函数。
 * @param {any} value - “value”参数是我们想要检查它是否是函数的任何值。
 * @returns 一个布尔值。
 */
export function isFunction (value:any):boolean {
  return is(value, 'Function') || is(value, 'AsyncFunction');
}
/**
 * 参数1 回调
 * 参数2 延迟时间
 * 参数3 第一次是否立即执行
 *
 * 返回值 返回一个 防抖函数,这个防抖函数的返回值是  debounce函数中传入的第一个函数参数的返回值
 *      const fn =debounce(function (){},time)
 *      取消执行 fn.cancel();
 * 功能
 *    1. 防抖
 *    2. 取消执行
 *    3. 绑定this 传入参数
 *    4. 首次立即执行
 *    5. 返回返回值
 */
// export function debounce (fn:Function, delay:number, isLimmediate:boolean = false) {
//   let timer = null;
//   let limmediate = isLimmediate;
//   //函数体
//   const _debounceFn = function (...args:any) {
//     return new Promise((resolve, reject) => {
//       try {
//         //如果有延迟回调则先清除
//         if (timer) {clearTimeout(timer);}

//         //如果是true 那就以为这第一次需要马上执行
//         if (limmediate) {
//           limmediate = false;
//           return resolve(fn.apply(this, args));
//         }

//         //正常的执行
//         timer = setTimeout(() => {
//           //绑定this并传参数
//           resolve(fn.apply(this, args));
//           timer = null;
//           limmediate = isLimmediate;
//         }, delay);

//       } catch (error) {
//         reject(error);
//       }
//     });
//   };
//   //取消执行
//   _debounceFn.cancel = function () {
//     if (timer) {clearTimeout(timer);}
//   };
//   return _debounceFn;
// }

// // 节流
// export function throttle (fn, immediate, leading = true, trailing = false) {
//   let startTime = 0;
//   let timer = null;
//   const _throttle = function (...args) {
//     return new Promise((resolve, reject) => {
//       try {
//         let nowTime = new Date().getTime();
//         if (!leading && startTime === 0) {
//           startTime = nowTime;
//         }
//         const waitTime = immediate - (nowTime - startTime);
//         if (waitTime <= 0) {
//           startTime = nowTime;
//           timer = null;
//           return resolve(fn.apply(this, args));
//         }
//         if (trailing && !timer) {
//           timer = setTimeout(() => {
//             startTime = new Date().getTime();
//             timer = null;
//             return resolve(fn.apply(this, args));
//           }, waitTime);
//         }
//       } catch (error) {
//         reject(error);
//       }
//     });
//   };
//   _throttle.cancel = function () {
//     clearTimeout(timer);
//     startTime = 0;
//     timer = null;
//   };
//   return _throttle;
// }

//柯里化

/**
 * @description 柯里化函数接受一个函数作为输入并返回一个新函数，该函数可以使用多个参数或以柯里化方式调用。
 * @param {Function} fn - 参数“fn”是我们要应用柯里化的函数。
 * @returns 正在返回柯里化函数。
 */
export function currying (fn:Function) {
  return function curr (...args:any) {
    if (args.length >= fn.length) {
      return fn(...args);
    }
    return function (...newArr:any) {
      return curr(...args.concat(newArr));
    };

  };
}

interface deepData {
  [index:string ]:any
}

/**
 * @description “deepClone”函数用于创建对象或数组的深层副本，包括处理复杂类型，例如集合、映射和符号。
 * @param {any} originalValue - OriginalValue 参数是您要深度克隆的值。它可以是任何数据类型，包括对象、数组、集合、映射、函数以及字符串或数字等简单值。
 * @returns 函数“deepClone”返回“originalValue”参数的深度克隆。
 */
export function deepClone (originalValue:any):any {
  //步骤 零 : 如果值是Symbol
  if (is(originalValue, 'symbol')) {
    return Symbol(originalValue.description);
  }
  //步骤 一 :如果是普通值则直接返回原值
  if (isSimpleType(originalValue)) {return originalValue;}
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
  let newValue:deepData = Array.isArray(originalValue) ? [] : {};
  //步骤 六 : 遍历每个key赛到新数据中
  for (const key in originalValue) {
    //由于这个key可能是一个复杂的类型 也可能是一个简单的类型 所以这里递归的去获取一下
    newValue[key] = deepClone(originalValue[key]);
  }
  //步骤 七 : 如果key是Symbol 由于symbol 不会被 for of 遍历出来所以单独处理
  const symbolKeys = Object.getOwnPropertySymbols(originalValue);
  for (const symbolKey of symbolKeys) {
    newValue[Symbol(symbolKey.description)as any] = deepClone(originalValue[symbolKey]);
  }
  return newValue;
}

//顺序执行
// export function sequenceFn () {

// }

/**
 * @description getRandom 函数生成指定范围内具有指定小数位数的随机数。
 * @param {number} min - “min”参数表示要生成随机数的范围的最小值。
 * @param {number} max - “max”参数表示您想要在随机数范围内生成的最大值。
 * @param {number} [pointParam=0] - `pointParam` 参数是一个可选参数，它指定将随机数舍入到的小数位数。如果未提供“pointParam”或设置为
 * 0，则随机数将以整数形式返回。如果提供了“pointParam”并且大于
 * @returns 指定最小值和最大值之间的随机数，具有指定的小数位数。
 */
export function getRandom (min:number, max:number, pointParam:number = 0):number {
  let point = pointParam;
  let res = `${Math.random() * (max - min + 1) + min }`;
  point && point++;
  return Number(res.slice(0, res.lastIndexOf('.') + point));
}
