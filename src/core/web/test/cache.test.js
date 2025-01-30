import { createCache } from '../../../index';

describe('createCache', () => {
  let storage;
  let cache;

  beforeEach(() => {
    storage = {
      getItem: jest.fn(),
      setItem: jest.fn(),
      removeItem: jest.fn(),
      clear: jest.fn(),
      length: 0,
      key: jest.fn()
    };
    cache = createCache(storage, { encode: (value) => value,
      decode: (value) => value });
  });

  describe('setCache', () => {
    it('should store a value correctly', () => {
      cache.setCache('key', 'value', 100000);
      expect(storage.setItem).toHaveBeenCalledWith('key', JSON.stringify({ value: 'value',
        expire: 100000 }));
    });

    it('should throw an error when storing an undefined value', () => {
      expect(() => cache.setCache('key', undefined, 1000)).toThrow('The value cannot be undefined !');
    });

    it('should store a value with an expiration time', () => {
      cache.setCache('key', 'value', 1000);
      expect(storage.setItem).toHaveBeenCalledWith('key', JSON.stringify({ value: 'value',
        expire: 1000 }));
    });
  });

  describe('getCache', () => {
    it('should retrieve an existing value correctly', () => {
      storage.getItem.mockReturnValue(JSON.stringify({ value: 'value',
        expire: Date.now() + 1000 }));
      expect(cache.getCache('key')).toBe('value');
    });

    it('should return undefined for a non-existing key', () => {
      storage.getItem.mockReturnValue(null);
      expect(cache.getCache('non-existing-key')).toBeUndefined();
    });

    it('should return undefined and remove expired value', () => {
      storage.getItem.mockReturnValue(JSON.stringify({ value: 'value',
        expire: Date.now() - 1000 }));
      expect(cache.getCache('key')).toBeUndefined();
      expect(storage.removeItem).toHaveBeenCalledWith('key');
    });
  });

  describe('removeCache', () => {
    it('should remove an existing key', () => {
      cache.removeCache('key');
      expect(storage.removeItem).toHaveBeenCalledWith('key');
    });

    it('should not throw an error when removing a non-existing key', () => {
      expect(() => cache.removeCache('non-existing-key')).not.toThrow();
    });
  });

  describe('has', () => {
    it('should return true for an existing key', () => {
      storage.key = jest.fn().mockReturnValue('key');
      expect(cache.has('key')).toBe(true);
    });

    it('should return false for a non-existing key', () => {
      storage.key = jest.fn().mockReturnValue(null);
      expect(cache.has('non-existing-key')).toBe(false);
    });
  });

  describe('length', () => {
    it('should return the correct length of the cache', () => {
      storage.length = 3;
      expect(cache.length()).toBe(3);
    });
  });

  describe('clear', () => {
    it('should clear the cache', () => {
      cache.clear();
      expect(storage.clear).toHaveBeenCalled();
    });
  });
});