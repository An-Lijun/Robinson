import { is } from './common';

/**
 * 该函数检查值是否为数字。
 * @param {any} value - 参数“value”可以是任何数据类型。
 * @returns 一个布尔值。
 */
export function isNumber (value:any):boolean {
  return typeof value === 'number' || is(value, 'Number');
}

/**
 * 该函数检查值是否为 NaN。
 * @param {any} value - value 参数可以是任何数据类型，例如数字、字符串或对象。
 * @returns 一个布尔值，指示给定值是否为 NaN（非数字）。
 */
export function isNaN (value:any):boolean {
  return Number.isNaN(value);
}
/**
 * @description 函数“isInteger”检查给定值是否为整数,原生的判断已经很好用了 es6+。
 * @param {any} value - “value”参数可以是任何数据类型，例如数字、字符串、布尔值或对象。该函数将检查该值是否为整数，并返回一个布尔值来指示它是否为整数。
 * @returns 一个布尔值，指示给定值是否为整数。
 */
export function isInteger (value:any):boolean {
  return Number.isInteger(value);
}
/**
 * @description 该函数检查一个值是否是有限数,原生的已经很好用了 这里是为了保存api统一。
 * @param {any} value - “value”参数可以是您想要检查是否是有限数的任何值。
 * @returns 函数 isFinite 返回一个布尔值。
 */
export function isFinite (value:any):boolean {
  return Number.isFinite(value);
}

/**
 * @description 该函数检查给定值是否在指定范围内。
 * @param {number} value - value 参数表示要检查的数字是否在某个范围内。
 * @param {number} min - “value”参数可以是的最小值。
 * @param {number} max - “max”参数表示范围的最大值。
 * @returns 一个布尔值，指示给定值是否在指定范围内（包括最小值，不包括最大值）。
 */
export function isRange (value:number, min:number, max:number) {
  return value >= min && value < max;
}
