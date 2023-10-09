import { is } from './common';

/**
 * @description 函数isString 检查给定值是否是字符串。
 * @param {any} value - 参数“value”的类型为“any”，这意味着它可以接受任何数据类型。
 * @returns 一个布尔值。
 */
export function isString (value:any):boolean {
  return typeof value === 'string' || is(value, 'String');
}
