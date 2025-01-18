import { bind } from '../../src/index'; // 假设文件名为 bind.ts

describe('bind', () => {
  let element;

  beforeEach(() => {
    // 创建一个用于测试的简单 HTML 元素
    element = document.createElement('div');
    document.body.appendChild(element);
  });

  afterEach(() => {
    // 清理测试环境
    document.body.removeChild(element);
  });

  it('should add an event listener with default isCatch value (false)', () => {
    const callback = jest.fn();
    bind(element, 'click', callback);

    element.click();
    expect(callback).toHaveBeenCalled();
  });

  it('should add an event listener with isCatch set to true', () => {
    const callback = jest.fn();
    bind(element, 'click', callback, true);

    element.click();
    expect(callback).toHaveBeenCalled();
  });

  it('should remove the event listener when unbind is called', () => {
    const callback = jest.fn();
    bind(element, 'click', callback);

    element.click();
    expect(callback).toHaveBeenCalled();

    // 模拟移除事件监听器
    element.removeEventListener('click', callback);

    callback.mockReset();
    element.click();
    expect(callback).not.toHaveBeenCalled();
  });
});