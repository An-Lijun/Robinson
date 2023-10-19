
/**
 * 函数 unBind 从 DOM 元素中删除事件侦听器。
 * @param {Node} dom - `dom` 参数是事件监听器所附加的 DOM 元素。
 * @param {string} eventType - eventType 参数是一个字符串，指定要删除的事件的类型。事件类型的示例包括“单击”、“按下键”、“鼠标悬停”等。
 * @param {EventListenerOrEventListenerObject} fnName - `fnName`
 * 参数是要从指定 DOM 元素中删除的事件侦听器函数或事件侦听器对象的名称。
 * ```JavaScript
 *    let div = document.querySelect('#btn');
 *    div.onclik =()=>{
 *      console.log('11')
 *    }
 *    unBind(div,'click')
 * ```
 */
export default function unBind (dom:Node, eventType:string,
  fnName:EventListenerOrEventListenerObject) {
  dom.removeEventListener(eventType, fnName, false);
}