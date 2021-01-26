function whatIsInAName(collection, source) {
  var arr = []
  // Only change code below this line
  const reduceArr = entriesArray => entriesArray.reduce((acc, el) => acc.concat(el), [])

  const contains = (searchArray, itemArray) => itemArray.every((item) => searchArray.includes(item))

  let sourceEntries = reduceArr(Object.entries(source))

  arr = collection.filter(item => {
    let collectionEntries = reduceArr(Object.entries(item))

    return contains(collectionEntries, sourceEntries)
  })
  // Only change code above this line
  return arr
}

whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 })
