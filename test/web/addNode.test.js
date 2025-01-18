import { addNode } from '../../src/index'; // 假设这些函数在同一个文件中

describe('addNode', () => {
  let parentDom;
  let childDom;

  beforeEach(() => {
    parentDom = document.createElement('div');
    childDom = document.createElement('span');
    childDom.textContent = 'child';
  });

  it('should insert a DOM element as a string at the default position', () => {
    addNode(parentDom, childDom);
    expect(parentDom.innerHTML).toBe('<span>child</span>');
  });

  it('should insert a string directly at the default position', () => {
    addNode(parentDom, 'child');
    expect(parentDom.innerHTML).toBe('child');
  });

  it('should insert a DOM element at the specified position', () => {
    addNode(parentDom, childDom, 'beforeend');
    expect(parentDom.innerHTML).toBe('<span>child</span>');
  });

  it('should insert a string at the specified position', () => {
    addNode(parentDom, 'child', 'beforeend');
    expect(parentDom.innerHTML).toBe('child');
  });

  // it('should handle the position "beforebegin"', () => {
  //   parentDom.innerHTML = '<p>existing</p>';
  //   addNode(parentDom, childDom, 'beforebegin');
  //   expect(parentDom.outerHTML).toBe('<div><span>child</span><p>existing</p></div>');
  // });

  // it('should handle the position "afterend"', () => {
  //   parentDom.innerHTML = '<p>existing</p>';
  //   addNode(parentDom, childDom, 'afterend');
  //   expect(parentDom.outerHTML).toBe('<div><p>existing</p></div><span>child</span>');
  // });

  it('should handle the position "beforeend"', () => {
    parentDom.innerHTML = '<p>existing</p>';
    addNode(parentDom, childDom, 'beforeend');
    expect(parentDom.innerHTML).toBe('<p>existing</p><span>child</span>');
  });
});