const schemeYears = require('./scheme-years')
const round = require('../round')

module.exports = function calculateOverall (bandResults) {
  return schemeYears.map(x => calculateSchemeYear(x, bandResults))
}

function calculateSchemeYear (schemeYear, bandResults) {
  const schemeYearResults = []

  bandResults.map(x => x.result.filter(y => y.schemeYear === schemeYear).map(z => schemeYearResults.push(z)))

  return {
    schemeYear,
    bpsValue: round(schemeYearResults.reduce((x, y) => x + y.bpsValue, 0), 2),
    reduction: round(schemeYearResults.reduce((x, y) => x + y.reduction, 0), 2),
    payment: round(schemeYearResults.reduce((x, y) => x + y.payment, 0), 2)
  }
}
