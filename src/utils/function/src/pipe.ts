/**
 * 从左向右执行函数
 * @param  {...any} funcs
 * @returns
 */
export function pipe (...funcs:Array<Function>) {
  return () => funcs.reduce((result, func) => func(result));
}