
/**
 * 函数 `nodeToString` 接受一个 HTML 元素并返回它的字符串表示形式。
 * @param {Element} node - `node` 参数的类型为 `Element`，它表示 DOM（文档对象模型）中的 HTML 元素。它可以是任何 HTML元素
 * @returns 所提供的 HTML 元素的字符串表示形式。
 * @example
 * ```JavaScript
 *    let div =document.createElement('div');
 *    nodeToString(div) => '<div></div>'
 * ```
 */
export default function nodeToString (node:Element):string {
  let tmpNode = document.createElement('div');
  tmpNode.appendChild(node.cloneNode(true));
  let str = tmpNode.innerHTML;
  // tmpNode = null;
  // node = null; // prevent memory leaks in IE
  return str;
}