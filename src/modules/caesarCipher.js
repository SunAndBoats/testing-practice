function shiftChar(char, shift) {
  const isUpper = char === char.toUpperCase();
  const base = isUpper ? 65 : 97;
  const code = char.charCodeAt(0) - base;
  const shifted = (code + shift + 26) % 26;
  return String.fromCharCode(shifted + base);
}

export function caesarCipher(str, shift) {
  return str
    .split('')
    .map((char) => {
      if (/[a-z]/i.test(char)) {
        return shiftChar(char, shift);
      }
      return char;
    })
    .join('');
}
