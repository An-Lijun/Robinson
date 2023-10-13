import { add } from '../../src/index';

let addTest = [
  { desc: '1,2',
    data: [1, 2],
    expect: 3 },
  { desc: '1.1,2.2',
    data: [1.1, 2.2],
    expect: 3.3 },
  { desc: '0.1,0.2',
    data: [0.1, 0.2],
    expect: 0.3 },
  { desc: '0.19,0.81',
    data: [0.19, 0.81],
    expect: 1 },
  { desc: '1.123456,2',
    data: [1.123456, 2],
    expect: 3.123456 },
  { desc: '1.123456,2.123456',
    data: [1.123456, 2.123456],
    expect: 3.246912 },
  { desc: '1,-2',
    data: [1, -2],
    expect: -1 },

  { desc: '-1.12,2',
    data: [-1.12, 2],
    expect: 0.88 },
  { desc: '1,-2.18',
    data: [1, -2.18],
    expect: -1.18 },
  { desc: '-1,-2',
    data: [-1, -2],
    expect: -3 },
  { desc: '0.1,-0.2',
    data: [-0.1, -0.2],
    expect: -0.3 },
  { desc: '-1.789123,-23',
    data: [-1.789123, -23],
    expect: -24.789123 }
  // { desc: '1.123456,2',
  //   data: [1.123456, 2],
  //   expect: 3.123456 }

];
describe('add', () => {
  addTest.forEach(item=>{
    test(item.desc, () => {
      expect(add(...item.data)).toBe(item.expect);
    });
  });

});