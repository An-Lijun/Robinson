import { deepClone } from '../../function/index';
import { isEmpty } from '../../common/index';

/**
 * @beta
 * @description 接受一个任意类型判断该类型是否是数组并返回。
 * @param {any} value - 参数“value”的类型为“any”，这意味着它可以接受任何数据类型。
 * @returns {boolean} 一个布尔值。
 * @example
 * ```javascript
 *    let a ="789";
 *    isArray(a) // false
 *    let n=[]
 *    isArray(n)   //true
 * ```
 */
export function isArray (value:any):boolean {
  return Array.isArray(value);
}

/**
 * @beta
 * @description 函数“getRelArray”接受一个数组作为输入，并返回一个包含所有非空元素的新数组。
 * @param {Array} array - 参数“array”是任意类型的数组。
 * @returns {Array} 过滤掉空数据的新数组。
 * @example
 * ```JavaScript
 *    let arr =[1,2,3,null,undefined,4,[],{},NaN];
 *    getRelArray(arr) // [1,2,3,4]
 * ```
 */
export function getRelArray (array:Array<any>):Array<any> {
  if (!isArray(array)) {throw new TypeError('not a array');}
  return array.filter(item=>!isEmpty(item));
}

/**
 * @beta
 * @description `chunkArray` 函数接受一个数组和一个大小参数，并返回一个新数组，其中原始数组被分割成指定大小的较小数组。
 * @param {Array} array - `array` 参数是任何类型的数组。它是需要被分成更小的数组的数组。
 * @param {number} [size=1] - "size"参数指定数组每个块中应包含的元素数量。默认情况下，它设置为 1，这意味着每个元素将位于其自己的单独块中。
 * @returns {Array<Array<any>>} 数组的数组。每个内部数组都包含原始数组中的一块元素。每个块的大小由"size"参数确定。
 * @example
 * ```JavaScript
 * let a=[1,2,3,4,5,6]
 *  getChunkArray(a,2) // [[1,2],[3,4],[5,6]]
 * let a=[1,2,3,4,5,6]
 *  getChunkArray(a,3) // [[1,2,3],[4,5,6]]
 * let a={}
 *  getChunkArray(a,3) // params is not a array
 * ```
 */
export function getChunkArray<T>(array: T[], size: number = 1): T[][] {
  if (!isArray(array)) { throw new TypeError('params is not a array'); }
  if (size <= 0) { return []; }
  
  const result: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}



/**
 * @beta
 * @description 函数 `getToggleArray` 接受一个数组和一个项目，
 * 如果数组包含该项目则移除它，如果不包含则添加它，返回处理后的新数组。
 * @param {Array} array - 要处理的数组
 * @param {any} item - 要切换的项目
 * @returns {Array} 处理后的新数组
 * @example
 * ```JavaScript
 * let arr = [1, 2, 3];
 * getToggleArray(arr, 4); // [1, 2, 3, 4]
 * getToggleArray(arr, 2); // [1, 3]
 * ```
 */
export function getToggleArray<T>(array: T[], item: T): T[] {
  const arr = deepClone(array);
  const index = arr.findIndex((element: T) => {
    // 对于对象和数组，使用 JSON 序列化比较内容
    if (typeof element === 'object' && element !== null && typeof item === 'object' && item !== null) {
      return JSON.stringify(element) === JSON.stringify(item);
    }
    // 对于原始类型，使用严格相等比较
    return element === item;
  });
  
  if (index !== -1) {
    arr.splice(index, 1);
  } else {
    arr.push(item);
  }
  return arr;
}


/**
 * 深度比较两个值是否相等
 * @param {any} a - 第一个值
 * @param {any} b - 第二个值
 * @returns {boolean} 是否相等
 */
function isEqual(a: any, b: any): boolean {
  // 处理 NaN
  if (Number.isNaN(a) && Number.isNaN(b)) return true;
  
  // 处理 -0 和 0
  if (Object.is(a, b)) return true;
  
  // 处理 null 和 undefined
  if (a == null || b == null) return a === b;
  
  // 处理基本类型
  if (typeof a !== 'object' || typeof b !== 'object') return a === b;
  
  // 处理数组
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false;
    return a.every((item, index) => isEqual(item, b[index]));
  }
  
  // 处理对象
  if (Array.isArray(a) || Array.isArray(b)) return false;
  
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);
  
  if (keysA.length !== keysB.length) return false;
  
  return keysA.every(key => isEqual(a[key], b[key]));
}

/**
 * 从数组中提取唯一值（去重）
 * @param {Array} array - 原数组
 * @returns {Array} 去重后的新数组
 * @example
 * ```JavaScript
 * getUniqueValues([1, 2, 2, 3, 3, 3]); // [1, 2, 3]
 * getUniqueValues(['a', 'b', 'a', 'c']); // ['a', 'b', 'c']
 * getUniqueValues([{id:1}, {id:2}, {id:1}]); // [{id:1}, {id:2}]
 * ```
 */
export function getUniqueValues<T>(array: T[]): T[] {
  if (!Array.isArray(array)) return [];

  const arr = deepClone(array);

  // 基本类型去重：Set 最简单
  // return [...new Set(arr)]

  // 对象/引用类型去重（使用深度比较）
  const result: T[] = [];
  for (const item of arr) {
    // 检查是否已存在相同的元素
    const exists = result.some(existing => isEqual(existing, item));
    if (!exists) {
      result.push(item);
    }
  }
  return result;
}



/**
 * 根据指定的键或条件将数组元素分组
 * @param {Array} array - 原数组
 * @param {string|function} groupBy - 分组键或分组函数
 * @returns {Array} 分组后的二维数组，每个子数组代表一个分组
 * @example
 * ```JavaScript
 * // 根据属性分组
 * getGroupArray([{age: 20, name: 'a'}, {age: 20, name: 'b'}, {age: 30, name: 'c'}], 'age');
 * // => [[{age: 20, name: 'a'}, {age: 20, name: 'b'}], [{age: 30, name: 'c'}]]
 * 
 * // 根据条件分组
 * getGroupArray([1, 2, 3, 4, 5], num => num % 2 === 0 ? 'even' : 'odd');
 * // => [[1, 3, 5], [2, 4]]
 * ```
 */
export function getGroupArray<T>(array: T[], groupBy: keyof T | ((item: T) => string | number)): T[][] {
  if (!Array.isArray(array)) return [];
  
  const groups: Record<string | number, T[]> = {};
  
  array.forEach(item => {
    let key: string | number;
    
    if (typeof groupBy === 'function') {
      // 使用函数获取分组键
      key = groupBy(item);
    } else {
      // 使用属性作为分组键
      key = item[groupBy];
    }
    
    // 确保键存在且不为 undefined
    if (key !== undefined) {
      if (!groups[key]) {
        groups[key] = [];
      }
      groups[key].push(item);
    }
  });
  
  // 将对象转换为二维数组
  return Object.values(groups);
}