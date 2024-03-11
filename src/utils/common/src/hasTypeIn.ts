import { is } from '../index';
/**
 * 该函数检查给定值的类型是否存在于给定类型数组中。
 * @param {any} value - “value”参数是您要检查其类型的值。它可以是任何类型，例如数字、字符串、对象等。
 * @param types - 表示要检查的类型的字符串数组。
 * @returns 一个布尔值。
 * @example
 * ```JavaScript
 * let a ="123"; isTypeIn(a,['number','array','string']) => true
 * let a ={}; isTypeIn(a,['number','array','string']) => false
 * ```
 */
export default function hasTypeIn (value:any, types:Array<string>):boolean {
  return types.some(item => is(value, item));
}