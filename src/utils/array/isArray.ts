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
export default function isArray (value:any):boolean {
  return Array.isArray(value);
}