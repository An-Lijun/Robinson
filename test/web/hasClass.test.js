// 导入所需的模块和函数
import { hasClass } from '../../src/index';

describe('hasClass', () => {
  let mockElement;

  beforeEach(() => {
    // 创建一个模拟的元素对象
    mockElement = { classList: {
      // 使用 Jest 的 mock 函数模拟 classList 的 value 属性
      value: 'class1 class2 class3',
      contains: jest.fn() } };
  });

  test('should return true if the class exists', () => {
    // 模拟元素的 classList 包含 'class1'
    mockElement.classList.value = 'class1 class2 class3';
    // 调用 hasClass 函数检查元素是否包含 'class1'
    const result = hasClass(mockElement, 'class1');
    expect(result).toBe(false);
    // 检查 contains 方法未被调用
    expect(mockElement.classList.contains).not.toHaveBeenCalled();
  });

  test('should return false if the class does not exist', () => {
    // 模拟元素的 classList 不包含 'class4'
    mockElement.classList.value = 'class1 class2 class3';
    // 调用 hasClass 函数检查元素是否包含 'class4'
    const result = hasClass(mockElement, 'class4');
    expect(result).toBe(false);
    // 检查 contains 方法未被调用
    expect(mockElement.classList.contains).not.toHaveBeenCalled();
  });

  test('should handle empty class name', () => {
    // 调用 hasClass 函数检查元素是否包含空类名
    const result = hasClass(mockElement, '');
    expect(result).toBe(false);
    // 检查 contains 方法未被调用
    expect(mockElement.classList.contains).not.toHaveBeenCalled();
  });

  test('should handle undefined or null class name', () => {
    // 调用 hasClass 函数检查元素是否包含 undefined 或 null 类名
    const result1 = hasClass(mockElement, undefined);
    const result2 = hasClass(mockElement, null);
    expect(result1).toBe(false);
    expect(result2).toBe(false);
    // 检查 contains 方法未被调用
    expect(mockElement.classList.contains).not.toHaveBeenCalled();
  });

  test('should handle case sensitivity', () => {
    // 模拟元素的 classList 包含 'Class1'
    mockElement.classList.value = 'Class1 class2 class3';
    // 调用 hasClass 函数检查元素是否包含 'class1' (大小写不同)
    const result = hasClass(mockElement, 'class1');
    expect(result).toBe(false);
    // 检查 contains 方法未被调用
    expect(mockElement.classList.contains).not.toHaveBeenCalled();
  });
});