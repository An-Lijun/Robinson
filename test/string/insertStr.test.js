import { insertStr } from '../../src/index';

let isStringTest = [
  { desc: 'null2.',
    data: ['null2', 2, '.'],
    expect: 'nu.ll2' }
];

describe('insertStr', () => {
  isStringTest.forEach((item) => {
    test(`${item.desc}`, () => {
      expect(insertStr(...item.data)).toBe(item.expect);
    });
  });
});