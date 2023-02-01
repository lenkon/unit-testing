const capitalizeString = (string) => {
  if (string.length < 1) return 'empty string error';
  if (typeof string !== 'string') return 'string type error';
  if (!(/[a-zA-Z]/).test(string.charAt(0))) return 'no initial letter error';
  return string.charAt(0).toUpperCase() + string.slice(1);
};

module.exports = capitalizeString;