/**
 * @description 该函数检查值是否为简单值（数字、字符串、布尔值、符号、null、undefined 或 bigint）或复杂值（函数、对象、数组、集合、映射）。
 * @param {any} value - 参数“value”的类型为“any”，这意味着它可以接受任何类型的值。
 * @returns 函数 isSimpleValue 返回一个布尔值。
 * @example
 * ```JavaScript
 *    let num =123; isSimpleValue(num) => true
 *    let obj ={};  isSimpleValue(obj) => false
 * ```
 */
export default function isSimpleType (value:any):boolean {
  const type = typeof value;
  // 简单值 number string boolean symbol null undefined bigint  // 复杂值function Object array set map
  if (value === null) {return true;}
  return type !== 'object' && type !== 'function';
}