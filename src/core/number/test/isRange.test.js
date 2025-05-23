import { isRange } from '../../../index';

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
    data: [3, 1, 3],
    expect: true },
  { desc: '[1,3]',
    data: [4, 1, 3],
    expect: false },
  { desc: '[1,3]',
    data: [1.1, 1, 3],
    expect: true }

];

describe('isRange', () => {
  isRangeTest.forEach((item) => {
    test(`${item.desc}`, () => {
      expect(isRange(...item.data)).toBe(item.expect);
    });
  });
});