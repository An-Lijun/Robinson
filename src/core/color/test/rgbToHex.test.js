import { rgbToHex } from '../../../index';

let rgbToHexArr = [
  { desc: 'rgb(0,0,0)',
    data: 'rgb(0,0,0)',
    expect: '#000000' },
  { desc: '#ffffff',
    data: '#ffffff',
    expect: '' },
  { desc: 'rgba(0,0,0,0)',
    data: 'rgba(0,0,0,0)',
    expect: '' },
  { desc: 'rgb(255,255,255)',
    data: 'rgb(255,255,255)',
    expect: '#ffffff' }

];
describe('rgbToHex', () => {
  rgbToHexArr.forEach((item) => {
    test(`${item.desc}`, () => {
      expect(rgbToHex(item.data)).toBe(item.expect);
    });
  });
});
