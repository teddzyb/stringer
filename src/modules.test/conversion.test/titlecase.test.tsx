import titlecase from '../../modules/conversion/titlecase';

describe('titlecase function', () => {
  it('should convert the first character of each word to uppercase', () => {
    expect(titlecase('hello world')).toEqual('Hello World');
  });

  it('should handle a single-character string', () => {
    expect(titlecase('h')).toEqual('H');
  });

  it('should handle an empty string', () => {
    expect(titlecase('')).toEqual('');
  });

  it('should handle a string with leading/trailing spaces', () => {
    expect(titlecase('  hello  world  ')).toEqual('  Hello  World  ');
  });

  it('should handle a string with mixed case', () => {
    expect(titlecase('hElLo wOrLd')).toEqual('Hello World');
  });

  it('should handle a string with numbers', () => {
    expect(titlecase('hello 123 world')).toEqual('Hello 123 World');
  });

  it('should handle a string with Unicode characters', () => {
    expect(titlecase('héllò wörld')).toEqual('Héllò Wörld');
  });
});
