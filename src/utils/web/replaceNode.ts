import isString from '../string/isString';

/**
 * 函数“replaceNode”用新的 DOM 元素或给定父元素中的字符串替换旧的 DOM 元素。
 * @param {Element} parentNode - ParentNode 参数是包含 oldDom 元素的元素。它是发生替换的父元素。
 * @param {string|Node} newDom - `newDom` 参数可以是字符串或 Node。如果它是一个字符串，
 * 则它表示将使用“stringToNode”函数转换为节点的 HTML
 * 标记。如果已经是一个Node，则代表新的Node将取代旧的Node
 * @param {Element} oldDom - oldDom 参数是要替换为 newDom 的元素。
 * @example
 * ```JavaScript
 *    let div = document.createElement('div')
 *    div.id = 'aa6'
 *    let body = docuement.body
 *    body.appendChild(div);
 *
 *    let span =document.createElement('span');
 *    replaceNode(body,span,div);
 * ```
 */
export function replaceNode (parentNode:Element, newDom:string|Node, oldDom:Element) {
  let dom;
  if (isString(newDom)) {
    dom = this.stringToNode(newDom);
  } else {
    dom = newDom;
  }
  parentNode.replaceChild(dom, oldDom);
}