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
 * @returns {void}
 */
app.get('/', (_, res) => {
    res.send('Welcome to the payment system');
});

/**
 * Starts the Express server.
 * @name listen
 * @function
 * @param {number} port - The port number to listen on.
 * @param {Function} callback - The callback function to execute once the server starts.
 * @returns {void}
 */
app.listen(PORT, () => {
    console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;
