import { isIdCard } from '../../../index'; // 根据实际情况调整路径

describe('isIdCard', () => {
  it('should return false for empty string', () => {
    expect(isIdCard('')).toBe(false);
  });

  it('should return false for string with length less than 18', () => {
    expect(isIdCard('12345678901234567')).toBe(false);
  });

  it('should return false for string with length greater than 18', () => {
    expect(isIdCard('1234567890123456789')).toBe(false);
  });

  it('should return false for string with non-numeric characters in first 17 positions', () => {
    expect(isIdCard('12345678901234567A')).toBe(false);
  });

  it('should return false for invalid birth year', () => {
    expect(isIdCard('11010518001231002X')).toBe(false); // 假设当前年份为2023年
  });

  it('should return false for invalid month', () => {
    expect(isIdCard('11010519491331002X')).toBe(false);
  });

  it('should return false for invalid day', () => {
    expect(isIdCard('11010519491232002X')).toBe(false);
  });

  it('should return false for invalid check digit', () => {
    expect(isIdCard('11010519491231002Y')).toBe(false);
  });

  it('should return true for valid ID card number', () => {
    expect(isIdCard('11010519491231002X')).toBe(true);
  });
});