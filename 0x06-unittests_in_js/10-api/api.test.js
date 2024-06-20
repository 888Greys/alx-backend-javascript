/**
 * @fileoverview Integration tests for the API endpoints.
 * @description This file contains integration tests for the API endpoints using the 'request' library and 'chai' assertion library.
 */

const request = require('request');
const { expect } = require('chai');

describe('API integration test', () => {
    const API_URL = 'http://localhost:7865';

    /**
     * Test case for GET / endpoint.
     * It verifies that the endpoint returns the correct response.
     */
    it('GET / returns correct response', (done) => {
        request.get(`${API_URL}/`, (_err, res, body) => {
            expect(res.statusCode).to.be.equal(200);
            expect(body).to.be.equal('Welcome to the payment system');
            done();
        });
    });

    /**
     * Test case for GET /cart/:id endpoint with a valid :id.
     * It verifies that the endpoint returns the correct response for a valid :id.
     */
    it('GET /cart/:id returns correct response for valid :id', (done) => {
        request.get(`${API_URL}/cart/47`, (_err, res, body) => {
            expect(res.statusCode).to.be.equal(200);
            expect(body).to.be.equal('Payment methods for cart 47');
            done();
        });
    });

    /**
     * Test case for GET /cart/:id endpoint with a negative number :id.
     * It verifies that the endpoint returns a 404 response for negative number values in :id.
     */
    it('GET /cart/:id returns 404 response for negative number values in :id', (done) => {
        request.get(`${API_URL}/cart/-47`, (_err, res, _body) => {
            expect(res.statusCode).to.be.equal(404);
            done();
        });
    });

    /**
     * Test case for GET /cart/:id endpoint with a non-numeric :id.
     * It verifies that the endpoint returns a 404 response for non-numeric values in :id.
     */
    it('GET /cart/:id returns 404 response for non-numeric values in :id', (done) => {
        request.get(`${API_URL}/cart/d200-44a5-9de6`, (_err, res, _body) => {
            expect(res.statusCode).to.be.equal(404);
            done();
        });
    });

    /**
     * Test case for POST /login endpoint.
     * It verifies that the endpoint returns a valid response for the login request.
     */
    it('POST /login returns valid response', (done) => {
        request.post(`${API_URL}/login`, {json: {userName: 'Pinkbrook'}}, (_err, res, body) => {
            expect(res.statusCode).to.be.equal(200);
            expect(body).to.be.equal('Welcome Pinkbrook');
            done();
        });
    });

    /**
     * Test case for GET /available_payments endpoint.
     * It verifies that the endpoint returns a valid response for available payments request.
     */
    it('GET /available_payments returns valid response', (done) => {
        request.get(`${API_URL}/available_payments`, (_err, res, body) => {
            expect(res.statusCode).to.be.equal(200);
            expect(JSON.parse(body))
                .to.be.deep.equal({payment_methods: {credit_cards: true, paypal: false}});
            done();
        });
    });
});
