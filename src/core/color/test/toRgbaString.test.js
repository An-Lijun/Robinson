import { toRgbaString } from '../../../index'; // 假设文件名为 toRgbaString.ts

describe('toRgbaString', () => {
  it('should format rgba string with full opacity', () => {
    expect(toRgbaString({ r: 255,
      g: 0,
      b: 0,
      a: 1 })).toBe('rgba(255,0,0,1)');
  });

  it('should format rgba string with default opacity', () => {
    expect(toRgbaString({ r: 0,
      g: 255,
      b: 0 })).toBe('rgba(0,255,0,1)');
  });

  it('should format rgba string with fractional opacity', () => {
    expect(toRgbaString({ r: 0,
      g: 0,
      b: 255,
      a: 0.5 })).toBe('rgba(0,0,255,0.5)');
  });

  it('should format rgba string with zero opacity', () => {
    expect(toRgbaString({ r: 255,
      g: 255,
      b: 255,
      a: 0 })).toBe('rgba(255,255,255,0)');
  });

  it('should format rgba string with low opacity', () => {
    expect(toRgbaString({ r: 128,
      g: 128,
      b: 128,
      a: 0.0001 })).toBe('rgba(128,128,128,0.0001)');
  });

  it('should format rgba string with high opacity', () => {
    expect(toRgbaString({ r: 64,
      g: 64,
      b: 64,
      a: 0.9999 })).toBe('rgba(64,64,64,0.9999)');
  });
});