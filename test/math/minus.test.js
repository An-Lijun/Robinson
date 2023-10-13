import { minus } from '../../src/index';

let minusTest = [
  { desc: '1,2',
    data: [1, 2],
    expect: -1 },
  { desc: '1.1,2.2',
    data: [1.1, 2.2],
    expect: -1.1 },
  { desc: '0.1,0.2',
    data: [0.1, 0.2],
    expect: -0.1 },
  { desc: '0.19,0.81',
    data: [0.19, 0.81],
    expect: -0.62 },
  { desc: '1.123456,2',
    data: [1.123456, 2],
    expect: -0.876544 },
  { desc: '1.123456,2.123456',
    data: [1.123456, 2.123456],
    expect: -1 },
  { desc: '1,-2',
    data: [1, -2],
    expect: 3 },

  { desc: '-1.12,2',
    data: [-1.12, 2],
    expect: -3.12 },
  { desc: '1,-2.18',
    data: [1, -2.18],
    expect: 3.18 },
  { desc: '-1,-2',
    data: [-1, -2],
    expect: 1 },
  { desc: '0.1,-0.2',
    data: [-0.1, -0.2],
    expect: 0.1 },
  { desc: '-1.789123,-23',
    data: [-1.789123, -23],
    expect: 21.210877 }
  // { desc: '1.123456,2',
  //   data: [1.123456, 2],
  //   expect: 3.123456 }

];
describe('minus', () => {
  minusTest.forEach(item=>{
    test(item.desc, () => {
      expect(minus(...item.data)).toBe(item.expect);
    });
  });

});