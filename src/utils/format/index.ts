import Big from 'big.js';

/**
 * 字符去空格格式化
 * @param str
 * @returns
 */
export function trimStr (str:string) {
  return str.replace(/\s+/g, '');
}

/**
 * 从末尾开始插入
 * @param {string} str 需要处理的字符串
 * @param {number} space 间隔
 * @param {string} insertStr 要插入的内容
 * @returns {string} 处理后的字符串
 */
export function reverseInsert (str:string, space:number, insertStr:string) {
  if (space <= 0) {return str;}
  const chars = str.split('');
  const len = chars.length - 1;
  return chars
    .reduceRight((collect, int, index)=>{
      const resverIndex = len - index;
      collect.push(int);
      if (index !== 0 && resverIndex !== 0 && (resverIndex + 1) % space === 0) {
        collect.push(insertStr);
      }
      return collect;
    }, [] as string[])
    .reverse()
    .join('');
}

/**
 * 格式化金额术
 * @param { string|number } value 数字
 * @param {number } decimalLen 保留小数位数,默认值为2
 * @param {string } splitstr 间隔符，默认值为","
 * @returns 格式化后的金额
 */
export function formatAmt (value?: string | number, decimalLen = 2, splitStr = ',') {
  if (splitStr === '.') {throw new Error('splitStr not allowed to be smae as decimal point');}
  if (!value) {return '';}
  const num = new Big(value).round(decimalLen)
    .toFixed(decimalLen);
  let [integer = '', decimal = ''] = num.split('.');
  if (splitStr) {
    integer = reverseInsert(integer, 3, splitStr);
  }
  if (decimalLen === 0) {return integer;}
  decimal = decimal.padEnd(decimalLen, '0');
  return `${integer}.${decimal}`;
}

/**
 * 去格式化
 * @param {number|string} val 去格式化内容
 * @param {string} splitStr 去除分隔符默认','
 * @returns 去除格式化后的金额
 */
export function unFormatAmt (val:string|number, splitStr = ',') {
  /* eslint-disable-next-line */
  return typeof val === 'number' ? String(val) : val ? val.replace(new RegExp(splitStr, 'g'), '') : '0';
}

/**
 * 将输入字符串转为全角字符
 * @param str 需要转换的字符串
 * @returns  转换后的全角字符
 */
export function toDBC (str:string) {
  return str.split('').reduce((tmp, cur)=>{
    const charCode = cur.charCodeAt(0);
    let str = '';
    if (charCode === 32) {
      str = tmp + String.fromCharCode(12288);
    }
    if (charCode < 127) {
      str = tmp + String.fromCharCode(charCode + 65248);
    }
    return str;
  }, '');
}

/**
 * 格式化手机号
 * @param phone 手机号
 * @returns 格式化后的手机号
 */
export function formatPhone (phone:number|string) {
  return reverseInsert(String(phone ?? '').replace(/^\s|\s$/g, ''), 4, ' ');
}

/**
 * 图片压缩
 * @param file 源文件
 * @param size 指定压缩大小 单位M
 * @returns
 */
export function imgCompression (file:File, size:number) {
  const reader = new FileReader();
  reader.readAsDataURL(file);

  return new Promise((resolve)=>{
    reader.onload = (e)=>{
      const image = new Image();
      image.src = e.target?.result as string;
      image.onload = ()=>{
        let quality = 1;
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        let width = image.width;
        let height = image.height;
        const scale = width / height;
        width = 500;
        height = width / scale;
        canvas.width = width;
        canvas.height = height;
        ctx?.drawImage(image, 0, 0, width, height);
        let dataURL = canvas.toDataURL(file.type, quality);
        while (dataURL.length / 1024 / 1024 > size) {
          quality -= 0.1;
          dataURL = canvas.toDataURL(file.type, quality);
        }
        resolve(dataURL);
      };
    };
  });
}