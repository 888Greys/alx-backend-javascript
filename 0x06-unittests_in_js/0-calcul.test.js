/**
 * @fileOverview Unit tests for the calculateNumber function.
 */

const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
    /**
     * Test case for adding two floating point whole numbers.
     */
    it('floating point whole numbers', () => {
        assert.strictEqual(calculateNumber(1.0, 2.0), 3);
    });

    /**
     * Test case for rounding down b's floating point fractional number.
     */
    it('rounding down b\'s floating point fractional number', () => {
        assert.strictEqual(calculateNumber(1.0, 2.4), 3);
    });

    /**
     * Test case for rounding down a and b's floating point fractional number.
     */
    it('rounding down a and b\'s floating point fractional number', () => {
        assert.strictEqual(calculateNumber(1.4, 2.4), 3);
    });

    /**
     * Test case for rounding down a's floating point fractional number.
     */
    it('rounding down a\'s floating point fractional number', () => {
        assert.strictEqual(calculateNumber(1.4, 2.0), 3);
    });

    /**
     * Test case for rounding up b's floating point fractional numbers.
     */
    it('rounding up b\'s floating point fractional numbers', () => {
        assert.strictEqual(calculateNumber(1.0, 2.5), 4);
    });

    /**
     * Test case for rounding up a and b's floating point fractional numbers.
     */
    it('rounding up a and b\'s floating point fractional numbers', () => {
        assert.strictEqual(calculateNumber(2.6, 2.5), 6);
    });

    /**
     * Test case for rounding up a's floating point fractional numbers.
     */
    it('rounding up a\'s floating point fractional numbers', () => {
        assert.strictEqual(calculateNumber(2.6, 2.0), 5);
    });

    /**
     * Test case for rounding down a and b floating point fractional numbers with trailing 9's.
     */
    it('rounding down a and b floating point fractional numbers with trailing 9\'s', () => {
        assert.strictEqual(calculateNumber(2.499999, 3.499999), 5);
    });
});
