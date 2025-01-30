import { currying } from '../../../index'; // 假设文件名为 currying.ts

describe('currying', () => {
  it('should return the result when enough arguments are provided', () => {
    const add = (a, b, c) => a + b + c;
    const curriedAdd = currying(add);
    expect(curriedAdd(1, 2, 3)).toBe(6);
  });

  it('should return a new function when not enough arguments are provided', () => {
    const add = (a, b, c) => a + b + c;
    const curriedAdd = currying(add);
    const partialAdd = curriedAdd(1);
    expect(partialAdd(2, 3)).toBe(6);
  });

  it('should handle functions with no parameters', () => {
    const noParamFn = () => 42;
    const curriedNoParamFn = currying(noParamFn);
    expect(curriedNoParamFn()).toBe(42);
  });

  it('should handle functions with a single parameter', () => {
    const singleParamFn = (x) => x * 2;
    const curriedSingleParamFn = currying(singleParamFn);
    expect(curriedSingleParamFn(5)).toBe(10);
  });

  it('should handle functions with multiple parameters', () => {
    const multiply = (a, b, c, d) => a * b * c * d;
    const curriedMultiply = currying(multiply);
    expect(curriedMultiply(1)(2)(3)(4)).toBe(24);
  });
});