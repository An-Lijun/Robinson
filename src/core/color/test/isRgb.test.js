import { isRgb } from '../../../index';

let isRgbArr = [
  { desc: '#161616',
    data: '#161616',
    expect: false },
  { desc: 'rgb(255,255,255)',
    data: 'rgb(255,255,255)',
    expect: true },
  { desc: 'rgb(0,0,0)',
    data: 'rgb(0,0,0)',
    expect: true },
  { desc: 'RGB(0,0,0)',
    data: 'RGB(0,0,0)',
    expect: true },
  { desc: 'rgba(0,0,0,0)',
    data: 'rgba(0,0,0,0)',
    expect: false },
  { desc: 'rgb(256,256,256)',
    data: 'rgb(256,256,256)',
    expect: false },
  { desc: '#fff',
    data: '#fff',
    expect: false },
  { desc: '',
    data: '',
    expect: false }

];
describe('isRgb', () => {
  isRgbArr.forEach((item) => {
    test(`${item.desc}`, () => {
      expect(isRgb(item.data)).toBe(item.expect);
    });
  });
});
