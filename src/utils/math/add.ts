
import is from '../common/is';

/**
 * @description TypeScript 中的“add”函数接受两个数字作为输入并返回它们的总和，考虑正数、负数以及小数位。这里规避了相加的精度问题
 * @param {number} number1 - 要添加的第一个数字。它可以是正值，也可以是负值。
 * @param {number} number2 - “number2”参数是要添加到“number1”的第二个数字。
 * @returns 两个输入数字的总和。
 */
export default function add (number1:number, number2:number) {
  if (!is(number1, 'number') || !is(number2, 'number')) {
    throw new Error('parmas must be number');
  }
  let [, l1 = ''] = `${number1}`.split('.');
  let [, l2 = ''] = `${number2}`.split('.');
  let len = l1.length > l2.length ? l1.length : l2.length;
  len = 10 ** len;

  let [n1] = `${number1 * len}`.split('.');
  let [n2] = `${number2 * len}`.split('.');
  return (Number(n1) + Number(n2)) / len;
}
//相乘
