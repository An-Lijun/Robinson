import { getChunkArray } from '../../src/index';

let getChunkArrayTest = [
  { desc: '[1,2,3,4],2',
    data: [[1, 2, 3, 4], 2],
    expect: [[1, 2], [3, 4]] },
  { desc: '[1,2,3,4],3',
    data: [[1, 2, 3, 4], 3],
    expect: [[1, 2, 3], [ 4]] },
  { desc: '[1,2,3,4,5],4',
    data: [[1, 2, 3, 4, 5], 4],
    expect: [[1, 2, 3, 4], [ 5]] },
  { desc: '{},2',
    data: [{}, 2],
    expect: 'params is not a array' },
  { desc: '{},2',
    data: [123456, 2],
    expect: 'params is not a array' }
];
describe('getChunkArray', () => {
  getChunkArrayTest.forEach((item) => {
    test(`${item.desc}`, () => {
      try {
        getChunkArray(...item.data);
        expect(getChunkArray(...item.data)).toEqual(item.expect);
      } catch (error) {
        expect(error.message).toEqual('params is not a array');
      }
    });
  });
});