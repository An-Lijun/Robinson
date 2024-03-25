import { isEmpty } from '../../src/index';

let s1 = new Set('1');
let isEmptyTest = [
  [null, true],
  [undefined, true],
  [void 0, true],
  [NaN, true],
  [1, false],
  [1.1, false],
  [957, false],
  [+0, true],
  [0, true],
  [-0, true],
  [-1, false],
  [3.125e7, false],
  [Infinity, false],
  [-Infinity, false],
  [123n, false],
  [new Number(), true],
  ['', true],
  ['0', false],
  ['1', false],
  [new String(), true],
  [Symbol(), false],
  [Symbol(), false],
  [[], true],
  [[1, 2, 3], false],
  [{}, true],
  [{ a: 123,
    b: 456 }, false],
  [new Object(), true],
  [new Set(), true],
  [s1, false],
  [new Map(), true],
  [(()=>{
    let map = new Map();
    map.set({}, 789);
    return map;
  })(), false],
  [new WeakSet(), true],
  [new WeakMap(), true]
];
describe('isEmpty', ()=>{
  isEmptyTest.forEach((element, index) => {
    test(`${index}`, () => {
      expect(isEmpty(element[0])).toBe(element[1]);
    });
  });
});