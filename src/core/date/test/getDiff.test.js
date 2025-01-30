import { getDiff } from '../../../index';
import dayjs from '../../../index';

let getDiffTest = [
  { desc: '2024-03-02',
    data: [dayjs('2024-03-02 08:00:00'), dayjs('2024-03-03 08:00:00'), 'd'],
    expect: 1 },
  { desc: '2024-03-02',
    data: [dayjs('2024-03-02 08:00:00'), dayjs('2024-04-03 08:00:00'), 'd'],
    expect: 32 }
];
describe('getDiff', ()=>{
  getDiffTest.forEach((item, index) => {
    test(item.desc, () => {
      expect(getDiff(...item.data)).toBe(item.expect);
    });
  });
});