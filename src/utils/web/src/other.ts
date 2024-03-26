// 高亮关键词
export function transHightLight (str:string, keyWords:string, color = '#0053db') {
  const reg = new RegExp(`(${keyWords.split('').join('|')})`, 'ig');
  return str.replace(reg, `<span style="color:${color}">$1</span>`);
}

export function copyToClipboard (text:string) {
  const dom = document.createElement('input');
  dom.value = text;
  document.body.appendChild(dom);
  dom.select();
  document.execCommand('copy');
  document.body.removeChild(dom);
}