import { isBefore } from '../../src/index';

import dayjs from '../../src/utils/date';

let isBeforeTest = [
  { desc: '2024-03-01',
    data: [dayjs('2024-03-01 08:00:00'), dayjs('2024-03-01 08:00:01')],
    expect: true },
  { desc: '2024-03-01',
    data: [dayjs('2024-03-01 08:00:00'), dayjs('2024-03-01 08:00:00')],
    expect: false }

];
describe('isBefore', ()=>{
  isBeforeTest.forEach((item) => {
    test(item.desc, () => {
      expect(isBefore(...item.data)).toBe(item.expect);
    });
  });
});