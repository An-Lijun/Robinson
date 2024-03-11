/**
 * @description 该函数检查一个值是否是有限数,原生的已经很好用了 这里是为了保存api统一。
 * @param {any} value - “value”参数可以是您想要检查是否是有限数的任何值。
 * @returns 函数 isFinite 返回一个布尔值。
 * @example
 * ```JavaScript
 *  let a =0.1+0.2; isFinite(a)=>true
 *  let n1 ={}; isFinite(n1)=>false
 * ```
 */
export default function isFinite (value:any):boolean {
  return Number.isFinite(value);
}