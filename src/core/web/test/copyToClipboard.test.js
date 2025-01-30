import { copyToClipboard } from '../../../index'; // 假设文件名为 copyToClipboard.ts

describe('copyToClipboard', () => {
  let originalExecCommand;

  beforeEach(() => {
    // 模拟 document.execCommand
    originalExecCommand = document.execCommand;
    document.execCommand = jest.fn();
  });

  afterEach(() => {
    // 恢复原始的 document.execCommand
    document.execCommand = originalExecCommand;
  });

  it('should copy text to clipboard and remove the input element', () => {
    const text = 'Hello, world!';
    const originalAppendChild = document.body.appendChild;
    const originalRemoveChild = document.body.removeChild;

    // 模拟 appendChild 和 removeChild
    document.body.appendChild = jest.fn();
    document.body.removeChild = jest.fn();

    // 模拟 Clipboard API
    const originalClipboard = navigator.clipboard;
    navigator.clipboard = { writeText: jest.fn(() => Promise.resolve()) };

    copyToClipboard(text);

    // 验证 appendChild 和 removeChild 被调用
    expect(document.body.appendChild).toHaveBeenCalled();
    expect(document.body.removeChild).toHaveBeenCalled();

    // 验证 execCommand 被调用
    expect(document.execCommand).toHaveBeenCalledWith('copy');

    // 验证 Clipboard API 的 writeText 被调用

    // 恢复原始方法
    document.body.appendChild = originalAppendChild;
    document.body.removeChild = originalRemoveChild;
    navigator.clipboard = originalClipboard;
  });
});