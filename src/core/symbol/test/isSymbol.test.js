import { isSymbol } from '../../../index';

describe('isSymbol', () => {
  test('undefined to equal false', () => {
    expect(isSymbol(undefined)).toBe(false);
  });
  test('NaN to equal false', () => {
    expect(isSymbol(NaN)).toBe(false);
  });
  test('1 to equal false', () => {
    expect(isSymbol('1')).toBe(false);
  });
  test('1.1 to equal false', () => {
    expect(isSymbol('1.1')).toBe(false);
  });
  test('new Number to equal false', () => {
    expect(isSymbol(new Number())).toBe(false);
  });

  test('1.1 to equal false', () => {
    expect(isSymbol(1.1)).toBe(false);
  });
  test('new String to equal false', () => {
    expect(isSymbol(new String())).toBe(false);
  });
  test('true to equal true', () => {
    expect(isSymbol(true)).toBe(false);
  });
  test('false to equal true', () => {
    expect(isSymbol(false)).toBe(false);
  });
  test('new Boolean to equal true', () => {
    expect(isSymbol(new Boolean())).toBe(false);
  });
  test('{} to equal false', () => {
    expect(isSymbol({})).toBe(false);
  });
  test('new Object to equal false', () => {
    expect(isSymbol(new Object())).toBe(false);
  });
  test('[] to equal true', () => {
    expect(isSymbol([])).toBe(false);
  });
  test('new Array to equal true', () => {
    expect(isSymbol(new Array())).toBe(false);
  });
  test('new Array to equal true', () => {
    expect(isSymbol(Symbol())).toBe(true);
  });
});