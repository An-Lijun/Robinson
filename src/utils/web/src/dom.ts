
import { hasTypeIn, isString } from '../../../index';
type position = 'beforebegin'|'afterbegin'|'beforeend'|'afterend'

// 节点方法 ---------------------------------------
/**
 * 该函数检查元素是否是节点。
 * @param {Element} el - `el` 参数的类型是 `Element`，它表示 HTML DOM 中的一个元素。
 * @returns 一个布尔值。如果给定元素的 nodeType 为 1 (ELEMENT_NODE)、9 (DOCUMENT_NODE) 或 11
 * (DOCUMENT_FRAGMENT_NODE)，则返回 true。否则，返回 false。
 * @example
 * ```JavaScript
 *    let div =document.createElement('div');
 *    isNode(div) =>true
 * ```
 */
export function isNode (el:any) :Boolean {
  if (hasTypeIn(el, ['null', 'undefined', 'NaN'])) {
    return false;
  }
  return el.nodeType === 1 || el.nodeType === 9 || el.nodeType === 11;
}
/**
 * 函数 `nodeToString` 接受一个 HTML 元素并返回它的字符串表示形式。
 * @param {Element} node - `node` 参数的类型为 `Element`，它表示 DOM（文档对象模型）中的 HTML 元素。它可以是任何 HTML元素
 * @returns 所提供的 HTML 元素的字符串表示形式。
 * @example
 * ```JavaScript
 *    let div =document.createElement('div');
 *    nodeToString(div) => '<div></div>'
 * ```
 */
export function nodeToString (node:Element):string {
  let tmpNode = document.createElement('div');
  tmpNode.appendChild(node.cloneNode(true));
  let str = tmpNode.innerHTML;
  // tmpNode = null;
  // node = null; // prevent memory leaks in IE
  return str;
}
/**
 * 函数“addNode”将 DOM 元素或字符串插入到父 DOM 元素的指定位置。
 * @param {Element} parentDom - `parentDom` 参数是将新节点插入的 DOM 元素。
 * @param {Element} dom - “dom”参数可以是“Element”或“String”。它表示需要添加到“parentDom”的元素或 HTML 字符串。
*  @param {position} [position=afterbegin] - “position”参数是可选的，默认值为“afterbegin”。它指定新节点相对于父节点应插入的位置。
 * “position。它可以具有以下值之一：
 * beforebegin parentDom元素的前面
 * afterbegin  parentDom元素内部的第一个子节点之前
 * beforeend parentDom元素内部的最后一个子节点之后
 * afterend parentDom元素的后面
 * @example
 * ```JavaScript
 *  let parent =document.querySelect('#box');
 *  let newDom =document.createElement('div')
 *  addNode(parent,newDom,'beforeBegin')
 * ---
 *   let parent =document.querySelect('#box');
 *   let str = `<div>123 </div>`
 *   addNode(parent,str,'beforeBegin')
 * ```
 */
export function addNode (
  parentDom:Element, dom:Element|String, position:position = 'afterbegin') {
  let strDom = '';
  if (isNode(dom)) {
    strDom = nodeToString(dom as Element);
  }
  parentDom.insertAdjacentHTML(position, strDom);
}
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
export function stringToNode (str:string):Node |null {
  let tempNode = document.createElement('div');
  tempNode.innerHTML = str;
  return tempNode.firstChild;
}
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
/**
 * 该函数从其父节点中删除指定的 DOM 元素。
 * @param {Element} parentNode - `parentNode` 参数是包含 `dom` 元素的元素。它是您要从中删除“dom”元素的元素。
 * @param {Element} dom - `dom` 参数是要从其父节点中删除的元素。
 * @example
 * ```JavaScript
 *    let div =document.createElement('div');
 *    document.body.appendChild(div)
 *    removeNode(document.body,div)
 * ```
 */
export function removeNode (parentNode:Element, dom:Element) {
  parentNode.removeChild(dom);
}
/**
 * 函数 getNode 将 DOM 元素名称作为输入，如果找到则返回相应的元素，否则返回 null。
 * @param {string} domName - `domName` 参数是一个字符串，表示您要选择的 DOM 元素的名称。
 * @returns Element 对象或 null。
 * @example
 * ```JavaScript
 *    getNode('#id') ===document.querySelector('#id');
 * ```
 */
export function getNode (domName:string):Element|null {
  return document.querySelector(domName);
}
/**
 * 函数“getNodes”返回与给定选择器匹配的 DOM 节点的 NodeList，如果未找到节点，则返回 null。
 * @param {string} domName - `domName` 参数是一个字符串，表示您要选择的 DOM 元素的名称。
 * @returns NodeList 或 null。
 * @example
 * ```JavaScript
 *    let lis =getNodes('li') === document.querySelectorAll('li')
 * ```
 */
export function getNodes (domName:string):NodeList|null {
  return document.querySelectorAll(domName);
}

//事件方法   ----------------------------------------
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
export function bind (dom:Node, eventType:string,
  callBack:EventListenerOrEventListenerObject, isCatch = false) {
  dom.addEventListener(eventType, callBack, isCatch);
}

/**
 * 函数 unBind 从 DOM 元素中删除事件侦听器。
 * @param {Node} dom - `dom` 参数是事件监听器所附加的 DOM 元素。
 * @param {string} eventType - eventType 参数是一个字符串，指定要删除的事件的类型。事件类型的示例包括“单击”、“按下键”、“鼠标悬停”等。
 * @param {EventListenerOrEventListenerObject} fnName - `fnName`
 * 参数是要从指定 DOM 元素中删除的事件侦听器函数或事件侦听器对象的名称。
 * @example
 * ```JavaScript
 *    let div = document.querySelect('#btn');
 *    div.onclik =()=>{
 *      console.log('11')
 *    }
 *    unBind(div,'click')
 * ```
 */
export function unBind (dom:Node, eventType:string,
  fnName:EventListenerOrEventListenerObject) {
  dom.removeEventListener(eventType, fnName, false);
}
/**
 * 函数 stopPropagation 阻止事件在事件链中向上冒泡。
 * @param {Event} event -
 * 事件参数是一个表示发生的事件的对象。它包含有关事件的信息，例如事件类型、目标元素以及与事件关联的任何其他数据。在这种情况下，事件参数的类型为Event，它是一个通用事件对象，可以
 */
export function stopPropagation (event:Event) {
  event.stopPropagation();
}

/**
 * 该函数可防止事件的默认行为。
 * @param {Event} event - “event”参数是一个对象，表示已发生的事件，例如鼠标单击或按键。
 * 它包含有关事件的信息，例如事件类型、触发事件的目标元素以及与事件关联的任何其他数据。
 */
export function preventDefault (event:Event) {
  event.preventDefault();
}

// class方法 ----------------------------------------
/**
 * 该函数将一个类添加到 DOM 元素。
 * @param {Element} dom - `dom` 参数的类型为 `Element`，表示要添加该类的 DOM 元素。
 * @param {string} classNm - `classNm` 参数是一个字符串，表示要添加到 `dom` 元素的类的名称。
 * @example
 * ```JavaScript
 *    let div= document.createElement('div')
 *    addClass(div,'aa')
 *    div.className => "aa"
 * ```
 */
export function addClass (dom:Element, classNm:string) {
  dom.classList.add(classNm);
}
/**
 * 该函数从给定的 DOM 元素中删除指定的类名。
 * @param {Element} dom - “dom”参数的类型为“Element”，表示要从中删除类的 DOM 元素。
 * @param {string} classNm - “classNm”参数是一个字符串，表示要从“dom”元素中删除的类的名称。
 * @example
 * ```JavaScript
 *    let div =document.createElement('div');
 *    div.className ='a1 a2 a3'
 *    removeClass(div,'a1')
 * ```
 */
export function removeClass (dom:Element, classNm:string) {
  dom.classList.remove(classNm);
}
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
export function replaceClass (dom:Node, newClass:string, oldClass:string) {
  this.removeClass(dom, oldClass);
  this.addClass(dom, newClass);
}

/**
 * 该函数检查元素是否具有特定的类名。
 * @param {Element} dom - “dom”参数的类型为“Element”，表示我们要检查其是否存在类的 DOM 元素。
 * @param {String} classNm - “classNm”参数是一个字符串，表示您要在“dom”元素中检查的类名。
 * @returns 一个布尔值，指示给定的 DOM 元素是否具有指定的类名。
 * @example
 * ```JavaScript
 *    let div =document.createElement('div');
 *    div.classList="a1 a2 a3"
 *    hasClass(div,'a1')  => true
 * ```
 */
export function hasClass (dom:Element, classNm:String) {
  let array = Array.prototype.slice.call(dom.classList, 0);
  return array.some(item => item === classNm);
}

// 渲染方法 -------------------------------------------
/**
 * 该函数获取元素的InnerHtml字符串模板,填写好内容并返回
 * @param {string} selecter css 选择器
 * @param {any} data - `dom` 模板需要的数据
 * @example
 * ```JavaScript
      html:
      <div id='user-box'> </div>
      <script type="text/html" id="tpl-user">
          <div>姓名:{{name}}</div>
          <div>年龄:{{  age  }}</div>
          <div>性别:{{  gender}}</div>
          <div>住址:{{address  }}</div>
      </script>
      JavaScript:
      let data ={name:"张三",age:28,gender:"男",address:"北京顺路"}
      //调用模板引擎
      let htmlStr=renderTmp('tpl-user',data)
      //操作dom渲染html结构
      document.getElementById('user-box').innerHTML=htmlStr
      resule
      <div id='user-box'>
          <div>姓名:{{ 张三 }}</div>
          <div>年龄:{{ 28 }}</div>
          <div>性别:{{ 男 }}</div>
          <div>住址:{{ 北京顺路 }}</div>
      </div>
 * ```
 */
export function renderTmp (selecter:string, data:any):string {
  let str = getNode(selecter)?.innerHTML || '';
  let pattern = /{{\s*([a-zA-Z]+)\s*}}/;
  while (pattern.exec(str)) {
    let pattResult = pattern.exec(str) || [/ /, ''];
    str = str.replace(pattResult[0], data[pattResult[1]]);
  }
  return str;
}

// 全量导入
const dom = {
  isNode,
  nodeToString,
  addNode,
  stringToNode,
  replaceNode,
  removeNode,
  getNode,
  getNodes,
  bind,
  unBind,
  stopPropagation,
  preventDefault,
  addClass,
  removeClass,
  replaceClass,
  hasClass,
  renderTmp

};
export default dom;