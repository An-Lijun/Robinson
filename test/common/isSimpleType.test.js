import { isSimpleType } from '../../src/index';

let isSimpleTypeTest = [
  { desc: 'null',
    data: null,
    expect: true },
  { desc: 'undefined',
    data: undefined,
    expect: true },
  { desc: 'void 0',
    data: void 0,
    expect: true },
  { desc: 'NaN',
    data: NaN,
    expect: true },
  { desc: '1',
    data: 1,
    expect: true },
  { desc: '1.1',
    data: 1.1,
    expect: true },
  { desc: '957',
    data: 957,
    expect: true },
  { desc: '+0',
    data: +0,
    expect: true },
  { desc: '-0',
    data: -0,
    expect: true },
  { desc: '0',
    data: 0,
    expect: true },
  { desc: '-1',
    data: -1,
    expect: true },
  { desc: '3.125e7',
    data: 3.125e7,
    expect: true },
  { desc: 'Infinity',
    data: Infinity,
    expect: true },
  { desc: '-Infinity',
    data: Infinity,
    expect: true },
  { desc: '123n',
    data: 123n,
    expect: true },
  { desc: 'new Number()',
    data: new Number(),
    expect: false },

  { desc: '',
    data: '',
    expect: true },
  { desc: '0',
    data: '0',
    expect: true },
  { desc: '1',
    data: '1',
    expect: true },
  { desc: 'new String()',
    data: new String(),
    expect: false },
  { desc: 'Symbol()',
    data: Symbol(),
    expect: true },
  { desc: 'Symbol(1)',
    data: Symbol(1),
    expect: true },
  { desc: '[]',
    data: [],
    expect: false },
  { desc: '[1, 2, 3]',
    data: [1, 2, 3],
    expect: false },
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
  { desc: 'new Map()',
    data: new Map(),
    expect: false },
  { desc: `(()=>{
    let map = new Map();
    map.set({}, 789);
    return map;
  })()`,
  data: (()=>{
    let map = new Map();
    map.set({}, 789);
    return map;
  })(),
  expect: false },
  { desc: `(()=>{
    let map = new Map();
  })`,
  data: ()=>{
    let map = new Map();
    map.set({}, 789);
  },
  expect: false },
  { desc: 'new Set(1)',
    data: new Set('1'),
    expect: false },
  { desc: 'new WeakSet()',
    data: new WeakSet(),
    expect: false },
  { desc: 'new WeakMap()',
    data: new WeakMap(),
    expect: false }
];

describe('isSimpleType', ()=>{
  isSimpleTypeTest.forEach((item) => {
    test(item.desc, () => {
      expect(isSimpleType(item.data)).toBe(item.expect);
    });
  });
});