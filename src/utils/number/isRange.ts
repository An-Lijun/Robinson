
/**
 * @description 该函数检查给定值是否在指定范围内。
 * @param {number} value - value 参数表示要检查的数字是否在某个范围内。
 * @param {number} min - “value”参数可以是的最小值。
 * @param {number} max - “max”参数表示范围的最大值。
 * @returns 一个布尔值，指示给定值是否在指定范围内（包括最小值，不包括最大值）。
 * @example
 * ```JavaScript
 *  let n =7; isRange(n,7,8) => true
 *  let n =7; isRange(n,7,7) => false
 * ```
*/
export default function isRange (value:number, min:number, max:number) {
  return value >= min && value < max;
}