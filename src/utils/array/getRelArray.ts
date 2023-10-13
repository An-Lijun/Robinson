import { isEmpty } from '../common/index';
import isArray from './isArray';
/**
 * @description 函数“getRelArray”接受一个数组作为输入，并返回一个包含所有非空元素的新数组。
 * @param {Array} array - 参数“array”是任意类型的数组。
 * @returns 过滤掉空数据的新数组。
 * @example
 * ```JavaScript
 *    let arr =[1,2,3,null,undefined,4,[],{},NaN]; getRelArray(arr)=> [1,2,3,4]
 * ```
 */
export default function getRelArray (array:Array<any>):Array<any> {
  if (!isArray(array)) {throw new TypeError('not a array');}
  return array.filter(item=>!isEmpty(item));
}