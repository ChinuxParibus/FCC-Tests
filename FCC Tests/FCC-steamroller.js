// Flat an array of arbitrary depth
function steamrollArray(arr) {
  return arr.reduce((acc, item) => {
    return acc.concat(
      Array.isArray(item) ? steamrollArray(item) : item
    )
  }, [])
}

steamrollArray([1, [2], [3, [[4]]]])
