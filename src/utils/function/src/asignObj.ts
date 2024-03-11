import { deepClone } from '../../../../dist/robinson';

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

/**
 * 函数“asignData”将属性从“obj2”复制到“obj1”，并可选择执行附加函数。
 * @param obj1 - obj1 是第一个将被分配数据的对象。
 * @param obj2 - obj2 是一个对象，其中包含将根据匹配键分配给 obj1 的数据。
 * @param extraFn -
 * “asignData”函数中的“extraFn”参数是一个回调函数，可以作为参数传递。如果提供，此函数将在“obj2”中的数据分配给“obj1”后执行。这允许额外的自定义逻辑或操作
 */
interface DAMNU_ENABLE {
  [key: string]: any,
}
export function asignData (obj1:DAMNU_ENABLE, obj2:DAMNU_ENABLE, extraFn: Function) {
  for (const key in obj1) {
    if (Object.hasOwnProperty.call(obj2, key)) {
      obj1[key] = deepClone(obj2[key]);
    }
  }
  if (extraFn && typeof extraFn === 'function') {
    extraFn();
  }
}