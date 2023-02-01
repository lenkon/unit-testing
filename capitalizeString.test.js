const capitalizeString = require('./capitalizeString.js');

test('test capitalized lenkon', () => {
  expect(capitalizeString('lenkon')).toBe('Lenkon');
});

test('test capitalized empty string', () => {
  expect(capitalizeString('')).toBe('empty string error');
});

test('test capitalized undefined input', () => {
  expect(capitalizeString(123)).toBe('string type error');
});

test('test capitalized string starting with number', () => {
  expect(capitalizeString('9lenkon')).toBe('no initial letter error');
});
