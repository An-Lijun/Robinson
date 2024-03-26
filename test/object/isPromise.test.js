import { isPromise } from '../../src/index';
import dayjs from '../../src/utils/date';

let isPromiseTest = [
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
    data: 1.1,
    expect: false },
  { desc: '957',
    data: 957,
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
  { desc: 'Infinity',
    data: Infinity,
    expect: false },
  { desc: '-Infinity',
    data: Infinity,
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
  { desc: '0',
    data: '0',
    expect: false },
  { desc: '1',
    data: '1',
    expect: false },
  { desc: 'new String()',
    data: new String(),
    expect: false },
  { desc: 'Symbol()',
    data: Symbol(),
    expect: false },
  { desc: 'Symbol(1)',
    data: Symbol(1),
    expect: false },
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
  { desc: `()=>{
    let map = new Map();
    map.set({}, 789);
    return map;
  }`,
  data: ()=>{
    let map = new Map();
    map.set({}, 789);
    return map;
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
    expect: false },
  { desc: 'date',
    data: new Date(),
    expect: false },
  { desc: 'dayjs',
    data: dayjs('2024-03-01 08:00:00'),
    expect: false },
  { desc: '()=>',
    data: Promise.resolve(),
    expect: true }

];

describe('isPromise', ()=>{
  isPromiseTest.forEach((item) => {
    test(item.desc, () => {
      expect(isPromise(item.data)).toBe(item.expect);
    });
  });
});
