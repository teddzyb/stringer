import convertLowercase from '../../modules/conversion/lowercase';

describe('convert lowercase function', () => {
  it('should convert a string to lowercase', () => {
    expect(convertLowercase('HELLO WORLD')).toEqual('hello world');
  });

  it('should handle a single-character string', () => {
    expect(convertLowercase('H')).toEqual('h');
  });

  it('should handle an empty string', () => {
    expect(convertLowercase('')).toEqual('');
  });

  it('should handle a string with leading/trailing spaces', () => {
    expect(convertLowercase('  HELLO  WORLD  ')).toEqual('  hello  world  ');
  });

  it('should handle a string with mixed case', () => {
    expect(convertLowercase('hElLo wOrLd')).toEqual('hello world');
  });

  it('should handle a string with special characters', () => {
    expect(convertLowercase('!HELLO WORLD?')).toEqual('!hello world?');
  });

  it('should handle a string with numbers', () => {
    expect(convertLowercase('HELLO 123 WORLD')).toEqual('hello 123 world');
  });

  it('should handle a string with Unicode characters', () => {
    expect(convertLowercase('HÉLLÒ WÖRLD')).toEqual('héllò wörld');
  });
});
