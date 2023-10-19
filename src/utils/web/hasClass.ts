/**
 * 该函数检查元素是否具有特定的类名。
 * @param {Element} dom - “dom”参数的类型为“Element”，表示我们要检查其是否存在类的 DOM 元素。
 * @param {String} classNm - “classNm”参数是一个字符串，表示您要在“dom”元素中检查的类名。
 * @returns 一个布尔值，指示给定的 DOM 元素是否具有指定的类名。
 * ```JavaScript
 *    let div =document.createElement('div');
 *    div.classList="a1 a2 a3"
 *    hasClass(div,'a1')  => true
 * ```
 */
export default function hasClass (dom:Element, classNm:String) {
  let array = Array.prototype.slice.call(dom.classList, 0);
  return array.some(item => item === classNm);
}