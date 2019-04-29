import rpm from './rpm';

const genRandInt: () => number = () => Math.floor(Math.random() * 1000001) - 500000;

describe('rpm', () => {
  let leftOperand: number;
  let rightOperand: number;
  let pushSpy: jest.SpyInstance<number, any[]>;

  beforeAll(() => {
    [leftOperand, rightOperand] = [1, 2].map(genRandInt);

    console.log('Randomly generated operands:');
    console.log({
      leftOperand,
      rightOperand,
    });

    // We have to cast here because typescript isnt properly detecting that Array.prototype has a 'push' function and
    // therefore throws an error if we attempt to call spyOn without casting 'push' as jest.FunctionPropertyNames<any[]>.
    // By casting 'push' this way we are telling typescript/jest that yes, push does indeed exist as a function property
    // on Array.prototype.
    pushSpy = jest.spyOn(Array.prototype, 'push' as jest.FunctionPropertyNames<any[]>);
  });

  afterEach(() => {
    pushSpy.mockClear();
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

  it('correctly multiplies 2 and 5', () => {
    expect(rpm(2, 5)).toBe(10);
  });

  it('correctly multiplies -2 and 5', () => {
    expect(rpm(-2, 5)).toBe(-10);
  });

  it('correctly multiplies 2 and -5', () => {
    expect(rpm(2, -5)).toBe(-10);
  });

  it('correctly multiplies -2 and -5', () => {
    expect(rpm(-2, -5)).toBe(10);
  });

  it('correctly multiplies 5 and 2', () => {
    expect(rpm(5, 2)).toBe(10);
  });

  it('correctly multiplies -5 and 2', () => {
    expect(rpm(-5, 2)).toBe(-10);
  });

  it('correctly multiplies 5 and -2', () => {
    expect(rpm(5, -2)).toBe(-10);
  });

  it('correctly multiplies -5 and -2', () => {
    expect(rpm(-5, -2)).toBe(10);
  });

  it('correctly multiplies 100000 and 100000', () => {
    expect(rpm(100000, 100000)).toBe(10000000000);
  })

  it('correctly multiplies -100000 and 100000', () => {
    expect(rpm(-100000, 100000)).toBe(-10000000000);
  });

  it('correctly multiplies 100000 and -100000', () => {
    expect(rpm(100000, -100000)).toBe(-10000000000);
  });

  it('correctly multiplies -100000 and -100000', () => {
    expect(rpm(-100000, -100000)).toBe(10000000000);
  });

  it('correctly multiplies randomly generated left and right operands', () => {
    expect(rpm(leftOperand, rightOperand)).toBe(leftOperand * rightOperand);
  });

  it('calls Array.prototype.push 2 times when multiplying 0 and 0', () => {
    rpm(0, 0);

    expect(pushSpy).toHaveBeenCalledTimes(2);
  });

  it('calls Array.prototype.push 3 times when multiplying 2 and 5', () => {
    rpm(2, 5);

    expect(pushSpy).toHaveBeenCalledTimes(3);
  });

  it('calls Array.prototype.push 3 times when multiplying -2 and 5', () => {
    rpm(-2, 5);

    expect(pushSpy).toHaveBeenCalledTimes(3);
  });

  it('calls Array.prototype.push 3 times when multiplying 2 and -5', () => {
    rpm(2, -5);

    expect(pushSpy).toHaveBeenCalledTimes(3);
  });

  it('calls Array.prototype.push 3 times when multiplying -2 and -5', () => {
    rpm(-2, -5);

    expect(pushSpy).toHaveBeenCalledTimes(3);
  });

  it('calls Array.prototype.push 4 times when multiplying 5 and 2', () => {
    rpm(5, 2);

    expect(pushSpy).toHaveBeenCalledTimes(4);
  });

  it('calls Array.prototype.push 4 times when multiplying -5 and 2', () => {
    rpm(-5, 2);

    expect(pushSpy).toHaveBeenCalledTimes(4);
  });

  it('calls Array.prototype.push 4 times when multiplying 5 and -2', () => {
    rpm(5, -2);

    expect(pushSpy).toHaveBeenCalledTimes(4);
  });

  it('calls Array.prototype.push 4 times when multiplying -5 and -2', () => {
    rpm(-5, -2);

    expect(pushSpy).toHaveBeenCalledTimes(4);
  });
});
