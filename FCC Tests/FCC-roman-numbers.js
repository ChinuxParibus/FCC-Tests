function convertToRoman(num) {

  const romanMap = {
    "1": "I", "2": "II", "3": "III", "4": "IV", "5": "V", "6": "VI", "7": "VII", "8": "VIII", "9": "IX", "10": "X", "20": "XX", "30": "XXX", "40": "XL", "50": "L", "60": "LX", "70": "LXX", "80": "LXXX", "90": "XC", "100": "C", "200": "CC", "300": "CCC", "400": "CD", "500": "D", "600": "DC", "700": "DCC", "800": "DCCC", "900": "CM", "1000": "M", "2000": "MM", "3000": "MMM"
    }

  const toPositionalDigits = (digit, position) => digit * (10 ** position)
  const getRomanCipher = n => romanMap[n]

  return num
    .toString() // '3999'
    .split('') // ['3', '9', '9', '9']
    .reverse() // ['9', '9', '9', '3']
    .map(toPositionalDigits) // [9, 90, 900, 3000]
    .map(getRomanCipher) // ['IX', 'XC', 'CM', 'MMM']
    .reverse() // ['MMM', 'CM', 'XC', 'IX']
    .join('') // 'MMMCMXCIX'
}