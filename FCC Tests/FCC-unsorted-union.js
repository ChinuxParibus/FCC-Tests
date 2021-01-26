function uniteUnique() {
  const reduceArr = entriesArray => entriesArray.reduce((acc, el) => acc.concat(el), [])

  const arrToUniq = reduceArr([...arguments])
  const uniques = new Set(arrToUniq)

  return [...uniques.keys()]
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])
