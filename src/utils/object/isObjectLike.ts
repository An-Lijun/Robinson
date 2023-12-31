/**
 * @description 该函数检查值是否是类对象like 类型。
 * @param {any} value - 参数“value”的类型为“any”，这意味着它可以是任何数据类型。
 * @returns 一个布尔值。
 * ```JavaScript
 *  let a ={} isObjectLike(a)=> true
 *  let a =null isObjectLike(a)=> false
 *  let a =new WeakSet(); isObjectLike(a)=> true
 *  let a = []; isObjectLike(a)=> true
 * ```
 */
export default function isObjectLike (value:any):boolean {
  return value !== null && typeof value === 'object';
}