import { isHex, isRgb, isRgba } from './validate';
interface IRgba {
  r: number;
  g: number;
  b: number;
  a?: number;
}

/**
 * @beta
 * @description 将颜色对象转换为rgba颜色字符串
 *
 * @param colorObj - 颜色对象，包含r、g、b分量，可选a分量
 * @param n - 透明度的小数点后保留位数，默认为10000（即保留4位小数）
 * @returns 返回一个rgba格式的字符串
 * @example
 * ```javascript
 * let obj = { r: 255, g: 255, b: 255 };
 * toRgbaString(obj); // "rgba(255,255,255,1)"
 * ```
 */
export const toRgbaString = (colorObj: IRgba, n = 10000) => {
  const { r, g, b, a = 1 } = colorObj;
  return `rgba(${r},${g},${b},${Math.floor(a * n) / n})`;
};

/**
 * @beta
 * @description 解析十六进制颜色字符串为RGBA对象
 *
 * 该函数接受一个十六进制颜色字符串（例如 "#RRGGBB" 或 "#RGB"），
 * 并将其解析为一个包含红（r）、绿（g）、蓝（b）和透明度（a）分量的对象
 *
 * @param color - 十六进制颜色字符串
 * @returns 包含RGBA分量的对象
 * @example
 * ```javascript
 * parseHexColor('#FF0000'); // { r: 255, g: 0, b: 0, a: 1 }
 * parseHexColor('#F00');    // { r: 255, g: 0, b: 0, a: 1 }
 * parseHexColor('#FF0000FF'); // { r: 255, g: 0, b: 0, a: 1 }
 * ```
 */
export const parseHexColor = (color: string): IRgba => {
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
 * @beta
 * @description 解析rgba颜色字符串为颜色对象
 *
 * @param color - rgba颜色字符串
 * @returns 包含RGBA分量的对象
 * @example
 * ```javascript
 * parseRgbaColor('rgba(255, 0, 0, 0.5)'); // { r: 255, g: 0, b: 0, a: 0.5 }
 * ```
 */
export const parseRgbaColor = (color: string): IRgba => {
  const arr = color.match(/(\d+(\.\d+)?)+/g) || [];
  const res = arr.map((s: string) => parseInt(s, 10));
  return { r: res[0],
    g: res[1],
    b: res[2],
    a: parseFloat(arr[3]) } as IRgba;
};
/**
 * @beta
 * @description 解析颜色字符串为颜色对象
 *
 * 该函数可以解析十六进制颜色字符串或rgba颜色字符串为颜色对象
 *
 * @param color - 颜色字符串
 * @returns 包含RGBA分量的对象，如果无法解析则返回空字符串
 * @example
 * ```javascript
 * parseColorString('#FF0000');         // { r: 255, g: 0, b: 0, a: 1 }
 * parseColorString('rgba(255, 0, 0, 0.5)'); // { r: 255, g: 0, b: 0, a: 0.5 }
 * ```
 */
export const parseColorString = (color: string): IRgba | string => {
  if (color.startsWith('#')) {
    return parseHexColor(color);
  } else if (color.startsWith('rgb')) {
    return parseRgbaColor(color);
  }
  return '';
};
/**
 * @beta
 * @description 将十六进制颜色字符串转换为rgba颜色字符串
 *
 * @param hex - 十六进制颜色字符串
 * @returns 转换后的rgba颜色字符串，如果输入无效则返回空字符串
 * @example
 * ```javascript
 * hexToRgba('#FD7086'); // 'rgba(253,112,134,1)'
 * hexToRgba('rgba(253,112,134,0.9)'); // ''
 * ```
 */
export function hexToRgba (hex: string): string {
  if (!hex || !isHex(hex)) {
    return '';
  }
  const colorObj = parseColorString(hex);
  return toRgbaString(colorObj as IRgba);
}

/**
 * @beta
 * @description 将十六进制颜色字符串转换为rgb颜色字符串
 *
 * @param hex - 十六进制颜色字符串
 * @returns 转换后的rgb颜色字符串，如果输入无效则返回空字符串
 * @example
 * ```javascript
 * hexToRgb('#FD7086'); // 'rgb(253,112,134)'
 * hexToRgb('rgb(253,112,134,0.9)'); // ''
 * ```
 */
export function hexToRgb (hex: string): string {
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
  return `rgb(${r},${g},${b})`;
}

/**
 * @beta
 * @description 将rgb颜色字符串转换为十六进制颜色字符串
 *
 * @param color - rgb颜色字符串
 * @returns 转换后的十六进制颜色字符串，如果输入无效则返回空字符串
 * @example
 * ```javascript
 * rgbToHex('rgb(0,0,0)'); // '#000000'
 * rgbToHex('#000000'); // ''
 * ```
 */
export function rgbToHex (color: string): string {
  if (!color || !isRgb(color)) {
    return '';
  }
  const { r, g, b } = parseColorString(color) as IRgba;
  const hex = ((r << 16 | g << 8 | b) as number).toString(16);
  return `#${'0'.repeat(6 - hex.length)}${hex}`;
}

/**
 * @beta
 * @description 将rgba颜色字符串转换为十六进制颜色字符串
 *
 * @param color - rgba颜色字符串
 * @returns 转换后的十六进制颜色字符串，如果输入无效则返回空字符串
 * @example
 * ```javascript
 * rgbaToHex('rgba(0,0,0,1)'); // '#000000'
 * rgbaToHex('#000000'); // ''
 * ```
 */
export function rgbaToHex (color: string): string {
  if (!color || !isRgba(color)) {
    return '';
  }
  const { r, g, b } = parseColorString(color) as IRgba;
  const hex = ((r << 16 | g << 8 | b) as number).toString(16);
  return `#${'0'.repeat(6 - hex.length)}${hex}`;
}