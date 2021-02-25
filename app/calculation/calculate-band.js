const reductionRates = require('./reduction-rates')
const calculateReduction = require('./calculate-reduction')

module.exports = function calculateBand (paymentBand) {
  const reductions = reductionRates.filter(x => x.band === paymentBand.band)
  return {
    band: paymentBand.band,
    result: reductions.map(x => calculateReduction(paymentBand.value, x))
  }
}
