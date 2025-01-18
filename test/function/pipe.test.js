import { pipe } from '../../src/index'; // 假设文件名为 pipe.ts

describe('pipe', () => {
  it('should return undefined when no functions are provided', () => {
    const result = pipe()();
    expect(result).toBeUndefined();
  });

  it('should return the result of the single function when only one is provided', () => {
    const addOne = (x) => x + 1;
    const result = pipe(addOne)(2);
    expect(result).toBe(3);
  });

  it('should apply functions in reverse order when multiple functions are provided', () => {
    const addOne = (x) => x + 1;
    const double = (x) => x * 2;
    const result = pipe(addOne, double)(3);
    expect(result).toBe(8);
  });

  it('should handle empty input correctly', () => {
    const identity = (x) => x;
    const result = pipe(identity)();
    expect(result).toBeUndefined();
  });

  it('should handle functions with different argument types', () => {
    const toUpperCase = (str) => str.toUpperCase();
    const concat = (str) => `${str } WORLD`;
    const result = pipe(toUpperCase, concat)('hello');
    expect(result).toBe('HELLO WORLD');
  });
});