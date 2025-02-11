import { getBeforeDate } from '../../../index';
import dayjs from '../../../index';

let getBeforeDateTest = [
  { desc: '2024-03-02',
    data: [dayjs('2024-03-02 08:00:00'), { pattern: 'YYYY年MM月DD日' }],
    expect: '2024年03月01日' },
  { desc: '2024-03-02',
    data: [dayjs('2024-03-02 08:00:00'), { unitType: 'M',
      pattern: 'YYYY年MM月DD日' }],
    expect: '2024年02月02日' }
];
describe('getBeforeDate', ()=>{
  getBeforeDateTest.forEach((item, index) => {
    test(item.desc, () => {
      expect(getBeforeDate(...item.data)).toBe(item.expect);
    });
  });
});