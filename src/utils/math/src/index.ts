import Big, { BigSource } from 'big.js';

type TOperate='+'|'-'|'*'|'/'

const calcMap = { '+': 'add',
  '-': 'sub',
  '*': 'mul',
  '/': 'div' } as const;

/**
 * 数值计算
 * @param number1 数字1
 * @param number2 数字2
 * @param operate 操作符 默认+
 * @returns
 */
export function calc (number1:BigSource, number2:BigSource, operate:TOperate = '+') {
  const op = calcMap[operate];
  if (!op) {
    return '';
  }
  /** @ts-ginore */
  return new Big(number1)[op](number2)
    .toNumber();
}