function fearNotLetter(str) {
  const getCodeFromChar = char => char.charCodeAt(0)
  const getCharFromCode = code => String.fromCharCode(code)
  const range = (start, end) => Array.from({length: (end + 1) - start}, (_, k) => k + start)

  const letterCodes = [...str].map(getCodeFromChar)
  const originalLetterCodes = range(letterCodes[0], letterCodes[letterCodes.length - 1])

  if (letterCodes.length === originalLetterCodes.length) return undefined

  const left = originalLetterCodes.filter(letter => !letterCodes.includes(letter))[0]

  return getCharFromCode(left)
}

fearNotLetter("abce");
