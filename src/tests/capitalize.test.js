import { capitalize } from '../modules/capitalize';

test('capitalizes first letter', () => {
  expect(capitalize('hello')).toBe('Hello');
});

test('returns empty string when input is empty', () => {
  expect(capitalize('')).toBe('');
});
