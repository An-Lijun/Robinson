/**
 * 该函数从给定的 DOM 元素中删除指定的类名。
 * @param {Element} dom - “dom”参数的类型为“Element”，表示要从中删除类的 DOM 元素。
 * @param {string} classNm - “classNm”参数是一个字符串，表示要从“dom”元素中删除的类的名称。
 * ```JavaScript
 *    let div =document.createElement('div');
 *    div.className ='a1 a2 a3'
 *    removeClass(div,'a1')
 * ```
 */
export default function removeClass (dom:Element, classNm:string) {
  dom.classList.remove(classNm);
}