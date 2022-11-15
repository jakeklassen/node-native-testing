/**
 * Sum a list of numbers.
 * @param  {...number} numbers
 * @returns
 */
export const sum = (...numbers) => numbers.reduce((a, b) => a + b, 0);
