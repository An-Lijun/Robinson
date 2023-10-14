/**
 * 该函数检查值是否为 NaN。
 * @param {any} value - value 参数可以是任何数据类型，例如数字、字符串或对象。
 * @returns 一个布尔值，指示给定值是否为 NaN（非数字）。
 * @example
 * ```JavaScript
 *    let str = 'ad1'; isNaN(str)=> true
 *    let n = 1; isNaN(n)=>false
 * ```
 */
export default function isNaN (value:any):boolean {
  return Object.is(value, NaN);
}