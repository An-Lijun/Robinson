import { getEtc } from '../../src/index';
describe('getEtc', () => {
  test('123456', () => {
    expect(getEtc('123456', 3)).toBe('123...');

  });
  test('123456', () => {

    expect(getEtc('123456', 3, 'er')).toBe('123er');
  });

  test('123456', () => {

    expect(getEtc('123456', 3)).toBe('123...');
    try {
      expect(getEtc({}, 3));

    } catch (error) {
      expect(error.message).toEqual('params mast be string');
    }
  });

});