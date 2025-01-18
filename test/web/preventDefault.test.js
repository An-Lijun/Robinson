import { preventDefault } from '../../src/index';

describe('preventDefault', () => {
  it('should call preventDefault on the event object', () => {
    const mockEvent = { preventDefault: jest.fn() };

    preventDefault(mockEvent);

    expect(mockEvent.preventDefault).toHaveBeenCalled();
  });

  it('should not throw an error when called with a valid event object', () => {
    const mockEvent = { preventDefault: jest.fn() };

    expect(() => preventDefault(mockEvent)).not.toThrow();
  });
});