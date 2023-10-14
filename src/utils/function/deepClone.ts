import { isSimpleType, is } from '../common/index';

interface deepData {
  [index:string ]:any
}

/**
 * @description “deepClone”函数用于创建对象或数组的深层副本，包括处理复杂类型，例如集合、映射和符号。
 * @param {any} originalValue - OriginalValue 参数是您要深度克隆的值。它可以是任何数据类型，包括对象、数组、集合、映射、函数以及字符串或数字等简单值。
 * @returns 函数“deepClone”返回“originalValue”参数的深度克隆。
 */
export function deepClone (originalValue:any):any {
  //步骤 零 : 如果值是Symbol
  if (is(originalValue, 'symbol')) {
    return Symbol(originalValue.description);
  }
  //步骤 一 :如果是普通值则直接返回原值
  if (isSimpleType(originalValue)) {return originalValue;}
  //步骤 二 :如果是Set 集合
  if (originalValue instanceof Set) {
    let set = new Set();
    for (const iterator of originalValue) {
      set.add(deepClone(iterator));
    }
    return set;
  }
  // 步骤 三 :如果是Map 集合
  if (originalValue instanceof Map) {
    let map = new Map();
    for (const iterator of originalValue) {
      map.set(deepClone(iterator[0]), deepClone(iterator[1]));
    }
    return map;
  }
  // 步骤四 : 如果是函数则共用一个函数
  if (typeof originalValue === 'function') {
    return originalValue;
  }
  //步骤 五 : 看他是对象还是数组并创建一个新的,
  // Array.isArray(originalValue)
  let newValue:deepData = Array.isArray(originalValue) ? [] : {};
  //步骤 六 : 遍历每个key赛到新数据中
  for (const key in originalValue) {
    //由于这个key可能是一个复杂的类型 也可能是一个简单的类型 所以这里递归的去获取一下
    newValue[key] = deepClone(originalValue[key]);
  }
  //步骤 七 : 如果key是Symbol 由于symbol 不会被 for of 遍历出来所以单独处理
  const symbolKeys = Object.getOwnPropertySymbols(originalValue);
  for (const symbolKey of symbolKeys) {
    newValue[Symbol(symbolKey.description)as any] = deepClone(originalValue[symbolKey]);
  }
  return newValue;
}