import { debounce } from '../../../index';

describe('debounce', () => {
  let callback;

  beforeEach(() => {
    callback = jest.fn();
  });

  it('should execute immediately when isLimmediate is true', async () => {
    const debounced = debounce(callback, 100, true);
    await debounced();
    expect(callback).toHaveBeenCalled();
  });

  it('should execute after delay when isLimmediate is false', async () => {
    const debounced = debounce(callback, 100);
    await debounced();
    expect(callback).toHaveBeenCalled();
    await new Promise(resolve => setTimeout(resolve, 150));
    expect(callback).toHaveBeenCalled();
  });

  it('should cancel the execution if cancel is called', async () => {
    const debounced = debounce(callback, 100);
    debounced();
    debounced.cancel();
    await new Promise(resolve => setTimeout(resolve, 150));
    expect(callback).not.toHaveBeenCalled();
  });

  it('should reset the timer on repeated calls', async () => {
    const debounced = debounce(callback, 100);
    debounced();
    await new Promise(resolve => setTimeout(resolve, 50));
    debounced();
    await new Promise(resolve => setTimeout(resolve, 150));
    expect(callback).toHaveBeenCalled();
    await new Promise(resolve => setTimeout(resolve, 150));
    expect(callback).toHaveBeenCalled();
  });
});