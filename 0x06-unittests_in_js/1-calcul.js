/**
 * Performs a mathematical operation on two numbers.
 * @param {string} type - The type of operation to perform. Possible values are 'SUM', 'SUBTRACT', and 'DIVIDE'.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number|string} - The result of the operation. If the operation is 'DIVIDE' and the second number is 0, returns 'Error'.
 */
function calculateNumber(type, a, b) {
    const rounded_a = Math.round(a);
    const rounded_b = Math.round(b);
    
    if (type === 'SUM') {
      return rounded_a + rounded_b;
    }
    if (type === 'SUBTRACT') {
      return rounded_a - rounded_b;
    }
    if (type === 'DIVIDE') {
      if (rounded_b === 0) {
        return 'Error';
      }
      return rounded_a / rounded_b;
    }
  }
  
  module.exports = calculateNumber;