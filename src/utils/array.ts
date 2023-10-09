import { isEmpty } from './common';

/**
 * @description 接受一个任意类型判断该类型是否是数组并返回。
 * @param {any} value - 参数“value”的类型为“any”，这意味着它可以接受任何数据类型。
 * @returns 一个布尔值。
 * @example
 * ```javascript
 *    let a ="789"; isArray(a) => false
 *    let n=[] isArray(n) => true
 * ```
 */
export function isArray (value:any):boolean {
  return Array.isArray(value);
}

/**
 * `chunkArray` 函数接受一个数组和一个大小参数，并返回一个新数组，其中返回原始数组被分割成指定大小的较小数组。
 * @param array - `array` 参数是任何类型的数组。它是需要被分成更小的数组的数组。
 * @param {number} [size=1] - “size”参数确定数组每个块中应包含的元素数量。默认情况下，它设置为 1，这意味着每个元素都是它自己的块。
 * @returns 返回一个新二维数组,数组每一项的长度为第二个参数的长度
 * @example
 * ```JavaScript
 *    let arr =[1,2,3,4]; chunkArray(arr,2)=> [[1,2],[3,4]]
 *    let obj ={} ;chunkArray(arr,2)=> Error(not a array)
 * ```
 */

export function chunkArray (array:Array<any>, size:number = 1):Array<Array<any>> {
  if (!isArray(array)) {throw new TypeError('params is not a array');}
  let newArr:Array<any> = [];
  array.forEach((element, index) => {
    if (index % size === 0) {
      return newArr.push([element]);
    }
    return newArr.at(-1).push(element);
  });
  return newArr;
}

/**
 * @description 函数“getRelArray”接受一个数组作为输入，并返回一个包含所有非空元素的新数组。
 * @param {Array} array - 参数“array”是任意类型的数组。
 * @returns 过滤掉空数据的新数组。
 * @example
 * ```JavaScript
 *    let arr =[1,2,3,null,undefined,4,[],{},NaN]; getRelArray(arr)=> [1,2,3,4]
 * ```
 */
export function getRelArray (array:Array<any>):Array<any> {
  if (!isArray(array)) {throw new Error('not a array');}
  return array.filter(item=>!isEmpty(item));
}

/**
 * @param {Array} array
 * @param {Array} exArray
 * @returns 返回排除数组项的新数组
 */
// export function getExcepted (array:Array<any>, exArray:Array<any>) {
//   // array.map(item)
//   // return array.map();
// }