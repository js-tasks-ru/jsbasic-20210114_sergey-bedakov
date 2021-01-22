/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {
  // ваш код...
  if (!str) {
    return str;
  }
  let newString = str[0].toUpperCase();

  for (let i = 1; i < str.length; ++i) {
    newString = newString + str[i];
  }
  return newString;
} 
