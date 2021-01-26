function dropElements(arr, func) {
  const firstElementTruthyIndex = arr.findIndex(func)

  return firstElementTruthyIndex === -1
    ? []
    : arr.slice(firstElementTruthyIndex)
}

dropElements([1, 2, 3], function(n) {return n < 3; })
