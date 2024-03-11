
/**
 * 该函数将事件侦听器绑定到 TypeScript 中的 DOM 元素。
 * @param {Node} dom - `dom` 参数是将事件监听器附加到的 DOM 元素。它可以是任何有效的 DOM 元素
 * @param {string} eventType - eventType 参数是一个字符串，指定要侦听的事件类型。事件类型的示例包括“单击”、“按下键”、“鼠标悬停”等。
 * @param {EventListenerOrEventListenerObject} callBack -
 * `callBack` 参数是当 DOM 元素上发生指定事件时将执行的函数。它可以是实现EventListener 或 EventListenerObject 接口的函数或对象。
 * @param [isCatch=false] - isCatch
 * 参数是一个布尔值，用于确定事件监听器在处理事件时是否应使用捕获阶段（true）或冒泡阶段（false）。默认情况下，它设置为“false”，这意味着事件侦听器将使用冒泡阶段。
 *
 * @example
 * ```JavaScript
 *    let btn =document.querySelect('button');
 *    bind(btn,'clic',()=>{
 *      console.log('123')
 *    })
 * ```
*/
export default function bind (dom:Node, eventType:string,
  callBack:EventListenerOrEventListenerObject, isCatch = false) {
  dom.addEventListener(eventType, callBack, isCatch);
}