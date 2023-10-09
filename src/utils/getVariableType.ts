
/**
 * @description 函数“getVariableType”接收一个变量并以字符串形式返回其类型。
 * @param {any} data - “data”参数的类型为“any”，这意味着它可以接受任何数据类型。
 * @returns 表示输入数据类型的字符串。
 */
export function getVariableType (data:any):string {
  if (typeof data !== 'object') {
    //number string boolean symbol function undefined bigint
    return typeof data;
  }
  if (data === null) {
    return 'null';
  }
  if (data instanceof Array) {
    return 'array';
  }
  if (data instanceof RegExp) {
    return 'regExp';
  }
  if (data instanceof Map) {
    return 'map';
  }
  if (data instanceof WeakMap) {
    return 'weakmap';
  }
  if (data instanceof Set) {
    return 'set';
  }
  if (data instanceof WeakSet) {
    return 'weakset';
  }
  return 'object';
}
