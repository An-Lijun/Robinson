import { getRelArray } from '../../src/index';

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
