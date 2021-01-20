/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  // ваш код...
  if ((n === 0) || (n === 1)) {
    return 1;
  } 
  let productOfNumbers = 1;

  for(let a = 1; a <= n; ++a) {
    productOfNumbers = productOfNumbers * a;
  }

  return productOfNumbers;
}
