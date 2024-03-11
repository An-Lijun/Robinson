/**
 * 函数 getNode 将 DOM 元素名称作为输入，如果找到则返回相应的元素，否则返回 null。
 * @param {string} domName - `domName` 参数是一个字符串，表示您要选择的 DOM 元素的名称。
 * @returns Element 对象或 null。
 * @example
 * ```JavaScript
 *    getNode('#id') ===document.querySelector('#id');
 * ```
 */
export default function getNode (domName:string):Element|null {
  return document.querySelector(domName);
}