import { is } from '../../index';

/**
 * 该函数检查值是否为数字。
 * @param {any} value - 参数“value”可以是任何数据类型。
 * @returns 一个布尔值。
 * @example
 * ```JavaScript
 *  let n = 7; isNumber(n)=>true
 *  let n1 ='8';isNumber(n)=>false
 * ```
 */
export default function isNumber (value:any):boolean {
  return typeof value === 'number' || is(value, 'Number');
}
