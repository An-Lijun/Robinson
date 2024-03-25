import Big, { BigSource } from 'big.js';

type TOperate='+'|'-'|'*'|'/'

const calcMap = { '+': 'add',
  '-': 'sub',
  '*': 'mul',
  '/': 'div' } as const;

/**
 * @description 数值计算
 * @param number1 数字1
 * @param number2 数字2
 * @param operate 操作符 默认+
 * @returns
 * ```javascript
 *    calc(0.1,0.2) =>0.3
 *    calc(0.1,0.2,'-') =>-0.1
 *    calc(0.1,0.2,'*') =>0.02
 *    calc(0.1,0.2,'/') =>0.5
 *
 * ```
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