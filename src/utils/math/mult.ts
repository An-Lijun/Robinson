import is from '../common/is';

/**
 * `mult` 函数接受两个数字作为参数，并以十进制精度返回它们的乘积。
 * @param {number} number1 - “number1”参数是您要相乘的第一个数字。
 * @param {number} number2 - “number2”参数是一个数字，将在“mult”函数中与“number1”相乘。
 * @returns 执行一些计算后“number1”和“number2”的乘积。
 */
export default function mult (number1:number, number2:number):number {
  if (!is(number1, 'number') || !is(number2, 'number')) {
    throw new Error('parmas must be number');
  }
  let [, l1 = ''] = `${number1}`.split('.');
  let [, l2 = ''] = `${number2}`.split('.');
  let magnification = l1.length + l2.length;
  let [n1] = `${number1 * 10 ** l1.length}`.split('.');
  let [n2] = `${number2 * 10 ** l2.length}`.split('.');

  let restore = 10 ** magnification;

  return Number(n1) * Number(n2) / restore;
}
