import { mult } from '../../src/index';

let multTest = [
  { desc: '1,2',
    data: [1, 2],
    expect: 2 },
  { desc: '1.1,2.2',
    data: [1.1, 2.2],
    expect: 2.42 },
  { desc: '0.1,0.2',
    data: [0.1, 0.2],
    expect: 0.02 },
  { desc: '0.19,0.81',
    data: [0.19, 0.81],
    expect: 0.1539 },
  { desc: '1.123456,2',
    data: [1.123456, 2],
    expect: 2.246912 },
  { desc: '1.123456,2.123456',
    data: [1.123456, 2.123456],
    expect: 2.385609383936 },
  { desc: '1,-2',
    data: [1, -2],
    expect: -2 },

  { desc: '-1.12,2',
    data: [-1.12, 2],
    expect: -2.24 },
  { desc: '1,-2.18',
    data: [1, -2.18],
    expect: -2.18 },
  { desc: '-1,-2',
    data: [-1, -2],
    expect: 2 },
  { desc: '-0.1,-0.2',
    data: [-0.1, -0.2],
    expect: 0.02 },
  { desc: '-1.789123,-23',
    data: [-1.789123, -23],
    expect: 41.149829 }
  // { desc: '1.123456,2',
  //   data: [1.123456, 2],
  //   expect: 3.123456 }

];
describe('mult', () => {
  multTest.forEach(item=>{
    test(item.desc, () => {
      expect(mult(...item.data)).toBe(item.expect);
    });
  });

});