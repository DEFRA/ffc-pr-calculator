function convertStringToPence (valueInPence) {
  const currencyArray = valueInPence.split('.')
  const pounds = currencyArray[0]
  const pence = (currencyArray[1] || '00').padEnd(2, '0')
  return Number(pounds + pence)
}

function convertToPounds (valueInPounds) {
  return valueInPounds / 100
}

module.exports = {
  convertStringToPence,
  convertToPounds
}
