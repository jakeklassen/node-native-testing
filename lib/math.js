/**
 * Sum a list of numbers.
 * @param  {...number} numbers
 * @returns
 */
export const sum = (...numbers) => numbers.reduce((a, b) => a + b, 0);

/**
 * Multiply a list of numbers.
 * @param  {...number} numbers
 * @returns
 */
export const multiply = (...numbers) => numbers.reduce((a, b) => a * b, 1);
