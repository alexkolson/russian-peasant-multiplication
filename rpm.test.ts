import rpm from './rpm';

describe('rpm', () => {
  it('returns 0 if both operands provided are zero', () => {
    expect(rpm(0, 0)).toBe(0);
  });
});