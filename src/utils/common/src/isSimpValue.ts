
/**
 * 函数“isSimpleValue”确定给定值是否为简单值（数字、字符串、布尔值、符号、null、undefined 或 bigint）。
 * @param {any} value - `isSimpleValue` 函数接受一个 `any` 类型的参数 `value`，它可以是 JavaScript
 * 中的任何数据类型。该函数检查“value”是否是简单值（数字、字符串、布尔值、符号、null、未定义或 bigint）或复杂值（
 * @returns 函数“isSimpleValue”返回一个布尔值，指示输入“value”是否为简单值（数字、字符串、布尔值、符号、null、undefined 或 bigint）。
 */
export function isSimpleValue (value:any):boolean {
  const type = typeof value;
  // 简单值 number string boolean symbol null undefined bigint
  // 复杂值function Object array set map
  if (value === null) {return true;}
  return type !== 'object' && type !== 'function';
}