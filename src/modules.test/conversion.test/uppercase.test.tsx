import uppercase from '../../modules/conversion/uppercase';

describe('uppercase function', () => {
  it('should convert a string to uppercase', () => {
    expect(uppercase('hello world')).toEqual('HELLO WORLD');
  });

  it('should handle a single-character string', () => {
    expect(uppercase('h')).toEqual('H');
  });

  it('should handle an empty string', () => {
    expect(uppercase('')).toEqual('');
  });

  it('should handle a string with leading/trailing spaces', () => {
    expect(uppercase('  hello  world  ')).toEqual('  HELLO  WORLD  ');
  });

  it('should handle a string with mixed case', () => {
    expect(uppercase('hElLo wOrLd')).toEqual('HELLO WORLD');
  });

  it('should handle a string with special characters', () => {
    expect(uppercase('!hello world?')).toEqual('!HELLO WORLD?');
  });

  it('should handle a string with numbers', () => {
    expect(uppercase('hello 123 world')).toEqual('HELLO 123 WORLD');
  });

  it('should handle a string with Unicode characters', () => {
    expect(uppercase('héllò wörld')).toEqual('HÉLLÒ WÖRLD');
  });
});
