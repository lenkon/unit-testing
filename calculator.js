class Calculator {
  static add = (num1, num2) => num1 + num2;

  static subtract = (num1, num2) => num1 - num2;

  static divide = (num1, num2) => num2 === 0 ? 'zero division error' : (num1 / num2);

  static multiply = (num1, num2) => num1 * num2;
}

module.exports = Calculator;