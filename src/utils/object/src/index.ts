import { is } from '../../common/index';

interface Iwindow {
  navigator: {
    userAgent: string;
  };
}

/**
 * @beta
 * @description 该函数检查值是否是类对象like 类型。
 * @param {any} value - 参数“value”的类型为“any”，这意味着它可以是任何数据类型。
 * @returns {boolean} - 一个布尔值。
 * @example
 * ```JavaScript
 *  let a = {}; isObjectLike(a) // true
 *  let a = null; isObjectLike(a) // false
 *  let a = new WeakSet(); isObjectLike(a) // true
 *  let a = []; isObjectLike(a)// true
 * ```
 */
export function isObjectLike (value: any): boolean {
  return value !== null && (typeof value === 'object' || typeof value === 'function');
}

/**
 * @beta
 * @description 是否为日期格式
 * @param {any} val - 参数“val”的类型为“any”，这意味着它可以是任何数据类型。
 * @returns {boolean} - 一个布尔值。
 * @example
 * ```JavaScript
 *  let date = new Date(); isOriginDate(date) // true
 *  let str = '2023-10-01'; isOriginDate(str) // false
 * ```
 */
export function isOriginDate (val: any): boolean {
  return is(val, 'Date');
}

/**
 * @beta
 * @description 是否为Promise格式
 * @param {any} val - 参数“val”的类型为“any”，这意味着它可以是任何数据类型。
 * @returns {boolean} - 一个布尔值。
 * @example
 * ```JavaScript
 *  let promise = new Promise(() => {}); isPromise(promise)// true
 *  let str = 'not a promise'; isPromise(str)// false
 * ```
 */
export function isPromise (val: any): boolean {
  return is(val, 'Promise');
}

/**
 * @beta
 * @description 是否为正则格式
 * @param {any} val - 参数“val”的类型为“any”，这意味着它可以是任何数据类型。
 * @returns {boolean} - 一个布尔值。
 * @example
 * ```JavaScript
 *  let regex = /abc/; isRegExp(regex) // true
 *  let str = 'abc'; isRegExp(str) // false
 * ```
 */
export function isRegExp (val: any): boolean {
  return is(val, 'RegExp');
}

/**
 * @beta
 * @description 是否为DOM元素
 * @param {any} val - 参数“val”的类型为“any”，这意味着它可以是任何数据类型。
 * @returns {boolean} - 一个布尔值。
 * @example
 * ```JavaScript
 *  let div = document.createElement('div'); isElement(div) // true
 *  let str = 'not an element'; isElement(str) //false
 * ```
 */
export function isElement (val: any): boolean {
  return is(val, 'object') && Boolean(val.tagName);
}

let userAgentArr = ['MSIE', 'TRIDENT', 'EDGE'];

/**
 * @beta
 * @description 判断是否是IE浏览器
 * @param {Iwindow} win - 参数“win”是一个包含navigator对象的对象。
 * @returns {boolean} - 一个布尔值。
 * @example
 * ```JavaScript
 *  let win = { navigator: { userAgent: `Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0;
 * .NET4.0E; .NET4.0C; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729;
 *  InfoPath.3; rv:11.0) like Gecko` } };
 *  isIE(win) //true
 *  let win = { navigator: { userAgent: `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)
 *  AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.6.1 Safari/605.1.15` } };
 *  isIE(win) // false
 * ```
 */
export function isIE (win: Iwindow): boolean {
  if (!win || !is(win, 'object')) {
    return false;
  }
  if (!win.navigator || !win.navigator.userAgent) {
    return false;
  }
  const usera = win.navigator.userAgent.toUpperCase();
  return userAgentArr.some(agent => usera.includes(agent));
}