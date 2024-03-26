import { asignData } from '../../src/index';

let asignDataTest = [
  { desc: '{a:1} {b:1}',
    data: [{ a: 1 }, { b: 1 }],
    expect: { a: 1 } },
  { desc: '{}{}',
    data: [{}, {}],
    expect: {} },
  { desc: '{ a: 1 }, { a: 2 }',
    data: [{ a: 1 }, { a: 2 }],
    expect: { a: 2 } }
];
describe('asignData', ()=>{
  asignDataTest.forEach((item) => {
    test(item.desc, () => {
      expect(asignData(...item.data)).toEqual(item.expect);
    });
  });
});