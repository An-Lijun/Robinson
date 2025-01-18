// 导入所需的模块和函数
import { removeClass } from '../../src/index';

describe('removeClass', () => {
  let mockElement;

  beforeEach(() => {
    // 创建一个模拟的元素对象
    mockElement = { classList: { remove: jest.fn(),
      contains: jest.fn(),
      length: 0 } };
  });

  test('should remove a single class from the DOM element', () => {
    // 调用 removeClass 函数移除一个类
    removeClass(mockElement, 'test-class');
    // 检查移除类的方法是否被调用
    expect(mockElement.classList.remove).toHaveBeenCalledWith('test-class');
    // 检查包含类的方法是否未被调用
    expect(mockElement.classList.contains).not.toHaveBeenCalled();
  });

  test('should not throw an error when trying to remove a non-existent class', () => {
    // 期望调用 removeClass 函数移除一个不存在的类时不会抛出错误
    expect(() => {
      removeClass(mockElement, 'non-existent-class');
    }).not.toThrow();
    // 检查移除类的方法是否被调用
    expect(mockElement.classList.remove).toHaveBeenCalledWith('non-existent-class');
  });

  test('should remove all specified classes', () => {
    // 移除多个类
    removeClass(mockElement, 'test-class');
    removeClass(mockElement, 'another-class');
    // 检查移除类的方法是否被正确调用
    expect(mockElement.classList.remove).toHaveBeenCalledWith('test-class');
    expect(mockElement.classList.remove).toHaveBeenCalledWith('another-class');
  });

  test('should handle empty class name', () => {
    // 尝试移除一个空的类名
    expect(() => {
      removeClass(mockElement, '');
    }).not.toThrow();
    // 检查移除类的方法是否被调用
    expect(mockElement.classList.remove).toHaveBeenCalledWith('');
  });

  test('should handle undefined or null class name', () => {
    // 尝试移除一个 undefined 或 null 的类名
    expect(() => {
      removeClass(mockElement, undefined);
    }).not.toThrow();
    expect(() => {
      removeClass(mockElement, null);
    }).not.toThrow();
    // 检查移除类的方法是否被调用
    expect(mockElement.classList.remove).toHaveBeenCalledWith(undefined);
    expect(mockElement.classList.remove).toHaveBeenCalledWith(null);
  });
});