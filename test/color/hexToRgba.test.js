import { hexToRgba } from '../../src';

let hexToRgbaArr = [
  { desc: '#FD7086',
    data: '#FD7086',
    expect: 'rgba(253,112,134,1)' },
  { desc: 'rgba(253,112,134,0.9))',
    data: 'rgba(253,112,134,0.9)',
    expect: '' },
  { desc: '#559475',
    data: '#559475',
    expect: 'rgba(85,148,117,1)' },
  { desc: '#fff',
    data: '#fff',
    expect: 'rgba(255,255,255,1)' }

];
describe('hexToRgba', () => {
  hexToRgbaArr.forEach((item) => {
    test(`${item.desc}`, () => {
      expect(hexToRgba(item.data)).toBe(item.expect);
    });
  });
});
