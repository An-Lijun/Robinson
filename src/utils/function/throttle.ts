// 节流
export function throttle (fn, immediate, leading = true, trailing = false) {
  let startTime = 0;
  let timer = null;
  const _throttle = function (...args) {
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
          return resolve(fn.apply(this, args));
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