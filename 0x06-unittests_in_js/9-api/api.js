/**
 * Express application for the payment system.
 * @module api
 */

const express = require('express');

const app = express();
const PORT = 7865;

/**
 * GET request handler for the root route.
 * @name GET /
 * @function
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
app.get('/', (_, res) => {
    res.send('Welcome to the payment system');
});

/**
 * GET request handler for the cart route.
 * @name GET /cart/:id
 * @function
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
app.get('/cart/:id(\\d+)', (req, res) => {
    const id = req.params.id;

    res.send(`Payment methods for cart ${id}`);
});

/**
 * Start the Express server.
 * @function
 * @param {number} PORT - The port number to listen on.
 * @param {Function} callback - The callback function to execute when the server starts listening.
 */
app.listen(PORT, () => {
    console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;
