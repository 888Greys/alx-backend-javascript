/**
 * Sends a payment request to the API.
 * @param {number} totalAmount - The total amount of the payment.
 * @param {number} totalShipping - The total shipping cost.
 * @returns {void}
 */
const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
    const totalCost = Utils.calculateNumber('SUM', totalAmount, totalShipping);
    console.log(`The total is: ${totalCost}`);
  };
  
  module.exports = sendPaymentRequestToApi;
  