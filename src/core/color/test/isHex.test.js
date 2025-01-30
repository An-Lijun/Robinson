import { isHex } from '../../../index';

let isHexArr = [
  { desc: '#161616',
    data: '#161616',
    expect: true },
  { desc: 'rgb(0,0,0)',
    data: 'rgb(0,0,0)',
    expect: false },
  { desc: 'rgba(0,0,0,0)',
    data: 'rgba(0,0,0,0)',
    expect: false },
  { desc: '#fff',
    data: '#fff',
    expect: true }

];
describe('isHex', () => {
  isHexArr.forEach((item) => {
    test(`${item.desc}`, () => {
      expect(isHex(item.data)).toBe(item.expect);
    });
  });
});
