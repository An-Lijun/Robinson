import { is } from '../../../index';

/**
 * 该函数检查值是否为数字。
 * @param {any} value - 参数“value”可以是任何数据类型。
 * @returns 一个布尔值。
 * @example
 * ```JavaScript
 *  let n = 7; isNumber(n)=>true
 *  let n1 ='8';isNumber(n)=>false
 * ```
 */
export function isNumber (value:any):boolean {
  return typeof value === 'number' || is(value, 'Number');
}

/**
 * 该函数检查值是否为 NaN。
 * @param {any} value - value 参数可以是任何数据类型，例如数字、字符串或对象。
 * @returns 一个布尔值，指示给定值是否为 NaN（非数字）。
 * @example
 * ```JavaScript
 *    let str = 'ad1'; isNaN(str)=> true
 *    let n = 1; isNaN(n)=>false
 * ```
 */
export function isNaN (value:any):boolean {
  return Object.is(value, NaN);
}
/**
 * @description 函数“isInteger”检查给定值是否为整数,原生的判断已经很好用了 es6+。
 * @param {any} value - “value”参数可以是任何数据类型，例如数字、字符串、布尔值或对象。该函数将检查该值是否为整数，并返回一个布尔值来指示它是否为整数。
 * @returns 一个布尔值，指示给定值是否为整数。
 * @example
 * ```JavaScript
 *  let n ='1.1'; isInteger(n)=>false
 *  let n2 = 2; isInteger(n2)=>true
 * ```
*/
export function isInt (value:any):boolean {
  return Number.isInteger(value);
}
/**
 * @description 该函数检查一个值是否是有限数,原生的已经很好用了 这里是为了保存api统一。
 * @param {any} value - “value”参数可以是您想要检查是否是有限数的任何值。
 * @returns 函数 isFinite 返回一个布尔值。
 * @example
 * ```JavaScript
 *  let a =0.1+0.2; isFinite(a)=>true
 *  let n1 ={}; isFinite(n1)=>false
 * ```
 */
export function isFinite (value:any):boolean {
  return Number.isFinite(value);
}
/**
 * 函数 getRandom 生成指定范围内具有指定小数位数的随机数。
 * @param {number} min - 随机数范围的最小值。
 * @param {number} max - “max”参数表示您要生成的最大值。
 * @param {number} [point=0] - “point”参数是一个可选参数，它指定将随机数舍入到的小数位数。如果没有为“point”提供值，则随机数将以整数形式返回。
 * @returns 指定最小值和最大值之间的随机数，具有指定的小数位数。
 * @example
 * ```JavaScript
 *    getRandom(1,5)=> 1~5 包含1,5
 *    getRandom(1,5,1) 1.0~5 包含 1 5
 * ```
 */
export function getRandom (min:number, max:number, point :number = 0):number {
  let res = `${Math.random() * (max - min + 1) + min }`;
  let [integer, float] = res.split('.');
  if (integer === `${max}`) {
    integer += '.';
    for (let i = 0; i < point; i++) {
      integer += '0';
    }
  } else {
    integer += '.';
    integer += float.slice(0, point);
  }
  return Number(integer);
}

/**
 * @description 该函数检查给定值是否在指定范围内。
 * @param {number} value - value 参数表示要检查的数字是否在某个范围内。
 * @param {number} min - “value”参数可以是的最小值。
 * @param {number} max - “max”参数表示范围的最大值。
 * @returns 一个布尔值，指示给定值是否在指定范围内（包括最小值，不包括最大值）。
 * @example
 * ```JavaScript
 *  let n =7; isRange(n,7,8) => true 包含7 8
 *  let n =7; isRange(n,7,7) => true 包含7
 * ```
*/
export function isRange (value:number, min:number, max:number) {
  return value >= min && value <= max;
}
/**
 * 检查变量是否为实数
 * @param s 要检查的变量
 * @returns
 */
export function isDecimal (s:string|number) {
  return (/^([0-9]+(\.?))?[0-9]+$/).test(String(s));
}
