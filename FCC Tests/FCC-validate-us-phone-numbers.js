function telephoneCheck(str) {
  const REUSPhoneNumber = /^1?(\s?)?(\(\d{3}\)|\d{3})[\s\-]?(\d{3})[\s\-]?(\d{4})$/gm

  return REUSPhoneNumber.test(str)
}

telephoneCheck("555-555-5555")
