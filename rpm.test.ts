import rpm from './rpm';

const genRandInt: () => number = () => Math.floor(Math.random() * 1000001) - 500000;

describe('rpm', () => {
  let leftOperand: number;
  let rightOperand: number;

  beforeAll(() => {
    [leftOperand, rightOperand] = [1, 2].map(genRandInt);

    console.log('Randomly generated operands:');
    console.log({
      leftOperand,
      rightOperand,
    });
  });

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
  });

  it('correctly multplies -100000 and -100000', () => {
    expect(rpm(-100000, -100000)).toBe(10000000000);
  });

  it('correctly multplies 100000 and -100000', () => {
    expect(rpm(100000, -100000)).toBe(-10000000000);
  });

  it('correctly multplies -100000 and 100000', () => {
    expect(rpm(-100000, 100000)).toBe(-10000000000);
  });

  it('correctly multiplies randomly generated left and right operands', () => {
    expect(rpm(leftOperand, rightOperand)).toBe(leftOperand * rightOperand);
  });
});
