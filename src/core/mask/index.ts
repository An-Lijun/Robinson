/**
 * @beta
 * @description 字符串脱敏
 * @param {string|undefined} str - 需要脱敏的字符串。
 * @param {[number|undefined, number|undefined]} hideArea - 需要隐藏的下标范围，数组中的两个元素分别表示起始和结束下标。
 * @param {number} [maskLength] - 需要脱敏的长度，如果不提供则根据 hideArea 计算。
 * @param {string} [maskStr='*'] - 脱敏字符，默认为 '*'。
 * @returns {string} - 脱敏后的字符串。
 * @example
 * mask("123456789", [3, -2]);// 返回 "123****89"
 * mask("123456789", [3, 6]); 返回 "123****"
 * mask("123456789", [3, 3]);// 返回 "123456789"
 */
export function mask (
  str: string,
  hideArea: [number | undefined, number | undefined],
  maskLength?: number,
  maskStr = '*'
): string {
  if (!str) { return str; }

  const totalLen = str.length;
  const [start, end] = hideArea;
  const len = maskLength || str.slice(start, end).length;
  const prefix = start ? str.slice(0, start) : '';
  const middle = maskStr.repeat(len);
  const suffix = end ? str.slice(end, totalLen) : '';
  return `${prefix}${middle}${suffix}`;
}

// 用户脱敏
/**
 * @beta
 * @description 用户账号脱敏
 * @param {string} account - 需要脱敏的用户账号。
 * @returns {string} - 脱敏后的用户账号。
 * @example
 * maskAccount("1234567890");// 返回 "1234****7890"
 */
export function maskAccount (account: string): string {
  return mask(account, [4, -4]);
}

// 身份证脱敏
/**
 * @beta
 * @description 身份证脱敏
 * @param {string} idNo - 需要脱敏的身份证号。
 * @returns {string} - 脱敏后的身份证号。
 * @example
 * maskIdNo("123456789012345678");// 返回 "1234***********7890"
 */
export function maskIdNo (idNo: string): string {
  return mask(idNo, [4, -3]);
}

/**
 * @beta
 * @description 手机号脱敏
 * @param {string|number} phone - 需要脱敏的手机号。
 * @returns {string} - 脱敏后的手机号。
 * @example
 * maskPhone("1234567890");// 返回 "123****5678"
 */
export function maskPhone (phone?: string | number): string {
  return mask(String(phone), [3, -4]);
}

/**
 * @beta
 * @description 用户名脱敏
 * @param {string} name - 需要脱敏的用户名。
 * @returns {string} - 脱敏后的用户名。
 * @example
 * maskNm("张三");// 返回 "张*"
 * maskNm("张三丰");// 返回 "张**"
 */
export function maskNm (name: string): string {
  return mask(name, [1, name.length < 3 ? void 0 : -1]);
}

/**
 * @beta
 * @description 港澳台,回乡证等脱敏
 * @param {string} card - 需要脱敏的港澳台,回乡证等。
 * @returns {string} - 脱敏后的港澳台,回乡证等。
 * @example
 * maskCard("12345678901234");// 返回 "12**********34"
 */
export function maskCard (card: string): string {
  return mask(card, [2, -2]);
}

/**
 * @beta
 * @description 邮箱脱敏
 * @param {string} email - 需要脱敏的邮箱。
 * @returns {string} - 脱敏后的邮箱。
 * @example
 * maskEmail("123456789@example.com");// 返回 "123*****@example.com"
 */
export function maskEmail (email: string): string {
  return email.replace(/^(.+)(@.+)$/g, (val, $1, $2) =>
    mask($1, [3, void 0]) + $2
  );
}