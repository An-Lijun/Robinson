
/**
 * @description 该函数检查值是否为引用类型。
 * @param {any} value - “value”参数的类型为“any”，这意味着它可以接受任何类型的值。
 * @returns 一个布尔值。
 * @example
 * ```JavaScript
 *    let num =123; isReferenceType(num) => true
 *    let obj ={};  isReferenceType(obj) => false
 * ```
 */
export default function isReferenceType (value:any):boolean {
  return value instanceof Object;
}
