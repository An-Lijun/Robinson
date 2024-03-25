import { isAfter } from '../../src/index';

import dayjs from '../../src/utils/date';

let isAfterTest = [
  { desc: '2024-03-01',
    data: [dayjs('2024-03-01 08:00:00'), dayjs('2024-03-01 08:00:01')],
    expect: false },
  { desc: '2024-03-01',
    data: [dayjs('2024-03-01 08:00:00'), dayjs('2024-03-01 08:00:00')],
    expect: false },
  { desc: '2024-03-01',
    data: [dayjs('2024-03-01 08:00:01'), dayjs('2024-03-01 08:00:00')],
    expect: true }

];
describe('isAfter', ()=>{
  isAfterTest.forEach((item) => {
    test(item.desc, () => {
      expect(isAfter(...item.data)).toBe(item.expect);
    });
  });
});