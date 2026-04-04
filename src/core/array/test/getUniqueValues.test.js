const { getUniqueValues } = require('../../../index');

describe('getUniqueValues', () => {
  test('should remove duplicate numbers', () => {
    const array = [1, 2, 2, 3, 3, 3, 4];
    const result = getUniqueValues(array);
    expect(result).toEqual([1, 2, 3, 4]);
  });

  test('should remove duplicate strings', () => {
    const array = ['a', 'b', 'a', 'c', 'b', 'a'];
    const result = getUniqueValues(array);
    expect(result).toEqual(['a', 'b', 'c']);
  });

  test('should handle empty array', () => {
    const array = [];
    const result = getUniqueValues(array);
    expect(result).toEqual([]);
  });

  test('should handle single element array', () => {
    const array = [1];
    const result = getUniqueValues(array);
    expect(result).toEqual([1]);
  });

  test('should handle array with no duplicates', () => {
    const array = [1, 2, 3, 4, 5];
    const result = getUniqueValues(array);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  test('should handle array with all same elements', () => {
    const array = [1, 1, 1, 1, 1];
    const result = getUniqueValues(array);
    expect(result).toEqual([1]);
  });

  test('should handle boolean values', () => {
    const array = [true, false, true, false, true];
    const result = getUniqueValues(array);
    expect(result).toEqual([true, false]);
  });

  test('should handle null and undefined values', () => {
    const array = [null, undefined, null, undefined, 1];
    const result = getUniqueValues(array);
    expect(result).toEqual([null, undefined, 1]);
  });

  test('should handle mixed types', () => {
    const array = [1, '1', 1, 'a', 'a', 2];
    const result = getUniqueValues(array);
    expect(result).toEqual([1, '1', 'a', 2]);
  });

  test('should handle object array with duplicate objects', () => {
    const obj1 = { id: 1, name: 'test' };
    const obj2 = { id: 2, name: 'test2' };
    const obj3 = { id: 1, name: 'test' };
    const array = [obj1, obj2, obj3];
    const result = getUniqueValues(array);
    expect(result).toHaveLength(2);
    expect(result[0]).toEqual(obj1);
    expect(result[1]).toEqual(obj2);
  });

  test('should handle objects with different key order', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { b: 2, a: 1 };
    const array = [obj1, obj2];
    const result = getUniqueValues(array);
    expect(result).toHaveLength(1);
    expect(result[0]).toEqual(obj1);
  });

  test('should handle nested objects', () => {
    const obj1 = { id: 1, nested: { value: 'test' } };
    const obj2 = { id: 2, nested: { value: 'test2' } };
    const obj3 = { id: 1, nested: { value: 'test' } };
    const array = [obj1, obj2, obj3];
    const result = getUniqueValues(array);
    expect(result).toHaveLength(2);
    expect(result[0]).toEqual(obj1);
    expect(result[1]).toEqual(obj2);
  });

  test('should handle array of arrays', () => {
    const array = [[1, 2], [1, 2], [3, 4], [1, 2]];
    const result = getUniqueValues(array);
    expect(result).toHaveLength(2);
    expect(result[0]).toEqual([1, 2]);
    expect(result[1]).toEqual([3, 4]);
  });

  test('should return a new array (deep clone)', () => {
    const array = [1, 2, { id: 3 }];
    const result = getUniqueValues(array);
    
    // 验证是新数组
    expect(result).not.toBe(array);
    
    // 验证对象也被深拷贝
    result[2].id = 100;
    expect(array[2].id).toBe(3);
  });

  test('should handle non-array input', () => {
    expect(getUniqueValues(null)).toEqual([]);
    expect(getUniqueValues(undefined)).toEqual([]);
    expect(getUniqueValues('string')).toEqual([]);
    expect(getUniqueValues(123)).toEqual([]);
    expect(getUniqueValues({})).toEqual([]);
  });

  test('should handle special number values', () => {
    const array = [0, -0, NaN, Infinity, -Infinity, NaN, Infinity];
    const result = getUniqueValues(array);
    expect(result).toHaveLength(4);
    expect(result).toContain(0);
    // NaN 不能使用 toContain，因为 NaN !== NaN
    expect(result.some(item => Number.isNaN(item))).toBe(true);
    expect(result).toContain(Infinity);
    expect(result).toContain(-Infinity);
  });

  test('should handle large array efficiently', () => {
    const array = Array.from({ length: 10000 }, (_, i) => i % 100);
    const result = getUniqueValues(array);
    expect(result).toHaveLength(100);
    expect(result[0]).toBe(0);
    expect(result[99]).toBe(99);
  });
});