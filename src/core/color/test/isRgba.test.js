import { isRgba } from '../../../index';

let isRgbArr = [
  { desc: '#161616',
    data: '#161616',
    expect: false },
  { desc: 'rgba(255,255,255,1)',
    data: 'rgba(255,255,255,1)',
    expect: true },
  { desc: 'rgb(0,0,0)',
    data: 'rgb(0,0,0)',
    expect: false },
  { desc: 'RGB(0,0,0)',
    data: 'RGB(0,0,0)',
    expect: false },
  { desc: 'RGBA(0,0,0)',
    data: 'RGBA(0,0,0)',
    expect: false },
  { desc: 'RGBA(0,0,0,0)',
    data: 'RGBA(0,0,0,0)',
    expect: true },
  { desc: 'rgba(0,0,0,0)',
    data: 'rgba(0,0,0,0)',
    expect: true },
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
describe('isRgba', () => {
  isRgbArr.forEach((item) => {
    test(`${item.desc}`, () => {
      expect(isRgba(item.data)).toBe(item.expect);
    });
  });
});
