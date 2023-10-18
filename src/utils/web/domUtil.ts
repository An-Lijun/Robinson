/**
 * dom节点工具
 * 2021-5-30
 */

//  节点的增删改查    addNode   removeNode    changeNode   getNode/getNodes
//  class的增删改查  addClass removeClass changeClass hasClass
//  事件  阻止冒泡stopPropagation 阻止默认事件preventDefault   事件绑定与解绑 bind unbind
//  节点  节点转字符串 nodeToString  字符串转节点stringToNode
//  请求  get post
export default {
  // 判断元素是节点 参数:元素   true是 false不是
  'isNode': function (el) {
    return el.nodeType === 1 || el.nodeType === 9 || el.nodeType === 11;
  },
  // 添加节点 参数:被插入的节点,添加的内容,添加节点的位置
  //beforebegin元素自身的前面
  //afterbegin插入元素内部的第一个子节点之前
  //beforeend插入元素内部的最后一个子节点之后
  //afterend元素自身的后面
  'addNode': function (boxDom, dom, position) {
    if (this.isNode(dom)) {
      dom = this.nodeToString(dom);
    }
    boxDom.insertAdjacentHTML(position, dom);
  },
  // 删除结点, 参数 父节点 要删除的节点
  'removeNode': function (parentNode, dom) {
    parentNode.removeChild(dom);
  },
  //修改节点(替换节点), 新节点,旧节点
  'changeNode': function (parentNode, newDom, oldDom) {
    if (!this.isNode(newDom)) {
      newDom = this.stringToNode(newDom);
    }
    parentNode.replaceChild(newDom, oldDom);
  },
  //获取单个节点 参数:节点名称
  'getNode': function (domName) {
    return document.querySelector(domName);
  },
  //获取多个节点 参数:节点名称
  'getNodes': function (domName) {
    return document.querySelectorAll(domName);
  },
  // 添加指定class 参数:节点,className
  'addClass': function (dom, classNm) {
    dom.classList.add(classNm);
  },
  // 删除指定class 参数:节点,className
  'removeClass': function (dom, classNm) {
    dom.classList.remove(classNm);
  },
  //修改Class 参数 节点,新class 旧class
  'changeClass': function (dom, newClass, oldClass) {
    this.removeClass(dom, oldClass);
    this.addClass(dom, newClass);
  },
  // 判断结点是否有指定class 参数:节点,className
  'hasClass': function (dom, classNm) {
    //数组获取
    // for (let index = 0; index < dom.classList.length; index++) {
    //     if (dom.classList[index] == classNm) {
    //         return true
    //     }
    // }
    // return false
    return dom.classList.some(item => item === classNm);
  },
  //节点转字符串
  'nodeToString': function (node) {
    let tmpNode = document.createElement('div');
    tmpNode.appendChild(node.cloneNode(true));
    let str = tmpNode.innerHTML;
    tmpNode = node = null; // prevent memory leaks in IE
    return str;
  },
  //字符串转节点
  'stringToNode': function (str) {
    let tempNode = document.createElement('div');
    tempNode.innerHTML = str;
    return tempNode.firstChild;
  },
  // 阻止冒泡 参数:event|空
  'stopPropagation': function (event) {
    event ||= window.event;
    if (event.stopPropagation) {
      event.stopPropagation();
    } else {
      //IE浏览器
      event.cancelBubble = true;
    }
  },
  // 阻止默认事件 参数:event|空
  'preventDefault': function (event) {
    event ||= window.event;
    if (event.preventDefault) {
      event.preventDefault();
    } else {
      //IE浏览器
      event.returnValue = false;
    }
  },
  // 绑定事件  参数:节点,绑定事件名称,处理函数/函数名  写函数名去调用函数方便解绑事件
  'bind': function (dom, eventType, callBack) {
    //处理给ie绑定事件
    if (window.attachEvent) {
      dom.attachEvent(`on${ eventType}`, callBack);
    } else {
      dom.addEventListener(eventType, callBack, false);
    }
  },
  // 解绑事件 参数:节点 解绑事件名称,函数名
  'unbind': function (dom, eventType, fnName) {
    //处理给ie绑定事件
    if (window.detachEvent)
    {dom.detachEvent(`on${ eventType}`, fnName);}
    else {
      dom.removeEventListener(eventType, fnName, false);
    }
  },
  //post 方法
  'post': function (url, data, callBack) {
    let xhr = new XMLHttpRequest();
    //传递过来的参数对象转换为查询字符串
    var data = resolveData(data);
    xhr.open(post, url);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(data);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status == 200) {
        let result = JSON.parse(xhr.responseText);
        callBack.success(result);
      }
    };
  },
  //get 方法
  'get': function (url, data, callBack) {
    let xhr = new XMLHttpRequest();
    //传递过来的参数对象转换为查询字符串
    var data = resolveData(data);
    xhr.open(post, `${url }?${ data}`);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status == 200) {
        let result = JSON.parse(xhr.responseText);
        callBack.success(result);
      }
    };
  }
  // 获取样式
  // 获取元素位置
  // 设置多个样式
  // 在这个节点基础上找节点
  // 主动触发事件
  // 获取鼠标相对元素位置
  // 获取元素真实大小
  // 设置多个样式
};
