import { stopPropagation } from '../../src/index';

describe('stopPropagation', () => {
  it('should call stopPropagation on the event object', () => {
    const mockEvent = { stopPropagation: jest.fn() };

    stopPropagation(mockEvent);

    expect(mockEvent.stopPropagation).toHaveBeenCalled();
  });

  it('should handle different types of events', () => {
    const mockEvent = new Event('click');
    const spy = jest.spyOn(mockEvent, 'stopPropagation');

    stopPropagation(mockEvent);

    expect(spy).toHaveBeenCalled();
  });
});