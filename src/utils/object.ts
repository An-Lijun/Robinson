/**
 * @description 该函数检查值是否是类对象like 类型。
 * @param {any} value - 参数“value”的类型为“any”，这意味着它可以是任何数据类型。
 * @returns 一个布尔值。
 */
export function isObjectLike (value:any):boolean {
  return value !== null && typeof value === 'object';
}
//注意这里是 no function 和null 的object
// export function isObject (value) {

// }

// export function isEqualObj (value, value2) {

// }