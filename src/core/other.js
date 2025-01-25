// import Coolies from 'js-cookie'

// export function getCookie (key) {
//   const data = Cookies.get(key);
//   try {
//     return JSON.parse(data);
//   } catch (error) {
//     return data;
//   }
// }
// export function setCookie (key, value) {
//   let data = value;
//   if (typeof value === 'object' && value !== null) {
//     data = JSON.stringify(value);
//   }
//   return Cookies.set(key, data);
// }
// export function removeCookie (key) {
//   return Cookies.remove(key);
// }

// import { is } from '../../common';

// /**
//  * @description TypeScript 中的“add”函数接受两个数字作为输入并返回它们的总和，考虑正数、负数以及小数位。这里规避了相加的精度问题
//  * @param {number} number1 - 要添加的第一个数字。它可以是正值，也可以是负值。
//  * @param {number} number2 - “number2”参数是要添加到“number1”的第二个数字。
//  * @returns 两个输入数字的总和。
//  * @example
//  * ```JavaScript
//  *   add (0.1,0.2)=> 0.3
//  * ```
//  */
// export default function add (number1:number, number2:number) {
//   if (!is(number1, 'number') || !is(number2, 'number')) {
//     throw new Error('parmas must be number');
//   }
//   let [, l1 = ''] = `${number1}`.split('.');
//   let [, l2 = ''] = `${number2}`.split('.');
//   let len = l1.length > l2.length ? l1.length : l2.length;
//   len = 10 ** len;

//   let [n1] = `${number1 * len}`.split('.');
//   let [n2] = `${number2 * len}`.split('.');

//   return (Number(n1) + Number(n2)) / len;
// }
// //相乘
// import { is } from '../../common';

// export function division (number1:number, number2:number, digit:number):number {
//   if (!is(number1, 'number') || !is(number2, 'number')) {
//     throw new Error('parmas must be number');
//   }
//   if (number2 === 0 || number1 === 0) {
//     throw new Error('params can not be zero');
//   }
//   let [, l1 = ''] = `${number1}`.split('.');
//   let [, l2 = ''] = `${number2}`.split('.');
//   let len = l1.length > l2.length ? l1.length : l2.length;
//   len = 10 ** len;

//   let [n1] = `${number1 * len}`.split('.');
//   let [n2] = `${number2 * len}`.split('.');
//   let [int = '', double = ''] = `${Number(n1) / Number(n2)}`.split('.');
//   let result = `${int }.${ double.slice(0, digit)}`;
//   return Number(result);
// }

// import { is } from '../../common';

// /**
//  * “minus”函数以小数精度减去两个数字。
//  * @param {number} number1 - 第一个要减去的数字。
//  * @param {number} number2 - “number2”参数是将从“number1”中减去的数字。
//  * @returns 从“number1”减去“number2”的结果。
//  * @example
//  * ```JavaScript
//  *  minus(0.3,0.1) => 0.2
//  * ```
//  */
// export default function minus (number1:number, number2:number) {
//   if (!is(number1, 'number') || !is(number2, 'number')) {
//     throw new Error('parmas must be number');
//   }
//   let [, l1 = ''] = `${number1}`.split('.');
//   let [, l2 = ''] = `${number2}`.split('.');
//   let len = l1.length > l2.length ? l1.length : l2.length;
//   len = 10 ** len;

//   let [n1] = `${number1 * len}`.split('.');
//   let [n2] = `${number2 * len}`.split('.');
//   return (Number(n1) - Number(n2)) / len;
// }

// import { is } from '../../common';

// /**
//  * `mult` 函数接受两个数字作为参数，并以十进制精度返回它们的乘积。
//  * @param {number} number1 - “number1”参数是您要相乘的第一个数字。
//  * @param {number} number2 - “number2”参数是一个数字，将在“mult”函数中与“number1”相乘。
//  * @returns 执行一些计算后“number1”和“number2”的乘积。
//  * @example
//  * ```JavaScript
//  *    mult(0.1,0.2) => 0.02
//  * ```
//  */
// export default function mult (number1:number, number2:number):number {
//   if (!is(number1, 'number') || !is(number2, 'number')) {
//     throw new Error('parmas must be number');
//   }
//   let [, l1 = ''] = `${number1}`.split('.');
//   let [, l2 = ''] = `${number2}`.split('.');
//   let magnification = l1.length + l2.length;
//   let [n1] = `${number1 * 10 ** l1.length}`.split('.');
//   let [n2] = `${number2 * 10 ** l2.length}`.split('.');

//   let restore = 10 ** magnification;

//   return Number(n1) * Number(n2) / restore;
// }
