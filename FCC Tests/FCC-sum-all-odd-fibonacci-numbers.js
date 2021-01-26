// Número phi, o razón áurea
const PHI = (1 + Math.sqrt(5))/2

// Obtener por redondeo el siguiente número de fibonacci
const nextFibonacci = exp => Math.round((PHI ** exp)/Math.sqrt(5))

const isOdd = num => num % 2 !== 0
const totalOddSum = (total, n) => total + n

function sumFibs(num) {
  const fibonacciNumbers = [1, 1]
  let i = 3
  let nextFibonacciNumber = nextFibonacci(i)
  while (nextFibonacciNumber <= num) {
    fibonacciNumbers.push(nextFibonacciNumber)
    i = i + 1
    nextFibonacciNumber = nextFibonacci(i)
  }

  return fibonacciNumbers
    .filter(isOdd)
    .reduce(totalOddSum, 0)
}

sumFibs(4);
