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
 * @beta
 * @description 获取当前日期的时间戳。
 * @param {Tday} date - 输入的日期，可以是 dayjs 对象、Date 对象或字符串。
 * @returns {number} - 返回时间戳（毫秒数）。
 * @example
 * ```javascript
 * getTimestamp(dayjs('2024-03-01 08:00:00')) // 1709251200000
 * ```
 */
export function getTimestamp (date: Tday): number {
  return dayjs(date).valueOf();
}

/**
 * @beta
 * @description 格式化时间。
 * @param {Tday} date - 输入的日期，可以是 dayjs 对象、Date 对象或字符串。
 * @param {string} [pattern='YYYY-MM-DD'] - 格式化模式，默认为 'YYYY-MM-DD'。
 * @returns {string} - 返回格式化后的时间字符串。
 * @example
 * ```javascript
 * formatDate(dayjs('2024-03-01 08:00:00'), 'YYYY年MM月DD日') // '2024年03月01日'
 * ```
 */
export function formatDate (date: Tday, pattern: string = 'YYYY-MM-DD'): string {
  if (!date) {return '';}
  return dayjs(date).format(pattern);
}

/**
 * @beta
 * @description 计算给定日期之前的日期，并返回格式化后的结果。
 * @param {Tday} date - 起始日期，可以是 dayjs 对象、Date 对象或字符串。
 * @param {IOptions} option - 操作选项。
 * @returns {string} - 返回格式化后的日期字符串。
 * @example
 * ```javascript
 * getBeforeDate(dayjs('2024-03-02 08:00:00'), { pattern: 'YYYY年MM月DD日' }) // '2024年03月01日'
 * getBeforeDate(dayjs('2024-03-02 08:00:00'),
 * { unitType: 'M', pattern: 'YYYY年MM月DD日' }) // '2024年02月02日'
 * ```
 */
export function getBeforeDate (date: Tday, option: IOptions): string {
  const { unit = 1, unitType = 'd', pattern = 'YYYY-MM-DD' } = option;
  return formatDate(dayjs(date).subtract(unit, unitType), pattern);
}

/**
 * @beta
 * @description 计算给定日期之后的日期，并返回格式化后的结果。
 * @param {Tday} date - 起始日期，可以是 dayjs 对象、Date 对象或字符串。
 * @param {IOptions} option - 操作选项。
 * @returns {string} - 返回格式化后的日期字符串。
 * @example
 * ```javascript
 * getAfterDate(dayjs('2024-03-02 08:00:00'), { pattern: 'YYYY年MM月DD日' }) // '2024年03月03日'
 * getAfterDate(dayjs('2024-03-02 08:00:00'),
 * { unitType: 'M', pattern: 'YYYY年MM月DD日' }) // '2024年04月02日'
 * ```
 */
export function getAfterDate (date: Tday, option: IOptions): string {
  const { unit = 1, unitType = 'd', pattern = 'YYYY-MM-DD' } = option;
  return formatDate(dayjs(date).add(unit, unitType), pattern);
}

/**
 * @beta
 * @description 计算两个日期之间的差值。
 * @param {Tday} start - 开始日期，可以是 dayjs 对象、Date 对象或字符串。
 * @param {Tday} end - 结束日期，可以是 dayjs 对象、Date 对象或字符串。
 * @param {dayjs.OpUnitType} unitType - 时间单位类型。
 * @param {boolean} [float=false] - 是否返回浮点数，默认为 false。
 * @returns {number} - 返回两个日期之间的差值。
 * @example
 * ```javascript
 * getDiff(dayjs('2024-03-02 08:00:00'), dayjs('2024-03-03 08:00:00'), 'd') // 1
 * getDiff(dayjs('2024-03-02 08:00:00'), dayjs('2024-04-03 08:00:00'), 'd') // 32
 * ```
 */
// eslint-disable-next-line
export function getDiff (start: Tday, end: Tday, unitType: dayjs.OpUnitType, float: boolean = false): number {
  return dayjs(formatDate(end)).diff(formatDate(start), unitType, float);
}

/**
 * @beta
 * @description 判断给定年份是否为闰年。
 * @param {string | number} year - 要判断的年份，可以是字符串或数字。
 * @returns {boolean} - 如果是闰年返回 true，否则返回 false。
 * @example
 * ```javascript
 * isLeapYear('2024') // true
 * isLeapYear('2025') // false
 * ```
 */
export function isLeapYear (year: string | number): boolean {
  return dayjs(`${year}-01-01`).isLeapYear();
}

/**
 * @beta
 * @description 判断一个日期是否在另一个日期之前。
 * @param {dayjs.ConfigType} start - 开始日期，可以是 dayjs 对象、Date 对象或字符串。
 * @param {dayjs.ConfigType} end - 结束日期，可以是 dayjs 对象、Date 对象或字符串。
 * @returns {boolean} - 如果开始日期在结束日期之前返回 true，否则返回 false。
 */
export function isBefore (start: dayjs.ConfigType, end: dayjs.ConfigType): boolean {
  return dayjs(start).isBefore(end);
}

/**
 * @beta
 * @description 判断一个日期是否在另一个日期之后。
 * @param {dayjs.ConfigType} start - 开始日期，可以是 dayjs 对象、Date 对象或字符串。
 * @param {dayjs.ConfigType} end - 结束日期，可以是 dayjs 对象、Date 对象或字符串。
 * @returns {boolean} - 如果开始日期在结束日期之后返回 true，否则返回 false。
 */
export function isAfter (start: dayjs.ConfigType, end: dayjs.ConfigType): boolean {
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