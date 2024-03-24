import { parseColorString, IRgba, toRgbaString } from '../../helper';
import { isHex, isRgb, isRgba } from './validate';

/**
 * hex转rgba
 * @param {*} hex 色值
 * @returns
 */
export function hexToRgba (hex:string) {
  if (!hex || !isHex(hex)) {
    return '';
  }
  const colorObj = parseColorString(hex);
  return toRgbaString((colorObj as IRgba));
}

/**
 * hex转RGB
 * @param hex
 * @returns
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
 * rgbToHex
 * @param color
 * @returns
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
 * rgbaToHex
 * @param color
 * @returns
 */
export function rgbaToHex (color:string) {
  if (!color || !isRgba(color)) {
    return '';
  }
  const { r, g, b } = parseColorString(color) as IRgba;
  // tslint:disable-next-line:no-bitwise
  const hex = ((r << 16 | g << 8 | b)as number).toString(16);
  return `#${ new Array(Math.abs(hex.length - 7)).join('0') }${hex}`;
}