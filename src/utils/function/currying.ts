
//柯里化

/**
 * @description 柯里化函数接受一个函数作为输入并返回一个新函数，该函数可以使用多个参数或以柯里化方式调用。
 * @param {Function} fn - 参数“fn”是我们要应用柯里化的函数。
 * @returns 正在返回柯里化函数。
 */
export function currying (fn:Function) {
  return function curr (...args:any) {
    if (args.length >= fn.length) {
      return fn(...args);
    }
    return function (...newArr:any) {
      return curr(...args.concat(newArr));
    };

  };
}