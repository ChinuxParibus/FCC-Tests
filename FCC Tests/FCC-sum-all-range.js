function sumAll(arr) {
  let isRangeGood = arr[0] < arr[1]
  let lower = isRangeGood ? arr[0] : arr[1]
  let upper = isRangeGood ? arr[1] : arr[0]
  let sum = 0
  for (let i = lower; i <= upper; i++) {
    sum += i
  }
  return sum
}