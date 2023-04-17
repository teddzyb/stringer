import convertReverse from '../modules/reverse';

describe('convert reverse function', () => {
  it('should reverse a string', () => {
    expect(convertReverse('hello')).toEqual('olleh');
  });

  it('should return unchanged string for single character', () => {
    expect(convertReverse('h')).toEqual('h');
  });

  it('should return empty string for empty input', () => {
    expect(convertReverse('')).toEqual('');
  });

  it('should handle a string with spaces', () => {
    expect(convertReverse('hello world')).toEqual('dlrow olleh');
  });

  it('should handle a string with special characters', () => {
    expect(convertReverse('Hello World!')).toEqual('!dlroW olleH');
  });

  it('should handle a string with numbers', () => {
    expect(convertReverse('12345')).toEqual('54321');
  });

  it('should handle a string with Unicode characters', () => {
    expect(convertReverse('👋🌍')).toEqual('🌍👋');
  });

  it('should handle a string with leading/trailing spaces', () => {
    expect(convertReverse('  hello  ')).toEqual('  olleh  ');
  });

  it('should handle a string with multiple consecutive spaces', () => {
    expect(convertReverse('hello   world')).toEqual('dlrow   olleh');
  });
});
