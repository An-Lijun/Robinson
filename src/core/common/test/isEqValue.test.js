import { isEqValue } from '../../../index';
let fn = ()=>{
};
let hexToRgbaArr = [
  { desc: '1 1',
    data: [1, 1],
    expect: true },
  { desc: '1 1',
    data: [1, '1'],
    expect: false },
  { desc: '0 0',
    data: [+0, -0],
    expect: false },
  { desc: '2 2',
    data: ['2', '2'],
    expect: true },
  { desc: 'null ',
    data: [null, null],
    expect: true },
  { desc: 'null undefined',
    data: [null, undefined],
    expect: false },
  { desc: '[] new Array',
    data: [[], new Array],
    expect: true },
  { desc: '[1,3] [3,1]',
    data: [[1, 3], [3, 1]],
    expect: false },
  { desc: '[1,3] [1,3]',
    data: [[1, 3], [1, 3]],
    expect: true },
  { desc: '[1,3] [1,4]',
    data: [[1, 3], [1, 4]],
    expect: false },
  { desc: '[1,3] [1]',
    data: [[1, 3], [1]],
    expect: false },
  { desc: '{} {}',
    data: [{}, {}],
    expect: true },
  { desc: '{a:1,b:2} {b:2,a:1}',
    data: [{ a: 1,
      b: 2 }, { b: 2,
      a: 1 }],
    expect: true },
  { desc: '{a:1,b:2} {b:2}',
    data: [{ a: 1,
      b: 2 }, { b: 2 }],
    expect: false },
  { desc: 'set(1,2,3),set(1,2,3)',
    data: [new Set([1, 2, 3]), new Set([1, 2, 3])],
    expect: true },
  { desc: 'set(1,2,3),set(1,2,3)',
    data: [new Set([{ a: 1 }]), new Set([{ a: 1 }])],
    expect: true },
  { desc: 'set(),set()',
    data: [new Set(), new Set()],
    expect: true },
  { desc: 'set(1,2,3),set(1,2)',
    data: [new Set([1, 2, 3]), new Set([1, 2])],
    expect: false },
  { desc: 'Map(),Map()',
    data: [new Map(), new Map()],
    expect: true },
  { desc: 'set(1,2,3),set(1,3,2)',
    data: [new Set([1, 2, 3]), new Set([1, 3, 2])],
    expect: false },
  { desc: 'set(1,2,3),set(1,2)',
    data: [new Set([1, 2, 3]), new Set([1, 2])],
    expect: false },
  { desc: 'map(1,2),map(1,2)',
    data: [new Map([['a', 1], ['b', 2]]), new Map([['a', 1], ['b', 2]])],
    expect: true },
  { desc: 'map(1,2),map(1)',
    data: [new Map([['a', 1], ['b', 2]]), new Map([['a', 1]])],
    expect: false },
  { desc: 'map(),map()',
    data: [new Map(), new Map()],
    expect: true },
  { desc: 'map(1,2),map(1)',
    data: [new Map([ ['b', 2]]), new Map([['a', 1]])],
    expect: false },
  { desc: 'map(1,2),map(1)',
    data: [new Map([ ['a', 2]]), new Map([['a', 1]])],
    expect: false },
  { desc: 'map(1,2),map(1)',
    data: [new Map([ ['a', 1]]), new Map([['a', 1]])],
    expect: true },
  { desc: '[],[]',
    data: [[], []],
    expect: true },
  { desc: '[1],[]',
    data: [[1], []],
    expect: false },
  { desc: '{},{}',
    data: [{}, {}],
    expect: true },
  { desc: '{},{}',
    data: [{ a: 1 }, {}],
    expect: false },
  { desc: '[][]',
    data: [[1], []],
    expect: false },
  { desc: '[][]',
    data: [[1], [1]],
    expect: true },
  { desc: '[][]',
    data: [[], []],
    expect: true },
  { desc: '[][]',
    data: [[{ a: 1 }], [{ a: 1 }]],
    expect: true },
  { desc: '[][]',
    data: [[{ a: 2 }], [{ a: 1 }]],
    expect: false },
  { desc: '[],{}',
    data: [[], {}],
    expect: false },
  { desc: 'function',
    data: [fn, fn],
    expect: true },
  { desc: 'map(1,2),map(1)',
    data: [new Map([['a', { a: 1 }]]), new Map([['a', { a: 1 }]])],
    expect: true },
  { desc: '{a:{a:1}},{a:{a:1}}',
    data: [{ a: { a: 1 } }, { a: { a: 1 } }],
    expect: true },
  { desc: 'map(1,2),map(1)',
    data: [new Map([['a', { a: 1 }]]), new Map([['a', { a: 2 }]])],
    expect: false },
  { desc: 'map(1,2),map(1)',
    data: [new Map([['b', { a: 1 }]]), new Map([['a', { a: 2 }]])],
    expect: false }

];
describe('isEqValue', () => {
  hexToRgbaArr.forEach((item) => {
    test(`${item.desc}`, () => {
      expect(isEqValue(...item.data)).toBe(item.expect);
    });
  });
});
