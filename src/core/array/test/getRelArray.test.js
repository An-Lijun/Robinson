import { getRelArray } from '../../../index';

describe('getRelArray', () => {
  test('[1,2,3,null,undefined,4,[],{},NaN,void 0] to equal[1,2,3,4]', ()=>{
    expect(getRelArray([1, 2, 3, '', '123', null, undefined, 4, [], {}, NaN, void 0, { a: 123 },
      new String(), new Number(), new Object(), new Set(), new Map(), new Set('1')
    ])).toEqual([1, 2, 3, '123', 4, { a: 123 }, new Set('1')]);
  });
  test('{}', ()=>{
    try {
      expect(getRelArray({}));
    } catch (error) {
      expect(error.message).toEqual('not a array');
    }
  });
});

describe('getRelArray', () => {
  it('should throw TypeError if input is not an array', () => {
    expect(() => getRelArray('not an array')).toThrow(TypeError);
    expect(() => getRelArray(123)).toThrow(TypeError);
    expect(() => getRelArray({})).toThrow(TypeError);
  });

  it('should filter out null values', () => {
    expect(getRelArray([null, 1, 2, null])).toEqual([1, 2]);
  });

  it('should filter out undefined values', () => {
    expect(getRelArray([undefined, 1, 2, undefined])).toEqual([1, 2]);
  });

  it('should filter out empty strings', () => {
    expect(getRelArray(['', 1, 2, ''])).toEqual([1, 2]);
  });

  it('should filter out empty arrays', () => {
    expect(getRelArray([[], 1, 2, []])).toEqual([1, 2]);
  });

  it('should filter out empty objects', () => {
    expect(getRelArray([{}, 1, 2, {}])).toEqual([1, 2]);
  });

  it('should return the array as is if no empty values are present', () => {
    expect(getRelArray([1, 2, 3])).toEqual([1, 2, 3]);
  });

  it('should filter out mixed empty values', () => {
    expect(getRelArray([null, undefined, '', [], {}, 1, 2])).toEqual([1, 2]);
  });
});