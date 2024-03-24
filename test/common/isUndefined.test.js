import { isUndefined } from '../../src/index';

let s1 = new Set('1');
let isEmptyTest = [
  [null, false],
  [undefined, true],
  [void 0, true],
  [NaN, false],
  [1, false],
  [1.1, false],
  [957, false],
  [+0, false],
  [0, false],
  [-0, false],
  [-1, false],
  [3.125e7, false],
  [Infinity, false],
  [-Infinity, false],
  [123n, false],
  [new Number(), false],
  ['', false],
  ['0', false],
  ['1', false],
  [new String(), false],
  [Symbol(), false],
  [Symbol(), false],
  [[], false],
  [[1, 2, 3], false],
  [{}, false],
  [{ a: 123,
    b: 456 }, false],
  [new Object(), false],
  [new Set(), false],
  [s1, false],
  [new Map(), false],
  [(()=>{
    let map = new Map();
    map.set({}, 789);
    return map;
  })(), false],
  [new WeakSet(), false],
  [new WeakMap(), false]
];
describe('isUndefined', ()=>{
  isEmptyTest.forEach((element, index) => {
    test(`${index}`, () => {
      expect(isUndefined(element[0])).toBe(element[1]);
    });
  });
});