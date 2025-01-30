import { isBoolean } from '../../../index';

describe('isBoolean', () => {
  it('should return true for boolean true', () => {
    expect(isBoolean(true)).toBe(true);
  });

  it('should return true for boolean false', () => {
    expect(isBoolean(false)).toBe(true);
  });

  it('should return false for number 0', () => {
    expect(isBoolean(0)).toBe(false);
  });

  it('should return false for number 1', () => {
    expect(isBoolean(1)).toBe(false);
  });

  it('should return false for number 42', () => {
    expect(isBoolean(42)).toBe(false);
  });

  it('should return false for string "true"', () => {
    expect(isBoolean('true')).toBe(false);
  });

  it('should return false for empty string', () => {
    expect(isBoolean('')).toBe(false);
  });

  it('should return false for object', () => {
    expect(isBoolean({})).toBe(false);
  });

  it('should return false for array', () => {
    expect(isBoolean([])).toBe(false);
  });

  it('should return false for null', () => {
    expect(isBoolean(null)).toBe(false);
  });

  it('should return false for undefined', () => {
    expect(isBoolean(undefined)).toBe(false);
  });

  it('should return false for NaN', () => {
    expect(isBoolean(NaN)).toBe(false);
  });

  it('should return false for Infinity', () => {
    expect(isBoolean(Infinity)).toBe(false);
  });
});