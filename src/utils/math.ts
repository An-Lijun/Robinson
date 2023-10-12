// 添加

// 相减
/**
 * @description “minus”函数将两个数字相减并返回结果。
 * @param {number} num1 - 要减去的第一个数字。
 * @param {number} num2 - 参数“num2”是将从“num1”中减去的数字。
 * @returns 从“num1”减去“num2”的结果。
 */
export function minus (num1:number, num2:number):number {
  return num1 - num2;
}
/**
 * @description TypeScript 中的“add”函数接受两个数字作为输入并返回它们的总和，考虑正数、负数以及小数位。这里规避了相加的精度问题
 * @param {number} number1 - 要添加的第一个数字。它可以是正值，也可以是负值。
 * @param {number} number2 - “number2”参数是要添加到“number1”的第二个数字。
 * @returns 两个输入数字的总和。
 */
export function add (number1:number, number2:number) {
  let [, l1 = ''] = `${number1}`;
  let [, l2 = ''] = `${number2}`;
  let len = l1.length > l2.length ? l1.length : l2.length;
  len = 10 ** len;
  return (number1 * len + number2 * len) / len;

}
//相乘