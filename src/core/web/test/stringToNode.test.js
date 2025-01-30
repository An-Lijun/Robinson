import { stringToNode, isNode } from '../../../index'; // 假设文件名为 stringToNode.ts

describe('stringToNode', () => {
  it('should convert a valid HTML string to a node', () => {
    const htmlString = '<div>Hello</div>';
    const node = stringToNode(htmlString);
    expect(node).not.toBeNull();
    expect(node?.nodeName).toBe('DIV');
    expect(node?.textContent).toBe('Hello');
  });

  it('should return null for an empty string', () => {
    const htmlString = '';
    const node = stringToNode(htmlString);
    expect(node).toBeNull();
  });

  it('should return null for a string without HTML tags', () => {
    const htmlString = 'Hello';
    const node = stringToNode(htmlString);

    expect(isNode(node)).toBe(false);
  });

  it('should handle HTML comments correctly', () => {
    const htmlString = '<!-- comment -->';
    const node = stringToNode(htmlString);
    expect(isNode(isNode)).toBe(false); // 由于注释不会成为第一个子节点
  });

  it('should handle multiple HTML elements correctly', () => {
    const htmlString = '<div><span>Hello</span></div>';
    const node = stringToNode(htmlString);
    expect(node).not.toBeNull();
    expect(node?.nodeName).toBe('DIV');
    expect(node?.firstChild?.nodeName).toBe('SPAN');
  });
});