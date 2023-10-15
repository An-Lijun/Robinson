import { hasTypeIn, isEqType, isSimpleType } from '../common/index';

/**
 * 函数“isEqValue”比较两个值，如果它们的值和类型相等则返回 true。
 * @param {any} value1 - 要比较的第一个值。它可以是任何类型。
 * @param {any} value2 - “value2”参数是要与“value1”比较的第二个值。
 * @returns 一个布尔值。
 * @example
 * ```JavaScript
 * let a =NaN;let b = NaN; isEqValue(a,b) =>true
 * ```
 */
export default function isEqValue (value1:any, value2:any):boolean {
  // 判断是否是两个相同类型
  if (!isEqType(value1, value2)) {
    return false;
  }
  if (isSimpleType(value1)) {
    return Object.is(value1, value2);
  }

  // 如果是 set map 比较 size
  if (hasTypeIn(value1, ['set', 'map'])) {
    if (value1.size === value2.size) {
      return false;
    }
    //递归
  }
  if (hasTypeIn(value1, ['array', 'object'])) {
  // 如果是 array object 判断keys
    if (Object.keys(value1).length !== Object.keys(value2).length) {
      return false;
    }
    //递归

  }

  return false;
}