
export interface IRgba {
  r: number;
  g: number;
  b: number;
  a?: number;
}

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
 * 颜色对象转化为rgba颜色字符串
 * @param colorObj 颜色对象
 */
export const toRgbaString = (colorObj: IRgba, n = 10000) => {
  const { r, g, b, a = 1 } = colorObj;
  return `rgba(${r},${g},${b},${Math.floor(a * n) / n})`;
};

/**
 * @description 函数“getStringType”以字符串形式返回输入值的类型。
 * @param {any} value - “value”参数可以是任何数据类型或您想要确定其类型的值。
 * @returns 返回输入值类型的字符串表示形式 如 [object object]。
 * @example
 * ```JavaScript
 *    let num =123; getStringType(num) => '[object number]'
 *    let obj ={}; getStringType(obj) => '[object object]'
 * ```
 */
export function getStringType (value:any):String {
  return Object.prototype.toString.call(value).toLowerCase();
}