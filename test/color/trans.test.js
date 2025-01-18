import { parseHexColor } from '../../src/index'; // 假设文件名为 parseHexColor.ts

describe('parseHexColor', () => {
  it('should parse a 3-character hex string correctly', () => {
    const result = parseHexColor('#FFF');
    expect(result).toEqual({ r: 255,
      g: 255,
      b: 255,
      a: 1 });
  });

  it('should parse a 4-character hex string correctly', () => {
    const result = parseHexColor('#FFFA');
    expect(result).toEqual({ r: 0,
      g: 255,
      b: 250,
      a: 1 });
  });

  it('should parse a 6-character hex string correctly', () => {
    const result = parseHexColor('#FFFFFF');
    expect(result).toEqual({ r: 255,
      g: 255,
      b: 255,
      a: 1 });
  });

  it('should parse an 8-character hex string correctly', () => {
    const result = parseHexColor('#FFFFFFFF');
    expect(result).toEqual({ r: 255,
      g: 255,
      b: 255,
      a: 1 });
  });

  it('should handle invalid hex strings gracefully', () => {
    const result = parseHexColor('#GGGGGG');
    expect(result).toEqual({ r: 0,
      g: 0,
      b: 0,
      a: 1 }); // 假设默认值为黑色
  });
});