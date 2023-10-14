import { isInt } from '../../src/index';

let isIntTest = [
  { desc: '1',
    data: 1,
    expect: true },
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

describe('isInt', () => {
  isIntTest.forEach((item) => {
    test(`${item.desc}`, () => {
      expect(isInt(item.data)).toBe(item.expect);
    });
  });
});