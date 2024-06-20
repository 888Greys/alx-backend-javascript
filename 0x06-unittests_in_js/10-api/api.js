/**
 * Express application for the payment system API.
 * @module api
 */

const express = require('express');

const app = express();
const PORT = 7865;

app.use(express.json());

/**
 * Route handler for the root endpoint.
 * @name GET /
 * @function
 * @param {Object} _req - Express request object
 * @param {Object} res - Express response object
 * @returns {string} - Welcome message
 */
app.get('/', (_req, res) => {
    res.send('Welcome to the payment system');
});

/**
 * Route handler for the cart endpoint.
 * @name GET /cart/:id
 * @function
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {string} - Payment methods for the specified cart
 */
app.get('/cart/:id(\\d+)', (req, res) => {
    const id = req.params.id;

    res.send(`Payment methods for cart ${id}`);
});

/**
 * Route handler for the available_payments endpoint.
 * @name GET /available_payments
 * @function
 * @param {Object} _req - Express request object
 * @param {Object} res - Express response object
 * @returns {Object} - JSON object containing available payment methods
 */
app.get('/available_payments', (_req, res) => {
    res.json({ payment_methods: { credit_cards: true, paypal: false } });
});

/**
 * Route handler for the login endpoint.
 * @name POST /login
 * @function
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {string} - Welcome message with the username
 */
app.post('/login', (req, res) => {
    let username = '';

    if (req.body) {
        username = req.body.userName;
    }

    res.send(`Welcome ${username}`);
});

app.listen(PORT, () => {
    console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;
