import { add } from '../../src/index';

let addTest = [
  { desc: '-0.91,-0.001',
    data: [-0.91, -0.001],
    expect: -0.911 },

  { desc: '-0.91,-0.01',
    data: [-0.91, -0.01],
    expect: -0.92 },

  { desc: '-0.91,-0.01',
    data: [-0.91, -0.01],
    expect: -0.92 },
  { desc: '0.91,0.01',
    data: [0.91, 0.01],
    expect: 0.92 },
  { desc: '0.91,0.02',
    data: [0.91, 0.02],
    expect: 0.93 },
  { desc: '0.91,0.03',
    data: [0.91, 0.03],
    expect: 0.94 },
  { desc: '0.91,0.05',
    data: [0.91, 0.05],
    expect: 0.96 },
  { desc: '0.91,0.06',
    data: [0.91, 0.06],
    expect: 0.97 },
  { desc: '0.91,0.07',
    data: [0.91, 0.07],
    expect: 0.98 },
  { desc: '0.91,0.08',
    data: [0.91, 0.08],
    expect: 0.99 },
  { desc: '0.91,0.09',
    data: [0.91, 0.09],
    expect: 1 },
  { desc: '0.00001,0.00002',
    data: [0.00001, 0.00002],
    expect: 0.00003 },
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