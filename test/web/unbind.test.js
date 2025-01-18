import { unBind } from '../../src/index'; // 假设文件名为 unBind.ts

describe('unBind', () => {
  let dom;
  let eventHandler;

  beforeEach(() => {
    dom = document.createElement('div');
    eventHandler = jest.fn();
  });

  it('should remove an event listener successfully', () => {
    dom.addEventListener('click', eventHandler);
    expect(eventHandler).not.toHaveBeenCalled();

    // 模拟点击事件
    dom.click();
    expect(eventHandler).toHaveBeenCalledTimes(1);

    // 移除事件监听器
    unBind(dom, 'click', eventHandler);

    // 再次模拟点击事件
    dom.click();
    expect(eventHandler).toHaveBeenCalledTimes(1); // 确保事件监听器不再被调用
  });

  it('should not throw an error when removing a non-existent event listener', () => {
    expect(() => {
      unBind(dom, 'click', eventHandler);
    }).not.toThrow();
  });

  it('should handle different event types', () => {
    dom.addEventListener('mouseover', eventHandler);
    expect(eventHandler).not.toHaveBeenCalled();

    // 模拟鼠标悬停事件
    const mouseOverEvent = new MouseEvent('mouseover');
    dom.dispatchEvent(mouseOverEvent);
    expect(eventHandler).toHaveBeenCalledTimes(1);

    // 移除事件监听器
    unBind(dom, 'mouseover', eventHandler);

    // 再次模拟鼠标悬停事件
    dom.dispatchEvent(mouseOverEvent);
    expect(eventHandler).toHaveBeenCalledTimes(1); // 确保事件监听器不再被调用
  });
});