/* “Depend”类是一个 TypeScript 类，它管理一组反应函数，并提供添加新函数并在发生更改时通知所有函数的方法。 */
export default class Depend {
  #reactiveFns:Set<Function>;

  constructor () {
    this.#reactiveFns = new Set();
  }

  addDepend (fn:Function) {
    if (fn) {
      this.#reactiveFns.add(fn);
    }
  }

  notify () {
    this.#reactiveFns.forEach(fn => {
      fn();
    });
  }
}