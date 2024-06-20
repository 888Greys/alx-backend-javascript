const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');

/**
 * Test suite for the sendPaymentRequestToApi function.
 */
describe('sendPaymentRequestToApi', () => {
    /**
     * Test case to verify that sendPaymentRequestToApi uses the calculateNumber method of Utils.
     */
    it('sendPaymentRequestToApi uses the calculateNumber method of Utils', () => {
        // Create a spy on the Utils object
        const bigBrother = sinon.spy(Utils);

        // Call the sendPaymentRequestToApi function
        sendPaymentRequestToApi(100, 20);

        // Assert that the calculateNumber method was called with the correct arguments
        expect(bigBrother.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;

        // Assert that the calculateNumber method was called only once
        expect(bigBrother.calculateNumber.callCount).to.be.equal(1);

        // Restore the original behavior of the calculateNumber method
        bigBrother.calculateNumber.restore();
    });
});
