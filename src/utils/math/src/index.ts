import Big, { BigSource } from 'big.js';

type TOperate = '+' | '-' | '*' | '/';

const calcMap = { '+': 'add',
  '-': 'sub',
  '*': 'mul',
  '/': 'div' } as const;

/**
 * @beta
 * @description 数值计算
 * @param {BigSource} number1 - 第一个数字。
 * @param {BigSource} number2 - 第二个数字。
 * @param {TOperate} [operate='+'] - 操作符，默认为 '+'。
 * @returns {number} - 计算结果。
 * @example
 * ```javascript
 * calc(0.1, 0.2);// 返回 0.3
 * calc(0.1, 0.2, '-');// 返回 -0.1
 * calc(0.1, 0.2, '*');// 返回 0.02
 * calc(0.1, 0.2, '/');// 返回 0.5
 * ```
 */
export function calc (number1: BigSource, number2: BigSource, operate: TOperate = '+'): string {
  const op = calcMap[operate];
  if (!op) {
    return '';
  }
  /** @ts-ignore */
  return new Big(number1)[op](number2)
    .toNumber();
}