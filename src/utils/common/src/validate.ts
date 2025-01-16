import { getStringType, isEqArray } from '../../helper';
import { isArray } from '../../../index';

/**
 * @beta
 * @description 返回是某个类型的判断结果
 * @param {Any} value 要判断的数据
 * @param {String}type  判断他是这个类型
 * @returns 布尔值
 * @example
 * ```JavaScript
 *    let a = 1; is(a,'number')// true
 *    let b = 2; is(a,'Number') // true
 *    let c ="2"; is(a,'string') // true
 * ```
 */
export function is (value:any, type:string):boolean {
  return getStringType(value) === `[object ${type.toLowerCase()}]`;
}

/**
 * @beta
 * @description 该函数通过将 JSON 表示形式与空数组或对象进行比较来检查值是否为空。
 * @param {any} value - “value”参数可以是任何数据类型。这是您要检查它是否为空的值。
 * @returns 一个布尔值。如果值为空（空数组或空对象）或值为假（例如 null、undefined、false、0 或空字符串），则返回 true。否则，返回 false。
 * @example
 * ```JavaScript
 *    let a =null; isEmpty(a) // true
 *    let a =undefined; isEmpty(a) // true
 *    let a =''; isEmpty(a) // true
 *    let a={};  isEmpty(a) // true
 *    let a=[];  isEmpty(a) // true
 * ```
*/
export function isEmpty (value:any):boolean {
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

/**
 * @beta
 * @description 函数“isNull”检查给定值是否为空。
 * @param {any} value - 参数“value”的类型为“any”，这意味着它可以接受任何数据类型。
 * @returns 函数 isNull 返回一个布尔值。
 * ```JavaScript
 *  let a =null; isNull(a)// true
 * ```
 */
export function isNull (value:any):boolean {
  return value === null;
}

/**
 * @beta
 * @description  函数“isUndefined”检查值是否未定义。
 * @param {any} value - “value”参数的类型为“any”，这意味着它可以接受任何类型的值。
 * @returns 函数 isUndefined 返回一个布尔值。
 * @example
 * ```JavaScript
 *    let a; isUndefined(a) // true
 * ```
 */
export function isUndefined (value:any):boolean {
  return Object.is(value, void 0);
}

/**
 * @beta
 * @description 该函数检查给定值的类型是否存在于给定类型数组中。
 * @param {any} value - “value”参数是您要检查其类型的值。它可以是任何类型，例如数字、字符串、对象等。
 * @param types - 表示要检查的类型的字符串数组。
 * @returns 一个布尔值。
 * @example
 * ```JavaScript
*     let a ="123"; isTypeIn(a,['number','array','string']) // true
*     let a ={}; isTypeIn(a,['number','array','string']) // false
 * ```
 */
export function hasTypeIn (value:any, types:Array<string>):boolean {
  return types.some(item => is(value, item));
}

/**
 * @beta
 * @description 该函数检查值是否为简单值（数字、字符串、布尔值、符号、null、undefined 或 bigint）或复杂值（函数、对象、数组、集合、映射）。
 * @param {any} value - 参数“value”的类型为“any”，这意味着它可以接受任何类型的值。
 * @returns 函数 isSimpleType 返回一个布尔值。
 * @example
 * ```JavaScript
 *    let num =123; isSimpleType(num) // true
 *    let obj ={};  isSimpleType(obj) // false
 * ```
 */
export function isSimpleType (value:any):boolean {
  const type = typeof value;
  // 简单值 number string boolean symbol null undefined bigint  // 复杂值function Object array set map
  if (value === null) {return true;}
  return type !== 'object' && type !== 'function';
}

/**
 * @beta
 * @description 该函数检查值是否为引用类型。
 * @param {any} value - “value”参数的类型为“any”，这意味着它可以接受任何类型的值。
 * @returns 一个布尔值。
 * @example
 * ```JavaScript
 *    let num =123; isRefType(num) // true
 *    let obj ={};  isRefType(obj) // false
 * ```
 */
export function isRefType (value:any):boolean {
  return value instanceof Object;
}

/**
 * @beta
 * @description 函数“isEqType”检查两个值的类型是否相等。
 * @param {any} value - “value”参数的类型为“any”，这意味着它可以接受任何类型的值。
 * @param {any} value2 - “value2”参数是您要与之比较类型的第二个值。
 * @returns 一个布尔值。
 * ```JavaScript
 * let a =1;
 * let b =new Number();
 * isEqType(value,value2) // true
 *
 * let a ='1';
 * let b =new Number();
 * isEqType(value,value2) // false
 *
 * ```
 */
export function isEqType (value:any, value2:any):boolean {
  return getStringType(value) === getStringType(value2);
}

/**
 * @beta
 * @description 函数“isEqValue”比较两个值，如果它们的值和类型相等则返回 true。
 * @param {any} value1 - 要比较的第一个值。它可以是任何类型。
 * @param {any} value2 - “value2”参数是要与“value1”比较的第二个值。
 * @returns 一个布尔值。
 * @example
 * ```JavaScript
 * let a =NaN;let b = NaN; isEqValue(a,b) //true
 * ```
 */
export function isEqValue (value1:any, value2:any):boolean {
  // 判断是否是两个相同类型
  if (!isEqType(value1, value2)) {
    return false;
  }
  if (isSimpleType(value1) || is(value1, 'function')) {
    return Object.is(value1, value2);
  }

  // 如果是 set map 比较 size
  if (hasTypeIn(value1, ['set', 'map'])) {
    if (value1.size !== value2.size) {
      return false;
    }
    if (value1.size === 0) {
      return true;
    }
    if (is(value1, 'map')) {
      for (let [key, val] of value1) {
        if (value2.has(key)) {
          let flag = isEqValue(val, value2.get(key));
          if (!flag) {
            return false;
          }
        } else {
          return false;
        }
      }
      return true;
    }
    if (is(value1, 'set')) {
      let v1 = Array.from(value1);
      let v2 = Array.from(value2);
      return isEqArray(v1, v2);
    }
  }
  if (hasTypeIn(value1, ['array', 'object'])) {
  // 如果是 array object 判断keys
    let valKeys = Object.keys(value1);
    if (valKeys.length !== Object.keys(value2).length) {
      return false;
    }
    if (valKeys.length === 0) {
      return true;
    }
    if (is(value1, 'array')) {
      return isEqArray(value1, value2);
    }
    for (const key of valKeys) {
      const flag = isEqValue(value1[key], value2[key]);
      if (!flag) {
        return false;
      }
    }
    return true;
  }
  return false;
}