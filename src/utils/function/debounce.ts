/**
 * 参数1 回调
 * 参数2 延迟时间
 * 参数3 第一次是否立即执行
 *
 * 返回值 返回一个 防抖函数,这个防抖函数的返回值是  debounce函数中传入的第一个函数参数的返回值
 *      const fn =debounce(function (){},time)
 *      取消执行 fn.cancel();
 * 功能
 *    1. 防抖
 *    2. 取消执行
 *    3. 绑定this 传入参数
 *    4. 首次立即执行
 *    5. 返回返回值
 */
export function debounce (fn:Function, delay:number, isLimmediate:boolean = false) {
  let timer = null;
  let limmediate = isLimmediate;
  //函数体
  const _debounceFn = function (...args:any) {
    return new Promise((resolve, reject) => {
      try {
        //如果有延迟回调则先清除
        if (timer) {clearTimeout(timer);}

        //如果是true 那就以为这第一次需要马上执行
        if (limmediate) {
          limmediate = false;
          return resolve(fn.apply(this, args));
        }

        //正常的执行
        timer = setTimeout(() => {
          //绑定this并传参数
          resolve(fn.apply(this, args));
          timer = null;
          limmediate = isLimmediate;
        }, delay);

      } catch (error) {
        reject(error);
      }
    });
  };
  //取消执行
  _debounceFn.cancel = function () {
    if (timer) {clearTimeout(timer);}
  };
  return _debounceFn;
}