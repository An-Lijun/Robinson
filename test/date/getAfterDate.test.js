import { getAfterDate } from '../../src';
import dayjs from '../../src/core/date';

let getAfterDateTest = [
  { desc: '2024-03-02',
    data: [dayjs('2024-03-02 08:00:00'), { pattern: 'YYYY年MM月DD日' }],
    expect: '2024年03月03日' }
];
describe('getAfterDate', ()=>{
  getAfterDateTest.forEach((item, index) => {
    test(item.desc, () => {
      expect(getAfterDate(...item.data)).toBe(item.expect);
    });
  });
});