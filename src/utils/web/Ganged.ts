import Depend from './Depend';

/* “Ganged”类是一个实用程序类，它提供用于管理对象及其属性之间的依赖关系的反应性功能。 */
export default class Ganged {
  // 记录当前执行的函数 (get时候去读这个)
  #reactiveFn:Function|null;

  // weakMap 集合
  #objMap;

  constructor () {
    this.#reactiveFn = null;
    this.#objMap = new WeakMap();
  }

  // 获取map中的依赖对象,如果没有就会自动创建并且添加到map中
/**
 * 函数“getDepend”根据给定的对象和键返回依赖对象。
 * @param {any} obj - `obj` 参数是您想要与依赖关系图关联的对象。
 * @param {string} key - key 参数是一个字符串，表示用于标识映射中的依赖项的键。
 * @returns `dep` 对象。
 */
  getDepend (obj:any, key:string) {
    let map = this.#objMap.get(obj);
    //根据 对象obj 找到对应的map
    if (!map) {
      map = new Map();
      this.#objMap.set(obj, map);
    }
    // 根据key 找dep对象
    let dep = map.get(key);
    if (!dep) {
      dep = new Depend();
      map.set(key, dep);
    }
    return dep;
  }

/**
 * DefinedFn 函数接受一个函数作为参数，将其设置为reactiveFn 属性，执行该函数，然后将reactiveFn 属性设置为null。
 * @param {Function} fn - 参数“fn”是作为参数传递给“defineFn”方法的函数。
 */
  definedFn (fn:Function) {
    this.#reactiveFn = fn;
    fn();
    this.#reactiveFn = null;
  }

/**
 * TypeScript 中的函数“ref”用于创建一个响应式对象，该对象跟踪其属性的更改并在属性修改时通知依赖项。
 * @param {any} data - “data”参数是您想要使其成为反应性的对象。它可以是任何 JavaScript 对象。
 * @returns 已被修改为具有反应性属性的对象。
 */
  ref (data:any) {
    let obj = data;
    if (!(obj instanceof Object)) {
      obj = { value: obj };
    }
    Object.keys(obj).forEach(key => {
      let value = obj[key];
      Object.defineProperty(obj, key, { set: (newValue) => {
        value = newValue;
        //获取修改的 属性dep
        const dep = this.getDepend(obj, key);
        // 通知
        dep.notify();
      },
      get: () => {
        //获取修改的 属性dep
        const dep = this.getDepend(obj, key);
        dep.addDepend(this.#reactiveFn);
        return value;
      } });
    });
    return obj;
  }
}
