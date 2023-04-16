import reverse from '../../modules/conversion/reverse';

describe('reverse function', () => {
  it('should reverse a string', () => {
    expect(reverse('hello')).toEqual('olleh');
  });

  it('should return unchanged string for single character', () => {
    expect(reverse('h')).toEqual('h');
  });

  it('should return empty string for empty input', () => {
    expect(reverse('')).toEqual('');
  });

  it('should handle a string with spaces', () => {
    expect(reverse('hello world')).toEqual('dlrow olleh');
  });

  it('should handle a string with special characters', () => {
    expect(reverse('Hello World!')).toEqual('!dlroW olleH');
  });

  it('should handle a string with numbers', () => {
    expect(reverse('12345')).toEqual('54321');
  });

  it('should handle a string with Unicode characters', () => {
    expect(reverse('👋🌍')).toEqual('🌍👋');
  });

  it('should handle a string with leading/trailing spaces', () => {
    expect(reverse('  hello  ')).toEqual('  olleh  ');
  });

  it('should handle a string with multiple consecutive spaces', () => {
    expect(reverse('hello   world')).toEqual('dlrow   olleh');
  });
});
