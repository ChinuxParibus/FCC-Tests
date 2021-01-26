function translatePigLatin(str) {
  const isVowel = char => 'aeiou'.includes(char)
  const hasVowels = word => [...word].some(isVowel)

  if (isVowel(str[0])) return str + 'way'
  if (!hasVowels(str)) return str + 'ay'

  let rotatedStr = [...str]
  while (!isVowel(rotatedStr[0])) {
    rotatedStr.push(rotatedStr.shift())
  }

  return rotatedStr.join('') + 'ay'
}

console.log(
translatePigLatin("consonant")
)