function addTogether() {
  const isNumber = val => typeof val === 'number'
  const checkIfNumber = arr => arr.every(isNumber)
  const toArray = val => [...val]

  const args = toArray(arguments)

  if (!checkIfNumber(args)) return undefined

  if (args.length === 2) {
    return args[0] + args[1]
  } else {
    return function () {
      const newArgs = args.concat(toArray(arguments))

      if (!checkIfNumber(newArgs)) return undefined

      return newArgs[0] + newArgs[1]
    }
  }
}
