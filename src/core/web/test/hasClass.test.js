// 导入所需的模块和函数
import { hasClass } from '../../../index';

describe('hasClass', () => {
  let mockElement;

  beforeEach(() => {
    // 创建一个模拟的元素对象，使用真实的 classList 行为
    mockElement = {
      classList: {
        contains: jest.fn(),
        add: jest.fn(),
        remove: jest.fn()
      }
    };
  });

  test('should return true if the class exists', () => {
    // 模拟元素的 classList 包含 'class1'
    mockElement.classList.contains.mockReturnValue(true);
    // 调用 hasClass 函数检查元素是否包含 'class1'
    const result = hasClass(mockElement, 'class1');
    expect(result).toBe(true);
    // 检查 contains 方法被正确调用
    expect(mockElement.classList.contains).toHaveBeenCalledWith('class1');
  });

  test('should return false if the class does not exist', () => {
    // 模拟元素的 classList 不包含 'class4'
    mockElement.classList.contains.mockReturnValue(false);
    // 调用 hasClass 函数检查元素是否包含 'class4'
    const result = hasClass(mockElement, 'class4');
    expect(result).toBe(false);
    // 检查 contains 方法被正确调用
    expect(mockElement.classList.contains).toHaveBeenCalledWith('class4');
  });

  test('should handle empty class name', () => {
    // 模拟元素的 classList 不包含空字符串
    mockElement.classList.contains.mockReturnValue(false);
    // 调用 hasClass 函数检查元素是否包含空类名
    const result = hasClass(mockElement, '');
    expect(result).toBe(false);
    // 检查 contains 方法被正确调用
    expect(mockElement.classList.contains).toHaveBeenCalledWith('');
  });

  test('should handle undefined or null class name', () => {
    // 模拟元素的 classList 不包含 undefined 或 null
    mockElement.classList.contains.mockReturnValue(false);
    // 调用 hasClass 函数检查元素是否包含 undefined 类名
    const result1 = hasClass(mockElement, undefined);
    const result2 = hasClass(mockElement, null);
    expect(result1).toBe(false);
    expect(result2).toBe(false);
    // 检查 contains 方法被正确调用
    expect(mockElement.classList.contains).toHaveBeenCalledWith(undefined);
    expect(mockElement.classList.contains).toHaveBeenCalledWith(null);
  });

  test('should handle case sensitivity', () => {
    // 模拟元素的 classList 包含 'Class1'，不包含 'class1'
    mockElement.classList.contains.mockImplementation((className) => {
      return className === 'Class1';
    });
    // 调用 hasClass 函数检查元素是否包含 'class1' (大小写不同)
    const result = hasClass(mockElement, 'class1');
    expect(result).toBe(false);
    // 检查 contains 方法被正确调用
    expect(mockElement.classList.contains).toHaveBeenCalledWith('class1');
  });

  test('should handle multiple classes', () => {
    // 模拟元素的 classList 包含多个类
    mockElement.classList.contains.mockImplementation((className) => {
      return ['class1', 'class2', 'class3'].includes(className);
    });
    // 测试多个类名
    expect(hasClass(mockElement, 'class1')).toBe(true);
    expect(hasClass(mockElement, 'class2')).toBe(true);
    expect(hasClass(mockElement, 'class3')).toBe(true);
    expect(hasClass(mockElement, 'class4')).toBe(false);
  });
});
