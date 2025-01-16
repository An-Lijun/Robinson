import { isEmpty } from '../../common/index';

/**
 * @beta
 * @description 接受一个任意类型判断该类型是否是数组并返回。
 * @param {any} value - 参数“value”的类型为“any”，这意味着它可以接受任何数据类型。
 * @returns 一个布尔值。
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
 * @returns 过滤掉空数据的新数组。
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
 * @param {Array} - `array` 参数是任何类型的数组。它是需要被分成更小的数组的数组。
 * @param {number} [size=1] - “size”参数指定数组每个块中应包含的元素数量。默认情况下，它设置为 1，这意味着每个元素将位于其自己的单独块中。
 * @returns 数组的数组。每个内部数组都包含原始数组中的一块元素。每个块的大小由“size”参数确定。
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
export function getChunkArray (array:Array<any>, size:number = 1):Array<Array<any>> {
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
