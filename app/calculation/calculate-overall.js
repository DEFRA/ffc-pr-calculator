const { convertToPounds } = require('./convert-currency')
const { convertStringToPence } = require('./convert-currency')

const calculateOverall = (schemeYearValues, bandResults) => {
  return schemeYearValues.map(x => calculateSchemeYear(x.schemeYear, convertStringToPence(x.value.toString()), bandResults))
}

const calculateSchemeYear = (schemeYear, value, bandResults) => {
  const schemeYearResults = []

  bandResults.forEach(band => {
    const yearResults = band.result.filter(y => y.schemeYear === schemeYear)
    schemeYearResults.push(...yearResults)
  })

  const reduction = Math.floor(schemeYearResults.reduce((x, y) => {
    return x + y.reductionInPence
  }, 0))

  let payment = value - reduction
  payment = Math.ceil(payment)

  console.log(`\nSummary for ${schemeYear}:`)
  console.log(`Total reduction: ${reduction}`)
  console.log(`Final payment: ${payment}`)

  return {
    schemeYear,
    value: convertToPounds(value),
    reductionInPence: reduction,
    reduction: convertToPounds(reduction),
    paymentInPence: payment,
    payment: convertToPounds(payment)
  }
}

module.exports = calculateOverall
