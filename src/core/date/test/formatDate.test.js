import { formatDate } from '../../../index';

import dayjs from '../../../index';

let formatDateTest = [
  { desc: '2024-03-01',
    data: [dayjs('2024-03-01 08:00:00'), 'YYYY年MM月DD日'],
    expect: '2024年03月01日' }

];
describe('formatDate', ()=>{
  formatDateTest.forEach((item, index) => {
    test(item.desc, () => {
      expect(formatDate(...item.data)).toBe(item.expect);
    });
  });
});