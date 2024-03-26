import { is } from '../../common';

/**
 * @description 该函数检查值是否是类对象like 类型。
 * @param {any} value - 参数“value”的类型为“any”，这意味着它可以是任何数据类型。
 * @returns 一个布尔值。
 * ```JavaScript
 *  let a ={} isObjectLike(a)=> true
 *  let a =null isObjectLike(a)=> false
 *  let a =new WeakSet(); isObjectLike(a)=> true
 *  let a = []; isObjectLike(a)=> true
 * ```
 */
export function isObjectLike (value:any):boolean {
  return value !== null && (typeof value === 'object' || typeof value === 'function');
}
/**
 * 是否为日期格式
 * @param val
 * @returns
 */
export function isOriginDate (val:any):Boolean {
  return is(val, 'Date');
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
  return is(val, 'RegExp');
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

interface Iwindow{
  navigator:{
    userAgent:string
  }
}

/**
 * 判断是否是ie浏览器
 * @returns
 */
export function isIE (win:Iwindow) {
  if (!win || !is(win, 'object')) {
    return false;
  }
  if (!win.navigator || !win.navigator.userAgent) {
    return false;
  }
  const usera = win.navigator.userAgent.toUpperCase();
  if (userAgentArr.includes(usera)) {
    return true;
  }
  return false;
}
