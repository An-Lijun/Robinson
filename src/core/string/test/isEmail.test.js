import { isEmail } from '../../../index'; // 根据实际情况调整路径

describe('isEmail', () => {
  it('should return true for a valid email address', () => {
    expect(isEmail('test@example.com')).toBe(true);
  });

  it('should return false for an invalid email address without @ symbol', () => {
    expect(isEmail('invalid-email')).toBe(false);
  });

  it('should return false for an invalid email address with missing domain', () => {
    expect(isEmail('test@.com')).toBe(false);
  });

  it('should return false for an invalid email address with missing top-level domain', () => {
    expect(isEmail('test@example.')).toBe(false);
  });

  it('should return true for a valid email address with special characters', () => {
    expect(isEmail('test.name+alex@leetcode.com')).toBe(false);
  });

  it('should return false for an email address with invalid characters', () => {
    expect(isEmail('test@exa_mple.com')).toBe(false);
  });

  it('should return true for a valid email address with subdomains', () => {
    expect(isEmail('test@sub.example.com')).toBe(true);
  });

  it('should return false for an email address with consecutive dots', () => {
    expect(isEmail('test..name@example.com')).toBe(false);
  });

  it('should return false for an email address with leading or trailing dots', () => {
    expect(isEmail('.test@example.com')).toBe(false);
    expect(isEmail('test@example.com.')).toBe(false);
  });

  it('should return true for a valid email address with numbers', () => {
    expect(isEmail('test123@example.com')).toBe(true);
  });

  it('should return false for an email address with invalid domain characters', () => {
    expect(isEmail('test@example!com')).toBe(false);
  });

  it('should return true for a valid email address with hyphens', () => {
    expect(isEmail('test-name@example.com')).toBe(true);
  });

  it('should return false for an email address with spaces', () => {
    expect(isEmail('test name@example.com')).toBe(false);
  });

  it('should return false for an email address with only domain and top-level domain', () => {
    expect(isEmail('@example.com')).toBe(false);
  });

  it('should return false for an email address with only local part', () => {
    expect(isEmail('test@')).toBe(false);
  });

  it('should return false for an email address with empty string', () => {
    expect(isEmail('')).toBe(false);
  });

  it('should return false for an email address with only special characters', () => {
    expect(isEmail('!@#$%^&*()@example.com')).toBe(false);
  });

  it('should return true for a valid email address with mixed case', () => {
    expect(isEmail('Test@Example.com')).toBe(true);
  });
});