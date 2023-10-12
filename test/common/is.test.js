import { is } from '../../src/index';
describe('is', () => {
  test('null ', () => {
    expect(is(null, 'null')).toBe(true);
  });
  test('undefined ', () => {
    expect(is(undefined, 'undefined')).toBe(true);
  });
  test('NaN ', () => {
    expect(is(NaN, 'number')).toBe(true);
  });
  test(1, () => {
    expect(is(1, 'number')).toBe(true);
  });
  test('new Number', () => {
    expect(is(new Number(), 'number')).toBe(true);
  });
  test('1.1 ', () => {
    expect(is('1.1', 'string')).toBe(true);
  });
  test('new String ', () => {
    expect(is(new String(), 'string')).toBe(true);
  });

  test('true ', () => {
    expect(is(true, 'boolean')).toBe(true);
  });
  test('false ', () => {
    expect(is(false, 'boolean')).toBe(true);
  });
  test('new Boolean ', () => {
    expect(is(new Boolean(), 'boolean')).toBe(true);
  });
  test('{} to equal false', () => {
    expect(is({}, 'object')).toBe(true);
  });
  test('new Object to equal false', () => {
    expect(is(new Object(), 'object')).toBe(true);
  });
  test('[] to equal true', () => {
    expect(is([], 'array')).toBe(true);
  });
  test('new Array to equal true', () => {
    expect(is(new Array(), 'array')).toBe(true);
  });
});