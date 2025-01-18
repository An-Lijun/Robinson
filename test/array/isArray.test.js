import { isArray } from '../../src/index';

let isArrayTest = [
  { desc: 'null',
    data: null,
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

describe('isArray', () => {
  it('should return true for an array', () => {
    expect(isArray([])).toBe(true);
    expect(isArray([1, 2, 3])).toBe(true);
    expect(isArray(['a', 'b', 'c'])).toBe(true);
  });

  it('should return false for non-array values', () => {
    expect(isArray({})).toBe(false);
    expect(isArray('string')).toBe(false);
    expect(isArray(123)).toBe(false);
    expect(isArray(null)).toBe(false);
    expect(isArray(undefined)).toBe(false);
    expect(isArray(true)).toBe(false);
    expect(isArray(false)).toBe(false);
    expect(isArray(new Date())).toBe(false);
    expect(isArray(new Map())).toBe(false);
    expect(isArray(new Set())).toBe(false);
  });
});