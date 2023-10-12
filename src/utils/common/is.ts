import { getStringType } from './index';
/**
 *
 * @description 返回是某个类型的判断结果
 * @param {Any}value 要判断的数据
 * @param {String}type  判断他是这个类型
 * @returns 布尔值
 * @example
 * ```JavaScript
 *    let a = 1; is(a,'number') => true
 *    let b = 2; is(a,'Number') => true
 *    let c ="2"; is(a,'string') => true
 * ```
 */
export default function is (value:any, type:string):boolean {
  return getStringType(value) === `[object ${type.toLowerCase()}]`;
}