export * from './src/trans';
export * from './src/validate';

// /**
//  *判断是不是Dark
//  * @param color
//  * @returns
//  */
// export function isDark (color:string):boolean {
//   if (!isHex(color)) {return false;}
//   const [r, g, b] = hexToRGB(color)
//     .replace(/(?:\(|\)|rgb|RGB)*/g, '')
//     .split(',')
//     .map((item)=>Number(item));
//   return r * 0.299 + g * 0.578 + b * 0.114 < 192;
// }