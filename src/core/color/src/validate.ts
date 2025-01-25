import { is } from '../../../index';

/**
 * @beta
 * @description 判断是否为16进制颜色
 * @param {string} color 需要验证的颜色字符串
 * @returns {boolean} 如果是16进制颜色返回true，否则返回false
 * @example
 * ```JavaScript
 *     isHex('#FD7086') //true
 *     isHex('rgba(253,112,134,0.9)') // false
 * ```
 */
export function isHex (color: string) {
  const reg = /^#([0-9a-fA-F]{3}|[0-9a-fA-f]{6})$/;
  return reg.test(color);
}

/**
 * @beta
 * @description 判断是否为rgb颜色
 * @param {string} color 需要验证的颜色字符串
 * @returns {boolean} 如果是rgb颜色返回true，否则返回false
 * @example
 * ```JavaScript
 *     isRgb('#FD7086') //false
 *     isRgb('rgba(253,112,134,0.9)') //false
 *     isRgb(null) // false
 *     isRgb({}) // false
 *     isRgb('rgb(255,255,255)') // true
 *     isRgb('rgb(256,256,256)') //false
 * ```
 */
export function isRgb (color: string) {
  if (!color || !is(color, 'string')) {
    return false;
  }
  const lowColor = color.toLowerCase();
  const reg = /^rgb\(([0-9]{1,3}\,[0-9]{1,3}\,[0-9]{1,3})\)$/;
  if (reg.test(lowColor)) {
    const arr = lowColor.match(reg)![1].split(',');
    return reg.test(lowColor) &&
    Number(arr[0]) <= 255 && Number(arr[1]) <= 255 && Number(arr[2]) <= 255;
  }
  return false;
}

/**
 * @beta
 * @description 判断是否为rgba颜色
 * @param {string} color 需要验证的颜色字符串
 * @returns {boolean} 如果是rgba颜色返回true，否则返回false
 * @example
 * ```JavaScript
 *     isRgba('#FD7086') // false
 *     isRgba('rgba(253,112,134,0.9)') // true
 *     isRgba('rgba(253,112,134,1.1)')// false
 *     isRgba(null) // false
 *     isRgba({}) // false
 *     isRgba('rgb(255,255,255)') // false
 *     isRgba('rgb(256,256,256)') // false
 * ```
 */
export function isRgba (color: string) {
  if (!color || !is(color, 'string')) {
    return false;
  }
  const lowColor = color.toLowerCase();
  const reg = /^rgba\(([0-9]{1,3}\,[0-9]{1,3}\,[0-9]{1,3}\,[0-9.]+)\)$/;
  if (reg.test(lowColor)) {
    const arr = lowColor.match(reg)![1].split(',');
    return reg.test(lowColor) &&
    Number(arr[0]) <= 255 && Number(arr[1]) <= 255 && Number(arr[2]) <= 255
    && Number(arr[3]) <= 1;
  }
  return false;
}