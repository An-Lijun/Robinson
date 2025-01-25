/**
 * @beta
 * @description 将字符串中的关键词高亮显示。
 * @param str - 要进行高亮处理的原始字符串。
 * @param keyWords - 要高亮的关键字，多个关键字之间可以不使用分隔符。
 * @param color - 高亮显示的颜色，默认为 '#0053db'。
 * @returns 返回一个新的字符串，其中关键字被包裹在带有指定颜色样式的 span 标签中。
 */
export function transHightLight (str:string, keyWords:string | Array<string>, color = '#0053db') {
  // 创建一个正则表达式，用于匹配所有关键字
  let reg;
  if (Array.isArray(keyWords)) {
    reg = new RegExp(`(${keyWords.join('|')})`, 'ig');
  } else {
    reg = new RegExp(`(${keyWords})`, 'ig');
  }
  // 使用正则表达式替换字符串中的关键字，并将其包裹在 <span> 标签中
  return str.replace(reg, `<span style="color:${color}">$1</span>`);
}

/**
 * @beta
 * @description 将文本复制到剪贴板。
 * @param text - 要复制到剪贴板的文本内容。
 */
export function copyToClipboard (text:string) {
  // 创建一个临时的 input 元素
  const dom = document.createElement('input');
  // 设置 input 元素的值为要复制的文本
  dom.value = text;
  // 将 input 元素添加到文档中
  document.body.appendChild(dom);
  // 选择 input 元素中的文本
  dom.select();
  // 执行复制命令
  document.execCommand('copy');
  // 从文档中移除 input 元素
  document.body.removeChild(dom);
}