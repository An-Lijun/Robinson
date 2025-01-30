import { mapping } from '../../../index';

let obj = { name: '名字',
  age: '年龄' };
let arr = [{ name: '123',
  age: '年龄' }];
let mappingTest = [
  { desc: 'obj name',
    data: [obj, 'name'],
    expect: '名字' },
  { desc: 'obj name1',
    data: [obj, 'name1'],
    expect: '--' },
  { desc: 'obj name1 ---',
    data: [obj, 'name1', '---'],
    expect: '---' },

  { desc: `arr { key: 'name',
  keyValue: 'name',
  label: 'age' } ---`,
  data: [arr, { key: 'name',
    keyValue: '123',
    label: 'age',
    type: 'value' }, '---'],
  expect: '年龄' },

  { desc: `arr { key: 'name',
  keyValue: 'name',
  label: 'age1' } `,
  data: [arr, { key: 'name',
    keyValue: '123',
    label: 'age1',
    type: 'value' }],
  expect: '--' },

  { desc: `arr { key: 'name',
  keyValue: 'name21',
  label: 'age1' } `,
  data: [arr, { key: 'name',
    keyValue: 'name21',
    label: 'age1' }, '---'],
  expect: '---' },

  { desc: `arr { key: 'name',
  keyValue: 'name21',
  label: 'age1' } `,
  data: [arr, { key: 'name',
    keyValue: '123',
    label: 'age' }, '---'],
  expect: { name: '123',
    age: '年龄' } },
  { desc: `arr { key: 'name',
    keyValue: 'name21',
    label: 'age1' } `,
  data: [arr, { key: 'name',
    keyValue: '123',
    label: 'age',
    type: 'object' }, '---'],
  expect: { name: '123',
    age: '年龄' } },
  { desc: '1',
    data: [1],
    expect: '--' }

];
describe('mapping', ()=>{
  mappingTest.forEach((item) => {
    test(item.desc, () => {
      expect(mapping(...item.data)).toEqual(item.expect);
    });
  });
});