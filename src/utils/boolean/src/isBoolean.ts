import { is } from '../../common/index';

/**
 * @description 函数“isBoolean”检查值是否为布尔类型。
 * @param {any} value - 参数“value”可以是任何数据类型。
 * @returns 函数 isBoolean 返回一个布尔值。
 * @example
 * ```JavaScript
 *    let boo = true; isBoolean(boo) => true
 *    let str = "true"; isBoolean(boo) => false
 * ```
 */
export default function isBoolean (value:any):boolean {
  return is(value, 'Boolean');
}