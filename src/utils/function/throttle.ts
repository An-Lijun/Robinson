// 节流
/**
 * `throttle` 函数是节流机制的 TypeScript 实现，它限制函数调用的速率。
 * @param {Function} fn - “fn”参数是您想要限制的函数。该函数在指定的时间间隔内最多被调用一次。
 * @param {number} immediate - “immediate”参数是函数调用之间的最小时间间隔（以毫秒为单位）。如果在此间隔内发生另一次调用，该函数将受到限制并且不会立即执行。
 * @param [leading=true] -
 * “leading”参数决定该函数是在调用时立即执行还是等待指定的“immediate”时间过去后才第一次执行该函数。
 * 如果“leading”设置为“true”，该函数将立即执行。如果“leading”设置为
 * @param [trailing=false] -
 * “trailing”参数是一个布尔值，用于确定是否应在上次调用后立即调用节流函数，即使指定的时间间隔（“immediate”）尚未过去。
 * 如果“trailing”设置为“true”，则该函数将在指定的时间之后调用一次
 * @returns 正在返回函数“throttle”。
 */
export default function throttle (fn:Function, immediate:number, leading = true, trailing = false) {
  let startTime = 0;
  let timer:any = null;
  const _throttle = function (...args:any) {
    return new Promise((resolve, reject) => {
      try {
        let nowTime = new Date().getTime();
        if (!leading && startTime === 0) {
          startTime = nowTime;
        }
        const waitTime = immediate - (nowTime - startTime);
        if (waitTime <= 0) {
          startTime = nowTime;
          timer = null;
          resolve(fn.apply(this, args));
          return;
        }
        if (trailing && !timer) {
          timer = setTimeout(() => {
            startTime = new Date().getTime();
            timer = null;
            return resolve(fn.apply(this, args));
          }, waitTime);
        }
      } catch (error) {
        reject(error);
      }
    });
  };
  _throttle.cancel = function () {
    clearTimeout(timer);
    startTime = 0;
    timer = null;
  };
  return _throttle;
}