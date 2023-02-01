const stringFunctions = require('./stringFunctions.js');

test('test correct string length', () => {
  expect(stringFunctions.stringLength('Hello')).toBe(5);
});

test('test incorrect string length', () => {
  expect(stringFunctions.stringLength('')).toBe('string length error');
});

test('test incorrect string length', () => {
  expect(stringFunctions.stringLength('Hello world!')).toBe('string length error');
});

test('test correct string reverse', () => {
  expect(stringFunctions.reverseString('Hello')).toBe('olleH');
});