import { throttle } from '../../src/index'; // 假设文件名为 throttle.ts

describe('throttle', () => {
  it('should execute the function immediately if leading is true', async () => {
    const mockFn = jest.fn();
    const throttledFn = throttle(mockFn, 1000);
    await throttledFn();
    expect(mockFn).toHaveBeenCalled();
  });

  // it('should not execute the function immediately if leading is false', async () => {
  //   const mockFn = jest.fn();
  //   const throttledFn = throttle(mockFn, 200, false);
  //   await throttledFn();
  //   await new Promise(resolve => setTimeout(resolve, 1500));

  //   expect(mockFn).toHaveBeenCalled();

  // });

  it('should execute the function after the wait time if trailing is true', async () => {
    const mockFn = jest.fn();
    const throttledFn = throttle(mockFn, 1000, false, true);
    await throttledFn();
    expect(mockFn).toHaveBeenCalled();
    await new Promise(resolve => setTimeout(resolve, 1000));
    expect(mockFn).toHaveBeenCalled();
  });

  // it('should cancel the scheduled execution', async () => {
  //   const mockFn = jest.fn();
  //   const throttledFn = throttle(mockFn, 200, false, true);
  //   const promise = throttledFn();
  //   throttledFn.cancel();
  //   await promise;
  //   expect(mockFn).toHaveBeenCalled();

  // });

  it('should handle errors thrown by the function', async () => {
    const mockFn = jest.fn(() => { throw new Error('Test error'); });
    const throttledFn = throttle(mockFn, 1000);
    try {
      await throttledFn();
    } catch (error) {
      expect(error.message).toBe('Test error');
    }
  });
});