/**
 * @description 函数“isNull”检查给定值是否为空。
 * @param {any} value - 参数“value”的类型为“any”，这意味着它可以接受任何数据类型。
 * @returns 函数 isNull 返回一个布尔值。
 * ```JavaScript
 *  let a =null; isNull(a) => true
 * ```
 */
export default function isNull (value:any):boolean {
  return value === null;
}