import { compose } from '../../../index';

describe('compose', () => {
  it('should return a function that does nothing when given an empty array', () => {
    const composed = compose();
    expect(composed()).toBeUndefined();
  });

  it('should return the result of the single function when given one function', () => {
    const double = (x) => x * 2;
    const composed = compose(double);
    expect(composed(5)).toBe(10);
  });

  it('should apply functions from right to left when given multiple functions', () => {
    const double = (x) => x * 2;
    const increment = (x) => x + 1;
    const composed = compose(double, increment);
    expect(composed(5)).toBe(12);
  });

  it('should handle functions with different types of arguments', () => {
    const add = (x, y) => x + y;
    const square = (x) => x * x;
    const composed = compose(square, add);
    expect(composed(2, 3)).toBe(25);
  });

  it('should handle functions that return different types', () => {
    const toString = (x) => x.toString();
    const double = (x) => x * 2;
    const composed = compose(toString, double);
    expect(composed(5)).toBe('10');
  });
});