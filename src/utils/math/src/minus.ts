
import is from '../../common/src/is';

/**
 * “minus”函数以小数精度减去两个数字。
 * @param {number} number1 - 第一个要减去的数字。
 * @param {number} number2 - “number2”参数是将从“number1”中减去的数字。
 * @returns 从“number1”减去“number2”的结果。
 * @example
 * ```JavaScript
 *  minus(0.3,0.1) => 0.2
 * ```
 */
export default function minus (number1:number, number2:number) {
  if (!is(number1, 'number') || !is(number2, 'number')) {
    throw new Error('parmas must be number');
  }
  let [, l1 = ''] = `${number1}`.split('.');
  let [, l2 = ''] = `${number2}`.split('.');
  let len = l1.length > l2.length ? l1.length : l2.length;
  len = 10 ** len;

  let [n1] = `${number1 * len}`.split('.');
  let [n2] = `${number2 * len}`.split('.');
  return (Number(n1) - Number(n2)) / len;
}
