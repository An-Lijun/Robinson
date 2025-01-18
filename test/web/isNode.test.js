import { isNode } from '../../src/index';

describe('isNode', () => {
  it('should return false for null', () => {
    expect(isNode(null)).toBe(false);
  });

  it('should return false for undefined', () => {
    expect(isNode(undefined)).toBe(false);
  });

  it('should return false for NaN', () => {
    expect(isNode(NaN)).toBe(false);
  });

  it('should return true for an element node (nodeType 1)', () => {
    const elementNode = document.createElement('div');
    expect(isNode(elementNode)).toBe(true);
  });

  it('should return true for a document node (nodeType 9)', () => {
    const documentNode = document.implementation.createDocument(null, null, null);
    expect(isNode(documentNode)).toBe(true);
  });

  it('should return true for a document fragment node (nodeType 11)', () => {
    const documentFragmentNode = document.createDocumentFragment();
    expect(isNode(documentFragmentNode)).toBe(true);
  });

  it('should return false for a text node (nodeType 3)', () => {
    const textNode = document.createTextNode('text');
    expect(isNode(textNode)).toBe(false);
  });

  it('should return false for a comment node (nodeType 8)', () => {
    const commentNode = document.createComment('comment');
    expect(isNode(commentNode)).toBe(false);
  });

  it('should return false for an attribute node (nodeType 2)', () => {
    const element = document.createElement('div');
    const attributeNode = element.setAttributeNode(document.createAttribute('attr'));
    expect(isNode(attributeNode)).toBe(false);
  });
});