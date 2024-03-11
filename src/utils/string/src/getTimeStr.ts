import is from '../../common/src/is';

/**
 * 函数“getTimeStr”接受一个字符串和一个数字作为参数，并返回一个重复输入字符串指定次数的新字符串。
 * @param {string} str - `str` 参数是一个字符串，表示需要重复的文本。
 * @param {number} time - “time”参数是一个数字，表示“str”参数应重复的次数。
 * @returns 一个字符串。
 * @example
 * ```JavaScript
 *   let str ='123'; getTimeStr(str,0)=>''
 *   let str ='123'; getTimeStr(str,1)=>'123'
 *   let str ='123'; getTimeStr(str,2)=>'123123'
 * ```
 */
export default function getTimeStr (str:string, time:number):string {
  if (!is(str, 'string')) {throw new TypeError('params mast be string');}
  let newStr = '';
  for (let index = 0; index < time; index++) {
    newStr += str;
  }
  return newStr;
}