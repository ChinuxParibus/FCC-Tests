function convertHTML(str) {
  const entityMap = {
    34: '&quot;', 38: '&amp;', 39: '&apos;', 60: '&lt;', 62: '&gt;'
  }

  const translatedString = [...str]
    .map(char => char.charCodeAt(0))
    .map(code => entityMap[code] ? entityMap[code] : code)
    .map(code => typeof code === 'string' ? code : String.fromCharCode(code))
    .join('')

  return translatedString
}
