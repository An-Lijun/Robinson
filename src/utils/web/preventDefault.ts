/**
 * 该函数可防止事件的默认行为。
 * @param {Event} event - “event”参数是一个对象，表示已发生的事件，例如鼠标单击或按键。
 * 它包含有关事件的信息，例如事件类型、触发事件的目标元素以及与事件关联的任何其他数据。
 */
export default function preventDefault (event:Event) {
  event.preventDefault();
}