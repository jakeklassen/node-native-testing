export const sum = (...numbers: number[]) => numbers.reduce((a, b) => a + b, 0);

export const multiply = (...numbers: number[]) =>
  numbers.reduce((a, b) => a * b, 1);
