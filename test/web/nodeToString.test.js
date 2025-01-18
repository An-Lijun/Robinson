import { nodeToString } from '../../src/index'; // 假设函数在 nodeToString.ts 中

describe('nodeToString', () => {
  it('should return string representation of an empty element', () => {
    const div = document.createElement('div');
    expect(nodeToString(div)).toBe('<div></div>');
  });

  it('should return string representation of an element with attributes', () => {
    const div = document.createElement('div');
    div.setAttribute('id', 'test');
    div.setAttribute('class', 'test-class');
    expect(nodeToString(div)).toBe('<div id="test" class="test-class"></div>');
  });

  it('should return string representation of an element with child elements', () => {
    const parent = document.createElement('div');
    const child = document.createElement('span');
    parent.appendChild(child);
    expect(nodeToString(parent)).toBe('<div><span></span></div>');
  });

  it('should return string representation of an element with text nodes', () => {
    const div = document.createElement('div');
    div.textContent = 'Hello, world!';
    expect(nodeToString(div)).toBe('<div>Hello, world!</div>');
  });

  it('should return string representation of nested elements', () => {
    const parent = document.createElement('div');
    const child = document.createElement('span');
    child.textContent = 'Nested';
    parent.appendChild(child);
    expect(nodeToString(parent)).toBe('<div><span>Nested</span></div>');
  });

  it('should handle special characters in text nodes', () => {
    const div = document.createElement('div');
    div.textContent = '<script>alert("XSS")</script>';
    expect(nodeToString(div)).toBe('<div>&lt;script&gt;alert("XSS")&lt;/script&gt;</div>');
  });
});