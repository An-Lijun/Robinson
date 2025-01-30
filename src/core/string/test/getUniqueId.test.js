import { getUniqueId } from '../../../index'; // Adjust the import path as necessary

describe('getUniqueId', () => {
  it('should generate a string in the correct UUID format', () => {
    const id = getUniqueId();
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    expect(uuidRegex.test(id)).toBe(true);
  });

  it('should generate unique IDs on multiple calls', () => {
    const ids = new Set();
    for (let i = 0; i < 1000; i++) {
      ids.add(getUniqueId());
    }
    expect(ids.size).toBe(1000); // Expect all IDs to be unique
  });

  it('should generate IDs with correct character ranges', () => {
    const id = getUniqueId();
    expect(id[14]).toBe('4'); // The version number should be 4
    expect(['8', '9', 'a', 'b']).toContain(id[19]); // The variant should be one of 8, 9, a, or b
  });
});