function myReplace(str, before, after) {

  const hasCamelCase = word => /^[A-Z]/.test(word)

  const afterWithCase = (hasCamelCase(before)
    ? after[0].toUpperCase()
    : after[0].toLowerCase()) + after.substring(1)

  return str.replace(before, afterWithCase)
}