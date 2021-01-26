function spinalCase(str) {
  /*
    La expresión busca espacios en blanco, un guión bajo o cualquier caracter en mayúscula que esté delante de cualquier otro caracter sin incluir éste en el resultado
    '?= Positive lookahead'
  */
  const byRegex = /\s|_|(?=[A-Z])/
  return str
    .split(byRegex)
    .join("-")
    .toLowerCase()
}

console.log(
spinalCase('This Is Spinal Tap')
)
