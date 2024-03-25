import dayjs from 'dayjs';
import leapYear from 'dayjs/plugin/isLeapYear';

dayjs.extend(leapYear);

export default dayjs;

type Tday = dayjs.ConfigType | Date | string;
interface IOptions{
  unit:number,
  unitType:dayjs.ManipulateType,
  pattern:string
}

/**
 * 获取当前日期的时间戳
 * @param {Tday} date
 * @returns string
 */
export function getTimestamp (date:Tday) {
  return dayjs(date).valueOf();
}

/**
 * 格式化时间
 * @param {string} date 时间,
 * @param pattern 格式化规则 'YYYY-MM-DD'
 * @returns 返回格式化后的时间
 */
export function formatDate (date:Tday, pattern = 'YYYY-MM-DD') {
  if (!date) {return '';}
  return dayjs(date).format(pattern);
}

/**
 * 日期减少
 * @param {Tday} date 起始日期
 * @param {IOptions} option
 * @returns {Tday}
 */
export function getBeforeDate (date:Tday, option:IOptions) {
  const { unit = 1,
    unitType = 'd',
    pattern = 'YYYY-MM-DD' } = option;
  return formatDate(dayjs(date).subtract(unit, unitType), pattern);
}

/**
 * 日期增加
 * @param {Tday} date 起始日期
 * @param {IOptions} option
 * @returns {Tday}
 */
export function getAfterDate (date:Tday, option:IOptions) {
  const { unit = 1,
    unitType = 'd',
    pattern = 'YYYY-MM-DD' } = option;
  return formatDate(dayjs(date).add(unit, unitType), pattern);
}

/**
 * 计算两个日期相差时间
 * @param {Tday} start 开始日期
 * @param {Tday} end  结束日期
 * @param {dayjs.OpUnitType} unitType 日期类型
 * @param  {Boolean} float 是否返回浮点型
 * @returns {number} 相差的时间
 */
export function getDaysDiff (start:Tday, end:Tday, unitType:dayjs.OpUnitType, float = false) {
  return dayjs(formatDate(end)).diff(formatDate(start), unitType, float);
}

/**
 * 判断是否是闰年
 * @param {string|number} year 要判断的年份
 * @returns {Boolean}
 */
export function isLeapYear (year:string|number) {
  return dayjs(`${year}-01-01`).isLeapYear();
}

/**
* 判断一个日期是否在另一个日期之前
* @param {string| Date} start 开始日期
* @param {string | Date} end 结束日期
* @return fBoolean)
*/
export function isBefore (start: dayjs.ConfigType, end: dayjs.ConfigType) {
  return dayjs(start).isBefore(end);
}
/**
*判断一个日期是否在另一个日期之后
* @param {string | Date} start 开始日期
* @param {string| Date} end 结束日期术
* @returnHBoolean}
*/
export function isAfter (start: dayjs.ConfigType, end: dayjs.ConfigType) {
  return dayjs(start).isAfter(end);
}
// export default function formatTime (timestamp:string|Date, fmtString:string) {
//   // yyyy-MM-dd hh:mm:ss
//   let result = fmtString;
//   const date = new Date(timestamp);
//   const dateObj:any = {
//     'y+': date.getFullYear(),
//     'M+': date.getMonth() + 1,
//     'd+': date.getDate(),
//     'h+': date.getHours(),
//     'm+': date.getMinutes(),
//     's+': date.getSeconds()
//   };
//   for (const key in dateObj) {
//     const keyRe = new RegExp(key);
//     //如果有这个校验规则,
//     if (keyRe.test(result)) {
//       const value = `${dateObj[key]}`.padStart(2, '0');
//       result = result.replace(keyRe, value);
//     }
//   }
//   return result;
// }