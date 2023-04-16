import lowercase from '../../modules/conversion/lowercase';

describe('lowercase function', () => {
  it('should convert a string to lowercase', () => {
    expect(lowercase('HELLO WORLD')).toEqual('hello world');
  });

  it('should handle a single-character string', () => {
    expect(lowercase('H')).toEqual('h');
  });

  it('should handle an empty string', () => {
    expect(lowercase('')).toEqual('');
  });

  it('should handle a string with leading/trailing spaces', () => {
    expect(lowercase('  HELLO  WORLD  ')).toEqual('  hello  world  ');
  });

  it('should handle a string with mixed case', () => {
    expect(lowercase('hElLo wOrLd')).toEqual('hello world');
  });

  it('should handle a string with special characters', () => {
    expect(lowercase('!HELLO WORLD?')).toEqual('!hello world?');
  });

  it('should handle a string with numbers', () => {
    expect(lowercase('HELLO 123 WORLD')).toEqual('hello 123 world');
  });

  it('should handle a string with Unicode characters', () => {
    expect(lowercase('HÉLLÒ WÖRLD')).toEqual('héllò wörld');
  });
});
