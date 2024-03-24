import { hexToRgb } from '../../src';

let hexToRgbaArr = [
  { desc: '#FD7086',
    data: '#FD7086',
    expect: 'rgb(253,112,134)' },
  { desc: 'rgba(253,112,134,0.9))',
    data: 'rgba(253,112,134,0.9)',
    expect: '' },
  { desc: '#fff',
    data: '#fff',
    expect: 'rgb(255,255,255)' }

];
describe('hexToRgb', () => {
  hexToRgbaArr.forEach((item) => {
    test(`${item.desc}`, () => {
      expect(hexToRgb(item.data)).toBe(item.expect);
    });
  });
});
