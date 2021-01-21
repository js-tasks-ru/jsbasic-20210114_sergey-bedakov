/**
 * truncate
 * @param {string} str
 * @param {number} maxlength
 * @returns {string}
 */
function truncate(str, maxlength) {
  // ваш код...
  let strLength = str.length;
  let isExceedMaxlength = strLength > maxlength;

  if (isExceedMaxlength) {
    let shortenStr = str.slice(0, maxlength - 1);

    return `${shortenStr}…`;
  }

  return str;
}
