import { is } from './common';

/**
 * @description 函数“isBoolean”检查值是否为布尔类型。
 * @param {any} value - 参数“value”可以是任何数据类型。
 * @returns 函数 isBoolean 返回一个布尔值。
 */
export function isBoolean (value:any):boolean {
  return typeof value === 'boolean' || is(value, 'Boolean');
}