import validateEmail from '../../modules/validation/email';

describe('validate email function', () => {
  it('returns true for a valid email address', async () => {
    const result = await validateEmail('test@example.com');
    expect(result).toBe(true);
  });

  it('returns false for an invalid email address with missing @', async () => {
    const result = await validateEmail('testexample.com');
    expect(result).toBe(false);
  });

  it('returns false for an invalid email address with missing domain', async () => {
    const result = await validateEmail('test@');
    expect(result).toBe(false);
  });

  it('returns false for an invalid email address with invalid or nonexistent domain', async () => {
    const result = await validateEmail('test@invalid-domain-xyz.com');
    expect(result).toBe(false);
  });
});
