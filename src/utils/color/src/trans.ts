import { isHex, isRgb, isRgba } from './validate';
export interface IRgba {
  r: number;
  g: number;
  b: number;
  a?: number;
}

/**
 * 颜色对象转化为rgba颜色字符串
 * @param colorObj 颜色对象
 */
export const toRgbaString = (colorObj: IRgba, n = 10000) => {
  const { r, g, b, a = 1 } = colorObj;
  return `rgba(${r},${g},${b},${Math.floor(a * n) / n})`;
};
/**
 * 16进制颜色字符串解析为颜色对象
 * @param color 颜色字符串
 * @returns IRgba
 */
export const parseHexColor = (color: string) => {
  let hex = color.slice(1);
  let a = 1;
  if (hex.length === 3) {
    hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
  }
  if (hex.length === 8) {
    a = parseInt(hex.slice(6), 16) / 255;
    hex = hex.slice(0, 6);
  }
  const bigint = parseInt(hex, 16);
  return { r: bigint >> 16 & 255,
    g: bigint >> 8 & 255,
    b: bigint & 255,
    a } as IRgba;
};
/**
 * rgba颜色字符串解析为颜色对象
 * @param color 颜色字符串
 * @returns IRgba
 */
export const parseRgbaColor = (color: string) => {
  const arr = color.match(/(\d(\.\d+)?)+/g) || [];
  const res = arr.map((s: string) => parseInt(s, 10));
  return { r: res[0],
    g: res[1],
    b: res[2],
    a: parseFloat(arr[3]) } as IRgba;
};
/**
 * 颜色字符串解析为颜色对象
 * @param color 颜色字符串
 * @returns IRgba
 */
export const parseColorString = (color: string):IRgba|string =>{
  if (color.startsWith('#')) {
    return parseHexColor(color);
  }
  else if (color.startsWith('rgb')) {
    return parseRgbaColor(color);
  }
  return '';
};
/**
 * @description hex转rgba
 * @param {string} hex 颜色
 * @returns {string} 转换后的颜色
 * @example
 * ```JavaScript
 *     hexToRgba('#FD7086') => 'rgba(253,112,134,1)
 *     hexToRgba('rgba(253,112,134,0.9)') => ''
 * ```
 */
export function hexToRgba (hex:string) {
  if (!hex || !isHex(hex)) {
    return '';
  }
  const colorObj = parseColorString(hex);
  return toRgbaString((colorObj as IRgba));
}

/**
 * @description hex转RGB
 * @param {string} hex
 * @returns
 * @example
 * ```JavaScript
 *     hexToRgba('#FD7086') => 'rgb(253,112,134)'
 *     hexToRgba('rgb(253,112,134,0.9)') => ''
 * ```
 */
export function hexToRgb (hex:string) {
  if (!isHex(hex)) {
    return '';
  }
  let color = hex.slice(1, hex.length);
  if (color.length === 3) {
    color = color.repeat(2);
  }
  let r = parseInt(color.substring(0, 2), 16);
  let g = parseInt(color.substring(2, 4), 16);
  let b = parseInt(color.substring(4, 6), 16);
  return `rgb(${ r },${ g },${ b })`;
}

/**
 * @description rgbToHex
 * @param {string} color
 * @returns
 * @example
 * ```JavaScript
 *     rgbToHex('rgb(0,0,0)') => '#000000'
 *     rgbToHex('#000000') => ''
 * ```
 */
export function rgbToHex (color:string) {
  if (!color || !isRgb(color)) {
    return '';
  }
  const { r, g, b } = parseColorString(color) as IRgba;
  // tslint:disable-next-line:no-bitwise
  const hex = ((r << 16 | g << 8 | b)as number).toString(16);
  return `#${ new Array(Math.abs(hex.length - 7)).join('0') }${hex}`;
}

/**
 * @description rgbaToHex
 * @param {string} color
 * @returns
 * @example
 * ```JavaScript
 *     rgbaToHex('rgb(0,0,0)') => '#000000'
 *     rgbaToHex('#000000') => ''
 * ```
 */
export function rgbaToHex (color:string) {
  if (!color || !isRgba(color)) {
    return '';
  }
  const { r, g, b } = parseColorString(color) as IRgba;
  const hex = ((r << 16 | g << 8 | b)as number).toString(16);
  return `#${ new Array(Math.abs(hex.length - 7)).join('0') }${hex}`;
}