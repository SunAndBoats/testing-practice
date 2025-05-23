import { caesarCipher } from '../modules/caesarCipher';

test('shifts letters correctly', () => {
  expect(caesarCipher('abc', 1)).toBe('bcd');
});

test('wraps from z to a', () => {
  expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('preserves case', () => {
  expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
});

test('leaves punctuation unchanged', () => {
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});
