
/**
 * @description 函数“getStringType”以字符串形式返回输入值的类型。
 * @param {any} value - “value”参数可以是任何数据类型或您想要确定其类型的值。
 * @returns 输入值类型的字符串表示形式如 [object object]。
 */
export function getStringType (value:any):String {
  return Object.prototype.toString.call(value);
}

/**
 *
 * @description 返回是某个类型的判断结果
 * @param {Any}value 要判断的数据
 * @param {String}type  判断他是这个类型
 * @returns 布尔值
 */
export function is (value:any, type:string):boolean {
  return getStringType(value) === `[object ${type}]`;
}

/**
 * @description 该函数通过将 JSON 表示形式与空数组或对象进行比较来检查值是否为空。
 * @param {any} value - “value”参数可以是任何数据类型。这是您要检查它是否为空的值。
 * @returns 一个布尔值。如果值为空（空数组或空对象）或值为假（例如 null、undefined、false、0 或空字符串），则返回 true。否则，返回 false。
 */
export function isEmpty (value:any):boolean {
  if (JSON.stringify(value) === '[]' || JSON.stringify(value) === '{}') {
    return true;
  }
  return !value;
}

/**
 * @description 该函数检查值是否为引用类型。
 * @param {any} value - “value”参数的类型为“any”，这意味着它可以接受任何类型的值。
 * @returns 一个布尔值。
 */
export function isReferenceType (value:any):boolean {
  return value instanceof Object;
}

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

/**
 * @description 该函数检查值是否为简单值（数字、字符串、布尔值、符号、null、undefined 或 bigint）或复杂值（函数、对象、数组、集合、映射）。
 * @param {any} value - 参数“value”的类型为“any”，这意味着它可以接受任何类型的值。
 * @returns 函数 isSimpleValue 返回一个布尔值。
 */
export function isSimpleValue (value:any):boolean {
  const type = typeof value;
  // 简单值 number string boolean symbol null undefined bigint  // 复杂值function Object array set map
  if (value === null) {return true;}
  return type !== 'object' && type !== 'function';
}
