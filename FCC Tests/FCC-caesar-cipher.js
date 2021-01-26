function rot13(str) {
  const rot13Map = { N: 'A', O: 'B', P: 'C', Q: 'D', R: 'E', S: 'F', T: 'G', U: 'H', V: 'I', W: 'J', X: 'K', Y: 'L', Z: 'M', A: 'N', B: 'O', C: 'P', D: 'Q', E: 'R', F: 'S', G: 'T', H: 'U', I: 'V', J: 'W', K: 'X', L: 'Y', M: 'Z' }
  const decode = char => /[A-Z]/.test(char)
    ? rot13Map[char]
    : char

  return str
    .split('')
    .map(decode)
    .join('')
}

console.log(
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")
)