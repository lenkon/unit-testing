const stringLength = (string) => (string.length > 0 && string.length <= 10) ? string.length : 'string length error';
  
const reverseString = (string) => string.split('').reverse().join('');

module.exports = { stringLength, reverseString };