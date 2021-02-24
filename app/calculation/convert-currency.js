function convertStringToPence (valueInPence) {
  const currencyArray = valueInPence.split('.')
  const pounds = currencyArray[0]
  const pence = currencyArray[1] || 0
  return pence !== 0 ? Number(pounds + pence) : Number(pounds) * 100
}

function convertToPounds (valueInPounds) {
  return valueInPounds / 100
}

module.exports = {
  convertStringToPence,
  convertToPounds
}
