import { is } from '../../common/index';

/**
 * @beta
 * @description 函数isString 检查给定值是否是字符串。
 * @param {any} value - 参数“value”的类型为“any”，这意味着它可以接受任何数据类型。
 * @returns {boolean} - 一个布尔值。
 * @example
 * ```JavaScript
 *  let str = 'Hello'; isString(str) // true
 *  let num = 123; isString(num) // false
 * ```
 */
export function isString (value: any): boolean {
  return typeof value === 'string' || is(value, 'String');
}

/**
 * @beta
 * @description 判断是否为外链
 * @param {any} path - 路径
 * @returns {boolean} - 一个布尔值。
 * @example
 * ```JavaScript
 *  let path = 'https://example.com'; isExternal(path) // true
 *  let path = '/internal/path'; isExternal(path)// false
 * ```
 */
export function isExternal (path: any): boolean {
  return typeof path === 'string' && (/^(https?:|mailto:|tel:)/).test(path);
}

/**
 * @beta
 * @description 检查是否为有效的身份证号
 * @param {string} id - 身份证号
 * @returns {boolean} - 一个布尔值。
 * @example
 * ```JavaScript
 *  let id = '11010519491231002X'; isIdCard(id) // true
 *  let id = '11010519491231002Y'; isIdCard(id) // false
 * ```
 */
export function isIdCard (id: string): boolean {
  const value = id.toUpperCase();
  if (!value || value.length !== 18) {
    return false;
  }
  const temp = value.substr(0, 17);
  for (let i = 0; i < temp.length; i++) {
    if (temp.charAt(i) < '0' || temp.charAt(i) > '9') {
      return false;
    }
  }
  let nowYear = new Date().getFullYear();
  let year = parseInt(value.substr(6, 4), 10);
  let month = parseInt(value.substr(10, 2), 10);
  let day = parseInt(value.substr(12, 2), 10);

  if (year < nowYear - 150 || year > nowYear + 150) {
    return false;
  }
  if (month > 12 || month < 1) {
    return false;
  }
  if (day > 31 || day < 1) {
    return false;
  }

  const WI = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1];
  const AI = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];
  const checkDigit = value.charAt(17);
  let cardSum = 0;

  for (let j = 0; j < value.length - 1; j++) {
    cardSum = cardSum + parseInt(value.charAt(j), 10) * WI[j];
  }
  const seq = cardSum % 11;
  const getCheckDigit = AI[seq];
  if (checkDigit !== getCheckDigit) {
    return false;
  }
  return true;
}

/**
 * @beta
 * @description 检查是否为有效的URL
 * @param {string} url - URL字符串
 * @returns {boolean} - 一个布尔值。
 * @example
 * ```JavaScript
 *  let url = 'https://example.com'; isUrl(url) // true
 *  let url = 'invalid-url'; isUrl(url) // false
 * ```
 */
export function isUrl (url: string): boolean {
  /* eslint-disable-next-line */
  const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;
  return reg.test(url);
}

/**
 * @beta
 * @description 检查字符串是否为合法email地址
 * @param {string} s - 字符串
 * @returns {boolean} - 一个布尔值。
 * @example
 * ```JavaScript
 *  let email = 'test@example.com'; isEmail(email) // true
 *  let email = 'invalid-email'; isEmail(email) // false
 * ```
 */
export function isEmail (s: string): boolean {
  return (/^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/).test(s);
}

/**
 * @beta
 * @description 是否为合法手机号
 * @param {string|number} s - 手机号
 * @returns {boolean} - 一个布尔值。
 * @example
 * ```JavaScript
 *  let phone = '13800138000'; isMobileNum(phone) // true
 *  let phone = '12345678901'; isMobileNum(phone)// false
 * ```
 */
export function isMobileNum (s: string | number): boolean {
  // return (/^1\d{10}$/).test(String(s));
  return (/^1[3-9]\d{9}$/).test(String(s));
}

/**
 * @beta
 * @description 函数“insertStr”接受一个字符串、一个起始索引和一个字符，并返回一个新字符串，其中在指定索引处插入了该字符。
 * @param {string} str - `str` 参数是一个字符串，表示将在其中插入字符的原始字符串。
 * @param {number} start - start 参数是应在字符串中插入字符的索引。
 * @param {string} char - “char”参数是一个字符串，表示要插入到原始字符串中的字符或子字符串。
 * @returns {string} - 在指定索引处插入指定字符的新字符串。
 * @example
 * ```JavaScript
 *  let str = 'Hello'; insertStr(str, 2, 'X') // 'HeXllo'
 * ```
 */
export function insertStr (str: string, start: number, char: string): string {
  return str.slice(0, start) + char + str.slice(start);
}

/**
 * @beta
 * @description 函数“getEtc”接受一个字符串值并返回指定长度的子字符串，并在末尾附加一个可选的“etcStr”。
 * @param {string} value - value 参数是一个字符串，表示需要截断的输入值。
 * @param {number} len - “len”参数是要从“value”参数中提取的字符串的长度。
 * @param {string} [etcStr='...'] - `etcStr` 参数是一个字符串，表示如果长度超过指定的 `len`
 * 参数，则要在切片字符串末尾附加的字符。默认情况下，它设置为“...”。
 * @returns {string} - 一个字符串。
 * @example
 * ```JavaScript
 *  let str = '123456'; getEtc(str, 3) // '123...'
 *  let str = '123456'; getEtc(str, 3, 'etc') // '123etc'
 * ```
 */
export function getEtc (value: string, len: number, etcStr: string = '...'): string {
  if (!is(value, 'string')) { throw new TypeError('params mast be string'); }
  return value.slice(0, len) + etcStr;
}

/**
 * @beta
 * @description 该函数使用随机字符串模式生成唯一 ID。
 * @returns {string} - 函数“getUniqueId”返回格式为“xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx”的唯一标识符字符串。
 * @example
 * ```JavaScript
 *  getUniqueId() // '627ad809-60fc-47b1-be5d-e0ae1ef903ca'
 * ```
 */
export function getUniqueId (): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : r & 0x3 | 0x8;
    return v.toString(32);
  });
}