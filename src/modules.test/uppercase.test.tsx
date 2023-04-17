import convertUppercase from '../modules/uppercase';

describe('convert uppercase function', () => {
  it('should convert a string to uppercase', () => {
    expect(convertUppercase('hello world')).toEqual('HELLO WORLD');
  });

  it('should handle a single-character string', () => {
    expect(convertUppercase('h')).toEqual('H');
  });

  it('should handle an empty string', () => {
    expect(convertUppercase('')).toEqual('');
  });

  it('should handle a string with leading/trailing spaces', () => {
    expect(convertUppercase('  hello  world  ')).toEqual('  HELLO  WORLD  ');
  });

  it('should handle a string with mixed case', () => {
    expect(convertUppercase('hElLo wOrLd')).toEqual('HELLO WORLD');
  });

  it('should handle a string with special characters', () => {
    expect(convertUppercase('!hello world?')).toEqual('!HELLO WORLD?');
  });

  it('should handle a string with numbers', () => {
    expect(convertUppercase('hello 123 world')).toEqual('HELLO 123 WORLD');
  });

  it('should handle a string with Unicode characters', () => {
    expect(convertUppercase('héllò wörld')).toEqual('HÉLLÒ WÖRLD');
  });
});
