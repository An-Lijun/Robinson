
/**
 * @description 函数“getStringType”以字符串形式返回输入值的类型。
 * @param {any} value - “value”参数可以是任何数据类型或您想要确定其类型的值。
 * @returns 返回输入值类型的字符串表示形式 如 [object object]。
 * @example
 * ```JavaScript
 *    let num =123; getStringType(num) => '[object number]'
 *    let obj ={}; getStringType(obj) => '[object object]'
 * ```
 */
export default function getStringType (value:any):String {
  return Object.prototype.toString.call(value).toLowerCase();
}