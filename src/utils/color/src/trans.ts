import { parseColorString, IRgba, toRgbaString } from '../../helper';
import { isHex, isRgb, isRgba } from './validate';

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