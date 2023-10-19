import hasTypeIn from '../common/hasTypeIn';

/**
 * 该函数检查元素是否是节点。
 * @param {Element} el - `el` 参数的类型是 `Element`，它表示 HTML DOM 中的一个元素。
 * @returns 一个布尔值。如果给定元素的 nodeType 为 1 (ELEMENT_NODE)、9 (DOCUMENT_NODE) 或 11
 * (DOCUMENT_FRAGMENT_NODE)，则返回 true。否则，返回 false。
 * ```JavaScript
 *    let div =document.createElement('div');
 *    isNode(div) =>true
 * ```
 */
export default function isNode (el:any) :Boolean {
  if (hasTypeIn(el, ['null', 'undefined', 'NaN'])) {
    return false;
  }
  return el.nodeType === 1 || el.nodeType === 9 || el.nodeType === 11;
}