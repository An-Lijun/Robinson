/**
 * @description 函数“isUndefined”检查值是否未定义。
 * @param {any} value - “value”参数的类型为“any”，这意味着它可以接受任何类型的值。
 * @returns 函数 isUndefined 返回一个布尔值。
 * @example
 * ```JavaScript
 * let a; isUndefined(a) => true
 * ```
 */
export default function isUndefined (value:any):boolean {
  return Object.is(value, void 0);
}