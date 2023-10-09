import { is } from './common';

/**** null **** */

/**
 * @description 函数“isNull”检查给定值是否为空。
 * @param {any} value - 参数“value”的类型为“any”，这意味着它可以接受任何数据类型。
 * @returns 函数 isNull 返回一个布尔值。
 */
export function isNull (value:any):boolean {
  return value === null;
}

/**
 * @description 函数“isUndefined”检查值是否未定义。
 * @param {any} value - “value”参数的类型为“any”，这意味着它可以接受任何类型的值。
 * @returns 函数 isUndefined 返回一个布尔值。
 */
export function isUndefined (value:any):boolean {
  return Object.is(value, void 0);
}

/**
 * @description 该函数检查值是否是Symbol 类型的对象。
 * @param {any} value - 参数“value”可以是任何数据类型。
 * @returns 函数 isSymbol 返回一个布尔值。
 */
export function isSymbol (value:any):boolean {
  return typeof value === 'symbol' || is(value, 'Symbol');
}
