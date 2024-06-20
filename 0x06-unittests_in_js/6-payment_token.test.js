/**
 * Test suite for the getPaymentTokenFromAPI function.
 */
const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
    /**
     * Test case for getPaymentTokenFromAPI when success is true.
     * @param {function} done - Callback function to indicate test completion.
     */
    it('getPaymentTokenFromAPI(success), where success == true', (done) => {
        getPaymentTokenFromAPI(true)
            .then((res) => {
                expect(res).to.deep.equal({data: 'Successful response from the API'});
                done();
            });
    });
});
