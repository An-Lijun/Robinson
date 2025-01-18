import { isFinite } from '../../src/index';

let isFiniteTest = [
  { desc: '1',
    data: 0.1,
    expect: true },
  { desc: '0.1+0.2',
    data: 0.1 + 0.2,
    expect: true },
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

describe('isFinite', () => {
  isFiniteTest.forEach((item) => {
    test(`${item.desc}`, () => {
      expect(isFinite(item.data)).toBe(item.expect);
    });
  });
});