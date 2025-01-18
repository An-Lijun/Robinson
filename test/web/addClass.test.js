// 导入所需的模块和函数
import { addClass } from '../../src/index';

describe('addClass', () => {
  let mockElement;

  beforeEach(() => {
    // 创建一个模拟的元素对象
    mockElement = { classList: { add: jest.fn(),
      contains: jest.fn() } };
  });

  test('should add a single class to the DOM element', () => {
    // 调用 addClass 函数添加一个类
    addClass(mockElement, 'test-class');
    // 检查添加类的方法是否被调用
    expect(mockElement.classList.add).toHaveBeenCalledWith('test-class');
    // 检查包含类的方法是否未被调用
    expect(mockElement.classList.contains).not.toHaveBeenCalled();
  });

  test('should not throw an error when adding a duplicate class', () => {
    // 模拟 contains 方法返回 true，表示类已经存在
    mockElement.classList.contains.mockReturnValueOnce(true);
    // 调用 addClass 函数添加一个已经存在的类
    expect(() => {
      addClass(mockElement, 'test-class');
    }).not.toThrow();
    // 检查添加类的方法是否被调用
    expect(mockElement.classList.add).toHaveBeenCalledWith('test-class');
  });

  test('should add multiple classes to the DOM element', () => {
    // 调用 addClass 函数添加多个类
    addClass(mockElement, 'test-class');
    addClass(mockElement, 'another-class');
    // 检查添加类的方法是否被正确调用
    expect(mockElement.classList.add).toHaveBeenCalledWith('test-class');
    expect(mockElement.classList.add).toHaveBeenCalledWith('another-class');
  });

  test('should handle empty class name', () => {
    // 尝试添加一个空的类名
    expect(() => {
      addClass(mockElement, '');
    }).not.toThrow();
    // 检查添加类的方法是否被调用
    expect(mockElement.classList.add).toHaveBeenCalledWith('');
  });

  test('should handle undefined or null class name', () => {
    // 尝试添加一个 undefined 或 null 的类名
    expect(() => {
      addClass(mockElement, undefined);
    }).not.toThrow();
    expect(() => {
      addClass(mockElement, null);
    }).not.toThrow();
    // 检查添加类的方法是否被调用
    expect(mockElement.classList.add).toHaveBeenCalledWith(undefined);
    expect(mockElement.classList.add).toHaveBeenCalledWith(null);
  });
});