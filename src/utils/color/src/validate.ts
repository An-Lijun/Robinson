/**
 * 判断是否为 16进制颜色
 * @param color
 * @returns
 */
export function isHex (color:string) {
  const reg = /^#([0-9a-fA-F]{3}|[0-9a-fA-f]{6})$/;
  return reg.test(color);
}
/**
 * 判断是否为 rgb颜色
 * @param color
 * @returns
 */
export function isRgb (color:string) {
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
 * 判断是否为 rgba颜色
 * @param color
 * @returns
 */
export function isRgba (color:string) {
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