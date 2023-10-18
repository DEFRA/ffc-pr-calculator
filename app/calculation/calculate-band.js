const reductionRates = require('./reduction-rates')
const calculateReduction = require('./calculate-reduction')

const calculateBand = (paymentBand) => {
  const reductions = reductionRates.filter(x => x.band === paymentBand.band && x.schemeYear === paymentBand.schemeYear)
  return {
    band: paymentBand.band,
    result: reductions.map(x => calculateReduction(paymentBand.value, x))
  }
}

module.exports = calculateBand
