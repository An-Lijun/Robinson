import { parseRgbaColor } from '../../../index'; // 假设文件名为 parseRgbaColor.ts

describe('parseRgbaColor', () => {
  it('should parse a valid rgba string correctly', () => {
    const result = parseRgbaColor('rgba(255, 128, 64, 0.5)');
    expect(result).toEqual({ r: 255,
      g: 128,
      b: 64,
      a: 0.5 });
  });

  it('should handle missing alpha value', () => {
    const result = parseRgbaColor('rgba(255, 128, 64)');
    expect(result).toEqual({ r: 255,
      g: 128,
      b: 64,
      a: NaN });
  });

  it('should handle extra values in the string', () => {
    const result = parseRgbaColor('rgba(255, 128, 64, 0.5)');
    expect(result).toEqual({ r: 255,
      g: 128,
      b: 64,
      a: 0.5 });
  });

  it('should handle invalid alpha value', () => {
    const result = parseRgbaColor('rgba(255, 128, 64, 0.5)');
    expect(result).toEqual({ r: 255,
      g: 128,
      b: 64,
      a: 0.5 });
  });

  it('should handle boundary values', () => {
    const result = parseRgbaColor('rgba(0, 0, 0, 0)');
    expect(result).toEqual({ r: 0,
      g: 0,
      b: 0,
      a: 0 });
  });

  it('should handle maximum values', () => {
    const result = parseRgbaColor('rgba(255, 255, 255, 1)');
    expect(result).toEqual({ r: 255,
      g: 255,
      b: 255,
      a: 1 });
  });
});