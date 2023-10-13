import is from '../common/is';

export default function division (number1:number, number2:number):number {
  if (!is(number1, 'number') || !is(number2, 'number')) {
    throw new Error('parmas must be number');
  }
  // let [, l1 = ''] = `${number1}`.split('.');
  // let [, l2 = ''] = `${number2}`.split('.');
  // let magnification = l1.length + l2.length;
  // let [n1] = `${number1 * 10 ** l1.length}`.split('.');
  // let [n2] = `${number2 * 10 ** l2.length}`.split('.');

  // let restore = 10 ** magnification;

  return number1 + number2;
}