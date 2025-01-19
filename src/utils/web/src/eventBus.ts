interface EventFn {
  [key: string] :Array<Function>
}
/**
 * @beta
 * @description 函数“on”将事件侦听器添加到事件对象，将事件函数存储在指定的事件名称下。
 * @param {string} eventName - 表示事件的名称的字符串。
 * @param {Function} eventFn - 当指定事件发生时将执行的函数。
 * @example
 * const eventBus = new EventBus();
 * eventBus.on('myEvent', () => {
 *   console.log('myEvent triggered');
 * });
 */
export default class EventBus {
  #eventObj:EventFn;

  constructor () {
    this.#eventObj = {};
  }

  /**
 * 函数“on”将事件侦听器添加到事件对象，将事件函数存储在指定的事件名称下。
 * @param {string} eventName - eventName 是一个字符串参数，表示事件的名称。它用于标识eventObj对象中的事件。
 * @param {Function} eventFn - eventFn 参数是当指定事件发生时将执行的函数。
 */
  on (eventName:string, eventFn:Function) {
    eventName in this.#eventObj ? this.#eventObj[eventName].push(eventFn) :
      this.#eventObj[eventName] = [eventFn];
  }

  /**
 * “emit”函数触发与特定事件名称关联的所有事件处理程序，并将任何参数传递给它们。
 * @param {string} eventName - 表示要发出的事件名称的字符串。
 * @param {any} Args - Args 是一个剩余参数，允许将无限数量的参数传递给 emit 函数。这些参数可以是任何类型。
 */
  emit (eventName:string, ...Args:any) {
    this.#eventObj[eventName]?.forEach(fn => {
      fn(...Args);
    });
  }

  /* `EventBus` 类中的 `off` 方法用于从事件对象中删除特定的事件监听器。它有两个参数：“eventName”（表示事件名称的字符串）和“fn”（要删除的事件函数）。 */
  off (eventName:string, fn:Function) {
    if (!this.#eventObj[eventName]) {
      return;
    }
    this.#eventObj[eventName].forEach((item, index) => {
      if (item === fn) {
        this.#eventObj[eventName]?.splice(index, 1);
        if (this.#eventObj[eventName].length === 0) {
          delete this.#eventObj[eventName];
        }
      }
    });
  }

  /**
 * clear 函数从 eventObj 对象中删除事件。
 * @param {string} eventName - eventName 参数是一个字符串，表示要清除的事件的名称。
 */
  clear (eventName:string) {
    delete this.#eventObj[eventName];
  }
}