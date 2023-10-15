import { getTimeStr } from '../../src/index';
describe('getTimeStr', () => {
  test('123456', () => {
    expect(getTimeStr('123456', 3)).toBe('123456123456123456');

  });
  test('123456', () => {

    expect(getTimeStr('123456', 0)).toBe('');
  });

  test('123456', () => {

    try {
      expect(getTimeStr({}, 3));

    } catch (error) {
      expect(error.message).toEqual('params mast be string');
    }
  });

});