import { isMobileNum } from '../../../index'; // 根据实际路径调整

describe('isMobileNum', () => {
  it('should return true for valid mobile numbers starting with 1 and having 11 digits', () => {
    expect(isMobileNum('13800138000')).toBe(true);
    expect(isMobileNum(13800138000)).toBe(true);
  });

  it('should return false for numbers not starting with 1', () => {
    expect(isMobileNum('23800138000')).toBe(false);
    expect(isMobileNum(23800138000)).toBe(false);
  });

  it('should return false for numbers with less than 11 digits', () => {
    expect(isMobileNum('1380013800')).toBe(false);
    expect(isMobileNum(1380013800)).toBe(false);
  });

  it('should return false for numbers with more than 11 digits', () => {
    expect(isMobileNum('138001380001')).toBe(false);
    expect(isMobileNum(138001380001)).toBe(false);
  });

  it('should return false for numbers containing non-digit characters', () => {
    expect(isMobileNum('1380013800a')).toBe(false);
  });

  it('should return false for numbers that do not match the pattern', () => {
    expect(isMobileNum('12345678901')).toBe(false);
  });

  it('should return false for empty strings or non-numeric inputs', () => {
    expect(isMobileNum('')).toBe(false);
    expect(isMobileNum('abc')).toBe(false);
  });
});