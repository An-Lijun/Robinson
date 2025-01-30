import { deepClone } from '../../../index';
let set1 = new Set();
let set2 = new Set([1, 2]);
let map1 = new Map();
let map2 = new Map([['a', 1], ['b', 2]]);
let map3 = new Map([[Symbol(9), 1], ['b', 2]]);

let fn = ()=>{};
let deepCloneTest = [
  { desc: '11',
    data: 11,
    expect: 11 },
  { desc: '11',
    data: '11',
    expect: '11' },
  { desc: '[1,2,3]',
    data: [1, 2, 3],
    expect: [1, 2, 3] },
  { desc: '{}',
    data: {},
    expect: {} },
  { desc: '{a:1}',
    data: { a: 1 },
    expect: { a: 1 } },
  { desc: '[{a:1}]',
    data: [{ a: 1 }],
    expect: [{ a: 1 }] },
  { desc: 'Symbol',
    data: Symbol(1),
    expect: Symbol(1) },
  { desc: 'set',
    data: set1,
    expect: set1 },
  { desc: 'new Set(1,2)',
    data: set2,
    expect: set2 },
  { desc: 'new Map()',
    data: map1,
    expect: map1 },
  { desc: 'map2',
    data: map2,
    expect: map2 },
  // { desc: 'map3',
  //   data: map3,
  //   expect: map3 },
  { desc: 'fn',
    data: fn,
    expect: fn }
];
describe('deepClone', () => {
  deepCloneTest.forEach(item=>{
    test(item.desc, () => {
      if (typeof item.data === 'symbol') {
        expect(deepClone(item.data).description).toEqual(item.expect.description);

      } else {

        expect(deepClone(item.data)).toEqual(item.expect);
      }
    });
  });

});