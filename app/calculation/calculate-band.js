const reductionRates = require('./reduction-rates')
const calculateReduction = require('./calculate-reduction')

const calculateBand = (paymentBand) => {
  const yearRates = reductionRates[`reductions${paymentBand.schemeYear}`]

  if (!yearRates) {
    return {
      band: paymentBand.band,
      result: []
    }
  }

  const rate = yearRates[paymentBand.band]

  if (rate === undefined) {
    return {
      band: paymentBand.band,
      result: []
    }
  }

  return {
    band: paymentBand.band,
    result: [calculateReduction(paymentBand.value, {
      rate,
      band: paymentBand.band,
      schemeYear: paymentBand.schemeYear
    })]
  }
}

module.exports = calculateBand
