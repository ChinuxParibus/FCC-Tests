function checkCashRegister(price, cash, cid) {
  const timesHundred = amount => amount * 100
  const divide = (divider, divisor) => Math.round(divider / divisor)
  const status = (status, change) => ({status, change})

  const DENOMINATIONS = {
    'ONE HUNDRED': {value: 10000, coins: 0},
    'TWENTY': {value: 2000, coins: 0},
    'TEN': {value: 1000, coins: 0},
    'FIVE': {value: 500, coins: 0},
    'ONE': {value: 100, coins: 0},
    'QUARTER': {value: 25, coins: 0},
    'DIME': {value: 10, coins: 0},
    'NICKEL': {value: 5, coins: 0},
    'PENNY': {value: 1, coins: 0}
  }

  const totalCID = cid.reduce((total, money) => total += timesHundred(money[1]), 0)
  const amountChange = timesHundred(cash) - timesHundred(price)

  // Edge conditions
  if (amountChange > totalCID) return status('INSUFFICIENT_FUNDS', [])
  if (amountChange === totalCID) return status('CLOSED', cid)

  let distributedChange = []

  // Distribute each bill in denomination coins
  cid.forEach(bill => {
    DENOMINATIONS[bill[0]].coins = divide(timesHundred(bill[1]), DENOMINATIONS[bill[0]].value)
  })

  console.log(DENOMINATIONS)

}

console.log(
checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
)

// checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return an object.
// checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["QUARTER", 0.5]]}.
// checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.
// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.
// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.
// checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}