import { removeNode } from '../../../index'; // 假设文件名为 removeNode.ts

describe('removeNode', () => {
  it('should remove a child node from its parent', () => {
    const parent = document.createElement('div');
    const child = document.createElement('span');
    parent.appendChild(child);

    expect(parent.contains(child)).toBe(true);

    removeNode(parent, child);

    expect(parent.contains(child)).toBe(false);
  });

  it('should throw an error if the node is not a child of the parent', () => {
    const parent = document.createElement('div');
    const child = document.createElement('span');

    expect(() => {
      removeNode(parent, child);
    }).toThrow();
  });

  it('should handle a parent with no children', () => {
    const parent = document.createElement('div');
    const child = document.createElement('span');

    expect(parent.contains(child)).toBe(false);

    expect(() => {
      removeNode(parent, child);
    }).toThrow();
  });
});