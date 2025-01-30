import { getNodes } from '../../../index'; // 假设文件名为 getNodes.ts

describe('getNodes', () => {
  let originalQuerySelectorAll;

  beforeEach(() => {
    originalQuerySelectorAll = document.querySelectorAll;
    // 在每个测试之前设置一个虚拟的 DOM
    document.body.innerHTML = `
      <div id="testDiv">Test Div</div>
      <span class="testClass">Test Span</span>
      <p>Test Paragraph</p>
    `;
  });
  afterEach(() => {
    // 恢复原始的 querySelector 方法
    document.querySelectorAll = originalQuerySelectorAll;
  });
  it('should return NodeList with matching elements for a valid selector', () => {
    const nodes = getNodes('#testDiv');
    expect(nodes).toBeInstanceOf(NodeList);
    expect(nodes.length).toBe(1);
    expect(nodes[0].textContent).toBe('Test Div');
  });

  it('should return an empty NodeList for an invalid selector', () => {
    const nodes = getNodes('.nonExistentClass');
    expect(nodes).toBeInstanceOf(NodeList);
    expect(nodes.length).toBe(0);
  });

  it('should return an empty NodeList for an empty selector', () => {
    const nodes = getNodes('');
    expect(nodes).toBe(null);
  });
});