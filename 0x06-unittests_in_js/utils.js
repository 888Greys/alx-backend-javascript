/**
 * Utility functions for performing calculations.
 * @namespace Utils
 */
const Utils = {
    /**
     * Calculates the result of a mathematical operation.
     * @param {string} type - The type of operation to perform. Possible values: 'SUM', 'SUBTRACT', 'DIVIDE'.
     * @param {number} a - The first operand.
     * @param {number} b - The second operand.
     * @returns {number|string} - The result of the calculation. If the operation is 'DIVIDE' and the second operand is 0, returns 'Error'.
     */
    calculateNumber(type, a, b) {
        if (type === 'SUM') {
            return Math.round(a) + Math.round(b);
        }
        if (type === 'SUBTRACT') {
            return Math.round(a) - Math.round(b);
        }
        if (type === 'DIVIDE') {
            return Math.round(b) === 0 ? 'Error' : Math.round(a) / Math.round(b);
        }
        return 0;
    },
};

module.exports = Utils;
