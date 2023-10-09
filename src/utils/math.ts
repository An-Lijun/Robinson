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
  // 正+正 ok
  // 负+负 ok
  // 负+正 = 符号 + MAX-MIN
  // 正+负 = 符号 + MAX-MIN
  let num1 = String(number1);
  let num2 = String(number2);

  const HEAD1 = num1[0];
  const HEAD2 = num2[0];
  let HEAD = '';
  if (HEAD1 === '-' || HEAD2 === '-') {
    HEAD = '-';
  }
  if (HEAD1 === HEAD2 && HEAD1 === '-') {
    HEAD = '';
  }
  if (HEAD === '-') {
    return minus(Number(num1), Number(num2));
  }

  let [INT1 = 0, DOUBLE1 = 0] = `${num1 }`.split('.');
  let [INT2 = 0, DOUBLE2 = 0] = `${num2 }`.split('.');

  // 比较出来短的补零Int
  let MAXINT = `${Math.max(Number(INT1), Number(INT2)) }`;
  let MININT = `${Math.min(Number(INT1), Number(INT2)) }`;
  MININT = MININT.padStart(MAXINT.length, '0');
  // 比较出来短的补零Double
  let MAXDOUBLE = `${Math.max(Number(DOUBLE1), Number(DOUBLE2)) }`;
  let MINDOUBLE = `${Math.min(Number(DOUBLE1), Number(DOUBLE2)) }`;
  MINDOUBLE = MINDOUBLE.padEnd(MAXDOUBLE.length, '0');

  // 拼接
  let MIXIN_NUM1 = `${MAXINT }.${ MAXDOUBLE}`;
  let MIXIN_NUM2 = `${MININT }.${ MINDOUBLE}`;
  let str = '';
  let temp = 0;
  for (let i = MIXIN_NUM1.length - 1; i > -1; i--) {
    let num = Number(MIXIN_NUM1[i]) + Number(MIXIN_NUM2[i]);
    if (!MIXIN_NUM1[i] && temp) {
      str = temp + str;
      break;
    }
    if (MIXIN_NUM1[i] === '.') {
      str = `.${ str}`;
      continue;
    }
    if (num >= 10) {
      temp = 1;
      num -= 10;
      str = num + str;
      continue;
    }
    let nowNum = Number(num + temp);
    // str = nowNum>10? nowNum-10:nowNum
    if (nowNum > 10) {
      nowNum -= 10;
      str = String(nowNum) + str;
    } else {
      str = String(nowNum) + str;
      temp = 0;
    }
  }
  // 从后往前递归相加
  return Number(HEAD + str);
}
//相乘