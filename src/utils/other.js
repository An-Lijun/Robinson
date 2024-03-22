// import Coolies from 'js-cookie'

// export function getCookie (key) {
//   const data = Cookies.get(key);
//   try {
//     return JSON.parse(data);
//   } catch (error) {
//     return data;
//   }
// }
// export function setCookie (key, value) {
//   let data = value;
//   if (typeof value === 'object' && value !== null) {
//     data = JSON.stringify(value);
//   }
//   return Cookies.set(key, data);
// }
// export function removeCookie (key) {
//   return Cookies.remove(key);
// }

/**
 * 合并对象
 * 这里与Object.asign 的区别是 asignData 只会合并 obj1 中存在的key
 * 如:
 * let o ={
 *  a:123,
 * }
 * let b ={
 *  a:456,
 *  b:111
 * }
 * asignData(o,b)
 * o:{
 *  a:456
 * }
 */

export function asignData (obj1, obj2, extraFn) {
  for (const key in obj1) {
    if (Object.hasOwnProperty.call(obj2, key)) {
      obj1[key] = cloneDeep(obj2[key]);
    }
  }
  if (extraFn && typeof extraFn === 'function') {
    extraFn();
  }
}

/**
 *
 * @param {*} enumData  Object||Array
 * @param {*} options   Object ||Stirng
 * @param {*} expty    String ||Number
 * @returns Object || String
 *
 * 注意这里是一个映射函数可以将数据进行枚举映射
 *
 * 当枚举是Array[Object]类型时 options必须传递对象
 * 此时options 需要传递
 *  options.key 要寻找的数组对象中某一个唯一key
 *  options.keyValue 要寻找的数组对象中某一个唯一key 的值
 *  options.label 当type是value 时返回寻找的对象中的label对应的值
 *  options.type 返回的枚举类型
 * 如:
 * let enum1 = [{value:'USD',label:'美元'},{value:'AUD',label:'澳大利亚元'}]
 *
 * mapping(enum1,{key:'value',keyValue:'USD',label:'label',type:'object'})
 * //{value:'USD',label:'美元'}
 * mapping(enum1,{key:'value',keyValue:'USD',label:'label',type:'value'}) //美元
 *
 * 当枚举数据是Object时 此时 options 需要填写String
 *
 *
 * 如果枚举中寻找不到 那么返回 第三个参数expty 默认值为 '--'
 *
 */
export function mapping (enumData, options, expty = '--') {
  if (Array.isArray(enumData) && Object.prototype.toString.call(options) === '[object Object]') {
    let data = enumData.find(item => item[options.key] === options.keyValue);
    if (data) {
      switch (options.type) {
      case 'value':
        return data[options.label];
      case 'object':
        return data;
      default:
        return data;
      }
    }
    return expty;
  }
  else if (Object.prototype.toString.call(enumData) === '[object Object]') {
    if (options in enumData) {return enumData[options];}
    return expty;
  }

  console.warn('type Error');
  return void 0;

}
/**
 * 从右到左的顺序执行函数
 * @param  {...any} funcs
 * @returns
 */
export function compose (...funcs) {
  return () => funcs.reduceRight((result, func) => func(result));
}
/**
 * 从左向右执行函数
 * @param  {...any} funcs
 * @returns
 */
export function pipe (...funcs) {
  return () => funcs.reduce((result, func) => func(result));
}



// 高亮关键词
export function transHightLight (str, keyWords, color = '#0053db') {
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