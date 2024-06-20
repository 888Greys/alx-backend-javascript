/**
 * Integration test for the API.
 * @module APIIntegrationTest
 */

const request = require('request');
const { expect } = require('chai');

/**
 * Describes the API integration test suite.
 * @function describe
 * @param {string} description - The description of the test suite.
 * @param {function} callback - The callback function that contains the test cases.
 */
describe('API integration test', () => {
    const API_URL = 'http://localhost:7865';

    /**
     * Tests the GET / endpoint and checks if it returns the correct response.
     * @function it
     * @param {string} description - The description of the test case.
     * @param {function} callback - The callback function that contains the test logic.
     */
    it('GET / returns correct response', (done) => {
        request.get(`${API_URL}/`, (_err, res, body) => {
            expect(res.statusCode).to.be.equal(200);
            expect(body).to.be.equal('Welcome to the payment system');
            done();
        });
    });
});
