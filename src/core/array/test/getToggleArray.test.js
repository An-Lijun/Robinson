import { getToggleArray } from '../../../index';

describe('getToggleArray', () => {
  test('should add item if not present in array', () => {
    const array = [1, 2, 3];
    const result = getToggleArray(array, 4);
    expect(result).toEqual([1, 2, 3, 4]);
    // 原数组应保持不变
    expect(array).toEqual([1, 2, 3]);
  });

  test('should remove item if present in array', () => {
    const array = [1, 2, 3];
    const result = getToggleArray(array, 2);
    expect(result).toEqual([1, 3]);
    // 原数组应保持不变
    expect(array).toEqual([1, 2, 3]);
  });

  test('should handle empty array', () => {
    const array = [];
    const result = getToggleArray(array, 'item');
    expect(result).toEqual(['item']);
  });

  test('should handle string array', () => {
    const array = ['a', 'b', 'c'];
    let result = getToggleArray(array, 'd');
    expect(result).toEqual(['a', 'b', 'c', 'd']);
    
    result = getToggleArray(array, 'b');
    expect(result).toEqual(['a', 'c']);
  });

  test('should handle object array', () => {
    const obj1 = { id: 1 };
    const obj2 = { id: 2 };
    const array = [obj1, obj2];
    
    // 测试添加新对象
    const newObj = { id: 3 };
    const result1 = getToggleArray(array, newObj);
    expect(result1).toHaveLength(3);
    expect(result1[2]).toEqual(newObj);
    
    // 测试移除已存在的对象（使用同一个引用）
    const result2 = getToggleArray(array, obj1);
    expect(result2).toEqual([obj2]);
  });

  test('should handle boolean array', () => {
    const array = [true, false];
    let result = getToggleArray(array, true);
    expect(result).toEqual([false]);
    
    result = getToggleArray(array, false);
    expect(result).toEqual([true]);
  });

  test('should handle number array with duplicates', () => {
    const array = [1, 2, 2, 3];
    const result = getToggleArray(array, 2);
    expect(result).toEqual([1, 2, 3]);
  });

  test('should return a new array (deep clone)', () => {
    const array = [1, 2, { id: 3 }];
    const result = getToggleArray(array, 4);
    
    // 验证是新数组
    expect(result).not.toBe(array);
    
    // 验证对象也被深拷贝
    result[2].id = 100;
    expect(array[2].id).toBe(3);
  });
});