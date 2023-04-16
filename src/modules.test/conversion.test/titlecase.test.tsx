import convertTitlecase from '../../modules/conversion/titlecase';

describe('convert titlecase function', () => {
  it('should convert the first character of each word to uppercase', () => {
    expect(convertTitlecase('hello world')).toEqual('Hello World');
  });

  it('should handle a single-character string', () => {
    expect(convertTitlecase('h')).toEqual('H');
  });

  it('should handle an empty string', () => {
    expect(convertTitlecase('')).toEqual('');
  });

  it('should handle a string with leading/trailing spaces', () => {
    expect(convertTitlecase('  hello  world  ')).toEqual('  Hello  World  ');
  });

  it('should handle a string with mixed case', () => {
    expect(convertTitlecase('hElLo wOrLd')).toEqual('Hello World');
  });

  it('should handle a string with numbers', () => {
    expect(convertTitlecase('hello 123 world')).toEqual('Hello 123 World');
  });

  it('should handle a string with Unicode characters', () => {
    expect(convertTitlecase('héllò wörld')).toEqual('Héllò Wörld');
  });
});
