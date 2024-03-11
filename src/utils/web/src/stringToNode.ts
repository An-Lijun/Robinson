/**
 * 该函数接受一个字符串并返回新创建的 div 元素的第一个子节点，并将该字符串作为其innerHTML。
 * @param {string} str - `str` 参数是一个字符串，表示一个 HTML 元素或一组 HTML 元素。
 * @returns 创建的 div 元素的第一个子节点。
 * @example
 * ```JavaScript
 *    let str ='<div>123</div>'
 *    document.body.append(stringToNode(str))
 * ```
 */
export default function stringToNode (str:string):Node |null {
  let tempNode = document.createElement('div');
  tempNode.innerHTML = str;
  return tempNode.firstChild;
}