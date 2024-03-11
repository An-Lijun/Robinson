import { is } from '../index';
import { isArray } from '../../../index';
/**
 * @description 该函数通过将 JSON 表示形式与空数组或对象进行比较来检查值是否为空。
 * @param {any} value - “value”参数可以是任何数据类型。这是您要检查它是否为空的值。
 * @returns 一个布尔值。如果值为空（空数组或空对象）或值为假（例如 null、undefined、false、0 或空字符串），则返回 true。否则，返回 false。
 * @example
 * ```JavaScript
 *    let a =null; isEmpty(a) => true
 *    let a =undefined; isEmpty(a) => true
 *    let a =''; isEmpty(a) => true
 *    let a={};  isEmpty(a) => true
 *    let a=[];  isEmpty(a) => true
 * ```
*/
export default function isEmpty (value:any):boolean {
  // 先排除null 因为 typeof null =>object
  if (value === null) {
    return true;
  }
  // 排除空数组和空字符串 new String
  if (isArray(value) || is(value, 'string')) {
    return value.length === 0;
  }
  // 排除空set 空map
  if (is(value, 'set') || is(value, 'map')) {
    return Number(value.size) === 0;
  }
  // 排除空object 空Number new Number
  if (typeof value === 'object') {
    return !Object.keys(value).length;
  }
  // 排除其他
  return !value;
}