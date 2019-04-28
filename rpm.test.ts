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

  it('calls Array.prototype.push 1 time when multiplying 0 & 0', () => {
    // We have to cast here because typescript isnt properly detecting that Array.prototype has a 'push' function and
    // therefore throws an error if we attempt to call spyOn without casting 'push' as jest.FunctionPropertyNames<any[]>.
    // By casting 'push' this way we are telling typescript/jest that yes, push does indeed exist as a function property
    // on Array.prototype.
    const pushSpy: (...args: any[]) => number = jest.spyOn(Array.prototype, 'push' as jest.FunctionPropertyNames<any[]>);

    rpm(0, 0);

    expect(pushSpy).toHaveBeenCalledTimes(1);
  });

  it('calls Array.prototype.push 4 times when multiplying 2 and 5', () => {
    const pushSpy: (...args: any[]) => number = jest.spyOn(Array.prototype, 'push' as jest.FunctionPropertyNames<any[]>);

    rpm(2, 5);

    expect(pushSpy).toHaveBeenCalledTimes(4);
  });

  it('calls Array.prototype.push 8 times when multiplying 5 and 2', () => {
    const pushSpy: (...args: any[]) => number = jest.spyOn(Array.prototype, 'push' as jest.FunctionPropertyNames<any[]>);

    rpm(5, 2);

    expect(pushSpy).toHaveBeenCalledTimes(8);
  });

  it('calls Array.prototype.push 4 times when multiplying -2 and 5', () => {
    const pushSpy: (...args: any[]) => number = jest.spyOn(Array.prototype, 'push' as jest.FunctionPropertyNames<any[]>);

    rpm(-2, 5);

    expect(pushSpy).toHaveBeenCalledTimes(4);
  });
});
