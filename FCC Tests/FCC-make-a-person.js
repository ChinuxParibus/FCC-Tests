var Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  const chopString = str => str.split(' ')

  this.getFirstName = function () {
    return chopString(firstAndLast)[0]
  }
  this.getLastName = function () {
    return chopString(firstAndLast)[1]
  }
  this.setFirstName = function (newFirstName) {
    firstAndLast = `${newFirstName} ${this.getLastName()}`
  }
  this.setLastName = function (newLastName) {
    firstAndLast = `${this.getFirstName()} ${newLastName}`
  }
  this.getFullName = function () {
    return firstAndLast
  }
  this.setFullName = function (newFullName) {
    firstAndLast = newFullName
  }
}

var bob = new Person('Bob Ross')
bob.getFullName()