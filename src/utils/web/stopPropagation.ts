/**
 * 函数 stopPropagation 阻止事件在事件链中向上冒泡。
 * @param {Event} event -
 * 事件参数是一个表示发生的事件的对象。它包含有关事件的信息，例如事件类型、目标元素以及与事件关联的任何其他数据。在这种情况下，事件参数的类型为Event，它是一个通用事件对象，可以
 */
export default function stopPropagation (event:Event) {
  event.stopPropagation();
}