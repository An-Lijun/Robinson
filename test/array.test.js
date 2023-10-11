import { isArray, chunkArray, getRelArray } from '../src/index';

let isArrayTest = [
  { desc: 'null',
    data: null,
    expect: false },
  { desc: 'undefined',
    data: undefined,
    expect: false },
  { desc: 'void 0',
    data: void 0,
    expect: false },
  { desc: 'NaN',
    data: NaN,
    expect: false },
  { desc: '1',
    data: 1,
    expect: false },
  { desc: '1.1',
    data: '987',
    expect: false },
  { desc: '987',
    data: 987,
    expect: false },
  { desc: '+0',
    data: +0,
    expect: false },
  { desc: '-0',
    data: -0,
    expect: false },
  { desc: '0',
    data: 0,
    expect: false },
  { desc: '-1',
    data: -1,
    expect: false },
  { desc: '3.125e7',
    data: 3.125e7,
    expect: false },
  { desc: '-3.125e7',
    data: -3.125e7,
    expect: false },
  { desc: 'Infinity',
    data: Infinity,
    expect: false },
  { desc: '-Infinity',
    data: -Infinity,
    expect: false },
  { desc: '-123n',
    data: -123n,
    expect: false },
  { desc: '123n',
    data: 123n,
    expect: false },
  { desc: 'new Number()',
    data: new Number(),
    expect: false },
  { desc: '',
    data: '',
    expect: false },
  { desc: '11',
    data: '11',
    expect: false },
  { desc: 'new String()',
    data: new String(),
    expect: false },
  { desc: 'Symbol()',
    data: Symbol(),
    expect: false },
  { desc: 'Symbol(12)',
    data: Symbol(12),
    expect: false },
  { desc: '[]',
    data: [],
    expect: true },
  { desc: '[1,2,3]',
    data: [1, 2, 3],
    expect: true },
    { desc: 'new Array',
    data: new Array(),
    expect: true },
  { desc: '{}',
    data: {},
    expect: false },
  { desc: '{ a: 123,b: 456 }',
    data: { a: 123,
      b: 456 },
    expect: false },
  { desc: 'new Object()',
    data: new Object(),
    expect: false },
  { desc: 'new Set()',
    data: new Set(),
    expect: false },
  { desc: 'new Set()',
    data: new Set(),
    expect: false },
  { desc: 'new Set("1")',
    data: new Set('1'),
    expect: false },
  { desc: 'new Map()',
    data: new Map(),
    expect: false }, { desc: 'new Map(xxx)',
    data: (()=>{
      let map = new Map();
      map.set({}, 789);
      return map;
    })(),
    expect: false },
  { desc: 'new WeakSet()',
    data: new WeakSet(),
    expect: false },
  { desc: 'new WeakMap()',
    data: new WeakMap(),
    expect: false }
];

describe('isArray', () => {
  isArrayTest.forEach((item) => {
    test(`${item.desc}`, () => {
      expect(isArray(item.data)).toBe(item.expect);
    });
  });
});

let chunkArrayTest = [
  { desc: '[1,2,3,4],2',
    data: [[1, 2, 3, 4], 2],
    expect: [[1, 2], [3, 4]] },
  { desc: '[1,2,3,4],3',
    data: [[1, 2, 3, 4], 3],
    expect: [[1, 2, 3], [ 4]] },
  { desc: '[1,2,3,4,5],4',
    data: [[1, 2, 3, 4,5], 4],
    expect: [[1, 2, 3,4], [ 5]] },
  { desc: '{},2',
    data: [{}, 2],
    expect: 'params is not a array' }
];
describe('chunkArray', () => {
  chunkArrayTest.forEach((item) => {
    test(`${item.desc}`, () => {
      try {
        chunkArray(...item.data);
        expect(chunkArray(...item.data)).toEqual(item.expect);
      } catch (error) {
        expect(error.message).toEqual('params is not a array');
      }
    });
  });
});
describe('getRelArray', () => {
  test('[1,2,3,null,undefined,4,[],{},NaN,void 0] to equal[1,2,3,4]', ()=>{
    console.log(getRelArray([1, 2, 3, null, undefined, 4, [], {}, NaN, void 0,{a:123},
      new String(),new Number(),new Object(),new Set(), new Map(), new Set('1')
    ]));
    expect(getRelArray([1, 2, 3, null, undefined, 4, [], {}, NaN, void 0,{a:123},
      new String(),new Number(),new Object(),new Set(), new Map(), new Set('1')
    ])).toEqual([1, 2, 3, 4,{a:123},new Set('1')]);
  });
});
