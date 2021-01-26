function palindrome(str) {
  const cleanString = str
    .replace(/[\W_]/g, '')
    .toLowerCase()

  const reversedString = cleanString
    .split('')
    .reverse()
    .join('')

  return cleanString === reversedString
}