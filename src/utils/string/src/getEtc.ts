import is from '../../common/src/is';

/**
 * 函数“getEtc”接受一个字符串值并返回指定长度的子字符串，并在末尾附加一个可选的“etcStr”。
 * @param {string} value - value 参数是一个字符串，表示需要截断的输入值。
 * @param {number} len - “len”参数是要从“value”参数中提取的字符串的长度。
 * @param {string} [etcStr=...] - `etcStr` 参数是一个字符串，表示如果长度超过指定的 `len`
 * 参数，则要在切片字符串末尾附加的字符。默认情况下，它设置为“...”。
 * @returns 一个字符串。
 * @example
 * ```JavaScript
 * let str ='123456'; getEtc(str,3) => 123...
 * let str ='123456'; getEtc(str,3,'etc') => 123etc
 * ```
 */
export default function getEtc (value:string, len:number, etcStr:string = '...'):string {
  if (!is(value, 'string')) {throw new TypeError('params mast be string');}
  return value.slice(0, len) + etcStr;
}