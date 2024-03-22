import { getStringType } from '../index';
/**
 *
 * @description 返回是某个类型的判断结果
 * @param {Any}value 要判断的数据
 * @param {String}type  判断他是这个类型
 * @returns 布尔值
 * @example
 * ```JavaScript
 *    let a = 1; is(a,'number') => true
 *    let b = 2; is(a,'Number') => true
 *    let c ="2"; is(a,'string') => true
 * ```
 */
export default function is (value:any, type:string):boolean {
  return getStringType(value) === `[object ${type.toLowerCase()}]`;
}

/**
 * 是否为日期格式
 * @param val
 * @returns
 */
export function isDate (val:any):Boolean {
  return is(val, 'Date');
}

/**
 * 是否为函数格式
 * @param val
 * @returns
 */
export function isFunction (val:any):Boolean {
  return is(val, 'function');
}
/**
 * 是否为promise格式
 * @param val
 * @returns
 */
export function isPromise (val:any):Boolean {
  return is(val, 'Promise');
}
/**
 * 是否为正则格式
 * @param val
 * @returns
 */
export function isRegExp (val:any):Boolean {
  return is(val, 'Promise');
}
/**
 * 是否为window格式
 * @param val
 * @returns
 */
export function isWindow (val:any):Boolean {
  return is(val, 'window');
}

/**
 * 是否为window格式
 * @param val
 * @returns
 */
export function isElement (val:any):Boolean {
  return is(val, 'object') && Boolean(val.tagName);
}

let userAgentArr = ['MSIE', 'TRIDENT', 'EDGE'];

/**
 * 判断是否是ie浏览器
 * @returns
 */
export function isIE () {
  const usera = window.navigator.userAgent.toUpperCase();
  if (userAgentArr.includes(usera)) {
    return true;
  }
  return false;
}

/**
 * 检查变量是否为实数
 * @param s 要检查的变量
 * @returns
 */
export function isDecimal (s:string|number) {
  return (/^([0-9]+(\.?))?[0-9]+$/).test(String(s));
}

/**
 * 检查字符串是否为合法email地址
 * @param s 字符串
 * @returns
 */
export function isEmail (s:string) {
  return (/^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/).test(s);
}

/**
 * 是否为合法手机号
 * @param s
 * @returns
 */
export function isMobileNum (s:string|number) {
  return (/^1\d{10}$/).test(String(s));
}

/**
 * 判断是否为外链
 * @param path 路径
 * @returns
 */
export function isExternal (path:any) {
  return typeof path === 'string' && (/^(https?:|mailto:|tel:)/).test(path);
}

export function isIdCard (id:string) {
  const value = id.toUpperCase();
  if (!value || value.length !== 18) {
    return false;
  }
  const temp = value.substr(0, 17);
  for (let i = 0; i < temp.length; i++) {
    if (temp.charAt(i) < '0' || temp.charAt(i) > '9') {
      return false;
    }
  }
  let nowYear = new Date().getFullYear();
  let year = parseInt(value.substr(6, 4), 10);
  let month = parseInt(value.substr(10, 2), 10);
  let day = parseInt(value.substr(12, 2), 10);

  if (year < nowYear - 150 || year > nowYear + 150) {
    return false;
  }
  if (month > 12 || month < 1) {
    return false;
  }
  if (day > 31 || day < 1) {
    return false;
  }

  const WI = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1];
  const AI = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];
  const checkDigit = value.charAt(17);
  let cardSum = 0;

  for (let j = 0; j < value.length - 1; j++) {
    cardSum = cardSum + parseInt(value.charAt(j), 10) * WI[j];
  }
  const seq = cardSum % 11;
  const getCheckDigit = AI[seq];
  if (checkDigit !== getCheckDigit) {
    return false;
  }
  return true;
}