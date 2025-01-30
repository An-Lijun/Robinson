import { isNaN } from '../../../index';

let isNaNTest = [
  { desc: 'NaN',
    data: NaN,
    expect: true },
  { desc: '1',
    data: 1,
    expect: false },
  { desc: '0.3',
    data: 0.3,
    expect: false },
  { desc: '0.1+0.2',
    data: 0.1 + 0.2,
    expect: false },
  { desc: '1',
    data: '1',
    expect: false },
  { desc: '2a1',
    data: '2a1',
    expect: false },
  { desc: 'new Number',
    data: new Number(),
    expect: false },
  { desc: '{}',
    data: {},
    expect: false }
];

describe('isNaN', () => {
  isNaNTest.forEach((item) => {
    test(`${item.desc}`, () => {
      expect(isNaN(item.data)).toBe(item.expect);
    });
  });
});