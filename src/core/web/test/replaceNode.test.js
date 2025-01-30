import { replaceNode } from '../../../index'; // 假设函数在 replaceNode.ts 中

describe('replaceNode', () => {
  let parentNode;
  let oldDom;

  beforeEach(() => {
    parentNode = document.createElement('div');
    oldDom = document.createElement('span');
    oldDom.textContent = 'old content';
    parentNode.appendChild(oldDom);
  });

  it('should replace old node with new node when newDom is a string', () => {
    const newDom = '<p>new content</p>';
    replaceNode(parentNode, newDom, oldDom);
    expect(parentNode.innerHTML).toBe('<p>new content</p>');
  });

  it('should replace old node with new node when newDom is a Node', () => {
    const newDom = document.createElement('p');
    newDom.textContent = 'new content';
    replaceNode(parentNode, newDom, oldDom);
    expect(parentNode.innerHTML).toBe('<p>new content</p>');
  });
});