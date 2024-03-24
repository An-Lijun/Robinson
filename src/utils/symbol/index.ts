import { is } from '../common';

/**
 * @description 该函数检查值是否是Symbol 类型的对象。
 * @param {any} value - 参数“value”可以是任何数据类型。
 * @returns 函数 isSymbol 返回一个布尔值。
 * @example
 * ```JavaScript
 * let a =Symbol(); isSymbol(a) => true
 * ```
 */
export function isSymbol (value:any):boolean {
  return typeof value === 'symbol' || is(value, 'Symbol');
}
