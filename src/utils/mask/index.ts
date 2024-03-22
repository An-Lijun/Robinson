
/**
 * 字符串脱敏
 * @param {*} str 需要脱敏的字符串
 * @param {*} hideArea  需要隐藏的下标语
 * @param {*} maskLength 需要脱敏的长度
 * @param {*} maskStr  脱敏字符
 * @returns 脱敏后的字符
 */
export function mask (
  str:string|undefined,
  hideArea:[number|undefined, number|undefined],
  maskLength?:number,
  maskStr = '*') {
  if (!str) {return str;}

  const totalLen = str.length;
  const [start, end] = hideArea;
  const len = maskLength || str.slice(start, end).length;
  const prefix = start ? str.slice(0, start) : '';
  const middle = maskStr.repeat(len);
  const suffix = end ? str.slice(end, totalLen) : '';
  return `${prefix}${middle}${suffix}`;
}

// 用户脱敏
export function maskAccount (account:string) {
  return mask(account, [4, -4]);
}
// 身份证脱敏
export function maskIdNo (idNo:string) {
  return mask(idNo, [4, -3]);
}

/**
 * 手机号脱敏
 * @param phone 需要脱敏的手机号
 * @returns 脱敏后的手机号
 */
export function maskPhone (phone?:string|number) {
  return mask(String(phone), [3, -4]);
}

/**
 * 用户名脱敏
 * @param phone 需要脱敏的用户名
 * @returns 脱敏后的用户名
 */
export function maskNm (name:string) {
  return mask(name, [1, name.length < 3 ? void 0 : -1]);
}

/**
 * 港澳台,回乡证等
 * @param phone 需要脱敏的港澳台,回乡证等
 * @returns 脱敏后的港澳台,回乡证等
 */
export function maskCard (card:string) {
  return mask(card, [2, -2]);
}

/**
 * 邮箱脱敏
 * @param phone 需要脱敏的邮箱
 * @returns 脱敏后的邮箱
 */
export function maskEmail (email:string) {
  return email.replace(/^(.+)(@.+)$/g, (val, $1, $2) =>
    mask($1, [3, void 0]) + $2
  );
}