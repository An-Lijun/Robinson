import { getNode } from '../../../index'; // 假设文件名为 getNode.ts

describe('getNode', () => {
  let originalQuerySelector;

  beforeEach(() => {
    // 保存原始的 querySelector 方法
    originalQuerySelector = document.querySelector;
  });

  afterEach(() => {
    // 恢复原始的 querySelector 方法
    document.querySelector = originalQuerySelector;
  });

  it('should return the element when a matching selector is found', () => {
    // 模拟 querySelector 返回一个元素
    document.querySelector = jest.fn(() => ({ tagName: 'DIV' }));

    const result = getNode('div');

    expect(result).not.toBeNull();
    expect(result.tagName).toBe('DIV');
  });

  it('should return null when no matching selector is found', () => {
    // 模拟 querySelector 返回 null
    document.querySelector = jest.fn(() => null);

    const result = getNode('div');

    expect(result).toBeNull();
  });
});