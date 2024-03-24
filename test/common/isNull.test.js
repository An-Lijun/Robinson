import { isNull } from '../../src/index';

let s1 = new Set('1');
let isEmptyTest = [
  [null, true],
  [undefined, false],
  [void 0, false],
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
describe('isNull', ()=>{
  isEmptyTest.forEach((element, index) => {
    test(`${index}`, () => {
      expect(isNull(element[0])).toBe(element[1]);
    });
  });
});