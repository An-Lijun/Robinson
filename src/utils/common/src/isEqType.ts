import { getStringType } from '../../../index';

/**
 * 函数“isEqType”检查两个值的类型是否相等。
 * @param {any} value - “value”参数的类型为“any”，这意味着它可以接受任何类型的值。
 * @param {any} value2 - “value2”参数是您要与之比较类型的第二个值。
 * @returns 一个布尔值。
 * ```JavaScript
 * let a =1;
 * let b =new Number();
 * isEqType(value,value2) => true
 *
 * let a ='1';
 * let b =new Number();
 * isEqType(value,value2) => false
 *
 * ```
 */
export default function isEqType (value:any, value2:any):boolean {
  return getStringType(value) === getStringType(value2);
}
