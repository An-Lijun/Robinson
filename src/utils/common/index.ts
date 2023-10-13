import getStringType from './getStringType';
import hasTypeIn from './hasTypeIn';
import is from './is';
import isEmpty from './isEmpty';
import isSimpleType from './isSimpleType';
import isReferenceType from './isReferenceType';
import isEqType from './isEqType';
/**
 * @param {Any} value
 * @param {Any} value2
 * @description 判断两个数据是否一致,不会转换
 */
// export function isEqually (value:any, value2:any):boolean {
//   //如果类型不同直接false
//   if (getStringType(value) !== getStringType(value2)) {
//     return false;
//   }
//   //如果是简单类型
//   if (!isReferenceType) {
//     return Object.is(value, value2);
//   }
// }

export {
  getStringType, hasTypeIn, is, isEmpty,
  isSimpleType, isReferenceType, isEqType
};