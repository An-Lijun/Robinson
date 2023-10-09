import { isArray, chunkArray, getRelArray } from './src/index';
// let stringArr = [
//   '',
//   '2.1',
//   new String()
// ];
// let numberArr = [
//   1,
//   1.1,
//   NaN,
//   Infinity,
//   0,
//   -13,
//   -Infinity
// ];
describe('isArray', () => {
  test('undefined to equal false', () => {
    expect(isArray(undefined)).toBe(false);
  });
  test('NaN to equal false', () => {
    expect(isArray(NaN)).toBe(false);
  });
  test('1 to equal false', () => {
    expect(isArray('1')).toBe(false);
  });
  test('1.1 to equal false', () => {
    expect(isArray('1.1')).toBe(false);
  });
  test('new Number to equal false', () => {
    expect(isArray(new Number())).toBe(false);
  });

  test('1.1 to equal false', () => {
    expect(isArray(1.1)).toBe(false);
  });
  test('new String to equal false', () => {
    expect(isArray(new String())).toBe(false);
  });
  test('true to equal false', () => {
    expect(isArray(true)).toBe(false);
  });
  test('new Boolean to equal false', () => {
    expect(isArray(new Boolean)).toBe(false);
  });
  test('{} to equal false', () => {
    expect(isArray({})).toBe(false);
  });
  test('new Object to equal false', () => {
    expect(isArray(new Object())).toBe(false);
  });
  test('[] to equal true', () => {
    expect(isArray([])).toBe(true);
  });
  test('new Array to equal true', () => {
    expect(isArray(new Array())).toBe(true);
  });

});

describe('chunkArray', () => {
  test('[1,2,3,4],2 to equal [[1,2],[3,4]]', () => {
    expect(chunkArray([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]]);
  });
  test('{},2 to equal ERROR', () => {
    try {
      chunkArray({}, 2);
    } catch (error) {
      expect(error.message).toBe('params is not a array');
    }
  });
});
describe('getRelArray', () => {
  test('[1,2,3,null,undefined,4,[],{},NaN,void 0] to equal[1,2,3,4]', ()=>{
    expect(getRelArray([1, 2, 3, null, undefined, 4, [], {}, NaN, void 0])).toEqual([1, 2, 3, 4]);
  });
});
