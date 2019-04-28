import rpm from './rpm';

describe('rpm', () => {
  it('returns 0 if left operand provided is zero', () => {
    expect(rpm(0, -1)).toBe(0);
  });

  it('returns 0 if right operand provided is zero', () => {
    expect(rpm(-1, 0)).toBe(0);
  });

  it('returns 0 if both operands provided are zero', () => {
    expect(rpm(0, 0)).toBe(0);
  });

  it('correctly multplies 5 and 2', () => {
    expect(rpm(5, 2)).toBe(10);
  });

  it('correctly multplies 2 and 5', () => {
    expect(rpm(2, 5)).toBe(10);
  });

  it('correctly multplies -5 and 2', () => {
    expect(rpm(-5, 2)).toBe(-10);
  });

  it('correctly multplies 5 and -2', () => {
    expect(rpm(5, -2)).toBe(-10);
  });

  it('correctly multplies -5 and -2', () => {
    expect(rpm(-5, -2)).toBe(10);
  });

  it('correctly multplies -2 and 5', () => {
    expect(rpm(-2, 5)).toBe(-10);
  });

  it('correctly multplies 2 and -5', () => {
    expect(rpm(2, -5)).toBe(-10);
  });

  it('correctly multplies -2 and -5', () => {
    expect(rpm(-2, -5)).toBe(10);
  })
});
