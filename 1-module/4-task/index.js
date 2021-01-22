/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  // ваш код...
  let lowerCaseString = str.toLowerCase();
  if ((lowerCaseString.indexOf('1xbet') >= 0) || (lowerCaseString.indexOf('xxx') >= 0)) {
    return true;
  } 
  return false;
}
