/**
 * 该函数将给定 DOM 元素上的旧类替换为新类。
 * @param {Node} dom - `dom` 参数的类型为 `Node`，表示将执行类替换的 DOM 元素。
 * @param {string} newClass - 要添加到 DOM 元素的新 CSS 类。
 * @param {string} oldClass - oldClass 参数是一个字符串，表示要替换的类名。
 * @example
 * ```JavaScript
 *  let div = document.creatElement('div');
 *  div.className = 'a11'
 *  replaceClass(div,'a22','a11')
 * ```
 */
export default function replaceClass (dom:Node, newClass:string, oldClass:string) {
  this.removeClass(dom, oldClass);
  this.addClass(dom, newClass);
}
