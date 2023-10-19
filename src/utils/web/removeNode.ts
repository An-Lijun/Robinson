
/**
 * 该函数从其父节点中删除指定的 DOM 元素。
 * @param {Element} parentNode - `parentNode` 参数是包含 `dom` 元素的元素。它是您要从中删除“dom”元素的元素。
 * @param {Element} dom - `dom` 参数是要从其父节点中删除的元素。
 * ```JavaScript
 *    let div =document.createElement('div');
 *    document.body.appendChild(div)
 *    removeNode(document.body,div)
 * ```
 */
export default function removeNode (parentNode:Element, dom:Element) {
  parentNode.removeChild(dom);
}