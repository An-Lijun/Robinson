import is from '../common/is';

export default function division (number1:number, number2:number, digit:number):number {
  if (!is(number1, 'number') || !is(number2, 'number')) {
    throw new Error('parmas must be number');
  }
  if (number2 === 0 || number1 === 0) {
    throw new Error('params can not be zero');
  }
  let [, l1 = ''] = `${number1}`.split('.');
  let [, l2 = ''] = `${number2}`.split('.');
  let len = l1.length > l2.length ? l1.length : l2.length;
  len = 10 ** len;

  let [n1] = `${number1 * len}`.split('.');
  let [n2] = `${number2 * len}`.split('.');
  let [int = '', double = ''] = `${Number(n1) / Number(n2)}`.split('.');
  let result = `${int }.${ double.slice(0, digit)}`;
  return Number(result);
}
