/**
 * @description 函数“isInteger”检查给定值是否为整数,原生的判断已经很好用了 es6+。
 * @param {any} value - “value”参数可以是任何数据类型，例如数字、字符串、布尔值或对象。该函数将检查该值是否为整数，并返回一个布尔值来指示它是否为整数。
 * @returns 一个布尔值，指示给定值是否为整数。
 * @example
 * ```JavaScript
 *  let n ='1.1'; isInteger(n)=>false
 *  let n2 = 2; isInteger(n2)=>true
 * ```
*/
export default function isInt (value:any):boolean {
  return Number.isInteger(value);
}