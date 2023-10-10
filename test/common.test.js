import { getStringType, is, isEmpty } from '../src/index';
describe('getStringType', () => {
  test('undefined ', () => {
    expect(getStringType(undefined)).toBe('[object undefined]');
  });
  test('NaN ', () => {
    expect(getStringType(NaN)).toBe('[object number]');
  });
  test(1, () => {
    expect(getStringType(1)).toBe('[object number]');
  });
  test('new Number', () => {
    expect(getStringType(new Number())).toBe('[object number]');
  });
  test('1.1 ', () => {
    expect(getStringType('1.1')).toBe('[object string]');
  });
  test('new String ', () => {
    expect(getStringType(new String())).toBe('[object string]');
  });

  test('true ', () => {
    expect(getStringType(true)).toBe('[object boolean]');
  });
  test('false ', () => {
    expect(getStringType(false)).toBe('[object boolean]');
  });
  test('new Boolean ', () => {
    expect(getStringType(new Boolean())).toBe('[object boolean]');
  });
  test('{} to equal false', () => {
    expect(getStringType({})).toBe('[object object]');
  });
  test('new Object to equal false', () => {
    expect(getStringType(new Object())).toBe('[object object]');
  });
  test('[] to equal true', () => {
    expect(getStringType([])).toBe('[object array]');
  });
  test('new Array to equal true', () => {
    expect(getStringType(new Array())).toBe('[object array]');
  });
});

describe('is', () => {
  test('null ', () => {
    expect(is(null, 'null')).toBe(true);
  });
  test('undefined ', () => {
    expect(is(undefined, 'undefined')).toBe(true);
  });
  test('NaN ', () => {
    expect(is(NaN, 'number')).toBe(true);
  });
  test(1, () => {
    expect(is(1, 'number')).toBe(true);
  });
  test('new Number', () => {
    expect(is(new Number(), 'number')).toBe(true);
  });
  test('1.1 ', () => {
    expect(is('1.1', 'string')).toBe(true);
  });
  test('new String ', () => {
    expect(is(new String(), 'string')).toBe(true);
  });

  test('true ', () => {
    expect(is(true, 'boolean')).toBe(true);
  });
  test('false ', () => {
    expect(is(false, 'boolean')).toBe(true);
  });
  test('new Boolean ', () => {
    expect(is(new Boolean(), 'boolean')).toBe(true);
  });
  test('{} to equal false', () => {
    expect(is({}, 'object')).toBe(true);
  });
  test('new Object to equal false', () => {
    expect(is(new Object(), 'object')).toBe(true);
  });
  test('[] to equal true', () => {
    expect(is([], 'array')).toBe(true);
  });
  test('new Array to equal true', () => {
    expect(is(new Array(), 'array')).toBe(true);
  });
});
let s1 = new Set('1');
let isEmptyArr = [
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
  [new Number(), false],
  ['', true],
  ['0', false],
  ['1', false],
  [new String(), false],
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
  // [(()=>{
  //   let map = new Map();
  //   map.set({}, 789);
  //   return map;
  // })(), false],
  [new WeakSet(), true],
  [new WeakSet(), true]

];
// describe('isEmpty', ()=>{
//   isEmptyArr.forEach((element, index) => {
//     test(`${index}`, () => {
//       console.log(element, isEmpty(element[0]));
//       expect(isEmpty(element[0])).toBe(element[1]);
//     });
//   });
// });
// describe('TEST', ()=>{
//   let a = new Set('1');
//   console.log(a.size);
//   console.log(JSON.stringify(a));
//   console.log(!is(a, 'bigint') && (JSON.stringify(a) === '[]' || JSON.stringify(a) === '{}'));
//   console.log(isEmpty(a));
//   test('11', () => {
//     expect(isEmpty(a)).toBe(false);
//   });
// });

// describe('TEST', ()=>{
//   let a = new Set('1');
//   console.log(a.size);
//   test('11', () => {
//     expect(a.size).toBe(1);
//   });
// });
