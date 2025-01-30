import { isUrl } from '../../../index'; // 根据实际路径调整

describe('isUrl', () => {
  it('should return true for a valid URL with http protocol', () => {
    expect(isUrl('http://example.com')).toBe(true);
  });

  it('should return true for a valid URL with https protocol', () => {
    expect(isUrl('https://example.com')).toBe(true);
  });

  it('should return true for a valid URL with path, query, and fragment', () => {
    expect(isUrl('https://example.com/path?query=123#fragment')).toBe(true);
  });

  it('should return false for an invalid URL with ftp protocol', () => {
    expect(isUrl('ftp://example.com')).toBe(false);
  });

  it('should return false for an invalid URL with missing slashes', () => {
    expect(isUrl('http:/example.com')).toBe(false);
  });

  it('should return true for a URL without protocol', () => {
    expect(isUrl('www.example.com')).toBe(true);
  });

  it('should return true for a URL with only hostname', () => {
    expect(isUrl('example.com')).toBe(false);
  });

  it('should return false for an empty string', () => {
    expect(isUrl('')).toBe(false);
  });

  it('should return false for a URL with special characters in path', () => {
    expect(isUrl('http://example.com/path with spaces')).toBe(false);
  });

  it('should return true for a URL with IP address', () => {
    expect(isUrl('http://192.168.0.1')).toBe(true);
  });

  it('should return true for a URL with port number', () => {
    expect(isUrl('http://example.com:8080')).toBe(true);
  });
});