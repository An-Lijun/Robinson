import { getTimestamp } from '../../src/index';

import dayjs from '../../src/core/date';

let getTimestampTest = [
  { desc: '2024-03-01',
    data: dayjs('2024-03-01 08:00:00'),
    expect: 1709251200000 }

];
describe('getTimestamp', ()=>{
  getTimestampTest.forEach((item, index) => {
    test(item.desc, () => {
      expect(getTimestamp(item.data)).toBe(item.expect);
    });
  });
});