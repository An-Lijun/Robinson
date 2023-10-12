import { getStringType } from '../../src/index';
describe('getStringType', () => {
  test('undefined ', () => {
    expect(getStringType(undefined)).toBe('[object undefined]');
  });
  test('NaN ', () => {
    expect(getStringType(NaN)).toBe('[object number]');
  });
  test(1, () => {
    expect(getStringType(1)).toBe('[object number]');
  });
  test('new Number', () => {
    expect(getStringType(new Number())).toBe('[object number]');
  });
  test('1.1 ', () => {
    expect(getStringType('1.1')).toBe('[object string]');
  });
  test('new String ', () => {
    expect(getStringType(new String())).toBe('[object string]');
  });

  test('true ', () => {
    expect(getStringType(true)).toBe('[object boolean]');
  });
  test('false ', () => {
    expect(getStringType(false)).toBe('[object boolean]');
  });
  test('new Boolean ', () => {
    expect(getStringType(new Boolean())).toBe('[object boolean]');
  });
  test('{} to equal false', () => {
    expect(getStringType({})).toBe('[object object]');
  });
  test('new Object to equal false', () => {
    expect(getStringType(new Object())).toBe('[object object]');
  });
  test('[] to equal true', () => {
    expect(getStringType([])).toBe('[object array]');
  });
  test('new Array to equal true', () => {
    expect(getStringType(new Array())).toBe('[object array]');
  });
});
