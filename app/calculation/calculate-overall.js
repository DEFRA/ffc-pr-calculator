const { convertToPounds } = require('./convert-currency')
const { convertStringToPence } = require('./convert-currency')

const calculateOverall = (schemeYearValues, bandResults) => {
  return schemeYearValues.map(x => calculateSchemeYear(x.schemeYear, convertStringToPence(x.value.toString()), bandResults))
}

const calculateSchemeYear = (schemeYear, value, bandResults) => {
  const schemeYearResults = []

  console.log(`\n=== Processing ${schemeYear} ===`)
  console.log(`Initial value: ${value}`)

  // Log band structure before processing
  console.log('Available bands:', bandResults.map(b => ({
    band: b.band,
    resultCount: b.result.length
  })))

  bandResults.forEach(band => {
    const yearResults = band.result.filter(y => y.schemeYear === schemeYear)
    console.log(`\nBand ${band.band} for ${schemeYear}:`)
    console.log('Value:', yearResults.map(r => ({
      reductionInPence: r.reductionInPence,
      payment: r.payment
    })))
    schemeYearResults.push(...yearResults)
  })

  const reduction = Math.floor(schemeYearResults.reduce((x, y) => {
    console.log(`Adding band reduction: ${y.reductionInPence} (${y.payment})`)
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
