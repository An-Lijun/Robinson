
/**
 * 判断是否为 16禁止颜色
 * @param color
 * @returns
 */
export function isHexColor (color:string) {
  const reg = /^#([0-9a-fA-F]{3}|[0-9a-fA-f]{6})$/;
  return reg.test(color);
}

/**
 * hex转rgba
 * @param {*} hex 色值
 * @param {*} opacity 透明度
 * @returns
 */
export function hexToRgba (hex:string, opacity = 0.3) {
  return `rgba(
    ${parseInt(`0x${ hex.slice(1, 3)}`, 10)}, 
    ${parseInt(`0x${ hex.slice(3, 5)}`, 10)},
    ${parseInt(`0x${ hex.slice(5, 7)}`, 10)},
    ${opacity}
    )
  `;
}

/**
 * RGB转16进制 rgb需要再[0,255]
 * @param r
 * @param g
 * @param b
 * @returns
 */
export function rgbToHex (r: number, g:number, b: number) {
  // tslint:disable-next-line:no-bitwise
  const hex = ((r << 16 | g << 8 | b)as number).toString(16);
  return `#${ new Array(Math.abs(hex.length - 7)).join('0') }${hex}`;
}

/**
 * hex转RGB
 * @param hex
 * @returns
 */
export function hexToRGB (hex:string) {
  let sHex = hex.toLowerCase();
  if (isHexColor(hex)) {
    if (sHex.length === 4) {
      let sColorNew = '#';
      for (let i = 1; i < 4; i += 1) {
        sColorNew += sHex.slice(i, i + 1).concat(sHex.slice(i, i + 1));
      }
      sHex = sColorNew;
    }
    const sColorChange:number[] = [];
    for (let i = 1; i < 7; i += 2) {
      sColorChange.push(parseInt(`0x${ sHex.slice(i, i + 2)}`, 10));
    }
    return `RGB(${sColorChange.join(',')})`;}
  return sHex;
}

/**
 *判断是不是Dark
 * @param color
 * @returns
 */
export function isDark (color:string):boolean {
  if (!isHexColor(color)) {return false;}
  const [r, g, b] = hexToRGB(color)
    .replace(/(?:\(|\)|rgb|RGB)*/g, '')
    .split(',')
    .map((item)=>Number(item));
  return r * 0.299 + g * 0.578 + b * 0.114 < 192;
}