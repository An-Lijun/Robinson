// 导入所需的模块和函数
import { EventBus } from '../../../index';

describe('EventBus', () => {
  let eventBus;

  beforeEach(() => {
    // 创建一个新的 EventBus 实例
    eventBus = new EventBus();
  });

  test('should add an event listener', () => {
    const eventFn = jest.fn();
    eventBus.on('testEvent', eventFn);
    eventBus.emit('testEvent');

    expect(eventFn).toHaveBeenCalled();
  });

  test('should emit an event and call the listener', () => {
    const eventFn = jest.fn();
    eventBus.on('testEvent', eventFn);
    eventBus.emit('testEvent', 'arg1', 'arg2');
    expect(eventFn).toHaveBeenCalledWith('arg1', 'arg2');
  });

  test('should emit an event and call multiple listeners', () => {
    const eventFn1 = jest.fn();
    const eventFn2 = jest.fn();
    eventBus.on('testEvent', eventFn1);
    eventBus.on('testEvent', eventFn2);
    eventBus.emit('testEvent', 'arg1', 'arg2');
    expect(eventFn1).toHaveBeenCalledWith('arg1', 'arg2');
    expect(eventFn2).toHaveBeenCalledWith('arg1', 'arg2');
  });

  test('should remove a specific event listener', () => {
    const eventFn1 = jest.fn();
    const eventFn2 = jest.fn();
    eventBus.on('testEvent', eventFn1);
    eventBus.on('testEvent', eventFn2);
    eventBus.off('testEvent', eventFn1);
    expect(eventFn1).not.toHaveBeenCalledWith('arg1', 'arg2');
    expect(eventFn2).not.toHaveBeenCalledWith('arg1', 'arg2');
  });

  test('should clear all listeners for an event', () => {
    const eventFn1 = jest.fn();
    const eventFn2 = jest.fn();
    eventBus.on('testEvent', eventFn1);
    eventBus.on('testEvent', eventFn2);
    eventBus.clear('testEvent');
    eventBus.emit('testEvent', 'arg1', 'arg2');
    expect(eventFn2).not.toHaveBeenCalledWith('arg1', 'arg2');

  });

  test('should not fail when emitting an event with no listeners', () => {
    expect(() => {
      eventBus.emit('testEvent', 'arg1', 'arg2');
    }).not.toThrow();
  });

  test('should not fail when removing a listener from an event that does not exist', () => {
    const eventFn = jest.fn();
    expect(() => {
      eventBus.off('testEvent', eventFn);
    }).not.toThrow();
  });

  test('should not fail when clearing an event that does not exist', () => {
    expect(() => {
      eventBus.clear('testEvent');
    }).not.toThrow();
  });

  test('should handle undefined event name when adding a listener', () => {
    const eventFn = jest.fn();
    expect(() => {
      eventBus.on(undefined, eventFn);
    }).not.toThrow();
  });

  test('should handle null event name when adding a listener', () => {
    const eventFn = jest.fn();
    expect(() => {
      eventBus.on(null, eventFn);
    }).not.toThrow();
  });

  test('should handle undefined event name when emitting an event', () => {
    const eventFn = jest.fn();
    eventBus.on('testEvent', eventFn);
    expect(() => {
      eventBus.emit(undefined);
    }).not.toThrow();
  });

  test('should handle null event name when emitting an event', () => {
    const eventFn = jest.fn();
    eventBus.on('testEvent', eventFn);
    expect(() => {
      eventBus.emit(null);
    }).not.toThrow();
  });

  test('should handle undefined event name when removing a listener', () => {
    const eventFn = jest.fn();
    eventBus.on('testEvent', eventFn);
    expect(() => {
      eventBus.off(undefined, eventFn);
    }).not.toThrow();
  });

  test('should handle null event name when removing a listener', () => {
    const eventFn = jest.fn();
    eventBus.on('testEvent', eventFn);
    expect(() => {
      eventBus.off(null, eventFn);
    }).not.toThrow();
  });

});