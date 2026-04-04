const { getGroupArray } = require('../../../index');

describe('getGroupArray', () => {
  test('should group array by specified property', () => {
    const array = [
      { age: 20, name: 'a' },
      { age: 20, name: 'b' },
      { age: 30, name: 'c' },
      { age: 30, name: 'd' },
      { age: 40, name: 'e' }
    ];
    const result = getGroupArray(array, 'age');
    
    expect(result).toHaveLength(3);
    expect(result[0]).toEqual([{ age: 20, name: 'a' }, { age: 20, name: 'b' }]);
    expect(result[1]).toEqual([{ age: 30, name: 'c' }, { age: 30, name: 'd' }]);
    expect(result[2]).toEqual([{ age: 40, name: 'e' }]);
  });

  test('should group array using a function', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const result = getGroupArray(array, num => num % 2 === 0 ? 'even' : 'odd');
    
    expect(result).toHaveLength(2);
    expect(result).toContainEqual([1, 3, 5, 7, 9]);
    expect(result).toContainEqual([2, 4, 6, 8, 10]);
  });

  test('should return empty array for empty array', () => {
    const array = [];
    const result = getGroupArray(array, 'age');
    expect(result).toEqual([]);
  });

  test('should handle non-array input', () => {
    expect(getGroupArray(null, 'age')).toEqual([]);
    expect(getGroupArray(undefined, 'age')).toEqual([]);
    expect(getGroupArray('string', 'age')).toEqual([]);
    expect(getGroupArray(123, 'age')).toEqual([]);
    expect(getGroupArray({}, 'age')).toEqual([]);
  });

  test('should handle objects with missing properties', () => {
    const array = [
      { age: 20, name: 'a' },
      { name: 'b' }, // 缺少 age 属性
      { age: 30, name: 'c' },
      { name: 'd' }  // 缺少 age 属性
    ];
    const result = getGroupArray(array, 'age');
    
    expect(result).toHaveLength(2);
    expect(result).toContainEqual([{ age: 20, name: 'a' }]);
    expect(result).toContainEqual([{ age: 30, name: 'c' }]);
  });

  test('should handle nested objects', () => {
    const array = [
      { user: { age: 20 }, name: 'a' },
      { user: { age: 20 }, name: 'b' },
      { user: { age: 30 }, name: 'c' }
    ];
    const result = getGroupArray(array, item => item.user.age);
    
    expect(result).toHaveLength(2);
    expect(result).toContainEqual([{ user: { age: 20 }, name: 'a' }, { user: { age: 20 }, name: 'b' }]);
    expect(result).toContainEqual([{ user: { age: 30 }, name: 'c' }]);
  });

  test('should handle different types of keys', () => {
    const array = [
      { id: 1, name: 'a' },
      { id: '2', name: 'b' },
      { id: 1, name: 'c' },
      { id: '2', name: 'd' }
    ];
    const result = getGroupArray(array, 'id');
    
    expect(result).toHaveLength(2);
    expect(result).toContainEqual([{ id: 1, name: 'a' }, { id: 1, name: 'c' }]);
    expect(result).toContainEqual([{ id: '2', name: 'b' }, { id: '2', name: 'd' }]);
  });

  test('should handle complex grouping logic', () => {
    const array = [
      { score: 85, name: 'a' },
      { score: 95, name: 'b' },
      { score: 75, name: 'c' },
      { score: 65, name: 'd' },
      { score: 90, name: 'e' }
    ];
    const result = getGroupArray(array, item => {
      if (item.score >= 90) return 'A';
      if (item.score >= 80) return 'B';
      if (item.score >= 70) return 'C';
      return 'D';
    });
    
    expect(result).toHaveLength(4);
    expect(result).toContainEqual([{ score: 95, name: 'b' }, { score: 90, name: 'e' }]);
    expect(result).toContainEqual([{ score: 85, name: 'a' }]);
    expect(result).toContainEqual([{ score: 75, name: 'c' }]);
    expect(result).toContainEqual([{ score: 65, name: 'd' }]);
  });
});