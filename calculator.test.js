const Calculator = require('./calculator.js');

describe('add', () => {
  test('add 4 + 5', () => {
    expect(Calculator.add(4, 5)).toBe(9);
  });

  test('add -5 + -3', () => {
    expect(Calculator.add(-5, -3)).toBe(-8);
  });

  test('add -3 + 3', () => {
    expect(Calculator.add(-3, 3)).toBe(0);
  });  
});

describe('subtract', () => {
  test('subtract 1 - 0', () => {
    expect(Calculator.subtract(1, 0)).toBe(1);
  });

  test('subtract 0 - 1', () => {
    expect(Calculator.subtract(0, 1)).toBe(-1);
  });

  test('subtract -1 - 1', () => {
    expect(Calculator.subtract(-1, 1)).toBeCloseTo(-2);
  });
});

describe('multiply', () => {
  test('multiply 0 * 1', () => {
    expect(Calculator.multiply(0, 1)).toBe(0);
  });

  test('multiply -3 * 3', () => {
    expect(Calculator.multiply(-3, 3)).toBe(-9);
  });

  test('multiply -1 * -1', () => {
    expect(Calculator.multiply(-1, -1)).toBe(1);
  });
});

describe('divide', () => {
  test('divide 3 / 1', () => {
    expect(Calculator.divide(3, 1)).toBe(3);
  });
  
  test('divide -4 / 5', () => {
    expect(Calculator.divide(-4, 5)).toBe(-0.8);
  });

  test('divide 1 / 0', () => {
    expect(Calculator.divide(1, 0)).toBe('zero division error');
  });
});