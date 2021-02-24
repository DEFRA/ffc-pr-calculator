const schemeYears = require('./scheme-years')
const round = require('../round')

module.exports = function calculateOverall (bpsValue, bandResults) {
  return schemeYears.map(x => calculateSchemeYear(x, bpsValue, bandResults))
}

function calculateSchemeYear (schemeYear, bpsValue, bandResults) {
  const schemeYearResults = []

  bandResults.map(x => x.result.filter(y => y.schemeYear === schemeYear).map(z => schemeYearResults.push(z)))
  const reduction = round(schemeYearResults.reduce((x, y) => x + y.reduction, 0), 2, false)

  return {
    schemeYear,
    bpsValue,
    reduction,
    payment: round(schemeYearResults.reduce((x, y) => x + y.payment, 0), 2, true)
  }
}
