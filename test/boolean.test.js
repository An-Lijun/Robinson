import { isBoolean } from '../src/index';
describe('isBoolean', () => {
  test('undefined to equal false', () => {
    expect(isBoolean(undefined)).toBe(false);
  });
  test('NaN to equal false', () => {
    expect(isBoolean(NaN)).toBe(false);
  });
  test('1 to equal false', () => {
    expect(isBoolean('1')).toBe(false);
  });
  test('1.1 to equal false', () => {
    expect(isBoolean('1.1')).toBe(false);
  });
  test('new Number to equal false', () => {
    expect(isBoolean(new Number())).toBe(false);
  });

  test('1.1 to equal false', () => {
    expect(isBoolean(1.1)).toBe(false);
  });
  test('new String to equal false', () => {
    expect(isBoolean(new String())).toBe(false);
  });
  test('true to equal true', () => {
    expect(isBoolean(true)).toBe(true);
  });
  test('false to equal true', () => {
    expect(isBoolean(false)).toBe(true);
  });
  test('new Boolean to equal true', () => {
    expect(isBoolean(new Boolean())).toBe(true);
  });
  test('{} to equal false', () => {
    expect(isBoolean({})).toBe(false);
  });
  test('new Object to equal false', () => {
    expect(isBoolean(new Object())).toBe(false);
  });
  test('[] to equal true', () => {
    expect(isBoolean([])).toBe(false);
  });
  test('new Array to equal true', () => {
    expect(isBoolean(new Array())).toBe(false);
  });
});