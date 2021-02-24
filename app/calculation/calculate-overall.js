const schemeYears = require('./scheme-years')
const { convertToPounds } = require('./convert-currency')

module.exports = function calculateOverall (bpsValueInPence, bandResults) {
  return schemeYears.map(x => calculateSchemeYear(x, bpsValueInPence, bandResults))
}

function calculateSchemeYear (schemeYear, bpsValueInPence, bandResults) {
  const schemeYearResults = []

  bandResults.map(x => x.result.filter(y => y.schemeYear === schemeYear).map(z => schemeYearResults.push(z)))
  const reduction = Math.floor(schemeYearResults.reduce((x, y) => x + y.reductionInPence, 0))
  let payment = Math.ceil(schemeYearResults.reduce((x, y) => x + y.paymentInPence, 0))
  const variation = bpsValueInPence - reduction - payment
  payment += variation

  return {
    schemeYear,
    bpsValue: convertToPounds(bpsValueInPence),
    reductionInPence: reduction,
    reduction: convertToPounds(reduction),
    paymentInPence: payment,
    payment: convertToPounds(payment)
  }
}
