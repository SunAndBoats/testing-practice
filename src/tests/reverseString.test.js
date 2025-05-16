import { reverseString } from '../modules/reverseString';

test('reverses a string', () => {
  expect(reverseString('hello')).toBe('olleh');
});
