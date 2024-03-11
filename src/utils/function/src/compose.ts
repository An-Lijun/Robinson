/**
 * 从右到左的顺序执行函数
 * @param  {...any} funcs
 * @returns
 */
export function compose (...funcs:Array<Function>) {
  return () => funcs.reduceRight((result, fn) => fn(result));
}