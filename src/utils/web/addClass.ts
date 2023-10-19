/**
 * 该函数将一个类添加到 DOM 元素。
 * @param {Element} dom - `dom` 参数的类型为 `Element`，表示要添加该类的 DOM 元素。
 * @param {string} classNm - `classNm` 参数是一个字符串，表示要添加到 `dom` 元素的类的名称。
 * ```JavaScript
 *    let div= document.createElement('div')
 *    addClass(div,'aa')
 *    div.className => "aa"
 * ```
 */
export default function addClass (dom:Element, classNm:string) {
  dom.classList.add(classNm);
}