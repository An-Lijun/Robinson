import { isEqType } from '../../src/index';

let isEqTypeTest = [
  { desc: '1 1',
    data: ['1', 1],
    expect: false },
  { desc: '1 1',
    data: [1, 1],
    expect: true },
  { desc: '{} new Object',
    data: [{}, new Object],
    expect: true },
  { desc: 'true false',
    data: [true, false],
    expect: true },

  { desc: 'NaN Number',
    data: [NaN, 1],
    expect: true },
  { desc: 'null Object',
    data: [null, {}],
    expect: false }
];
describe('isEqType', ()=>{
  isEqTypeTest.forEach((item) => {
    test(item.desc, () => {
      expect(isEqType(...item.data)).toBe(item.expect);
    });
  });
});