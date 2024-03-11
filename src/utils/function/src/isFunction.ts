import { is } from '../../common/index';

/**
 * @description 该函数检查给定值是函数。
 * @param {any} value - “value”参数是我们想要检查它是否是函数的任何值。
 * @returns 一个布尔值。
 */
export default function isFunction (value:any):boolean {
  return is(value, 'Function') || is(value, 'AsyncFunction');
}