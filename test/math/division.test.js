import { division } from '../../src/index';

let divisionTest = [
  { desc: '1,2',
    data: [1, 2],
    expect: 0.5 },
  { desc: '1.1,2.2',
    data: [1.1, 2.2],
    expect: 0.5 },
  { desc: '5,2',
    data: [5, 2],
    expect: 2.5 },

  { desc: '2,5',
    data: [2, 5],
    expect: 0.4 },
  { desc: '5,2',
    data: [5, 2],
    expect: 2.5 },
  { desc: '7,6,2',
    data: [7, 6, 2],
    expect: 1.16 },
  { desc: '-5,2',
    data: [-5, 2],
    expect: -2.5 },

  { desc: '-50,-2',
    data: [-50, -2],
    expect: 25 },
  { desc: '5.01,-2',
    data: [5.01, -2],
    expect: -2.505 },
  { desc: '1,-2',
    data: [1, -2],
    expect: -0.5 },
  { desc: '5,-2,5',
    data: [5.01, 2.1, 4],
    expect: 2.3857 },
  { desc: '1,1',
    data: [1, 1],
    expect: 1 },
  { desc: '3,1',
    data: [3, 1],
    expect: 3 }

];
describe('division', () => {
  divisionTest.forEach(item=>{
    test(item.desc, () => {
      expect(division(...item.data)).toBe(item.expect);
    });
  });

  test('0,0', () => {
    // expect((...item.data)).toBe(item.expect);
    try {
      division(0, 0);
    } catch (error) {
      expect(error.message).toEqual('params can not be zero');
    }
  });

  test('1,5', () => {
    // expect((...item.data)).toBe(item.expect);
    try {
      division('1', '5');
    } catch (error) {
      expect(error.message).toEqual('parmas must be number');
    }
  });
});
