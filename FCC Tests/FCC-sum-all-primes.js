const isPrime = (n) => {
  if (n < 2) return false

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) return false
  }
  return true
}

function sumPrimes(num) {
  let i = 0
  let primeSum = 0
  while (i <= num) {
    let prime = isPrime(i) ? i : 0
    primeSum += prime
    i = i + 1
  }
  console.log(primeSum)
  return primeSum
}

sumPrimes(10);
