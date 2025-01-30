import { isLeapYear } from '../../../index';

let isLeapYearTest = [
  { desc: '2024',
    data: '2024',
    expect: true },
  { desc: '2025',
    data: '2025',
    expect: false },
  { desc: '2026',
    data: '2026',
    expect: false },
  { desc: '2027',
    data: '2027',
    expect: false },
  { desc: '2028',
    data: '2028',
    expect: true }
];
describe('isLeapYear', ()=>{
  isLeapYearTest.forEach((item) => {
    test(item.desc, () => {
      expect(isLeapYear(item.data)).toBe(item.expect);
    });
  });
});