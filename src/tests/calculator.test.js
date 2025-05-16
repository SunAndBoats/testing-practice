import { calculator } from '../modules/calculator.js';

test('adds numbers', () => {
  expect(calculator.add(2, 3)).toBe(5);
});

test('subtracts numbers', () => {
  expect(calculator.subtract(5, 3)).toBe(2);
});

test('multiplies numbers', () => {
  expect(calculator.multiply(2, 4)).toBe(8);
});

test('divides numbers', () => {
  expect(calculator.divide(10, 2)).toBe(5);
});

test('returns null when dividing by zero', () => {
  expect(calculator.divide(10, 0)).toBe(null);
});
