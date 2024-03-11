import getNode from './getNode';

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
export default function renderTmp (selecter:string, data:any):string {
  let str = getNode(selecter)?.innerHTML || '';
  let pattern = /{{\s*([a-zA-Z]+)\s*}}/;
  while (pattern.exec(str)) {
    let pattResult = pattern.exec(str) || [/ /, ''];
    str = str.replace(pattResult[0], data[pattResult[1]]);
  }
  return str;
}