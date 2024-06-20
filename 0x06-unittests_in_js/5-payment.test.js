const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

/**
 * Test suite for the sendPaymentRequestToApi function.
 */
describe('sendPaymentRequestToApi', () => {
    let bigBrother;

    /**
     * Runs before each test case.
     * Creates a sinon spy on the console object.
     */
    beforeEach(() => {
        if (!bigBrother) {
            bigBrother = sinon.spy(console);
        }
    });

    /**
     * Runs after each test case.
     * Resets the history of the bigBrother spy.
     */
    afterEach(() => {
        bigBrother.log.resetHistory();
    });

    /**
     * Test case for sendPaymentRequestToApi(100, 20).
     * It should log "The total is: 120" to the console.
     */
    it('sendPaymentRequestToApi(100, 20) logs "The total is: 120" to the console', () => {
        sendPaymentRequestToApi(100, 20);
        expect(bigBrother.log.calledWith('The total is: 120')).to.be.true;
        expect(bigBrother.log.calledOnce).to.be.true;
    });

    /**
     * Test case for sendPaymentRequestToApi(10, 10).
     * It should log "The total is: 20" to the console.
     */
    it('sendPaymentRequestToApi(10, 10) logs "The total is: 20" to the console', () => {
        sendPaymentRequestToApi(10, 10);
        expect(bigBrother.log.calledWith('The total is: 20')).to.be.true;
        expect(bigBrother.log.calledOnce).to.be.true;
    });
});
