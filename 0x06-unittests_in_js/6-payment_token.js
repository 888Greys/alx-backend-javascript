/**
 * Retrieves a payment token from the API.
 * @param {boolean} success - Indicates whether the API call was successful.
 * @returns {Promise} A promise that resolves to an object containing the payment token data.
 */
const getPaymentTokenFromAPI = (success) => new Promise((resolve, _reject) => {
    if (success) {
      resolve({data: 'Successful response from the API'});
    }
  });
  
  module.exports = getPaymentTokenFromAPI;
