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
export default function getRandom (min:number, max:number, point :number = 0):number {
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