import { calc } from '../../src/index';

let calcTest = [
  { desc: '1,2',
    data: [1, 2],
    expect: 3 },
  { desc: '0.1,0.2',
    data: [0.1, 0.2],
    expect: 0.3 },
  { desc: '0.1,0.2 -',
    data: [0.1, 0.2, '-'],
    expect: -0.1 },
  { desc: '0.1,0.2 -',
    data: [0.1, 0.2, '*'],
    expect: 0.02 },
  { desc: '0.5,0.2 /',
    data: [0.5, 0.2, '/'],
    expect: 2.5 },
  { desc: '0.5,0.2 /1',
    data: [0.5, 0.2, '/1'],
    expect: '' }
];
describe('calc', () => {
  calcTest.forEach(item=>{
    test(item.desc, () => {
      expect(calc(...item.data)).toBe(item.expect);
    });
  });

});