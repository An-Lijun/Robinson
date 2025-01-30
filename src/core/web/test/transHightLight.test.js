import { transHightLight } from '../../../index'; // 假设文件名为 transHightLight.ts

describe('transHightLight', () => {
  it('should highlight a single keyword in the string', () => {
    const result = transHightLight('Hello world', 'world');
    expect(result).toBe('Hello <span style="color:#0053db">world</span>');
  });

  it('should highlight multiple keywords in the string', () => {
    const result = transHightLight('Hello world, hello universe', ['hello', 'world']);
    expect(result).toBe('<span style="color:#0053db">Hello</span> <span style="color:#0053db">world</span>, <span style="color:#0053db">hello</span> universe');
  });

  it('should highlight with a custom color', () => {
    const result = transHightLight('Hello world', 'world', '#ff0000');
    expect(result).toBe('Hello <span style="color:#ff0000">world</span>');
  });

  it('should highlight case-insensitively', () => {
    const result = transHightLight('Hello World', 'world');
    expect(result).toBe('Hello <span style="color:#0053db">World</span>');
  });

  it('should return the original string if no keywords match', () => {
    const result = transHightLight('Hello world', 'universe');
    expect(result).toBe('Hello world');
  });
  it('should return the original array', () => {
    const result = transHightLight('Hello world', ['ld', 'He']);
    expect(result).toBe('<span style="color:#0053db">He</span>llo wor<span style="color:#0053db">ld</span>');
  });

});