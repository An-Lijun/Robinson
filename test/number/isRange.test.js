import { isRange } from '../../src/index';

let isRangeTest = [
  { desc: '[1,3]',
    data: [1, 1, 3],
    expect: true },
  { desc: '[1,3]',
    data: [1, 1, 3],
    expect: true },
  { desc: '[1,3]',
    data: [1, 1, 3],
    expect: true },
  { desc: '[1,3]',
    data: [1, 1, 3],
    expect: true },
  { desc: '[1,3]',
    data: [1, 1, 3],
    expect: true },
  { desc: '[1,3]',
    data: [1, 1, 3],
    expect: true }

];

describe('isRange', () => {
  isRangeTest.forEach((item) => {
    test(`${item.desc}`, () => {
      expect(isRange(...item.data)).toBe(item.expect);
    });
  });
});