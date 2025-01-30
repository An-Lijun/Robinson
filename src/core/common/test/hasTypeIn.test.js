import { hasTypeIn } from '../../../index';
let hasTypeInTest = [
  { desc: '1',
    data: ['1', ['number', 'string']],
    expect: true },
  { desc: '1',
    data: ['1', ['number', 'array']],
    expect: false },
  { desc: 'new String',
    data: [new String(), ['number', 'string']],
    expect: true },
  { desc: 'new Number',
    data: [new Number(), ['number', 'string']],
    expect: true },
  { desc: '{}',
    data: [{ a: 123 }, ['number', 'string']],
    expect: false }
];
describe('hasTypeIn', ()=>{
  hasTypeInTest.forEach((item, index) => {
    test(item.desc, () => {
      expect(hasTypeIn(...item.data)).toBe(item.expect);
    });
  });
});