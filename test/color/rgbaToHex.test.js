import { rgbaToHex } from '../../src';

let rgbToHexArr = [
  { desc: 'rgb(0,0,0)',
    data: 'rgb(0,0,0)',
    expect: '' },
  { desc: '#ffffff',
    data: '#ffffff',
    expect: '' },
  { desc: 'rgba(0,0,0,0)',
    data: 'rgba(0,0,0,0)',
    expect: '#000000' },
  { desc: 'rgba(255,255,255,0.3)',
    data: 'rgba(255,255,255,0.3)',
    expect: '#ffffff' }

];
describe('rgbaToHex', () => {
  rgbToHexArr.forEach((item) => {
    test(`${item.desc}`, () => {
      expect(rgbaToHex(item.data)).toBe(item.expect);
    });
  });
});
